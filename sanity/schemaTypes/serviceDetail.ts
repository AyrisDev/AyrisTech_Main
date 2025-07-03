import { defineField, defineType } from "sanity";

export const serviceDetail = defineType({
  name: "serviceDetail",
  title: "Hizmet Detayları",
  type: "document",
  fields: [
    defineField({
      name: "service",
      title: "Hizmet",
      type: "reference",
      to: [{ type: "service" }],
      validation: (Rule) => Rule.required(),
      description: "Bu detay sayfasının ait olduğu hizmet",
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "service.title.tr",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero Görseli",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Başlığı",
      type: "localeString",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Alt Başlığı",
      type: "localeText",
    }),
    defineField({
      name: "overview",
      title: "Genel Bakış",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Başlık",
          type: "localeString",
        }),
        defineField({
          name: "description",
          title: "Açıklama",
          type: "localeText",
        }),
        defineField({
          name: "features",
          title: "Özellikler",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Özellik Başlığı",
                  type: "localeString",
                }),
                defineField({
                  name: "description",
                  title: "Özellik Açıklaması",
                  type: "localeText",
                }),
                defineField({
                  name: "icon",
                  title: "İkon",
                  type: "string",
                  description: "Lucide ikon adı",
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "processSteps",
      title: "Süreç Adımları",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Bölüm Başlığı",
          type: "localeString",
        }),
        defineField({
          name: "subtitle",
          title: "Alt Başlık",
          type: "localeText",
        }),
        defineField({
          name: "steps",
          title: "Adımlar",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "stepNumber",
                  title: "Adım Numarası",
                  type: "number",
                }),
                defineField({
                  name: "title",
                  title: "Adım Başlığı",
                  type: "localeString",
                }),
                defineField({
                  name: "description",
                  title: "Adım Açıklaması",
                  type: "localeText",
                }),
                defineField({
                  name: "icon",
                  title: "İkon",
                  type: "string",
                  description: "Lucide ikon adı",
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "technologies",
      title: "Teknolojiler",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Bölüm Başlığı",
          type: "localeString",
        }),
        defineField({
          name: "subtitle",
          title: "Alt Başlık",
          type: "localeText",
        }),
        defineField({
          name: "techStack",
          title: "Teknoloji Yığını",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "name",
                  title: "Teknoloji Adı",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Açıklama",
                  type: "localeText",
                }),
                defineField({
                  name: "logo",
                  title: "Logo",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                }),
                defineField({
                  name: "category",
                  title: "Kategori",
                  type: "string",
                  options: {
                    list: [
                      { title: "Frontend", value: "frontend" },
                      { title: "Backend", value: "backend" },
                      { title: "Database", value: "database" },
                      { title: "DevOps", value: "devops" },
                      { title: "Mobile", value: "mobile" },
                      { title: "AI/ML", value: "ai-ml" },
                      { title: "Other", value: "other" },
                    ],
                  },
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "benefits",
      title: "Faydalar",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Bölüm Başlığı",
          type: "localeString",
        }),
        defineField({
          name: "subtitle",
          title: "Alt Başlık",
          type: "localeText",
        }),
        defineField({
          name: "benefitsList",
          title: "Fayda Listesi",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Fayda Başlığı",
                  type: "localeString",
                }),
                defineField({
                  name: "description",
                  title: "Fayda Açıklaması",
                  type: "localeText",
                }),
                defineField({
                  name: "icon",
                  title: "İkon",
                  type: "string",
                  description: "Lucide ikon adı",
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "pricing",
      title: "Fiyatlandırma",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Bölüm Başlığı",
          type: "localeString",
        }),
        defineField({
          name: "subtitle",
          title: "Alt Başlık",
          type: "localeText",
        }),
        defineField({
          name: "pricingPlans",
          title: "Fiyat Planları",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "name",
                  title: "Plan Adı",
                  type: "localeString",
                }),
                defineField({
                  name: "description",
                  title: "Plan Açıklaması",
                  type: "localeText",
                }),
                defineField({
                  name: "price",
                  title: "Fiyat",
                  type: "string",
                  description: "Örn: $999 veya Teklif Al",
                }),
                defineField({
                  name: "currency",
                  title: "Para Birimi",
                  type: "string",
                  options: {
                    list: [
                      { title: "USD", value: "USD" },
                      { title: "TRY", value: "TRY" },
                      { title: "EUR", value: "EUR" },
                    ],
                  },
                }),
                defineField({
                  name: "features",
                  title: "Plan Özellikleri",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        defineField({
                          name: "feature",
                          title: "Özellik",
                          type: "localeString",
                        }),
                        defineField({
                          name: "included",
                          title: "Dahil mi?",
                          type: "boolean",
                          initialValue: true,
                        }),
                      ],
                    },
                  ],
                }),
                defineField({
                  name: "isPopular",
                  title: "Popüler Plan",
                  type: "boolean",
                  description: "Bu plan öne çıkarılsın mı?",
                  initialValue: false,
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "faq",
      title: "Sık Sorulan Sorular",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Bölüm Başlığı",
          type: "localeString",
        }),
        defineField({
          name: "questions",
          title: "Sorular",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "question",
                  title: "Soru",
                  type: "localeString",
                }),
                defineField({
                  name: "answer",
                  title: "Cevap",
                  type: "localeText",
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "cta",
      title: "Call-to-Action",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "CTA Başlığı",
          type: "localeString",
        }),
        defineField({
          name: "description",
          title: "CTA Açıklaması",
          type: "localeText",
        }),
        defineField({
          name: "primaryButtonText",
          title: "Ana Buton Metni",
          type: "localeString",
        }),
        defineField({
          name: "primaryButtonLink",
          title: "Ana Buton Linki",
          type: "string",
        }),
        defineField({
          name: "secondaryButtonText",
          title: "İkinci Buton Metni",
          type: "localeString",
        }),
        defineField({
          name: "secondaryButtonLink",
          title: "İkinci Buton Linki",
          type: "string",
        }),
      ],
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
      name: "publishedAt",
      title: "Yayın Tarihi",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "isActive",
      title: "Aktif",
      type: "boolean",
      description: "Sayfa aktif mi?",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "Yayın Tarihi, Yeni",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Yayın Tarihi, Eski",
      name: "publishedAtAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "service.title.tr",
      subtitle: "heroTitle.tr",
      media: "heroImage",
      slug: "slug.current",
    },
    prepare({ title, subtitle, media, slug }) {
      return {
        title: title || "Hizmet Detayı",
        subtitle: subtitle || slug || "Alt başlık yok",
        media,
      };
    },
  },
});