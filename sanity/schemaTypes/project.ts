import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Projeler",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Başlık",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainTitle",
      title: "Ana Başlık",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Alt Başlık",
      type: "string",
    }),
    defineField({
      name: "shortDescription",
      title: "Kısa Açıklama",
      type: "localeString",
      description: "Proje listesinde gösterilecek kısa açıklama (max 120 karakter)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Detaylı Açıklama",
      type: "object",
      fields: [
        {
          name: "tr",
          title: "Türkçe Markdown Dosyası",
          type: "file",
          options: {
            accept: ".md,.txt"
          }
        },
        {
          name: "en", 
          title: "English Markdown File",
          type: "file",
          options: {
            accept: ".md,.txt"
          }
        }
      ],
      description: "Proje detay sayfası için .md dosyalarını yükleyin",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "AI Solutions", value: "ai-solutions" },
          { title: "Blockchain Solutions", value: "blockchain-solutions" },
          { title: "Fullstack Web Development", value: "fullstack-web-development" },
          { title: "Mobile App Development", value: "mobile-app-development" },
          { title: "UI/UX Design", value: "ui-ux-design" },
          { title: "Unity Game Development", value: "unity-game-development" },
          { title: "Social Media Management", value: "social-media-management" },
          { title: "Steam Game Publishing", value: "steam-game-publishing" },
        ],
        layout: "dropdown"
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Görsel",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Resim Galerisi",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      description: "Proje detay sayfası için resim galerisi",
    }),
    defineField({
      name: "stats",
      title: "İstatistikler",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "value",
              title: "Değer",
              type: "string",
            }),
            defineField({
              name: "label",
              title: "Etiket",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Sıralama",
      type: "number",
      description: "Görüntülenme sırası",
    }),
    defineField({
      name: "isActive",
      title: "Aktif",
      type: "boolean",
      description: "Proje aktif mi?",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "image",
    },
    prepare({ title, category, media }) {
      return {
        title,
        subtitle: category,
        media,
      };
    },
  },
});
