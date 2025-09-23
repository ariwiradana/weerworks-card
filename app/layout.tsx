import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weerworks - Built Platforms & Creations",
  description:
    "Kumpulan platform dan karya yang dibuat dan dikelola oleh Weer: web development, musik, jingle, mixing, mastering, dan berbagai proyek kreatif.",
  keywords: [
    "Weer",
    "web development",
    "musik",
    "jingle",
    "mixing",
    "mastering",
    "platform kreatif",
    "Not So Koplo",
    "Moment Invitation",
    "Wana Jiwa",
  ],
  authors: [{ name: "Ari Wiradana" }],
  creator: "Ari Wiradana",
  publisher: "Ari Wiradana",
  openGraph: {
    title: "Weerworks - Built Platforms & Creations",
    description:
      "Temukan semua platform dan karya buatan Weer: website, musik, jingle, mixing, mastering, dan banyak lagi.",
    url: "https://weerworks.com",
    siteName: "Weer Platforms",
    images: [
      {
        url: "https://weerworks.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Weer Platforms & Creations",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weerworks - Built Platforms & Creations",
    description:
      "Kumpulan platform dan karya yang dibuat dan dikelola oleh Ari Wiradana.",
    images: ["https://weerworks.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://weerworks.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
