'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Tag, Search, Filter, ArrowRight } from 'lucide-react';
import { urlFor } from '@/sanity/lib/client';
import { BlogPost } from '@/sanity/types';
import { getBlogPosts, getBlogPostsByCategory } from '@/sanity/lib/client';

interface BlogListProps {
  language?: 'tr' | 'en';
}

export default function BlogList({ language = 'tr' }: BlogListProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const content = {
    tr: {
      title: 'Blog',
      subtitle: 'Teknoloji ve inovasyonun son gelişmeleri',
      description: 'Yazılım geliştirme, AI, blockchain ve daha fazlası hakkında güncel makalelerimizi keşfedin.',
      searchPlaceholder: 'Blog yazılarında ara...',
      filterByCategory: 'Kategoriye göre filtrele',
      allCategories: 'Tüm Kategoriler',
      readMore: 'Devamını Oku',
      minutesRead: 'dakika okuma',
      noPostsFound: 'Aradığınız kriterlere uygun blog yazısı bulunamadı.',
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
      title: 'Blog',
      subtitle: 'Latest developments in technology and innovation',
      description: 'Discover our latest articles about software development, AI, blockchain and more.',
      searchPlaceholder: 'Search blog posts...',
      filterByCategory: 'Filter by category',
      allCategories: 'All Categories',
      readMore: 'Read More',
      minutesRead: 'min read',
      noPostsFound: 'No blog posts found matching your criteria.',
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

  const { title, subtitle, description, searchPlaceholder, filterByCategory, allCategories, readMore, minutesRead, noPostsFound, categories } = content[language];

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const fetchedPosts = await getBlogPosts();
        setPosts(fetchedPosts);
        setFilteredPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    let filtered = posts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => {
        const titleMatch = post.title?.[language]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.title?.tr?.toLowerCase().includes(searchTerm.toLowerCase());
        const excerptMatch = post.excerpt?.[language]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.excerpt?.tr?.toLowerCase().includes(searchTerm.toLowerCase());
        return titleMatch || excerptMatch;
      });
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  }, [posts, searchTerm, selectedCategory, language]);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 mt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">{subtitle}</p>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">{description}</p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[200px]"
                >
                  <option value="all">{allCategories}</option>
                  {Object.entries(categories).map(([key, name]) => (
                    <option key={key} value={key}>{name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{noPostsFound}</h3>
                <p className="text-gray-600">Arama kriterlerinizi değiştirmeyi deneyin.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post._id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {/* Featured Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={urlFor(post.featuredImage).url()}
                        alt={post.title?.[language] || post.title?.tr || ''}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {post.isFeatured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                            {language === 'tr' ? 'Öne Çıkan' : 'Featured'}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category and Date */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <Tag className="w-4 h-4 text-blue-600 mr-1" />
                          <span className="text-sm text-blue-600 font-medium">
                            {getCategoryName(post.category)}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(post.publishedAt)}
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title?.[language] || post.title?.tr}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt?.[language] || post.excerpt?.tr}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readingTime} {minutesRead}
                        </div>
                        
                        <Link
                          href={`/blog/${post.slug?.current}`}
                          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                        >
                          {readMore}
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}