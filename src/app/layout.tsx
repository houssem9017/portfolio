import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { buildMetadata } from "@/lib/metadata";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = buildMetadata("en");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body
        className="min-h-screen bg-[#030712] text-[#f9fafb] antialiased"
        style={{ backgroundColor: "#030712" }}
      >
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "#030712",
            zIndex: -1,
          }}
          aria-hidden="true"
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
