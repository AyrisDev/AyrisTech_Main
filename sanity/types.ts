import { PortableTextBlock } from "@portabletext/types";

export interface Service {
  _id: string;
  _type: "service";
  title: LocaleString;
  description: LocaleString;
  icon: string;
  link?: string;
  order?: number;
  isActive: boolean;
}

export interface UniqueApproach {
  _id: string;
  _type: "uniqueApproach";
  title: LocaleString;
  description: LocaleString;
  mainImage: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  approaches: Array<{
    icon: string;
    title: LocaleString;
    description: LocaleString;
  }>;
  isActive: boolean;
}

export interface Project {
  _id: string;
  _type: "project";
  title: string;
  slug: {
    current: string;
    _type: "slug";
  };
  mainTitle: LocaleString;
  subtitle?: string;
  shortDescription?: LocaleString;
  description: {
    tr?: {
      _type: "file";
      asset: {
        _ref: string;
        _type: "reference";
        url?: string;
      };
    };
    en?: {
      _type: "file";
      asset: {
        _ref: string;
        _type: "reference"; 
        url?: string;
      };
    };
  };
  category: string;
  image: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  gallery?: Array<{
    _type: "image";
    asset: {
      _id: string;
      url: string;
    };
  }>;
  stats?: Array<{
    value: string;
    label: string;
  }>;
  order?: number;
  isActive: boolean;
}

export interface Contact {
  _id: string;
  _type: "contact";
  name: string;
  email: string;
  message: string;
  status: "new" | "in_progress" | "responded" | "archived";
  createdAt: string;
}

export interface PageSection {
  sectionId: string;
  title?: string;
  content: PortableTextBlock[];
  order?: number;
}

export interface SEO {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  ogImage?: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
}

export interface PageContent {
  _id: string;
  _type: "pageContent";
  pageId: string;
  language: "tr" | "en";
  title: string;
  description?: string;
  sections?: PageSection[];
  seo?: SEO;
}

export interface LocaleString {
  en?: string;
  tr?: string;
}

export interface MenuItem {
  label: LocaleString;
  url: string;
  openInNewTab?: boolean;
  order?: number;
  isActive?: boolean;
  submenu?: Array<{
    label: LocaleString;
    url: string;
    openInNewTab?: boolean;
    order?: number;
    isActive?: boolean;
  }>;
}

export interface Menu {
  _id: string;
  _type: "menu";
  title: LocaleString;
  identifier: string;
  items: MenuItem[];
}

export interface LocaleText {
  en?: string;
  tr?: string;
}

export interface BuildScaleBanner {
  _id: string;
  _type: "buildScaleBanner";
  title: LocaleString;
  subtitle: LocaleString;
  description: LocaleText;
  buttonText: LocaleString;
  buttonLink: string;
  backgroundImage: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  isActive: boolean;
}

export interface BlogPost {
  _id: string;
  _type: "blogPost";
  title: LocaleString;
  slug: {
    current: string;
    _type: "slug";
  };
  excerpt: LocaleText;
  content: {
    tr: any[];
    en: any[];
  };
  featuredImage: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  category: string;
  tags?: string[];
  author: string;
  publishedAt: string;
  readingTime?: number;
  isPublished: boolean;
  isFeatured: boolean;
  metaDescription?: LocaleText;
}
