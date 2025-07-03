'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Tag, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/client';
import { BlogPost as BlogPostType } from '@/sanity/types';

interface BlogPostProps {
  post: BlogPostType;
  language?: 'tr' | 'en';
}

export default function BlogPost({ post, language = 'tr' }: BlogPostProps) {
  const content = {
    tr: {
      backToBlog: 'Blog\'a Geri Dön',
      author: 'Yazar',
      publishedOn: 'Yayınlanma Tarihi',
      readingTime: 'dakika okuma',
      shareArticle: 'Makaleyi Paylaş',
      tags: 'Etiketler',
      relatedPosts: 'İlgili Yazılar',
      categories: {
        technology: 'Teknoloji',
        'ai-ml': 'AI & Machine Learning',
        blockchain: 'Blockchain',
        'web-development': 'Web Geliştirme',
        'mobile-development': 'Mobil Geliştirme',
        'ui-ux': 'UI/UX Tasarım',
        'game-development': 'Oyun Geliştirme',
        'digital-marketing': 'Dijital Pazarlama',
        general: 'Genel'
      }
    },
    en: {
      backToBlog: 'Back to Blog',
      author: 'Author',
      publishedOn: 'Published on',
      readingTime: 'min read',
      shareArticle: 'Share Article',
      tags: 'Tags',
      relatedPosts: 'Related Posts',
      categories: {
        technology: 'Technology',
        'ai-ml': 'AI & Machine Learning',
        blockchain: 'Blockchain',
        'web-development': 'Web Development',
        'mobile-development': 'Mobile Development',
        'ui-ux': 'UI/UX Design',
        'game-development': 'Game Development',
        'digital-marketing': 'Digital Marketing',
        general: 'General'
      }
    }
  };

  const { backToBlog, author, publishedOn, readingTime, shareArticle, tags, categories } = content[language];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryName = (categoryKey: string) => {
    return categories[categoryKey as keyof typeof categories] || categoryKey;
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title?.[language] || post.title?.tr || '';

  const portableTextComponents = {
    types: {
      image: ({ value }: any) => (
        <div className="my-8">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || ''}
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          {value.caption && (
            <p className="text-center text-sm text-gray-600 mt-2 italic">{value.caption}</p>
          )}
        </div>
      ),
    },
    marks: {
      link: ({ children, value }: any) => (
        <a
          href={value.href}
          className="text-blue-600 hover:text-blue-800 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
    block: {
      h1: ({ children }: any) => <h1 className="text-3xl font-bold mb-6 mt-8">{children}</h1>,
      h2: ({ children }: any) => <h2 className="text-2xl font-bold mb-4 mt-6">{children}</h2>,
      h3: ({ children }: any) => <h3 className="text-xl font-bold mb-3 mt-5">{children}</h3>,
      h4: ({ children }: any) => <h4 className="text-lg font-bold mb-2 mt-4">{children}</h4>,
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-700 bg-gray-50 py-4 rounded-r-lg">
          {children}
        </blockquote>
      ),
      normal: ({ children }: any) => <p className="mb-4 leading-relaxed">{children}</p>,
    },
    list: {
      bullet: ({ children }: any) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
      number: ({ children }: any) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }: any) => <li className="ml-4">{children}</li>,
      number: ({ children }: any) => <li className="ml-4">{children}</li>,
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog */}
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {backToBlog}
            </Link>

            {/* Category */}
            <div className="flex items-center mb-4">
              <Tag className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-600 font-medium">
                {getCategoryName(post.category)}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title?.[language] || post.title?.tr}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>{author}: {post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{publishedOn} {formatDate(post.publishedAt)}</span>
              </div>
              {post.readingTime && (
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{post.readingTime} {readingTime}</span>
                </div>
              )}
            </div>

            {/* Featured Image */}
            <div className="relative h-96 md:h-[500px] mb-8 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={urlFor(post.featuredImage).url()}
                alt={post.title?.[language] || post.title?.tr || ''}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Excerpt */}
            {post.excerpt?.[language] && (
              <div className="text-xl text-gray-700 leading-relaxed mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                {post.excerpt[language]}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                {post.content?.[language] && (
                  <PortableText
                    value={post.content[language]}
                    components={portableTextComponents}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tags and Share */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{tags}</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{shareArticle}</h3>
                  <div className="flex gap-3">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <button
                      onClick={() => navigator.share?.({ title: shareTitle, url: shareUrl })}
                      className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'tr' ? 'Daha Fazla İçerik İçin Takipte Kalın' : 'Stay Tuned for More Content'}
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              {language === 'tr' 
                ? 'Teknoloji ve inovasyonun son gelişmeleri hakkında güncel kalın.'
                : 'Stay up to date with the latest developments in technology and innovation.'}
            </p>
            <Link
              href="/blog"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {language === 'tr' ? 'Tüm Blog Yazıları' : 'All Blog Posts'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}