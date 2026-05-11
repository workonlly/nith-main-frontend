'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  slug: string;
  downloadUrl?: string;
}

const initialNewsData: NewsItem[] = [
  {
    id: 1,
    title: 'NITH  Association Announces Annual Meet 2025',
    description:
      'The NIT Hamirpur  Association is pleased to announce the Annual  Meet scheduled for March 2025. All registered  are cordially invited to participate in this grand event celebrating our shared legacy.',
    image: '/news/-meet.jpg',
    date: '2025-01-15',
    slug: 'annual-meet-2025',
    downloadUrl: '/downloads/annual-meet-2025.pdf',
  },
  {
    id: 2,
    title: 'Distinguished  Award Nominations Open',
    description:
      'Nominations are now open for the Distinguished  Award 2025. The award recognizes outstanding contributions by NITH  in their respective fields. Submit your nominations before the deadline.',
    image: '/news/award.jpg',
    date: '2025-01-12',
    slug: 'distinguished--award-2025',
    downloadUrl: '/downloads/distinguished--award-2025.pdf',
  },
];

const ITEMS_PER_PAGE = 10;

const NewsSkeleton = () => (
  <div className="animate-pulse space-y-6">
    {[1, 2, 3, 4, 5].map((i) => (
      <div key={i} className="flex gap-5 p-5 bg-white rounded-xl">
        <div className="w-32 h-24 bg-gray-200 rounded-lg flex-shrink-0" />
        <div className="flex-1 space-y-3">
          <div className="h-5 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
          <div className="h-3 bg-gray-200 rounded w-24" />
        </div>
      </div>
    ))}
  </div>
);

export default function CPDARules() {
  const [news, setNews] = useState<NewsItem[]>(initialNewsData);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setNews(initialNewsData);
      } catch (err) {
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredNews = news;
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);

  const paginatedNews = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredNews.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredNews, currentPage]);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (currentPage <= 3) {
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
              <span className="text-[#800000] font-medium">CPDA Rules</span>
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
                CPDA Rules
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                CUMULATIVE PROFESSIONAL DEVELOPMENT ALLOWANCE (CPDA) RULES
                W.E.F. 1st APRIL, 2021 to 31st MARCH, 2024
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="w-full">
              <div className="w-full bg-white rounded-t-xl border border-gray-200 overflow-hidden">
                {/* Header Grid */}
                <div className="grid grid-cols-[80px_1fr_140px] gap-4 bg-gray-50 border-b border-gray-200 p-4 text-sm font-semibold text-gray-700">
                  <div className="text-center text-gray-500">S.I no</div>
                  <div className="uppercase tracking-wider text-xs font-bold text-[#631012]">
                    Particulars
                  </div>
                  <div className="text-center uppercase tracking-wider text-xs font-bold text-[#631012]">
                    Downloads
                  </div>
                </div>
                {/* Example Data Row (to show alignment) */}
                <div className="grid grid-cols-[80px_1fr_140px] gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 items-center">
                  <div className="text-center font-mono text-gray-400">01</div>
                  <div className="text-gray-600 text-sm">
                    Registration form for the 2025 alumni meet.
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="text-[#631012] hover:underline text-sm font-medium">
                      Pdf
                    </button>
                    <button className="text-[#631012] hover:underline text-sm font-medium">
                      Word
                    </button>
                  </div>
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
