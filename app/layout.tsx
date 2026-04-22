import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swaroop Jadhav — Full-Stack Developer",
  description:
    "BTech CSE 2025 graduate. Full-Stack Developer specialising in React, Node.js, MongoDB, AWS and Python. Based in Mumbai, India.",
  keywords: [
    "Swaroop Jadhav",
    "Full Stack Developer",
    "React Developer",
    "Node.js",
    "MongoDB",
    "Mumbai",
    "Portfolio",
  ],
  authors: [{ name: "Swaroop Jadhav" }],
  openGraph: {
    title: "Swaroop Jadhav — Full-Stack Developer",
    description:
      "BTech CSE 2025 graduate. Full-Stack Developer based in Mumbai.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
