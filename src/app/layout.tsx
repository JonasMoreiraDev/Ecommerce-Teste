import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Commerce Teste",
  description: "Next E-Commercer feito com Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${clsx(geistSans.variable, "bg-slate-700" )} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className=" h-full p-16">
        {children}
        </main>
      </body>
    </html>
  );
}
