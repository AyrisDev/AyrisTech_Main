import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Projelerimiz | Our Projects",
  description: "Ayris Tech olarak gerçekleştirdiğimiz başarılı AI, yazılım geliştirme, oyun ve mobil uygulama projelerimizi keşfedin. Successful technology projects.",
  keywords: ["projeler", "projects", "portfolio", "AI projects", "game development", "web applications", "mobile apps"],
  url: "/projects",
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}