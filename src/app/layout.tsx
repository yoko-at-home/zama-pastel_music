import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderSection from "@/components/HeaderSection";
import { FooterSection } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { siteMetadata } from "@/data/siteMetadata";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
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
        <HeaderSection />

        {children}
        <FooterSection />
        <Navigation />
      </body>
    </html>
  );
}
