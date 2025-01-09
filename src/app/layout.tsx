import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Colarity: Color Schemes with Clear Contrast.",
  description:
    "A colour palette generator that takes accessibility into account, giving the user the option to select a level of compliance between WCAG A / AA / AAA to aim for, and producing a colour palette that meets those requirements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
