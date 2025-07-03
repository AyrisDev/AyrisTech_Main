import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/sanity/lib/client';
import ProjectDetail from '@/components/ProjectDetail/ProjectDetail';

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

export async function generateStaticParams() {
  const { client } = await import('@/sanity/lib/client');
  
  const projects = await client.fetch(
    `*[_type == "project" && defined(slug.current)] { "slug": slug.current }`
  );

  return projects.map((project: { slug: string }) => ({
    slug: project.slug,
  }));
}