"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLatestProjects, urlFor } from "@/sanity/lib/client";
import type { Project } from "@/sanity/types";

interface ProjectCaseStudiesProps {
  locale?: string;
}

const ProjectCaseStudies = ({ locale = "tr" }: ProjectCaseStudiesProps) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    tr: {
      title: "Proje Vaka Çalışmaları",
      description:
        "Vizyonunuzu hayata geçirmek için yenilikçi tasarım, sürdürülebilir uygulamalar ve olağanüstü işçiliği birleştirmeye inanıyoruz.",
      viewProject: "Projeyi Görüntüle",
      viewAllProjects: "Tüm Projeleri Görüntüle",
      loading: "Projeler yükleniyor...",
      noProjects: "Henüz proje bulunamadı.",
      noDescription: "Proje açıklaması yakında eklenecek...",
    },
    en: {
      title: "Project Case Studies",
      description:
        "We believe in combining innovative design, sustainable practices, and exceptional craftsmanship to bring your vision to life.",
      viewProject: "View Project",
      viewAllProjects: "View All Projects",
      loading: "Loading projects...",
      noProjects: "No projects found yet.",
      noDescription: "Project description coming soon...",
    },
  };

  const t = content[locale as keyof typeof content] || content.tr;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const latestProjects = await getLatestProjects();
        setProjects(latestProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Helper function to get localized text
  const getLocalizedText = (text: any) => {
    if (typeof text === "object" && text !== null) {
      return text[locale] || text.en || text.tr || "";
    }
    return text || "";
  };

  const displayProjects = projects.length > 0 ? projects : [];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="text-center py-16 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {locale === "en" ? (
            <>
              Case <span className="text-orange-500">Studies</span>
            </>
          ) : (
            <>
              Proje <span className="text-orange-500">Çalışmaları</span>
            </>
          )}
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          {t.description}
        </p>
      </div>

      {/* Projects Grid */}
      {loading ? (
        <div className="text-center py-16">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
          <p className="mt-4 text-gray-600">{t.loading}</p>
        </div>
      ) : displayProjects.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600">{t.noProjects}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProjects.map((project) => (
            <div
              key={project._id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">No Image</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {getLocalizedText(project.title)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.shortDescription ? 
                      getLocalizedText(project.shortDescription) : 
                      t.noDescription
                    }
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="mt-auto">
                  <Link
                    href={`/projects/${project.slug?.current || ""}`}
                    className="group/button flex items-center space-x-2 text-gray-900 font-medium hover:text-gray-700 transition-colors"
                  >
                    <span className="border-b-2 border-gray-900 group-hover/button:border-gray-700 transition-colors">
                      {t.viewProject}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View All Projects Button */}
      {displayProjects.length > 0 && (
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300 group"
          >
            {t.viewAllProjects}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectCaseStudies;
