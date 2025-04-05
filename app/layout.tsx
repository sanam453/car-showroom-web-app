
// @styles
import "./globals.css";

// @fonts
import { Lato } from "next/font/google";
const latoSans = Lato({
  variable: "--font-lato-sans",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

import type { Metadata } from "next";
import Navbar from "@/components/navbar";

// @metadata
export const metadata: Metadata = {
  title: "Car Showroom",
  description: "A simple car show web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${latoSans.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
