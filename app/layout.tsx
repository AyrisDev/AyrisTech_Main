import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/home/Header";
import Footer from "@/components/Footer/Footer";
import {
  defaultMetadata,
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/seo";
import { GoogleAnalytics } from "@next/third-parties/google";
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { ReactNode } from "react";

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

export default async function LocaleLayout(props: Props) {
  const { children } = props;
  const segment = props.params?.locale;

  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang={segment || "tr"}>
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
        <div className="max-w-[1440px] mx-auto">
          {segment !== "studio" && <Header />}
          {children}
          {segment !== "studio" && <Footer />}
        </div>
      </body>
      <GoogleAnalytics gaId="G-YXK4WT039F" />
    </html>
  );
}
