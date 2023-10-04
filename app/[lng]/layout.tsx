import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LayoutProps } from "./type";
import { dir } from "i18next";
import { languages } from "@/i18n/settings";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export default function RootLayout({ children, params: { lng } }: LayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
