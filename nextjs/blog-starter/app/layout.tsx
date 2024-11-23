import { ReactFigmaProvider } from "@/app/polipo-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const inter = Inter();

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactFigmaProvider>{children}</ReactFigmaProvider>
      </body>
    </html>
  );
}
