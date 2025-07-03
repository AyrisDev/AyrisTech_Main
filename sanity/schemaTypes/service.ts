import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Hizmetler",
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
      name: "icon",
      title: "İkon",
      type: "string",
      description: "Lucide ikon adı (örn: Code, Palette, Smartphone)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
      description: "Detay sayfası linki",
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
      description: "Hizmet aktif mi?",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title.tr",
      description: "description.tr",
      icon: "icon",
    },
    prepare({ title, description, icon }) {
      return {
        title: title || "Başlık yok",
        subtitle: description || "Açıklama yok",
      };
    },
  },
});
