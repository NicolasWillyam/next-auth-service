import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import favicon from "../public/notion.png";
import { SessionProvider, useSession } from "next-auth/react";
import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion - Bring your ideas to life.",
  description: "Bring your ideas to life",
  icons: {
    icon: "../public/notion.png", // Default icon
    shortcut: "/notion-32x32.png", // Shortcut icon (optional)
    apple: "/notion-apple-touch-icon.png", // Apple touch icon (optional)
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SessionProvider>
  );
}
