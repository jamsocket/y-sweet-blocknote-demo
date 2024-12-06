import { Metadata } from "next";
import { Inter } from "next/font/google";

import { LayoutProps } from "@/.next/types/app/layout";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = { title: "Y-Sweet + BlockNote" };

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
