import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  url?: string;
  image?: string;
  noindex?: boolean;
  keywords?: string[];
  author?: string;
  locale?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
}

const SITE_CONFIG = {
  name: 'Ayris Tech',
  url: 'https://ayris.tech',
  domain: 'ayris.tech',
  creator: '@ayristech',
  image: '/logo.png',
  defaultLocale: 'tr',
  keywords: [
    'Ayris Tech',
    'AI solutions',
    'artificial intelligence',
    'software development',
    'unity game development', 
    'mobile app development',
    'fullstack web development',
    'UI UX design',
    'blockchain solutions',
    'social media management',
    'steam game publishing',
    'technology company',
    'digital transformation',
    'yapay zeka çözümleri',
    'yazılım geliştirme',
    'oyun geliştirme',
    'mobil uygulama',
    'web tasarım',
    'teknoloji firması'
  ]
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'Ayris Tech - AI & Software Solutions | Yapay Zeka ve Yazılım Çözümleri',
    template: '%s | Ayris Tech'
  },
  description: 'Ayris Tech olarak AI çözümleri, yazılım geliştirme, oyun tasarımı ve dijital dönüşüm hizmetleri sunuyoruz. Unity oyun geliştirme, mobil uygulama, web tasarım ve blockchain teknolojileri.',
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: 'Ayris Tech Team' }],
  creator: SITE_CONFIG.creator,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Ayris Tech',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: ['en_US'],
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: 'Ayris Tech - AI & Software Solutions',
    description: 'Ayris Tech olarak AI çözümleri, yazılım geliştirme, oyun tasarımı ve dijital dönüşüm hizmetleri sunuyoruz.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ayris Tech - AI & Software Solutions',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE_CONFIG.creator,
    creator: SITE_CONFIG.creator,
    title: 'Ayris Tech - AI & Software Solutions',
    description: 'AI çözümleri, yazılım geliştirme, oyun tasarımı ve dijital dönüşüm hizmetleri.',
    images: ['/twitter-card.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      'tr-TR': SITE_CONFIG.url,
      'en-US': `${SITE_CONFIG.url}/en`,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // other: 'your-other-verification-code',
  },
};

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description, 
    url = SITE_CONFIG.url,
    image = '/og-image.png',
    noindex = false,
    keywords = [],
    author,
    locale = 'tr',
    type = 'website'
  } = config;

  const fullTitle = title.includes('Ayris Tech') ? title : `${title} | Ayris Tech`;
  const fullUrl = url.startsWith('http') ? url : `${SITE_CONFIG.url}${url}`;
  const fullImage = image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: [...SITE_CONFIG.keywords, ...keywords],
    authors: author ? [{ name: author }] : [{ name: 'Ayris Tech Team' }],
    robots: {
      index: !noindex,
      follow: !noindex,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE_CONFIG.creator,
      creator: SITE_CONFIG.creator,
      title: fullTitle,
      description,
      images: [fullImage],
    },
    alternates: {
      canonical: fullUrl,
      languages: {
        'tr-TR': fullUrl,
        'en-US': fullUrl.replace(SITE_CONFIG.url, `${SITE_CONFIG.url}/en`),
      },
    },
  };
}

// Sayfa kategorilerine göre özel SEO konfigürasyonları
export const pageCategories = {
  service: {
    keywords: ['hizmet', 'service', 'çözüm', 'solution', 'teknoloji', 'technology'],
    type: 'product' as const,
  },
  blog: {
    keywords: ['blog', 'makale', 'article', 'yazı', 'içerik', 'content'],
    type: 'article' as const,
  },
  project: {
    keywords: ['proje', 'project', 'portfolio', 'çalışma', 'work', 'case study'],
    type: 'article' as const,
  },
  legal: {
    keywords: ['yasal', 'legal', 'politika', 'policy', 'şartlar', 'terms'],
    noindex: true,
  },
} as const;

export function getServiceMetadata(serviceTitle: string, serviceDescription: string, locale: string = 'tr', serviceSlug?: string) {
  const slug = serviceSlug || serviceTitle.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  return generateMetadata({
    title: serviceTitle,
    description: serviceDescription,
    keywords: pageCategories.service.keywords,
    type: pageCategories.service.type,
    locale,
    url: `/services/${slug}`,
  });
}

export function getBlogMetadata(title: string, description: string, slug: string, locale: string = 'tr') {
  return generateMetadata({
    title,
    description,
    keywords: pageCategories.blog.keywords,
    type: pageCategories.blog.type,
    locale,
    url: `/blog/${slug}`,
  });
}

export function getProjectMetadata(title: string, description: string, slug: string, locale: string = 'tr') {
  return generateMetadata({
    title,
    description,
    keywords: pageCategories.project.keywords,
    type: pageCategories.project.type,
    locale,
    url: `/projects/${slug}`,
  });
}

// Structured Data (JSON-LD) helpers
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    sameAs: [
      // Add your social media links here
      // 'https://twitter.com/ayristech',
      // 'https://linkedin.com/company/ayristech',
      // 'https://github.com/ayristech',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Turkish', 'English'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TR',
    },
    founder: {
      '@type': 'Person',
      name: 'Ayris Tech Founder',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Software Development',
      'Game Development',
      'Mobile Applications',
      'Web Development',
      'Blockchain Technology',
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: 'AI çözümleri, yazılım geliştirme ve dijital dönüşüm hizmetleri',
    publisher: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    ],
    inLanguage: ['tr-TR', 'en-US'],
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_CONFIG.url}${service.url}/#service`,
    name: service.name,
    description: service.description,
    url: `${SITE_CONFIG.url}${service.url}`,
    image: service.image ? `${SITE_CONFIG.url}${service.image}` : undefined,
    provider: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Turkey',
    },
    serviceType: 'Technology Services',
    category: 'Software Development',
  };
}