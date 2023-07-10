'use client'
import { useCustomRouter } from "@/hooks/useCustomRouter";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layouts/footer/Footer";
import { RecoilRoot } from "recoil";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <html lang="ja">
        <head>
          <meta charSet="utf-8" />
          <title>{metadata.title}</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/globals.css" />
        </head>
        <body className={inter.className}>
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </RecoilRoot>
  );
}
