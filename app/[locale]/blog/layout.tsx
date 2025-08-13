import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Blog | Teknoloji Yazıları",
  description: "AI, yazılım geliştirme, oyun tasarımı ve teknoloji trendleri hakkında güncel makaleler ve rehberler. Technology blog posts and insights.",
  keywords: ["blog", "teknoloji", "technology", "AI", "artificial intelligence", "software development", "game development", "web development"],
  url: "/blog",
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}