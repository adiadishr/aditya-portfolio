import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../css/globals.css";
import "../css/utilities.css";
import { baseFont } from "@/lib/fonts";
import { LenisProvider } from "@/lib/lenis";

export const metadata: Metadata = {
  title: "Nischal Shrestha",
  description: "Portfolio of Nischal Shrestha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${baseFont.variable} antialiased`}
      >
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}
