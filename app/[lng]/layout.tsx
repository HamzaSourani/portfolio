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
  title: " Hamza Sourani - Front-End Web Developer with React.js",
  description:
    "Welcome to my portfolio! I am a skilled front-end web developer specializing in React.js. Explore my projects, skills, and experience in creating stunning web applications.",
  keywords: [
    "Front-End web developer",
    "React.js Developer",
    "Web Development Portfolio",
    "User Friendly Interfaces",
    "Project Showcase",
    "Skills And Tools: React.js Next.js javascript typescript html css",
  ],
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
          <div className="m-auto max-w-[100rem]">
            <header>
              <Navbar lng={lng} />
              <div className="flex flex-row items-center justify-end space-x-3 pb-3 rtl:space-x-reverse">
                <SwitchLanguage lng={lng} />
                <ModeToggle lng={lng} />
              </div>
            </header>
            <main className=" w-full overflow-y-auto py-12">{children}</main>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
