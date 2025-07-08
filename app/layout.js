import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Contact from "@/components/Contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio-Janhvi",
  description: "A full-stack developer's portfolio showcasing projects, skills, and contact information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `} 
      >
        {children}
      <Contact/>
      </body>
    </html>
  );
}
