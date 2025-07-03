import { defineField, defineType } from "sanity";

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Hizmetler Sayfası",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Sayfa Başlığı",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Sayfa Açıklaması",
      type: "localeText",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Başlığı",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Alt Başlığı",
      type: "localeText",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Başlığı",
      type: "localeString",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Açıklaması",
      type: "localeText",
    }),
    defineField({
      name: "featuredServices",
      title: "Öne Çıkan Hizmetler",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "service" }],
        },
      ],
      description: "Sayfada öne çıkarılacak hizmetler",
    }),
    defineField({
      name: "ctaTitle",
      title: "CTA Başlığı",
      type: "localeString",
      description: "Call-to-action bölümü başlığı",
    }),
    defineField({
      name: "ctaDescription",
      title: "CTA Açıklaması",
      type: "localeText",
      description: "Call-to-action bölümü açıklaması",
    }),
    defineField({
      name: "ctaButtonText",
      title: "CTA Buton Metni",
      type: "localeString",
      description: "Call-to-action buton metni",
    }),
    defineField({
      name: "ctaButtonLink",
      title: "CTA Buton Linki",
      type: "string",
      description: "Call-to-action buton linki",
    }),
    defineField({
      name: "isActive",
      title: "Aktif",
      type: "boolean",
      description: "Sayfa aktif mi?",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title.tr",
      description: "description.tr",
    },
    prepare({ title, description }) {
      return {
        title: title || "Hizmetler Sayfası",
        subtitle: description || "Açıklama yok",
      };
    },
  },
});