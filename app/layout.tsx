import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deepak Gulia | Portfolio & Professional Services",
  description: "Explore Deepak Gulia's professional portfolio showcasing expertise, services, and contact information for collaboration opportunities.",
  openGraph: {
    title: "Deepak Gulia | Professional Portfolio & Services",
    description: "Discover Deepak Gulia's professional portfolio, expertise, and services. Connect for collaboration opportunities and projects.",
    url: "https://www.deepakgulia.online",
    type: "website",
    images: [
      {
        url: "https://www.deepakgulia.online/og-image.png",
        width: 1200,
        height: 630,
        alt: "Deepak Gulia | Professional Portfolio & Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Gulia | Professional Portfolio & Services",
    description: "Discover Deepak Gulia's professional portfolio, expertise, and services. Connect for collaboration opportunities and projects.",
    images: ["https://www.deepakgulia.online/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Deepak Gulia | Portfolio & Professional Services",
  "description": "Explore Deepak Gulia's professional portfolio showcasing expertise, services, and contact information for collaboration opportunities.",
  "url": "https://www.deepakgulia.online/"
};

return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {children}
      </body>
    </html>
  );
}
