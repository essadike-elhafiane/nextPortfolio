import type { Metadata } from "next";
import { Poppins as PoppinsFont } from "next/font/google";
import "./globals.css";

const Poppins = PoppinsFont({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Essadike ElHafiane",
  description: "My portfolio website",
  keywords: [
    "portfolio",
    "website",
    "developer",
    "projects",
    "resume",
    "cv",
    "personal",
    "information",
    "sadik",
    "essadike",
    "saddik",
    "elhafiane",
    "hafiane",
    "el hafiane",
    "sadik el hafiane",
    "essadike el hafiane",
    "essadike elhafiane",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Poppins.className}>{children}</body>
    </html>
  );
}
