import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderSection from "@/components/HeaderSection";
import { FooterSection } from "@/components/Footer";
import { siteMetadata } from "@/data/siteMetadata";
import Copyright from "@/components/Copyright";

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
  themeColor: "#BBDDF2", // テーマカラー
  icons: {
    icon: "/static/AppImages/ios/192.png",
    apple: "/static/AppImages/ios/192.png",
  },
  manifest: "/manifest.json", // manifest.jsonへのパス
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
        <main className="mt-6 mb-36">
          {children}
          <Copyright />
        </main>

        <FooterSection />
      </body>
    </html>
  );
}
