import { notFound } from 'next/navigation';
import { getBlogPostBySlug } from '@/sanity/lib/client';
import BlogPost from '@/components/Blog/BlogPost';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPost post={post} />;
}

export async function generateStaticParams() {
  const { client } = await import('@/sanity/lib/client');
  
  const posts = await client.fetch(
    `*[_type == "blogPost" && defined(slug.current) && isPublished == true] { "slug": slug.current }`
  );

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found - AyrisTech',
    };
  }

  return {
    title: `${post.title?.tr || post.title?.en || 'Blog Post'} - AyrisTech`,
    description: post.metaDescription?.tr || post.excerpt?.tr || 'AyrisTech blog yazısı',
  };
}