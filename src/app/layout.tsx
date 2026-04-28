import type { Metadata } from "next";
import "./globals.css";
import CommandPalette from "@/components/CommandPalette";

export const metadata: Metadata = {
  title: "Portfolio — Designer & Strategist",
  description: "A luxury, editorial portfolio showcasing information architecture, visual interaction, and product strategy work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#111111]">
        {children}
        <CommandPalette />
      </body>
    </html>
  );
}
