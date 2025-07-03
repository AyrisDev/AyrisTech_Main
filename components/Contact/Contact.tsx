"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Globe,
  MessageCircle,
} from "lucide-react";

interface ContactProps {
  language?: "tr" | "en";
}

export default function Contact({ language = "tr" }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const content = {
    tr: {
      title: "İletişim",
      subtitle: "Projeleriniz için bizimle iletişime geçin",
      description:
        "Fikirlerinizi gerçeğe dönüştürmek için buradayız. Size en uygun çözümü sunmak için sabırsızlanıyoruz.",

      form: {
        title: "Bize Mesaj Gönderin",
        name: "Adınız Soyadınız",
        email: "E-posta Adresiniz",
        subject: "Konu",
        message: "Mesajınız",
        submit: "Mesaj Gönder",
        submitting: "Gönderiliyor...",
      },

      info: {
        title: "İletişim Bilgileri",
        email: "hello@ayristech.com",
        phone: "+90 (555) 123 45 67",
        address: "İstanbul, Türkiye",
        hours: "Pazartesi - Cuma: 09:00 - 18:00",
      },

      services: {
        title: "Hangi Konularda Yardımcı Olabiliriz?",
        items: [
          "Web & Mobil Uygulama Geliştirme",
          "AI & Machine Learning Projeleri",
          "Blockchain Çözümleri",
          "UI/UX Tasarım Hizmetleri",
          "Oyun Geliştirme",
          "Dijital Pazarlama & SEO",
          "Teknik Danışmanlık",
          "Proje Yönetimi",
        ],
      },

      cta: {
        title: "Hemen Başlayalım!",
        description:
          "Projenizi hayata geçirmek için bugün bizimle iletişime geçin.",
        button: "Ücretsiz Konsültasyon",
      },
    },

    en: {
      title: "Contact",
      subtitle: "Get in touch for your projects",
      description:
        "We are here to turn your ideas into reality. We are excited to offer you the most suitable solution.",

      form: {
        title: "Send Us a Message",
        name: "Your Full Name",
        email: "Your Email Address",
        subject: "Subject",
        message: "Your Message",
        submit: "Send Message",
        submitting: "Sending...",
      },

      info: {
        title: "Contact Information",
        email: "hello@ayristech.com",
        phone: "+90 (555) 123 45 67",
        address: "Istanbul, Turkey",
        hours: "Monday - Friday: 09:00 - 18:00",
      },

      services: {
        title: "How Can We Help You?",
        items: [
          "Web & Mobile App Development",
          "AI & Machine Learning Projects",
          "Blockchain Solutions",
          "UI/UX Design Services",
          "Game Development",
          "Digital Marketing & SEO",
          "Technical Consulting",
          "Project Management",
        ],
      },

      cta: {
        title: "Let's Get Started!",
        description: "Contact us today to bring your project to life.",
        button: "Free Consultation",
      },
    },
  };

  const { title, subtitle, description, form, info, services, cta } =
    content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);

    // Show success message (you can implement a toast notification here)
    alert(
      language === "tr"
        ? "Mesajınız başarıyla gönderildi!"
        : "Your message has been sent successfully!"
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">{subtitle}</p>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="mb-8">
                  <MessageCircle className="w-12 h-12 text-blue-600 mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {form.title}
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {form.subject}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {form.message}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span>{form.submitting}</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {form.submit}
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {info.title}
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">{info.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Telefon</p>
                        <p className="text-gray-600">{info.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Adres</p>
                        <p className="text-gray-600">{info.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">
                          {language === "tr"
                            ? "Çalışma Saatleri"
                            : "Working Hours"}
                        </p>
                        <p className="text-gray-600">{info.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {services.title}
                  </h2>
                  <div className="grid grid-cols-1 gap-3">
                    {services.items.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 bg-gray-50 rounded-lg"
                      >
                        <Globe className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{cta.title}</h2>
            <p className="text-xl mb-8 text-blue-100">{cta.description}</p>
            <Link href="mailto:hello@ayristech.com">
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                {cta.button}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
