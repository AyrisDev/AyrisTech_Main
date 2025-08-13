"use client";
import React, { useState, useEffect, Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { getProjects, getServices, urlFor } from "@/sanity/lib/client";
import { Project, Service } from "@/sanity/types";
import { getCategoryLabel, getCategorySlugFromLabel } from "@/lib/categoryMapping";
import { useRouter, useSearchParams } from "next/navigation";

function ProjectsContent() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("");
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const locale = searchParams.get('locale') || 'tr';


  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [projectsData, servicesData] = await Promise.all([
          getProjects(),
          getServices()
        ]);
        setProjects(projectsData);
        setServices(servicesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Set initial category from URL
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    setActiveCategory(categoryParam || "");
  }, [searchParams]);

  const filteredProjects = activeCategory 
    ? projects.filter(project => {
        // Get the service name from the category slug 
        const categoryLabel = getCategoryLabel(project.category, locale);
        return categoryLabel === activeCategory;
      })
    : projects;

  const content = {
    tr: {
      title: "Projelerimiz",
      description: "Gerçekleştirdiğimiz başarılı projeler ve çözümler.",
      allCategories: "Tüm Kategoriler",
      viewProject: "Projeyi Görüntüle",
      loading: "Projeler yükleniyor...",
      noProjects: "Bu kategoride proje bulunamadı."
    },
    en: {
      title: "Our Projects",
      description: "Successful projects and solutions we have implemented.",
      allCategories: "All Categories", 
      viewProject: "View Project",
      loading: "Loading projects...",
      noProjects: "No projects found in this category."
    }
  };

  const t = content[locale as keyof typeof content] || content.tr;

  // Handle category filter
  const handleCategoryChange = (categoryName: string) => {
    setActiveCategory(categoryName);
    
    // Update URL without page reload
    const params = new URLSearchParams(searchParams.toString());
    if (categoryName) {
      params.set('category', categoryName);
    } else {
      params.delete('category');
    }
    params.set('locale', locale);
    
    router.push(`/projects?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.title}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {t.description}
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => handleCategoryChange("")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              !activeCategory
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
            }`}
          >
            {t.allCategories}
          </button>
          {services.map((service) => {
            const serviceName = service.title[locale] || service.title.tr;
            return (
              <button
                key={service._id}
                onClick={() => handleCategoryChange(serviceName)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === serviceName
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
                }`}
              >
                {serviceName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {loading ? (
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
            <p className="mt-4 text-gray-600">{t.loading}</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              {t.noProjects}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project._id}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={urlFor(project.image).url()}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {getCategoryLabel(project.category, locale)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {project.mainTitle[locale] || project.mainTitle.tr}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.shortDescription ? 
                        (project.shortDescription[locale] || project.shortDescription.tr) : 
                        (project.description && typeof project.description === 'string' ? 
                          project.description.substring(0, 120) + '...' : 
                          'Açıklama bulunamadı')
                      }
                    </p>
                  </div>

                  {/* Stats */}
                  {project.stats && project.stats.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {project.stats.slice(0, 2).map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-gray-900">
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
                    <a
                      href={`/projects/${project.slug.current}?locale=${locale}`}
                      className="group/button flex items-center space-x-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
                    >
                      <span className="border-b-2 border-orange-600 group-hover/button:border-orange-700 transition-colors">
                        {t.viewProject}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div></div>}>
      <ProjectsContent />
    </Suspense>
  );
}