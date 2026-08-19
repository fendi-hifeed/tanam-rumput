import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://carbonbank.id"),
  icons: {
    icon: "/icon.png",
  },
  title: {
    default: "Carbon Bank — Restoring Land, Livelihoods and Supply Chains",
    template: "%s | Carbon Bank",
  },
  description:
    "Carbon Bank transforms degraded and underutilised land in Lampung into productive regenerative agricultural infrastructure. We restore soil health, grow commercial biomass, and create recurring rural income — especially for women.",
  keywords: [
    "carbon bank",
    "carbonbank.id",
    "regenerative agriculture",
    "land restoration",
    "Lampung",
    "biomass",
    "forage cultivation",
    "women empowerment",
    "rural livelihoods",
    "Indonesia agriculture",
    "sustainable farming",
  ],
  authors: [{ name: "Carbon Bank" }],
  creator: "Carbon Bank",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://carbonbank.id",
    siteName: "Carbon Bank",
    title: "Carbon Bank — Regenerative Agricultural Infrastructure",
    description:
      "Restoring degraded land into productive agricultural infrastructure in Lampung, Indonesia.",
    images: [
      {
        url: "/images/logo-bg.jpg",
        width: 1024,
        height: 1024,
        alt: "Carbon Bank",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carbon Bank — Regenerative Agricultural Infrastructure",
    description:
      "Restoring degraded land into productive agricultural infrastructure in Lampung.",
    images: ["/images/logo-bg.jpg"],
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VQ1P6MF6TB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VQ1P6MF6TB');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
