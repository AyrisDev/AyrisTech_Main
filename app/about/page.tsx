import About from '@/components/About/About';
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Hakkımızda | About Us",
  description: "Ayris Tech olarak AI çözümleri ve yazılım geliştirme alanında uzman ekibimizle teknolojinin geleceğini şekillendiriyoruz. Learn about our story and mission.",
  keywords: ["hakkımızda", "about", "ayris tech", "team", "mission", "vision", "technology company"],
  url: "/about",
});

export default function AboutPage() {
  return <About />;
}