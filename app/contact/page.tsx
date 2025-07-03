import Contact from '@/components/Contact/Contact';
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "İletişim | Contact Us",
  description: "Projeleriniz için bizimle iletişime geçin. AI çözümleri, yazılım geliştirme ve teknoloji danışmanlığı için hemen ulaşın. Get in touch for your technology needs.",
  keywords: ["iletişim", "contact", "proje", "teklif", "danışmanlık", "consultation", "ayris tech"],
  url: "/contact",
});

export default function ContactPage() {
  return <Contact />;
}