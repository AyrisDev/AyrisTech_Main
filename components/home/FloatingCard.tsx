// Animated Floating Card Component
"use client";
import { useState, useEffect, ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  animationDelay?: number;
  floatDirection?: "up" | "down";
}

export const FloatingCard = ({
  children,
  className = "",
  style = {},
  animationDelay = 0,
  floatDirection = "up",
}: FloatingCardProps) => {
  const [duration, setDuration] = useState("3000ms");
  const floatClass =
    floatDirection === "up" ? "animate-float-up" : "animate-float-down";

  useEffect(() => {
    setDuration(`${3000 + Math.random() * 2000}ms`);
  }, []);

  return (
    <div
      className={`absolute rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${floatClass} ${className}`}
      style={{
        ...style,
        animationDelay: `${animationDelay}ms`,
        animationDuration: duration,
      }}
    >
      {children}
    </div>
  );
};
