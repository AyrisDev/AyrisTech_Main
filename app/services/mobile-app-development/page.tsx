"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProjectByCategory, urlFor } from "@/sanity/lib/client";
import { Project } from "@/sanity/types";

export default function MobileAppDevelopmentPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const projectsData = await getProjectByCategory("mobile-app-development");
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const getLocalizedText = (text: string | { [key: string]: string } | undefined, locale: string = 'tr') => {
    if (typeof text === 'object' && text !== null) {
      return text[locale] || text.en || text.tr || '';
    }
    return text || '';
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header spacing */}
      <div className="pt-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-gray-700">Ana Sayfa</Link>
              </li>
              <li>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-700">Hizmetler</a>
              </li>
              <li>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li className="text-gray-900 font-medium">Mobil Uygulama Geliştirme</li>
            </ol>
          </nav>

          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Mobil Uygulama Geliştirme
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              iOS ve Android için native ve AI destekli mobil uygulamalar geliştiriyoruz. 
              Fikirlerinizi cebinizde taşıyacak uygulamalara dönüştürüyoruz.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-xl p-1 shadow-sm border border-gray-200">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "overview"
                    ? "bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Hizmet Detayları
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "projects"
                    ? "bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Projelerimiz ({projects.length})
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <>
              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            {/* Features */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Sunduğumuz Hizmetler
              </h2>
              <div className="space-y-4">
                {[
                  "Native iOS Uygulamaları",
                  "Native Android Uygulamaları", 
                  "Cross-Platform Geliştirme",
                  "AI Destekli Uygulamalar",
                  "E-ticaret Mobil Uygulamaları",
                  "Sosyal Platform Uygulamaları",
                  "Fintech & Banking Apps",
                  "Push Notification Servisleri",
                  "In-App Purchase Entegrasyonu",
                  "Real-time Chat Sistemleri"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Kullandığımız Teknolojiler
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "React Native",
                  "Flutter",
                  "Swift (iOS)",
                  "Kotlin (Android)",
                  "Expo",
                  "Firebase",
                  "AWS Amplify",
                  "GraphQL",
                  "Redux",
                  "TypeScript",
                  "Jest",
                  "Detox",
                  "Fastlane",
                  "App Store Connect",
                  "Google Play Console"
                ].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 rounded-full text-sm font-medium border border-green-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Geliştirme Sürecimiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Analiz & Planlama",
                  description: "Hedef kitle analizi, özellik planlama ve teknik mimarinin belirlenmesi."
                },
                {
                  step: "02", 
                  title: "UI/UX Tasarım",
                  description: "Kullanıcı deneyimi odaklı arayüz tasarımı ve prototip oluşturma."
                },
                {
                  step: "03",
                  title: "Geliştirme & Test",
                  description: "Agile metodoloji ile geliştirme ve kapsamlı test süreçleri."
                },
                {
                  step: "04",
                  title: "Yayınlama & Destek",
                  description: "App Store ve Play Store yayınlama ile sürekli güncelleme desteği."
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

              </>
            )}

            {activeTab === "projects" && (
              <div className="mb-16">
                {loading ? (
                  <div className="text-center py-16">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
                    <p className="mt-4 text-gray-600">Projeler yükleniyor...</p>
                  </div>
                ) : projects.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-6">📱</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Henüz Proje Bulunamadı</h3>
                    <p className="text-gray-600">Mobil Uygulama Geliştirme kategorisinde henüz tamamlanmış proje bulunmuyor.</p>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">Mobil Uygulama Projelerimiz</h2>
                      <p className="text-gray-600 max-w-2xl mx-auto">
                        iOS ve Android platformları için geliştirdiğimiz başarılı mobil uygulamalar.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {projects.map((project) => (
                        <div
                          key={project._id}
                          className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-green-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                          {/* Project Image */}
                          <div className="relative w-full h-48 overflow-hidden">
                            {project.image ? (
                              <img
                                src={urlFor(project.image).width(400).height(300).url()}
                                alt={getLocalizedText(project.title)}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                                <span className="text-green-400 text-sm">No Image</span>
                              </div>
                            )}
                            <div className="absolute top-4 left-4">
                              <span className="bg-green-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                                Mobil App
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <div className="mb-4">
                              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                                {getLocalizedText(project.title)}
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {getLocalizedText(project.description)}
                              </p>
                            </div>

                            {/* Stats */}
                            {project.stats && project.stats.length > 0 && (
                              <div className="grid grid-cols-2 gap-4 mb-4">
                                {project.stats.slice(0, 2).map((stat, index) => (
                                  <div key={index} className="text-center">
                                    <div className="text-lg font-bold text-green-600">
                                      {stat.value}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      {stat.label}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* View Project Link */}
                            <div className="mt-auto">
                              <Link
                                href={`/projects/${project.slug?.current || ''}`}
                                className="group/button flex items-center space-x-2 text-green-600 font-medium hover:text-green-700 transition-colors"
                              >
                                <span className="border-b-2 border-green-600 group-hover/button:border-green-700 transition-colors">
                                  Projeyi İncele
                                </span>
                                <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* View All Projects Button */}
                    <div className="text-center mt-12">
                      <Link
                        href="/projects?category=Mobil%20Uygulama%20Geliştirme"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Tüm Mobil Uygulama Projelerini Görüntüle
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </>
                )}
              </div>
            )}

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Mobil Uygulamanızı Birlikte Geliştirelim
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Milyonlarca kullanıcıya ulaşacak uygulamanızı oluşturalım
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Proje Başlat
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a 
                  href="/services" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-200"
                >
                  Diğer Hizmetler
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}