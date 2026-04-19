import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nApp - Software House & Produtos Digitais",
  description: "Transformamos ideias complexas em plataformas digitais de elite. Criadores do AgendarPro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className="dark">
      <body className={`${inter.className} antialiased bg-black text-white selection:bg-violet-500/30`}>
        {children}
      </body>
    </html>
  );
}
