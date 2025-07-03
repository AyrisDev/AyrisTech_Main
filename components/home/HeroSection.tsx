// Main Hero Section with enhanced animations
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ParticleBackground } from "./ParticleBackground";
import { FloatingCard } from "./FloatingCard";
import { AnimatedCounter } from "./AnimatedCounter";

interface HeroSectionProps {
  locale?: string;
}

export const HeroSection = ({ locale = "tr" }: HeroSectionProps) => {
  const content = {
    tr: {
      mainHeading: {
        line1: "Yeni ",
        line2: "Nesil",
        line3: "Teknolojilerle",
        line4: "İnovasyon",
      },
      description:
        "AI, blockchain ve modern geliştirme araçlarıyla dijital dönüşümünüzü hızlandırıyor, işletmenizi geleceğe hazırlıyoruz.",
      button: "İletişime Geçin",
    },
    en: {
      mainHeading: {
        line1: "Future",
        line2: "Through",
        line3: "Cutting-Edge",
        line4: "Technology.",
      },
      description:
        "We accelerate your digital transformation with AI, blockchain and modern development tools, preparing your business for the future.",
      button: "Get In Touch",
    },
  };

  const t = content[locale as keyof typeof content] || content.tr;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  console.log(locale);
  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 20,
          y: (e.clientY / window.innerHeight) * 20,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isMobile]);

  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden pt-20">
      <ParticleBackground />

      {/* Left side - Floating elements with parallax */}
      <div
        className={`absolute left-0 top-0 w-full md:w-1/2 h-full transition-transform duration-1000 ease-out ${
          isMobile ? "hidden md:block" : ""
        }`}
        style={{
          transform: isMobile
            ? "none"
            : `translate(${mousePosition.x * 0.5}px, ${
                mousePosition.y * 0.5
              }px)`,
        }}
      >
        {/* VR Person Card */}
        <FloatingCard
          className="w-32 md:w-40 h-32 md:h-40 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 p-4 animate-pulse-slow hover:animate-none"
          style={{ top: "15%", left: "10%" }}
          animationDelay={0}
          floatDirection="up"
        >
          <div className="w-full h-full flex items-center justify-center animate-spin-slow">
            <div className="w-12 md:w-16 h-12 md:h-16 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <div className="w-6 md:w-8 h-6 md:h-8 bg-blue-600 rounded animate-bounce"></div>
            </div>
          </div>
        </FloatingCard>

        {/* Phone/Device Card */}
        <FloatingCard
          className="w-36 md:w-48 h-48 md:h-64 bg-gray-200 border-4 border-black hover:border-blue-600 hover:bg-white transition-colors duration-500"
          style={{ top: "25%", left: "35%" }}
          animationDelay={500}
          floatDirection="down"
        >
          <div className="w-full h-full bg-white m-2 rounded-lg relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 md:w-8 h-6 md:h-8 bg-black rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <div className="w-3 md:w-4 h-3 md:h-4 border-2 border-white rounded-sm animate-pulse"></div>
              </div>
              <div className="w-px h-12 md:h-16 bg-gradient-to-b from-gray-300 to-blue-400 mx-auto mt-2 animate-pulse"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan"></div>
          </div>
        </FloatingCard>

        {/* Profile Card with Stats */}
        <FloatingCard
          className="w-36 md:w-44 h-28 md:h-32 bg-gradient-to-r from-black to-gray-800 text-white p-3 md:p-4 hover:from-gray-800 hover:to-black"
          style={{ top: "55%", left: "5%" }}
          animationDelay={1000}
          floatDirection="up"
        >
          <div className="flex items-center space-x-2 md:space-x-3 animate-fade-in">
            <div className="w-6 md:w-8 h-6 md:h-8 text-white animate-bounce">
              👥
            </div>
            <span className="text-sm font-bold">
              <AnimatedCounter end={68} suffix="K+" />
            </span>
            <span className="text-xs text-green-400 animate-pulse">25% ↑</span>
          </div>
          <div className="w-full h-12 md:h-16 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-lg mt-2 md:mt-3 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          </div>
        </FloatingCard>

        {/* Chip/Tech Card */}
        <FloatingCard
          className="w-32 md:w-40 h-28 md:h-32 bg-gradient-to-br from-gray-900 to-black p-3 md:p-4 hover:from-black hover:to-gray-900"
          style={{ top: "75%", left: "25%" }}
          animationDelay={1500}
          floatDirection="down"
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 md:w-16 h-10 md:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-sm relative hover:scale-110 transition-transform duration-300">
              <div className="absolute inset-1 bg-gray-300 rounded-sm"></div>
              <div className="absolute top-1.5 md:top-2 left-1.5 md:left-2 w-1.5 md:w-2 h-1.5 md:h-2 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-1.5 md:bottom-2 right-1.5 md:right-2 w-1 md:w-1 h-1 md:h-1 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </FloatingCard>

        {/* Small yellow card */}
        <FloatingCard
          className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
          style={{ top: "45%", right: "10%" }}
          animationDelay={2000}
          floatDirection="up"
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-4 md:w-6 h-4 md:h-6 bg-white rounded-full animate-spin-slow"></div>
          </div>
        </FloatingCard>

        {/* Small purple card with chart */}
        <FloatingCard
          className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800"
          style={{ bottom: "20%", left: "40%" }}
          animationDelay={2500}
          floatDirection="down"
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-4 md:w-6 h-4 md:h-6 text-white animate-bounce">
              📊
            </div>
          </div>
        </FloatingCard>

        {/* Animated connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <g className="animate-draw-line">
            <path
              d="M 100 150 Q 200 200 300 250"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;10"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M 150 400 Q 250 300 350 350"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="3,7"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;10"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </svg>
      </div>

      {/* Right side - Content with animations */}
      <div className="relative md:absolute md:right-0 md:top-0 w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-12">
        <div className="max-w-lg mx-auto md:mx-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight mb-6 animate-slide-up">
            <span
              className="inline-block animate-fade-in-up"
              style={{ animationDelay: "0ms" }}
            >
              {t.mainHeading.line1}
            </span>{" "}
            <span
              className="inline-block animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              {t.mainHeading.line2}
            </span>{" "}
            <span
              className="inline-block animate-fade-in-up bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              style={{ animationDelay: "400ms" }}
            >
              {t.mainHeading.line3}
            </span>{" "}
            <span
              className="inline-block animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              {t.mainHeading.line4}
            </span>
          </h1>

          <p
            className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "800ms" }}
          >
            {t.description}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "1000ms" }}
          >
            <Link href="/contact">
              <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gradient-to-r hover:from-black hover:to-gray-800 transition-all duration-500 hover:scale-105 hover:shadow-2xl flex items-center justify-center group">
                {t.button}
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
