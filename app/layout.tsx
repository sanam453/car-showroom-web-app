
// @styles
import "./globals.css";

// @fonts
import { Lato } from "next/font/google";
const latoSans = Lato({
  variable: "--font-lato-sans",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

// components
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// @metadata
import type { Metadata } from "next";
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
        <Footer />
      </body>
    </html>
  );
}
