import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Houssem Darragi | Fullstack Developer",
  description:
    "Fullstack Developer specialized in building robust web applications using Django, Angular, Node.js, and modern technologies.",
  icons: {
    icon: "https://res.cloudinary.com/drjr2cpgn/image/upload/v1754414980/profile-img.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `history.scrollRestoration="manual"`,
        }} />
      </head>
      <body className="min-h-screen bg-[#030712] text-[#f9fafb] antialiased">
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
