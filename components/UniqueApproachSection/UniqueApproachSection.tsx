import React from "react";
import * as LucideIcons from "lucide-react";
import { getUniqueApproach, urlFor } from "@/sanity/lib/client";
import { UniqueApproach } from "@/sanity/types";

interface UniqueApproachProps {
  data?: UniqueApproach;
  locale?: string;
}

const UniqueApproachSection = async ({ data, locale = "tr" }: UniqueApproachProps) => {
  const approachData = data || await getUniqueApproach();
  
  if (!approachData) return null;

  const getIconComponent = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className="w-5 h-5" /> : <LucideIcons.Code className="w-5 h-5" />;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image and Chart */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-100 to-amber-50">
            <img
              src={urlFor(approachData.mainImage).url()}
              alt={approachData.title[locale] || approachData.title.tr}
              className="w-full h-96 object-cover"
            />

            {/* Overlay Chart Card */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100">
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-gray-900 mb-1">
                  Successful clients report
                </h4>
              </div>

              {/* Progress Bars */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-xs">
                  <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gray-800 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-orange-400 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-gray-800 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="flex items-center space-x-3">
                <div className="relative w-16 h-16">
                  <svg
                    className="w-16 h-16 transform -rotate-90"
                    viewBox="0 0 32 32"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="12"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="4"
                    />
                    <circle
                      cx="16"
                      cy="16"
                      r="12"
                      fill="none"
                      stroke="#1f2937"
                      strokeWidth="4"
                      strokeDasharray="47.1 75.4"
                      strokeDashoffset="0"
                    />
                    <circle
                      cx="16"
                      cy="16"
                      r="12"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="4"
                      strokeDasharray="18.8 75.4"
                      strokeDashoffset="-47.1"
                    />
                  </svg>
                </div>
                <div className="text-xs">
                  <div className="flex items-center space-x-1 mb-1">
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    <span className="text-gray-600">60%</span>
                  </div>
                  <div className="flex items-center space-x-1 mb-1">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-600">25%</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="text-gray-600">15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div>
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {approachData.title[locale] || approachData.title.tr}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {approachData.description[locale] || approachData.description.tr}
            </p>
          </div>

          {/* Approach Items */}
          <div className="space-y-8">
            {approachData.approaches.map((approach, index) => (
              <div key={index} className="flex items-start space-x-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <div className="text-white">{getIconComponent(approach.icon)}</div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {approach.title[locale] || approach.title.tr}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {approach.description[locale] || approach.description.tr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueApproachSection;
