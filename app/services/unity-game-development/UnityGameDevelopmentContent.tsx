"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProjectByCategory, urlFor } from "@/sanity/lib/client";
import { Project } from "@/sanity/types";
import { useLanguage } from "@/hooks/useLanguage";

export default function UnityGameDevelopmentContent() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const { locale } = useLanguage();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const projectsData = await getProjectByCategory("unity-game-development");
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const getLocalizedText = (text: string | { [key: string]: string } | undefined, currentLocale: string = locale) => {
    if (typeof text === 'object' && text !== null) {
      return text[currentLocale] || text.en || text.tr || '';
    }
    return text || '';
  };

  const content = {
    tr: {
      breadcrumb: {
        home: "Ana Sayfa",
        services: "Hizmetler",
        current: "Unity Oyun Geliştirme"
      },
      hero: {
        title: "Unity Oyun Geliştirme",
        description: "Unity motoru ile 2D/3D oyunlar, mobil oyunlar ve etkileşimli deneyimler geliştiriyoruz. Yaratıcılığınızı dijital dünyaya taşıyoruz."
      },
      tabs: {
        details: "Hizmet Detayları",
        projects: "Projelerimiz"
      },
      services: {
        title: "Sunduğumuz Hizmetler",
        list: [
          "2D/3D Oyun Geliştirme",
          "Mobil Oyun Uygulamaları", 
          "VR/AR Deneyimleri",
          "Multiplayer Oyun Sistemleri",
          "Game Analytics Entegrasyonu",
          "Cross-Platform Geliştirme",
          "Oyun Optimizasyonu",
          "Level Design & Asset Creation"
        ]
      },
      technologies: {
        title: "Kullandığımız Teknolojiler",
        list: [
          "Unity 3D", "C# Scripting", "Visual Scripting", "Unity Analytics",
          "Unity Cloud Build", "Addressables", "Unity Ads", "Firebase",
          "Photon Network", "Steam SDK", "Google Play Games", "Apple Game Center"
        ]
      },
      process: {
        title: "Geliştirme Sürecimiz",
        steps: [
          {
            step: "01",
            title: "Konsept & Tasarım",
            description: "Oyun fikrini detaylandırıp, mekaniklerini ve hikayesini belirliyoruz."
          },
          {
            step: "02",
            title: "Prototype Geliştirme", 
            description: "Temel oynanış mekaniklerini test edilebilir bir prototip haline getiriyoruz."
          },
          {
            step: "03",
            title: "Geliştirme & Test",
            description: "Tam oyunu geliştirip, kapsamlı testlerden geçiriyoruz."
          },
          {
            step: "04",
            title: "Yayınlama & Destek",
            description: "Oyunu platformlara yayınlayıp, sürekli güncelleme desteği sağlıyoruz."
          }
        ]
      },
      projects: {
        loading: "Projeler yükleniyor...",
        noProjects: {
          title: "Henüz Proje Bulunamadı",
          description: "Unity Oyun Geliştirme kategorisinde henüz tamamlanmış proje bulunmuyor."
        },
        section: {
          title: "Unity Oyun Projelerimiz",
          description: "Unity motoru ile geliştirdiğimiz 2D/3D oyunlar ve etkileşimli deneyimler."
        },
        viewProject: "Projeyi İncele",
        viewAll: "Tüm Unity Oyun Projelerini Görüntüle"
      },
      cta: {
        title: "Oyun Fikrinizi Gerçeğe Dönüştürelim",
        description: "Unity ile hayalinizdeki oyunu birlikte geliştirelim",
        primaryButton: "Proje Başlat",
        secondaryButton: "Diğer Hizmetler"
      }
    },
    en: {
      breadcrumb: {
        home: "Home",
        services: "Services", 
        current: "Unity Game Development"
      },
      hero: {
        title: "Unity Game Development",
        description: "We develop 2D/3D games, mobile games and interactive experiences with Unity engine. We bring your creativity to the digital world."
      },
      tabs: {
        details: "Service Details",
        projects: "Our Projects"
      },
      services: {
        title: "Our Services",
        list: [
          "2D/3D Game Development",
          "Mobile Game Applications",
          "VR/AR Experiences", 
          "Multiplayer Game Systems",
          "Game Analytics Integration",
          "Cross-Platform Development",
          "Game Optimization",
          "Level Design & Asset Creation"
        ]
      },
      technologies: {
        title: "Technologies We Use",
        list: [
          "Unity 3D", "C# Scripting", "Visual Scripting", "Unity Analytics",
          "Unity Cloud Build", "Addressables", "Unity Ads", "Firebase", 
          "Photon Network", "Steam SDK", "Google Play Games", "Apple Game Center"
        ]
      },
      process: {
        title: "Our Development Process",
        steps: [
          {
            step: "01",
            title: "Concept & Design",
            description: "We detail the game idea and determine its mechanics and story."
          },
          {
            step: "02", 
            title: "Prototype Development",
            description: "We turn basic gameplay mechanics into a testable prototype."
          },
          {
            step: "03",
            title: "Development & Testing",
            description: "We develop the full game and put it through comprehensive testing."
          },
          {
            step: "04",
            title: "Publishing & Support", 
            description: "We publish the game to platforms and provide continuous update support."
          }
        ]
      },
      projects: {
        loading: "Loading projects...",
        noProjects: {
          title: "No Projects Found Yet",
          description: "There are no completed projects in Unity Game Development category yet."
        },
        section: {
          title: "Our Unity Game Projects",
          description: "2D/3D games and interactive experiences developed with Unity engine."
        },
        viewProject: "View Project",
        viewAll: "View All Unity Game Projects"
      },
      cta: {
        title: "Let's Bring Your Game Idea to Life",
        description: "Let's develop your dream game together with Unity",
        primaryButton: "Start Project",
        secondaryButton: "Other Services"
      }
    }
  };

  const t = content[locale as keyof typeof content] || content.tr;
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header spacing */}
      <div className="pt-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-gray-700">{t.breadcrumb.home}</Link>
              </li>
              <li>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-700">{t.breadcrumb.services}</Link>
              </li>
              <li>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li className="text-gray-900 font-medium">{t.breadcrumb.current}</li>
            </ol>
          </nav>

          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.hero.description}
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-xl p-1 shadow-sm border border-gray-200">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "overview"
                    ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {t.tabs.details}
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "projects"
                    ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {t.tabs.projects} ({projects.length})
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
                {t.services.title}
              </h2>
              <div className="space-y-4">
                {t.services.list.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
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
                {t.technologies.title}
              </h2>
              <div className="flex flex-wrap gap-3">
                {t.technologies.list.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100"
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
              {t.process.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {t.process.steps.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
                    <p className="mt-4 text-gray-600">{t.projects.loading}</p>
                  </div>
                ) : projects.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-6">🎮</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.projects.noProjects.title}</h3>
                    <p className="text-gray-600">{t.projects.noProjects.description}</p>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.projects.section.title}</h2>
                      <p className="text-gray-600 max-w-2xl mx-auto">
                        {t.projects.section.description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {projects.map((project) => (
                        <div
                          key={project._id}
                          className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
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
                              <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                                <span className="text-purple-400 text-sm">No Image</span>
                              </div>
                            )}
                            <div className="absolute top-4 left-4">
                              <span className="bg-purple-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                                Unity Game
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <div className="mb-4">
                              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
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
                                    <div className="text-lg font-bold text-purple-600">
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
                                className="group/button flex items-center space-x-2 text-purple-600 font-medium hover:text-purple-700 transition-colors"
                              >
                                <span className="border-b-2 border-purple-600 group-hover/button:border-purple-700 transition-colors">
                                  {t.projects.viewProject}
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
                        href="/projects?category=Unity%20Oyun%20Geliştirme"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        {t.projects.viewAll}
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </>
                )}
              </div>
            )}

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">
                {t.cta.title}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {t.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  {t.cta.primaryButton}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link 
                  href="/services" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-200"
                >
                  {t.cta.secondaryButton}
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}