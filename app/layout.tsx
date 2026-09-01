import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bisma Rafique | Full Stack Developer",
  description: "Portfolio of Bisma Rafique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}