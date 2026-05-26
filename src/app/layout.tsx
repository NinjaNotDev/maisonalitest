import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maison Ali Café | Eat. Drink. Belong.",
  description:
    "Maison Ali Café — Cafe cozy & estetik di tengah kota Sidoarjo. Nikmati menu Western, coffee, dan non-coffee dengan harga terjangkau di Jl. Raya Ponti No. 8, Sidoarjo.",
  keywords: [
    "Maison Ali",
    "Cafe Sidoarjo",
    "Coffee Shop Sidoarjo",
    "Cafe Cozy Sidoarjo",
    "Nongkrong Sidoarjo",
    "Work From Cafe Sidoarjo",
    "Kuliner Sidoarjo",
    "Cafe Estetik",
  ],
  authors: [{ name: "Maison Ali Café" }],
  icons: {
    icon: "/cafe-images/menu-coffee.png",
  },
  openGraph: {
    title: "Maison Ali Café | Eat. Drink. Belong.",
    description:
      "Cafe cozy & estetik di tengah kota Sidoarjo. Menu Western, coffee, dan non-coffee dengan harga terjangkau.",
    siteName: "Maison Ali Café",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
