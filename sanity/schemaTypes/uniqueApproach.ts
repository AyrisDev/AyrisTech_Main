import { defineField, defineType } from "sanity";

export const uniqueApproach = defineType({
  name: "uniqueApproach",
  title: "Unique Approach",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Başlık",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Açıklama",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Ana Görsel",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "approaches",
      title: "Yaklaşımlar",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "İkon",
              type: "string",
              description: "Lucide ikon adı (örn: DollarSign, Globe, Users)",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Başlık",
              type: "localeString",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Açıklama",
              type: "localeString",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isActive",
      title: "Aktif",
      type: "boolean",
      description: "Bölüm aktif mi?",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title.tr",
    },
    prepare({ title }) {
      return {
        title: title || "Unique Approach",
      };
    },
  },
});