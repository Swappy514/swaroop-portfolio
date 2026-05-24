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
  title: "Swaroop Jadhav — Full-Stack Developer | React, Node.js, MongoDB",
  description:
    "Swaroop Jadhav is a BTech CSE 2025 graduate and Full-Stack Developer from Maharashtra, India. Specializing in React, Node.js, MongoDB, AWS and Python. Open to full-time roles and freelance projects.",
  icons: {
    icon: "/projects/logo.png",
    apple: "/projects/logo.png",
  },
  keywords: [
    "Swaroop Jadhav",
    "Swaroop Jadhav Developer",
    "Full Stack Developer India",
    "Full Stack Developer Maharashtra",
    "React Developer India",
    "Node.js Developer",
    "Next.js Developer",
    "BTech CSE 2025",
    "Junior Developer India",
    "Web Developer Portfolio",
    "MERN Stack Developer",
    "MongoDB Express React Node",
    "Hire React Developer India",
    "Freelance Developer India",
    "swaroop.dev",
  ],
  authors: [
    {
      name: "Swaroop Jadhav",
      url: "https://swaroop-portfolio-rouge.vercel.app",
    },
  ],
  creator: "Swaroop Jadhav",
  openGraph: {
    type: "website",
    url: "https://swaroop-portfolio-rouge.vercel.app",
    title: "Swaroop Jadhav — Full-Stack Developer",
    description:
      "BTech CSE 2025 graduate. Full-Stack Developer specialising in React, Node.js, MongoDB and AWS. Based in Maharashtra, India.",
    siteName: "Swaroop Jadhav Portfolio",
    images: [
      {
        url: "https://swaroop-portfolio-rouge.vercel.app/projects/JS-35+Projects.png",
        width: 1200,
        height: 630,
        alt: "Swaroop Jadhav Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swaroop Jadhav — Full-Stack Developer",
    description:
      "BTech CSE 2025 graduate. Full-Stack Developer from Maharashtra, India.",
    images: [
      "https://swaroop-portfolio-rouge.vercel.app/projects/JS-35+Projects.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://swaroop-portfolio-rouge.vercel.app",
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
