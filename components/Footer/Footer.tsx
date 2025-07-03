"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
} from "lucide-react";

interface FooterProps {
  language?: "tr" | "en";
}

const Footer = ({ language = "tr" }: FooterProps) => {
  const [email, setEmail] = useState("");
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    tr: {
      company: {
        title: "ŞİRKET",
        links: [
          { name: "Hakkımızda", href: "/about" },
          { name: "Hizmetlerimiz", href: "/services" },
          { name: "Projelerimiz", href: "/projects" },
          { name: "İletişim", href: "/contact" },
          { name: "Blog", href: "/blog" },
        ],
      },
      policies: {
        title: "POLİTİKALARIMIZ",
        links: [
          { name: "Gizlilik Politikası", href: "/privacy-policy" },
          { name: "Kullanım Koşulları", href: "/terms-of-use" },
          { name: "Çerez Politikası", href: "/cookies-policy" },
          { name: "GDPR Politikası", href: "/gdpr-policy" },
        ],
      },
      social: {
        title: "SOSYAL MEDYA",
      },
      newsletter: {
        title: "Bültenimize Abone Olun",
        placeholder: "E-posta adresiniz...",
        button: "Katıl",
      },
      contact: {
        email: "hello@ayristech.com",
        phone: "+90 (555) 123 45 67",
        address: "İstanbul, Türkiye",
      },
      copyright: "© 2025 Ayris Tech. Tüm hakları saklıdır.",
    },
    en: {
      company: {
        title: "COMPANY",
        links: [
          { name: "About Us", href: "/about" },
          { name: "Services", href: "/services" },
          { name: "Projects", href: "/projects" },
          { name: "Contact", href: "/contact" },
          { name: "Blog", href: "/blog" },
        ],
      },
      policies: {
        title: "OUR POLICIES",
        links: [
          { name: "Privacy Policy", href: "/privacy-policy" },
          { name: "Terms of Use", href: "/terms-of-use" },
          { name: "Cookies Policy", href: "/cookies-policy" },
          { name: "GDPR Policy", href: "/gdpr-policy" },
        ],
      },
      social: {
        title: "SOCIAL MEDIA",
      },
      newsletter: {
        title: "Subscribe to our newsletter",
        placeholder: "Your email...",
        button: "Join",
      },
      contact: {
        email: "hello@ayristech.com",
        phone: "+90 (555) 123 45 67",
        address: "Istanbul, Turkey",
      },
      copyright: "© 2025 Ayris Tech. All rights reserved.",
    },
  };

  const t = content[language];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
    // Show success message
    alert(
      language === "tr"
        ? "Başarılı bir şekilde abone oldunuz!"
        : "Successfully subscribed!"
    );
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <Image
                  src="/logo.png"
                  alt="Ayris Tech"
                  width={180}
                  height={60}
                  className="h-24 w-auto"
                />
              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 uppercase text-sm tracking-wide">
              {t.company.title}
            </h3>
            <ul className="space-y-3">
              {t.company.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Policies Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 uppercase text-sm tracking-wide">
              {t.policies.title}
            </h3>
            <ul className="space-y-3">
              {t.policies.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 uppercase text-sm tracking-wide">
              {t.social.title}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://facebook.com/ayristech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  <Facebook className="w-4 h-4 text-blue-500" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/ayristech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  <Twitter className="w-4 h-4 text-sky-500" />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/ayristech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/ayristech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">
                {t.newsletter.title}
              </h3>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.newsletter.placeholder}
                  required
                  className="flex-1 px-4 py-2 text-sm border border-gray-300 bg-white text-gray-900 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 text-sm rounded-r-lg hover:bg-blue-700 transition-colors"
                >
                  {t.newsletter.button}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600 text-sm">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
