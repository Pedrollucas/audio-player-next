import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hatsune Miku Audio Player",
  description: "Aplicação em Next.js para manipulação de áudio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}