import 'katex/dist/katex.min.css';
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { cookies } from "next/headers";
import { LocaleInfo, type LocaleCode } from "@/libs/i18n/config";
import { LocaleProvider } from "@/libs/i18n/providers";
import { ClientRootLayout } from "@/components/root";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, }: { children: ReactNode }) {
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get('locale')?.value as LocaleCode | undefined
  const localeInfo = LocaleInfo.fromCodeOrDefault(localeCookie as LocaleCode);
  const direction = localeInfo.direction.toString()

  return (
    <html lang={localeInfo.code} dir={direction} className="">
      <body className=" min-h-screen h-full bg-gray-900 text-gray-100">
        <LocaleProvider initialLocale={localeInfo.code}>
          <ClientRootLayout>
            <div>
              {children}
            </div>
          </ClientRootLayout>
        </LocaleProvider>
      </body>
    </html>
  );
}
