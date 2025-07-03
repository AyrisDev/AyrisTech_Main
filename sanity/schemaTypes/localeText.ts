import { defineType } from "sanity";

export const localeText = defineType({
  name: "localeText",
  title: "Locale Text",
  type: "object",
  fields: [
    {
      title: "Türkçe",
      name: "tr",
      type: "text",
    },
    {
      title: "English",
      name: "en",
      type: "text",
    },
  ],
});