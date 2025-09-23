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
    "A collection of platforms and creative works built and managed by Weer: web development, music, jingles, mixing, mastering, and more creative projects.",
  keywords: [
    "Weer",
    "web development",
    "music",
    "jingle",
    "mixing",
    "mastering",
    "creative platform",
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
      "Discover all the platforms and creations by Weer: websites, music, jingles, mixing, mastering, and more.",
    url: "https://weerworks.live",
    siteName: "Weer Platforms",
    images: [
      {
        url: "https://weerworks.live/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Weer Platforms & Creations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weerworks - Built Platforms & Creations",
    description:
      "A collection of platforms and creative works built and managed by Ari Wiradana.",
    images: ["https://weerworks.live/og-image.jpg"],
  },
  alternates: {
    canonical: "https://weerworks.live",
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
