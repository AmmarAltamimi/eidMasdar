// layout.tsx
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Toaster } from "sonner";
import { Providers } from "../providers";
import { NavbarUi } from "@/components/Navbar";
import { Footer } from "../../components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from '@/i18n/routing';
import { Alexandria , Poppins } from 'next/font/google';

const alexandria = Alexandria({
  subsets: ['arabic'], 
  weight: '400',       
  style: 'normal',     
  display: 'swap',     
});

const poppins = Poppins({
  subsets: ['latin'], 
  weight: '400',     
  style: 'normal',   
  display: 'swap',   
});

export const metadata: Metadata = {
  title: {
    default: "تهنئة العيد – مصدر",
    template: `%s - تهنئة العيد من مصدر`,
  },
  description:
    "يقدم موقع مصدر للتهاني منصة مبتكرة لإرسال أجمل تهاني ومعايدات العيد عبر بطاقات تهنئة مخصصة. اكتشف تصميمات العيد الفريدة والرسائل الملهمة مثل تهنئة العيد، معايدات العيد، عيد سعيد، وتصميم بطاقة تهنئة مخصصة تضمن تحسين ظهور موقعك في محركات البحث.",
  icons: { icon: "/images/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f8f8" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {


  const { locale } = await params;


  // Ensure that a valid locale is used
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html
      suppressHydrationWarning
      lang={locale}
      dir={locale === "en" ? "ltr" : "rtl"}
    >
      <head />
      <body className={`min-h-screen bg-[#f8f8f8] dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-white  antialiased ${locale === "en" ? poppins.className : alexandria.className}`} >
        <NextIntlClientProvider messages={messages}>
          <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
            <NavbarUi />
            {children}
            <Footer />
          </Providers>
          <Toaster position="top-right" richColors />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
