import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import FloatingWhatsAppButton from '@/app/components/FloatingWhatsAppButton'; // Ajuste o caminho conforme necessário


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tradição - Soluções para marcenaria",
  description: "Comércio de máquinas, ferramentas e acessórios para marcenaria.",
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
       <FloatingWhatsAppButton />

        {children}
      </body>
    </html>
  );
}
