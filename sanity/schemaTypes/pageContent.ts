import { defineField, defineType } from "sanity";

export const pageContent = defineType({
  name: "pageContent",
  title: "Sayfa İçerikleri",
  type: "document",
  fields: [
    defineField({
      name: "pageId",
      title: "Sayfa ID",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "Benzersiz sayfa tanımlayıcısı (örn: home, about, services)",
    }),
    defineField({
      name: "language",
      title: "Dil",
      type: "string",
      options: {
        list: [
          { title: "Türkçe", value: "tr" },
          { title: "English", value: "en" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Sayfa Başlığı",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Sayfa Açıklaması",
      type: "text",
    }),
    defineField({
      name: "sections",
      title: "Sayfa Bölümleri",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "sectionId",
              title: "Bölüm ID",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Bölüm Başlığı",
              type: "string",
            }),
            defineField({
              name: "content",
              title: "İçerik",
              type: "array",
              of: [
                { type: "block" },
                {
                  type: "image",
                  options: { hotspot: true },
                },
              ],
            }),
            defineField({
              name: "order",
              title: "Sıralama",
              type: "number",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO Bilgileri",
      type: "object",
      fields: [
        defineField({
          name: "metaTitle",
          title: "Meta Başlık",
          type: "string",
        }),
        defineField({
          name: "metaDescription",
          title: "Meta Açıklama",
          type: "text",
        }),
        defineField({
          name: "keywords",
          title: "Anahtar Kelimeler",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "ogImage",
          title: "Sosyal Medya Görseli",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "pageId",
      language: "language",
    },
    prepare({ title, subtitle, language }) {
      return {
        title,
        subtitle: `${subtitle} (${language})`,
      };
    },
  },
});
