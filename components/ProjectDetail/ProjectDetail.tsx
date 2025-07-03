"use client";

import Image from "next/image";
import Link from "next/link";
import { urlFor, fetchMarkdownFile } from "@/sanity/lib/client";
import { Project } from "@/sanity/types";
import { useLanguage } from "@/hooks/useLanguage";
import { useState, useEffect } from "react";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { locale } = useLanguage();
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  // Fetch markdown content
  useEffect(() => {
    const loadMarkdownContent = async () => {
      try {
        setLoading(true);
        const markdownFile =
          locale === "en" ? project.description.en : project.description.tr;

        if (markdownFile?.asset?.url) {
          const content = await fetchMarkdownFile(markdownFile.asset.url);
          setMarkdownContent(content);
        } else {
          // Fallback to other language if current language file doesn't exist
          const fallbackFile =
            locale === "en" ? project.description.tr : project.description.en;
          if (fallbackFile?.asset?.url) {
            const content = await fetchMarkdownFile(fallbackFile.asset.url);
            setMarkdownContent(content);
          } else {
            setMarkdownContent("Açıklama bulunamadı / Description not found");
          }
        }
      } catch (error) {
        console.error("Error loading markdown content:", error);
        setMarkdownContent(
          "Açıklama yüklenirken hata oluştu / Error loading description"
        );
      } finally {
        setLoading(false);
      }
    };

    loadMarkdownContent();
  }, [project.description, locale]);

  // Helper function to get localized text
  const getLocalizedText = (text: any, fallback: string = "") => {
    if (typeof text === "object" && text !== null) {
      return text[locale] || text.en || text.tr || fallback;
    }
    return text || fallback;
  };

  // Function to convert markdown to HTML with basic styling
  const formatMarkdownToHTML = (markdown: string) => {
    if (!markdown) return "";

    return (
      markdown
        // Headers
        .replace(
          /^### (.*$)/gm,
          '<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">$1</h3>'
        )
        .replace(
          /^## (.*$)/gm,
          '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">$1</h2>'
        )
        .replace(
          /^# (.*$)/gm,
          '<h1 class="text-3xl font-bold text-gray-900 mt-12 mb-8">$1</h1>'
        )

        // Bold and italic
        .replace(
          /\*\*(.*?)\*\*/g,
          '<strong class="font-bold text-gray-900">$1</strong>'
        )
        .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')

        // Lists
        .replace(/^- (.*$)/gm, '<li class="ml-4 mb-2">• $1</li>')
        .replace(/^(\d+)\. (.*$)/gm, '<li class="ml-4 mb-2">$1. $2</li>')

        // Code blocks
        .replace(
          /```([\s\S]*?)```/g,
          '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code class="text-sm">$1</code></pre>'
        )
        .replace(
          /`(.*?)`/g,
          '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>'
        )

        // Links
        .replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          '<a href="$2" class="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">$1</a>'
        )

        // Line breaks and paragraphs
        .replace(/\n\n/g, '</p><p class="mb-4">')
        .replace(/\n/g, "<br>")

        // Wrap in paragraph tags
        .replace(/^(.*)/, '<p class="mb-4">$1</p>')

        // Horizontal rules
        .replace(/^---$/gm, '<hr class="my-8 border-gray-300">')

        // Emojis and special characters (keep as is)
        .replace(/---/g, '<hr class="my-6 border-gray-300">')
    );
  };

  // Content translations
  const content = {
    tr: {
      about: "Proje Hakkında",
      stats: "Proje İstatistikleri",
      gallery: "Galeri",
      backToProjects: "← Tüm Projeler",
    },
    en: {
      about: "About Project",
      stats: "Project Statistics",
      gallery: "Gallery",
      backToProjects: "← All Projects",
    },
  };

  const t = content[locale as keyof typeof content] || content.tr;

  // Lightbox functions
  const openLightbox = (imageUrl: string, index: number) => {
    setSelectedImage(imageUrl);
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (project.gallery && selectedImageIndex < project.gallery.length - 1) {
      const nextIndex = selectedImageIndex + 1;
      setSelectedImageIndex(nextIndex);
      const nextImageUrl =
        project.gallery[nextIndex].asset?.url ||
        urlFor(project.gallery[nextIndex].asset).url();
      setSelectedImage(nextImageUrl);
    }
  };

  const prevImage = () => {
    if (project.gallery && selectedImageIndex > 0) {
      const prevIndex = selectedImageIndex - 1;
      setSelectedImageIndex(prevIndex);
      const prevImageUrl =
        project.gallery[prevIndex].asset?.url ||
        urlFor(project.gallery[prevIndex].asset).url();
      setSelectedImage(prevImageUrl);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === "Escape") {
          closeLightbox();
        } else if (e.key === "ArrowRight") {
          nextImage();
        } else if (e.key === "ArrowLeft") {
          prevImage();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, selectedImageIndex, project.gallery]);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Ana Başlık */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {getLocalizedText(project.mainTitle, project.title)}
            </h1>
            {project.subtitle && (
              <p className="text-xl text-gray-600 mb-6">{project.subtitle}</p>
            )}
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              {project.category}
            </div>
          </div>

          {/* Ana Görsel */}
          {project.image && (
            <div className="mb-12">
              <Image
                src={urlFor(project.image).url()}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Açıklama */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.about}</h2>
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                <span className="ml-3 text-gray-600">İçerik yükleniyor...</span>
              </div>
            ) : (
              <div className="prose prose-lg max-w-none text-gray-700">
                <div
                  className="markdown-content"
                  dangerouslySetInnerHTML={{
                    __html: formatMarkdownToHTML(markdownContent),
                  }}
                />
              </div>
            )}
          </div>

          {/* İstatistikler */}
          {project.stats && project.stats.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t.stats}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md text-center"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resim Galerisi */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t.gallery}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((image, index) => {
                  const imageUrl = image.asset?.url || urlFor(image.asset).url();
                  return (
                    <div key={index} className="relative group cursor-pointer">
                      <Image
                        src={imageUrl}
                        alt={`${project.title} - ${index + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                        onClick={() => openLightbox(imageUrl, index)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Geri Dön Butonu */}
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              {t.backToProjects}
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Previous button */}
            {project.gallery && selectedImageIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-3 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* Next button */}
            {project.gallery &&
              selectedImageIndex < project.gallery.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-3 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              )}

            {/* Main image */}
            <div
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt={`${project.title} - Büyük görsel`}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-lg"
                quality={95}
              />

              {/* Image counter */}
              {project.gallery && project.gallery.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImageIndex + 1} / {project.gallery.length}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
