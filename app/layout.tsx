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
  title: "Deepak Gulia | Personal Portfolio & Professional Profile",
  description: "Explore the professional portfolio of Deepak Gulia. Discover skills, projects, and contact information for collaboration opportunities and professional networking.",
  openGraph: {
    title: "Deepak Gulia | Personal Portfolio & Professional Profile",
    description: "Explore the professional portfolio of Deepak Gulia. Discover skills, projects, and contact information for collaboration opportunities.",
    type: "website",
    url: "https://www.deepakgulia.online/",
    siteName: "Deepak Gulia Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
