import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ConvexClientProvider } from "@/providers/convex-client-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BDWB Crypto Bot - Buffett-Inspired Crypto Trading",
  description: "A Warren Buffett-inspired approach to crypto trading with a focus on passive income and long-term appreciation.",
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
        <ConvexClientProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
              {children}
            </div>
          </div>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
