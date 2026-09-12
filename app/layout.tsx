import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://tano-industries.com",
  ),
  title: "Tano Industries | Unlocking the Value of African Natural Resources",
  description:
    "Tano Industries builds African industries from the ground up, turning raw materials into finished products through manufacturing, mining, refining, and agriculture.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Tano Industries | Unlocking the Value of African Natural Resources",
    description:
      "Tano Industries builds African industries from the ground up, turning raw materials into finished products through manufacturing, mining, refining, and agriculture.",
  },
  twitter: {
    card: "summary",
    title: "Tano Industries | Unlocking the Value of African Natural Resources",
    description:
      "Tano Industries builds African industries from the ground up, turning raw materials into finished products through manufacturing, mining, refining, and agriculture.",
  },
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
