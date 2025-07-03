import { defineField, defineType } from "sanity";

export const contact = defineType({
  name: "contact",
  title: "İletişim Formu",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "İsim",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "E-posta",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "message",
      title: "Mesaj",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Durum",
      type: "string",
      options: {
        list: [
          { title: "Yeni", value: "new" },
          { title: "İnceleniyor", value: "in_progress" },
          { title: "Yanıtlandı", value: "responded" },
          { title: "Arşivlendi", value: "archived" },
        ],
      },
      initialValue: "new",
    }),
    defineField({
      name: "createdAt",
      title: "Oluşturulma Tarihi",
      type: "datetime",
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "email",
      status: "status",
    },
    prepare({ title, subtitle, status }) {
      return {
        title,
        subtitle: `${subtitle} - ${status}`,
      };
    },
  },
});
