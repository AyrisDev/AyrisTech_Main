import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getServices } from "@/sanity/lib/client";
import { Service } from "@/sanity/types";
import * as LucideIcons from "lucide-react";

interface ServicesProps {
  services?: Service[];
  locale?: string;
}

const ServicesSection = async ({ services, locale = "tr" }: ServicesProps) => {
  const serviceData = services || (await getServices());

  const content = {
    tr: {
      mainTitle: "Dahil Edilen",
      subTitle: "Hizmetlerimiz",
      learnMore: "Daha Fazla",
      viewAllServices: "Tüm Hizmetleri Görüntüle",
      exploreService: "Hizmeti Keşfet"
    },
    en: {
      mainTitle: "Our Included",
      subTitle: "Services",
      learnMore: "Learn More", 
      viewAllServices: "View All Services",
      exploreService: "Explore Service"
    }
  };

  const t = content[locale as keyof typeof content] || content.tr;

  const getIconComponent = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? (
      <Icon className="w-6 h-6" />
    ) : (
      <LucideIcons.Code className="w-6 h-6" />
    );
  };

  // Helper function to get localized text
  const getLocalizedText = (text: any) => {
    if (typeof text === 'object' && text !== null) {
      return text[locale] || text.en || text.tr || '';
    }
    return text || '';
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-gray-50">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
          <span className="underline decoration-4 decoration-orange-500 underline-offset-4">
            {t.mainTitle}
          </span>
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          {t.subTitle}
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-6">
          {locale === "tr" 
            ? "Teknolojinin gücüyle işletmenizi dönüştürün. Uzman ekibimizle birlikte vizyonunuzu gerçeğe dönüştürün."
            : "Transform your business with the power of technology. Turn your vision into reality with our expert team."
          }
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceData.map((service) => (
          <div
            key={service._id}
            className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-orange-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <div className="text-white">{getIconComponent(service.icon)}</div>
            </div>

            {/* Content */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                {getLocalizedText(service.title)}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {getLocalizedText(service.description)}
              </p>
            </div>

            {/* Learn More Link */}
            <div className="mt-auto">
              {service.slug?.current && (
                <Link
                  href={`/services/${service.slug.current}`}
                  className="group/button flex items-center space-x-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
                >
                  <span className="border-b-2 border-orange-600 group-hover/button:border-orange-700 transition-colors">
                    {t.learnMore}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View All Services Button */}
      {serviceData.length > 0 && (
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {t.viewAllServices}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;
