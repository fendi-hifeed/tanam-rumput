#!/usr/bin/env python3
"""
build-favicon.py — Generate proper multi-size favicon assets from PLTR logo.

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
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LOGO_SRC = ROOT / "public" / "images" / "logo.png"
APP_DIR = ROOT / "src" / "app"

SIZES = {
    "icon.png": 32,
    "apple-icon.png": 180,
}
ICO_SIZES = [16, 32, 48]


def run_sips(src: Path, size: int, out: Path) -> None:
    subprocess.run(
        ["sips", "-z", str(size), str(size), str(src), "--out", str(out)],
        check=True,
        capture_output=True,
    )


def make_ico(sources: list[Path], dest: Path) -> None:
    """Assemble multi-size .ico from PNG files (modern PNG-embedded ICO format)."""
    entries = []
    for p in sources:
        data = p.read_bytes()
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
