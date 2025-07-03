export const categoryMapping = {
  "ai-solutions": {
    tr: "AI Çözümleri",
    en: "AI Solutions"
  },
  "blockchain-solutions": {
    tr: "Blockchain Çözümleri", 
    en: "Blockchain Solutions"
  },
  "fullstack-web-development": {
    tr: "Web Development",
    en: "Web Development"
  },
  "mobile-app-development": {
    tr: "Mobil Uygulama Geliştirme",
    en: "Mobile App Development"
  },
  "ui-ux-design": {
    tr: "UI/UX Dizayn",
    en: "UI/UX Design"
  },
  "unity-game-development": {
    tr: "Unity Oyun Geliştirme", 
    en: "Unity Game Development"
  },
  "social-media-management": {
    tr: "Sosyal Medya Yönetimi",
    en: "Social Media Management"
  },
  "steam-game-publishing": {
    tr: "Steam Game Publishing",
    en: "Steam Game Publishing"
  }
};

export function getCategoryLabel(categorySlug: string, locale: string = "tr"): string {
  const mapping = categoryMapping[categorySlug as keyof typeof categoryMapping];
  return mapping ? mapping[locale as keyof typeof mapping] : categorySlug;
}

export function getCategorySlugFromLabel(label: string, locale: string = "tr"): string | null {
  for (const [slug, labels] of Object.entries(categoryMapping)) {
    if (labels[locale as keyof typeof labels] === label) {
      return slug;
    }
  }
  return null;
}