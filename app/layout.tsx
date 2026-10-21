import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Twelve frames, or one',
  description: 'A reduced flag of true returns 1 frame. False keeps the request. The browser is not asked.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
