import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blaze Network",
  description: "Blaze Network is a simple, user-friendly way for people to use cryptocurrency, specifically USDC, without needing a wallet app, internet browser, or complicated setups. Whether you have a smartphone or a basic feature phone, Blaze lets you send, receive, and check your USDC balance using familiar tools like WhatsApp, SMS, or USSD (those short codes you dial, like *777#). Our mission is to make decentralized finance (DeFi) accessible to everyone, especially those who’ve never used crypto before, by meeting you where you are—on your phone.",
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
        {children}
      </body>
    </html>
  );
}
