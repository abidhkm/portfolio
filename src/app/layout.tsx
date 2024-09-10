import type { Metadata } from "next";
import "./globals.css";
import { Spline_Sans_Mono } from "next/font/google";

const splineSansMono = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abidh • Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={splineSansMono.className}>{children}</body>
    </html>
  );
}
