import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/home/Header";
import Footer from "@/components/Footer/Footer";
import {
  defaultMetadata,
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/seo";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ReactNode } from "react";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = defaultMetadata;

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  const messages = await getMessages();
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${geistMono.variable} antialiased bg-gradient-to-br from-gray-50 to-blue-50/30 min-h-screen`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="max-w-[1440px] mx-auto">
            <Header />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_KEY ?? ""} />
      </body>
    </html>
  );
}