import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Yazıları",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Başlık",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title.tr",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Özet",
      type: "localeString",
      description: "Kısa açıklama/özet",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "İçerik",
      type: "object",
      fields: [
        defineField({
          name: "tr",
          title: "Türkçe İçerik",
          type: "array",
          of: [
            {
              type: "block",
              styles: [
                { title: "Normal", value: "normal" },
                { title: "H1", value: "h1" },
                { title: "H2", value: "h2" },
                { title: "H3", value: "h3" },
                { title: "H4", value: "h4" },
                { title: "Quote", value: "blockquote" },
              ],
              lists: [
                { title: "Bullet", value: "bullet" },
                { title: "Number", value: "number" },
              ],
              marks: {
                decorators: [
                  { title: "Strong", value: "strong" },
                  { title: "Emphasis", value: "em" },
                  { title: "Code", value: "code" },
                ],
                annotations: [
                  {
                    name: "link",
                    type: "object",
                    title: "Link",
                    fields: [
                      {
                        name: "href",
                        type: "url",
                        title: "URL",
                      },
                    ],
                  },
                ],
              },
            },
            {
              type: "image",
              options: { hotspot: true },
            },
          ],
        }),
        defineField({
          name: "en",
          title: "English Content",
          type: "array",
          of: [
            {
              type: "block",
              styles: [
                { title: "Normal", value: "normal" },
                { title: "H1", value: "h1" },
                { title: "H2", value: "h2" },
                { title: "H3", value: "h3" },
                { title: "H4", value: "h4" },
                { title: "Quote", value: "blockquote" },
              ],
              lists: [
                { title: "Bullet", value: "bullet" },
                { title: "Number", value: "number" },
              ],
              marks: {
                decorators: [
                  { title: "Strong", value: "strong" },
                  { title: "Emphasis", value: "em" },
                  { title: "Code", value: "code" },
                ],
                annotations: [
                  {
                    name: "link",
                    type: "object",
                    title: "Link",
                    fields: [
                      {
                        name: "href",
                        type: "url",
                        title: "URL",
                      },
                    ],
                  },
                ],
              },
            },
            {
              type: "image",
              options: { hotspot: true },
            },
          ],
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featuredImage",
      title: "Öne Çıkan Görsel",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Teknoloji", value: "technology" },
          { title: "AI & Machine Learning", value: "ai-ml" },
          { title: "Blockchain", value: "blockchain" },
          { title: "Web Geliştirme", value: "web-development" },
          { title: "Mobil Geliştirme", value: "mobile-development" },
          { title: "UI/UX Tasarım", value: "ui-ux" },
          { title: "Oyun Geliştirme", value: "game-development" },
          { title: "Dijital Pazarlama", value: "digital-marketing" },
          { title: "Genel", value: "general" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Etiketler",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "author",
      title: "Yazar",
      type: "string",
      initialValue: "AyrisTech Team",
    }),
    defineField({
      name: "publishedAt",
      title: "Yayın Tarihi",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "readingTime",
      title: "Okuma Süresi (dakika)",
      type: "number",
      description: "Tahmini okuma süresi",
    }),
    defineField({
      name: "isPublished",
      title: "Yayında",
      type: "boolean",
      description: "Blog yazısı yayında mı?",
      initialValue: false,
    }),
    defineField({
      name: "isFeatured",
      title: "Öne Çıkan",
      type: "boolean",
      description: "Bu yazı öne çıkan yazı mı?",
      initialValue: false,
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Açıklama",
      type: "localeString",
      description: "SEO için meta açıklama",
    }),
  ],
  preview: {
    select: {
      title: "title.tr",
      media: "featuredImage",
      category: "category",
      isPublished: "isPublished",
    },
    prepare({ title, media, category, isPublished }) {
      return {
        title: title || "Untitled",
        subtitle: `${category || "No category"} ${isPublished ? "• Published" : "• Draft"}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Yayın Tarihi (Yeni)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Yayın Tarihi (Eski)",
      name: "publishedAtAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
    {
      title: "Başlık A-Z",
      name: "titleAsc",
      by: [{ field: "title.tr", direction: "asc" }],
    },
  ],
});
