import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://tanamrumput.store"),
  title: {
    default: "PT Lampung Tanam Rumput (PLTR) — Restoring Land, Livelihoods and Supply Chains",
    template: "%s | PT Lampung Tanam Rumput",
  },
  description:
    "PLTR transforms degraded and underutilised land in Lampung into productive regenerative agricultural infrastructure. We restore soil health, grow commercial biomass, and create recurring rural income — especially for women.",
  keywords: [
    "regenerative agriculture",
    "land restoration",
    "Lampung",
    "biomass",
    "forage cultivation",
    "women empowerment",
    "rural livelihoods",
    "Indonesia agriculture",
    "carbon bank",
    "sustainable farming",
  ],
  authors: [{ name: "PT Lampung Tanam Rumput" }],
  creator: "PT Lampung Tanam Rumput",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tanamrumput.store",
    siteName: "PT Lampung Tanam Rumput",
    title: "PT Lampung Tanam Rumput (PLTR)",
    description:
      "Restoring degraded land into productive agricultural infrastructure in Lampung, Indonesia.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "PT Lampung Tanam Rumput",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Lampung Tanam Rumput (PLTR)",
    description:
      "Restoring degraded land into productive agricultural infrastructure in Lampung.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
