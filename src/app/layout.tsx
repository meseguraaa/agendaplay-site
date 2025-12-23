import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgendaPlay - app",
  description: "Plataforma de agendamento, produtos e gestão em tempo real.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body className="min-h-dvh bg-black text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
