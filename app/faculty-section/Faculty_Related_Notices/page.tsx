'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  slug: string;
}

interface ArchiveMonth {
  month: string;
  year: number;
  count: number;
  key: string;
}

const initialNewsData: NewsItem[] = [
  {
    id: 1,
    title: 'NITH Faculty Association Announces Annual Meet 2025',
    description:
      'The NIT Hamirpur Faculty Association is pleased to announce the Annual Faculty Meet scheduled for March 2025. All registered Faculty are cordially invited to participate in this grand event celebrating our shared legacy.',
    image: '/news/Faculty-meet.jpg',
    date: '2025-01-15',
    category: 'Events',
    slug: 'annual-meet-2025',
  },
  {
    id: 2,
    title: 'Distinguished Faculty Award Nominations Open',
    description:
      'Nominations are now open for the Distinguished Faculty Award 2025. The award recognizes outstanding contributions by NITH Faculty in their respective fields. Submit your nominations before the deadline.',
    image: '/news/award.jpg',
    date: '2025-01-12',
    category: 'Awards',
    slug: 'distinguished-Faculty-award-2025',
  },
];

const ITEMS_PER_PAGE = 10;

const NewsSkeleton = () => (
  <div className="animate-pulse space-y-6">
    {[1, 2, 3, 4, 5].map((i) => (
      <div key={i} className="flex gap-5 p-5 bg-white rounded-xl">
        <div className="w-32 h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
        <div className="flex-1 space-y-3">
          <div className="h-5 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="h-3 bg-gray-200 rounded w-24"></div>
        </div>
      </div>
    ))}
  </div>
);

const ArchiveSkeleton = () => (
  <div className="animate-pulse space-y-3">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div key={i} className="h-8 bg-gray-200 rounded"></div>
    ))}
  </div>
);

export default function FacultyNewsroom() {
  const [news, setNews] = useState<NewsItem[]>(initialNewsData);
  const [archives, setArchives] = useState<ArchiveMonth[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArchive, setSelectedArchive] = useState<string | null>(null);

  const generateArchives = (newsData: NewsItem[]): ArchiveMonth[] => {
    const archiveMap = new Map<string, ArchiveMonth>();
    newsData.forEach((item) => {
      const date = new Date(item.date);
      const month = date.toLocaleDateString('en-US', { month: 'long' });
      const year = date.getFullYear();
      const key = `${year}-${date.getMonth()}`;
      if (archiveMap.has(key)) {
        archiveMap.get(key)!.count++;
      } else {
        archiveMap.set(key, { month, year, count: 1, key });
      }
    });
    return Array.from(archiveMap.values()).sort((a, b) => {
      if (a.year !== b.year) return b.year - a.year;
      return (
        new Date(`${b.month} 1, ${b.year}`).getMonth() -
        new Date(`${a.month} 1, ${a.year}`).getMonth()
      );
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setNews(initialNewsData);
        setArchives(generateArchives(initialNewsData));
      } catch (err) {
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setArchives(generateArchives(news));
  }, [news]);

  const filteredNews = useMemo(() => {
    if (!selectedArchive) return news;
    return news.filter((item) => {
      const date = new Date(item.date);
      const key = `${date.getFullYear()}-${date.getMonth()}`;
      return key === selectedArchive;
    });
  }, [news, selectedArchive]);

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const paginatedNews = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredNews.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredNews, currentPage]);

  const handleArchiveClick = (key: string | null) => {
    setSelectedArchive(key);
    setCurrentPage(1);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          '...',
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages
        );
      }
    }
    return pages;
  };

  return (
    <>
      <Header31 />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 px-6 md:px-12 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link
                href="/"
                className="hover:text-[#800000] transition-colors duration-200"
              >
                Home
              </Link>
              <span>›</span>
              <span className="text-gray-400">Faculty</span>
              <span>›</span>
              <span className="text-[#800000] font-medium">Notices</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#631012] via-[#7a1a1d] to-[#4a0c0e] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Faculty Notices
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                Latest news, announcements, and updates from the NITH Faculty
                Notices.
              </p>
            </motion.div>
          </div>
        </section>
        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="w-full">
              <div className="w-full bg-white rounded-t-xl border border-gray-200 overflow-hidden">
                {/* Header Grid */}
                <div className="grid grid-cols-[80px_1fr_140px_140px] gap-4 bg-gray-50 border-b border-gray-200 p-4 text-sm font-semibold text-gray-700">
                  <div className="text-center text-gray-500">S.I no</div>
                  <div className="uppercase tracking-wider text-xs font-bold text-[#631012]">
                    Particulars
                  </div>
                  <div className="text-center uppercase tracking-wider text-xs font-bold text-[#631012]">
                    Remarks
                  </div>
                  <div className="text-center uppercase tracking-wider text-xs font-bold text-[#631012]">
                    date of Upload
                  </div>
                </div>
                {/* Example Data Row (to show alignment) */}
                <div className="grid grid-cols-[80px_1fr_140px_140px] gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 items-center">
                  <div className="text-center font-mono text-gray-400">01</div>
                  <div className="text-gray-600 text-sm">
                    Registration form for the 2025 alumni meet.
                  </div>
                  <div className="text-gray-600 text-sm">
                    Registration form for the 2025 alumni meet.
                  </div>
                  <div className="text-gray-600 text-sm">dates</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
