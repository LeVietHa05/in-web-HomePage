import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { helveticaNeueHeavy } from "./components/font";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Right from "./components/right";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inception",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${helveticaNeueHeavy.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
        <Right/>
      </body>
    </html>
  );
}
