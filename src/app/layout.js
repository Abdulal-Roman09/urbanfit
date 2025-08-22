import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavHeader from "../components/NavHeader"; // Navber + SessionProvider
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UrbanFit ",
  description: "The Bast Solution of Cloth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
