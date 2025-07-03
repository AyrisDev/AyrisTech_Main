"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { usePathname as useNextPathname } from "next/navigation";
import { getMainMenu } from "@/sanity/lib/client";
import type { Menu, LocaleString } from "@/sanity/types";

// Helper function to detect locale from pathname or browser
const getLocaleFromPath = (pathname: string): string => {
  // Check if pathname starts with /tr or /en
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment === 'tr' || firstSegment === 'en') {
    return firstSegment;
  }
  
  // If no locale in path, detect from browser language
  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'en') {
      return 'en';
    }
  }
  
  // Default to Turkish
  return 'tr';
};

// Helper function to get localized string
const getLocalizedString = (localizedString: LocaleString | undefined, locale: string): string => {
  if (!localizedString) return "";
  return localizedString[locale as keyof LocaleString] || localizedString.en || "";
};

// Custom hook for scroll detection
const useScrollDetection = (threshold: number = 20) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > threshold);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [threshold]);

  return isScrolled;
};

// Custom hook for body scroll lock
const useBodyScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isLocked]);
};

// Navigation Link Component
interface NavLinkProps {
  item: { 
    label: LocaleString; 
    url: string; 
    openInNewTab?: boolean;
    submenu?: Array<{
      label: LocaleString;
      url: string;
      openInNewTab?: boolean;
      order?: number;
      isActive?: boolean;
    }>;
  };
  isActive: boolean;
  onClick?: () => void;
  variant?: "desktop" | "mobile";
  locale: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  item,
  isActive,
  onClick,
  variant = "desktop",
  locale,
}) => {
  const baseClasses =
    "relative font-medium rounded-lg transition-all duration-200";

  const desktopClasses = `${baseClasses} px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 ${
    isActive ? "text-blue-600" : ""
  }`;

  const mobileClasses = `${baseClasses} block px-3 py-2.5 text-base ${
    isActive
      ? "text-blue-600 bg-blue-50/80"
      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50/80"
  }`;

  if (item.openInNewTab) {
    return (
      <a
        href={item.url}
        className={variant === "desktop" ? desktopClasses : mobileClasses}
        onClick={onClick}
        aria-current={isActive ? "page" : undefined}
        target="_blank"
        rel="noopener noreferrer"
      >
        {getLocalizedString(item.label, locale)}
      </a>
    );
  }

  return (
    <Link
      href={item.url}
      className={variant === "desktop" ? desktopClasses : mobileClasses}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      {getLocalizedString(item.label, locale)}
      {isActive && variant === "desktop" && (
        <span
          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
          aria-hidden="true"
        />
      )}
    </Link>
  );
};

// Get In Touch Button Component
interface GetInTouchButtonProps {
  variant?: "desktop" | "mobile";
  onClick?: () => void;
  locale: string;
}

const GetInTouchButton: React.FC<GetInTouchButtonProps> = ({
  variant = "desktop",
  onClick,
  locale,
}) => {
  const router = useRouter();

  const buttonText = locale === 'tr' ? 'İletişime Geç' : 'Get In Touch';

  const handleClick = useCallback(() => {
    onClick?.();
    if (variant === "mobile") {
      // Add delay for mobile menu closing animation
      setTimeout(() => {
        router.push("/contact");
      }, 300);
    } else {
      router.push("/contact");
    }
  }, [onClick, variant, router]);

  const baseClasses =
    "text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center group";

  const desktopClasses = `${baseClasses} px-6 py-2.5 hover:scale-105`;
  const mobileClasses = `${baseClasses} w-full px-6 py-3 hover:scale-[1.02]`;

  const ArrowIcon = () => (
    <svg
      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );

  if (variant === "desktop") {
    return (
      <button
        onClick={handleClick}
        className={desktopClasses}
        aria-label={buttonText}
      >
        {buttonText}
        <ArrowIcon />
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={mobileClasses}
      aria-label={buttonText}
    >
      {buttonText}
      <ArrowIcon />
    </button>
  );
};

// Mobile Menu Button Component
interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isOpen,
  onClick,
}) => (
  <button
    type="button"
    className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
    onClick={onClick}
    aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
    aria-expanded={isOpen}
  >
    {!isOpen ? (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    ) : (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    )}
  </button>
);

// Main Header Component
export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuData, setMenuData] = useState<Menu | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const locale = mounted ? getLocaleFromPath(pathname) : 'tr'; // Default to 'tr' during SSR
  const isScrolled = useScrollDetection(20);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fetch menu data from Sanity
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setIsLoading(true);
        const menu = await getMainMenu();
        setMenuData(menu);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  // Lock body scroll when mobile menu is open
  useBodyScrollLock(isMobileMenuOpen);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                aria-label="Ayris.Tech Ana Sayfa"
              >
                <Image
                  src="/logo.png"
                  alt="Ayris.Tech"
                  width={150}
                  height={50}
                  className="h-12 w-auto sm:h-16 transition-transform duration-200 hover:scale-105"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-1"
              role="navigation"
            >
              {!isLoading && menuData?.items?.map((item, index) => (
                <NavLink
                  key={`${item.url}-${index}`}
                  item={item}
                  isActive={pathname === item.url}
                  variant="desktop"
                  locale={locale}
                />
              ))}
            </nav>

            {/* Desktop Get in Touch Button */}
            <div className="hidden lg:flex items-center">
              <GetInTouchButton variant="desktop" locale={locale} />
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <MobileMenuButton
                isOpen={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-0 z-40" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile menu */}
      <div
        className={`fixed  left-0 right-0 bg-white/95  transform transition-all duration-300 ease-in-out md:hidden  z-45 ${
          isMobileMenuOpen ? "translate-y-0 top-16" : "-translate-y-full top-0 "
        }`}
        role="navigation"
        aria-label="Mobil menü"
      >
        <div className="max-w-[1440px] mx-auto px-4 py-4">
          <div className="space-y-1">
            {!isLoading && menuData?.items?.map((item, index) => (
              <NavLink
                key={`mobile-${item.url}-${index}`}
                item={item}
                isActive={pathname === item.url}
                onClick={closeMobileMenu}
                variant="mobile"
                locale={locale}
              />
            ))}
            <div className="pt-4">
              <GetInTouchButton variant="mobile" onClick={closeMobileMenu} locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
