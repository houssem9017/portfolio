import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/components/LanguageProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Houssem Darragi | Fullstack Developer",
  description:
    "Fullstack Developer specialized in building robust web applications using Django, Angular, Node.js, and modern technologies.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%236366f1'/><text x='16' y='22' font-size='18' font-weight='bold' fill='white' text-anchor='middle' font-family='Inter,sans-serif'>HD</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`html,body{background-color:#030712!important;margin:0}`}</style>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.style.backgroundColor="#030712";history.scrollRestoration="manual"`,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#030712] text-[#f9fafb] antialiased">
        <LanguageProvider>
          <SmoothScroll>
            <Navbar />
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
