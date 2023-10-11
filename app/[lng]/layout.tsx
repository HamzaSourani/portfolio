import { dir } from "i18next";
import type { Metadata } from "next";
import { Sora, Noto_Sans_Arabic } from "next/font/google";
import { isFallbackLng, languages } from "@/i18n/settings";
import { ThemeProvider } from "@/lib/shadecn/themeProvider";
import Navbar from "@/components/layout/nav";
import ModeToggle from "@/components/layout/modeToggle";
import SwitchLanguage from "@/components/layout/switchLanguage";
import { Toaster } from "@/components/ui/toaster";
import { LayoutProps } from "./type";
import "../globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
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
      <body
        className={
          isFallbackLng(lng) ? sora.className : notoSansArabic.className
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Navbar lng={lng} />
          <div className="flex flex-row items-center justify-end space-x-3 rtl:space-x-reverse">
            <SwitchLanguage lng={lng} />
            <ModeToggle lng={lng} />
          </div>
          <main className="h-[calc(100vh_-_112px)] w-full overflow-y-auto py-12">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
