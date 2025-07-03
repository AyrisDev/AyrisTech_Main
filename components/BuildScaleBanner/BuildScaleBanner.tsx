import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface BuildScaleBannerProps {
  language?: 'tr' | 'en';
}

const BuildScaleBanner = ({ language = 'tr' }: BuildScaleBannerProps) => {
  const content = {
    tr: {
      title: "Hadi inşa edelim ve büyütelim!",
      websiteUrl: "www.ayristech.com",
      buttonText: "İletişime Geç"
    },
    en: {
      title: "Let's build and scale it!",
      websiteUrl: "www.ayristech.com", 
      buttonText: "Get in touch"
    }
  };

  const { title, websiteUrl, buttonText } = content[language];

  return (
    <div className="bg-white border rounded-2xl py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Side - Main Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {title}
            </h1>

            {/* Website URL with underline */}
            <div className="inline-block">
              <div className="text-lg mb-2">{websiteUrl}</div>
              <div className="h-1 bg-orange-500 w-full"></div>
            </div>
          </div>

          {/* Right Side - CTA Button */}
          <div className="flex-shrink-0">
            <Link href="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-3 group shadow-lg hover:shadow-xl">
                {buttonText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildScaleBanner;
