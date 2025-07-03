import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { Service, Project, PageContent, Contact, Menu, UniqueApproach, BuildScaleBanner as BuildScaleBannerType, BlogPost } from "../types";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-03-19",
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Yardımcı sorgu fonksiyonları
export async function getServices() {
  return client.fetch<Service[]>(
    `*[_type == "service" && isActive == true] | order(order asc)`
  );
}

export async function getProjects() {
  return client.fetch<Project[]>(
    `*[_type == "project" && isActive == true] | order(order asc)`
  );
}

export async function getProjectBySlug(slug: string) {
  return client.fetch<Project>(
    `*[_type == "project" && slug.current == $slug][0]{
      ...,
      description{
        tr{
          asset->{
            url
          }
        },
        en{
          asset->{
            url
          }
        }
      },
      gallery[]{
        _type,
        asset->{
          _id,
          url
        }
      }
    }`,
    { slug }
  );
}

// Markdown dosyasını fetch etme fonksiyonu
export async function fetchMarkdownFile(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch markdown file: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error fetching markdown file:', error);
    return '';
  }
}

export async function getPageContent(pageId: string, language: string) {
  return client.fetch<PageContent>(
    `*[_type == "pageContent" && pageId == $pageId && language == $language][0]`,
    { pageId, language }
  );
}

export async function createContactSubmission(
  data: Omit<Contact, "_id" | "_type" | "createdAt">
) {
  return client.create({
    _type: "contact",
    ...data,
    status: "new",
    createdAt: new Date().toISOString(),
  });
}

export async function getMenuByIdentifier(identifier: string) {
  return client.fetch<Menu>(
    `*[_type == "menu" && identifier == $identifier][0]{
      _id,
      _type,
      title,
      identifier,
      items[isActive != false] | order(order asc){
        label,
        url,
        openInNewTab,
        order,
        isActive,
        submenu[isActive != false] | order(order asc){
          label,
          url,
          openInNewTab,
          order,
          isActive
        }
      }
    }`,
    { identifier }
  );
}

export async function getMainMenu() {
  return getMenuByIdentifier("main-menu");
}

export async function getUniqueApproach() {
  return client.fetch<UniqueApproach>(
    `*[_type == "uniqueApproach" && isActive == true][0]`
  );
}

export async function getProjectsWithCategories() {
  return client.fetch<{ projects: Project[], categories: Service[] }>(
    `{
      "projects": *[_type == "project" && isActive == true] | order(order asc),
      "categories": *[_type == "service" && isActive == true] | order(order asc)
    }`
  );
}

export async function getProjectByCategory(categorySlug: string) {
  return client.fetch<Project[]>(
    `*[_type == "project" && isActive == true && category == $categorySlug] | order(order asc)`,
    { categorySlug }
  );
}

export async function getBuildScaleBanner() {
  return client.fetch<BuildScaleBannerType>(
    `*[_type == "buildScaleBanner" && isActive == true][0]`
  );
}

export async function getBlogPosts() {
  return client.fetch<BlogPost[]>(
    `*[_type == "blogPost" && isPublished == true] | order(publishedAt desc){
      _id,
      _type,
      title,
      slug,
      excerpt,
      featuredImage,
      category,
      tags,
      author,
      publishedAt,
      readingTime,
      isFeatured,
      metaDescription
    }`
  );
}

export async function getBlogPostBySlug(slug: string) {
  return client.fetch<BlogPost>(
    `*[_type == "blogPost" && slug.current == $slug && isPublished == true][0]{
      _id,
      _type,
      title,
      slug,
      excerpt,
      content,
      featuredImage,
      category,
      tags,
      author,
      publishedAt,
      readingTime,
      isFeatured,
      metaDescription
    }`,
    { slug }
  );
}

export async function getBlogPostsByCategory(category: string) {
  return client.fetch<BlogPost[]>(
    `*[_type == "blogPost" && category == $category && isPublished == true] | order(publishedAt desc){
      _id,
      _type,
      title,
      slug,
      excerpt,
      featuredImage,
      category,
      tags,
      author,
      publishedAt,
      readingTime,
      isFeatured,
      metaDescription
    }`,
    { category }
  );
}

export async function getFeaturedBlogPosts() {
  return client.fetch<BlogPost[]>(
    `*[_type == "blogPost" && isFeatured == true && isPublished == true] | order(publishedAt desc)[0...3]{
      _id,
      _type,
      title,
      slug,
      excerpt,
      featuredImage,
      category,
      tags,
      author,
      publishedAt,
      readingTime,
      isFeatured,
      metaDescription
    }`
  );
}

export async function getLatestProjects() {
  return client.fetch<Project[]>(
    `*[_type == "project" && isActive == true] | order(_createdAt desc)[0...4]{
      _id,
      _type,
      title,
      slug,
      description,
      image{
        asset->{
          _id,
          url
        }
      },
      category,
      isActive
    }`
  );
}
