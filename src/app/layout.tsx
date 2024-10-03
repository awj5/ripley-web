import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ripley - Local Favorites Curated by Elite Hotels",
  description: "Coming soon to iOS and Android.",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const chronicle = localFont({
  src: [
    {
      path: "./fonts/Chronicle-Display-Roman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Chronicle-Display-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Chronicle-Display-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-chronicle",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chronicle.variable} font-serif, ${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
