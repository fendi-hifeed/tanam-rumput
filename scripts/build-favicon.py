#!/usr/bin/env python3
"""
build-favicon.py — Generate proper multi-size favicon assets from Carbon Bank logo.

Creates:
  src/app/favicon.ico   (multi-size: 16x16, 32x32, 48x48 — modern + legacy browsers)
  src/app/icon.png      (32x32 — modern browsers)
  src/app/apple-icon.png (180x180 — iOS Safari home screen)

Requirements: macOS (uses `sips` to resize PNG). Stdlib only for ICO assembly.

Usage:
  python3 scripts/build-favicon.py
"""

import struct
import subprocess
import sys
import zlib
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LOGO_SRC = ROOT / "public" / "images" / "logo.png"
APP_DIR = ROOT / "src" / "app"

SIZES = {
    "icon.png": 32,
    "apple-icon.png": 180,
}
ICO_SIZES = [16, 32, 48]


def png_to_rgba(png_bytes: bytes) -> bytes:
    """Ensure PNG is 32-bit RGBA (color type 6) as required by Turbopack ICO parser."""
    if png_bytes[:8] != b"\x89PNG\r\n\x1a\n":
        return png_bytes
    idx = 8
    width = height = 0
    idat_data = b""

    while idx < len(png_bytes):
        length = struct.unpack(">I", png_bytes[idx : idx + 4])[0]
        ctype = png_bytes[idx + 4 : idx + 8]
        data = png_bytes[idx + 8 : idx + 8 + length]
        idx += 12 + length

        if ctype == b"IHDR":
            width, height, bitdepth, colortype, comp, filt, inter = struct.unpack(
                ">IIBBBBB", data
            )
            if colortype == 6:  # Already RGBA
                return png_bytes
            if colortype != 2 or bitdepth != 8 or inter != 0:
                return png_bytes
        elif ctype == b"IDAT":
            idat_data += data
        elif ctype == b"IEND":
            break

    raw = zlib.decompress(idat_data)
    row_len_rgb = 1 + width * 3
    new_raw = bytearray()

    for y in range(height):
        row = raw[y * row_len_rgb : (y + 1) * row_len_rgb]
        filter_byte = row[0:1]
        rgb_pixels = row[1:]
        rgba_pixels = bytearray()
        for x in range(width):
            r = rgb_pixels[x * 3]
            g = rgb_pixels[x * 3 + 1]
            b = rgb_pixels[x * 3 + 2]
            rgba_pixels.extend([r, g, b, 255])
        new_raw.extend(filter_byte + rgba_pixels)

    new_idat = zlib.compress(bytes(new_raw))

    def make_chunk(chunk_type: bytes, chunk_data: bytes) -> bytes:
        c = chunk_type + chunk_data
        crc = zlib.crc32(c)
        return struct.pack(">I", len(chunk_data)) + c + struct.pack(">I", crc)

    new_ihdr = struct.pack(">IIBBBBB", width, height, 8, 6, 0, 0, 0)
    return (
        b"\x89PNG\r\n\x1a\n"
        + make_chunk(b"IHDR", new_ihdr)
        + make_chunk(b"IDAT", new_idat)
        + make_chunk(b"IEND", b"")
    )


def run_sips(src: Path, size: int, out: Path) -> None:
    subprocess.run(
        ["sips", "-z", str(size), str(size), str(src), "--out", str(out)],
        check=True,
        capture_output=True,
    )
    # Ensure generated PNG is RGBA
    out.write_bytes(png_to_rgba(out.read_bytes()))


def make_ico(sources: list[Path], dest: Path) -> None:
    """Assemble multi-size .ico from PNG files (modern PNG-embedded ICO format)."""
    entries = []
    for p in sources:
        data = png_to_rgba(p.read_bytes())
        w = struct.unpack(">I", data[16:20])[0]
        h = struct.unpack(">I", data[20:24])[0]
        w_byte = 0 if w == 256 else w
        h_byte = 0 if h == 256 else h
        entries.append((w_byte, h_byte, data))

    header = struct.pack("<HHH", 0, 1, len(entries))
    dir_entries = b""
    image_data = b""
    offset = 6 + 16 * len(entries)

    for w, h, data in entries:
        dir_entries += struct.pack(
            "<BBBBHHII", w, h, 0, 0, 1, 32, len(data), offset
        )
        image_data += data
        offset += len(data)

    dest.write_bytes(header + dir_entries + image_data)


def main() -> None:
    if not LOGO_SRC.exists():
        print(f"ERROR: source logo not found at {LOGO_SRC}", file=sys.stderr)
        sys.exit(1)

    APP_DIR.mkdir(parents=True, exist_ok=True)
    tmp = Path("/tmp")

    for name, size in SIZES.items():
        out = APP_DIR / name
        run_sips(LOGO_SRC, size, out)
        print(f"Wrote {out.relative_to(ROOT)} ({size}x{size})")

    ico_pngs = []
    for s in ICO_SIZES:
        p = tmp / f"logo-{s}.png"
        run_sips(LOGO_SRC, s, p)
        ico_pngs.append(p)

    favicon = APP_DIR / "favicon.ico"
    make_ico(ico_pngs, favicon)
    print(f"Wrote {favicon.relative_to(ROOT)} ({', '.join(f'{s}x{s}' for s in ICO_SIZES)})")

    print("\nFavicon assets updated.")


if __name__ == "__main__":
    main()
