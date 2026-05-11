'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'; // Added Image component usage for better performance
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface DownloadsItem {
  id: number;
  title: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  image: string;
  date: string;
  slug: string;
  downloadUrl?: string;
}

const initialDownloadsData: DownloadsItem[] = [
  {
    id: 1,
    title: {
      en: 'NITH Downloads Association Announces Annual Meet 2025',
      hi: 'एनआईटीएच डाउनलोड्स संघ ने वार्षिक बैठक 2025 की घोषणा की',
    },
    description: {
      en: 'The NIT Hamirpur Downloads Association is pleased to announce the Annual Downloads Meet scheduled for March 2025. All registered Downloads are cordially invited to participate in this grand event celebrating our shared legacy.',
      hi: 'एनआईटी हमीरपुर डाउनलोड्स संघ मार्च 2025 में निर्धारित वार्षिक डाउनलोड्स बैठक की घोषणा करते हुए प्रसन्नता महसूस कर रहा है। सभी पंजीकृत डाउनलोड्स को इस भव्य आयोजन में भाग लेने के लिए आमंत्रित किया जाता है।',
    },
    image: '/Downloads/Downloads-meet.jpg',
    date: '2025-01-15',
    slug: 'annual-meet-2025',
    downloadUrl: '/downloads/annual-meet-2025.pdf',
  },
  {
    id: 2,
    title: {
      en: 'Distinguished Downloads Award Nominations Open',
      hi: 'विशिष्ट डाउनलोड्स पुरस्कार नामांकन खुले हैं',
    },
    description: {
      en: 'Nominations are now open for the Distinguished Downloads Award 2025. The award recognizes outstanding contributions by NITH Downloads in their respective fields. Submit your nominations before the deadline.',
      hi: 'विशिष्ट डाउनलोड्स पुरस्कार 2025 के लिए नामांकन अब खुले हैं। यह पुरस्कार अपने-अपने क्षेत्रों में एनआईटीएच डाउनलोड्स के उत्कृष्ट योगदान को मान्यता देता है। कृपया समय सीमा से पहले अपना नामांकन जमा करें।',
    },
    image: '/Downloads/award.jpg',
    date: '2025-01-12',
    slug: 'distinguished-Downloads-award-2025',
    downloadUrl: '/downloads/distinguished-Downloads-award-2025.pdf',
  },
];

const ITEMS_PER_PAGE = 10;

const DownloadsSkeleton = () => (
  <div className="animate-pulse space-y-6">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-100"
      >
        <div className="w-full sm:w-48 h-48 sm:h-auto bg-gray-200 rounded-lg flex-shrink-0"></div>
        <div className="flex-1 space-y-3 py-2">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="mt-4 h-8 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    ))}
  </div>
);

export default function Downloads() {
  // Select language from Redux store
  const language = useSelector((state: RootState) => state.language.value);

  const [downloads, setDownloads] =
    useState<DownloadsItem[]>(initialDownloadsData);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setDownloads(initialDownloadsData);
      } catch (err) {
        console.error('Error fetching downloads:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(downloads.length / ITEMS_PER_PAGE);

  const paginatedDownloads = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return downloads.slice(start, start + ITEMS_PER_PAGE);
  }, [downloads, currentPage]);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString(
      language === 'en' ? 'en-US' : 'hi-IN',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
    );
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
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-gray-500">
              <Link
                href="/"
                className="hover:text-[#800000] transition-colors duration-200"
              >
                {language === 'en' ? 'Home' : 'होम'}
              </Link>
              <span>›</span>
              <span className="font-medium text-gray-900">
                {language === 'en' ? 'Downloads' : 'डाउनलोड्स'}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#631012] via-[#7a1a1d] to-[#4a0c0e] py-16 md:py-24 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {language === 'en' ? 'Downloads ' : 'डाउनलोड्स '}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                {language === 'en'
                  ? 'Access the latest documents, announcements, and resources from the NITH community.'
                  : 'एनआईटीएच समुदाय से नवीनतम दस्तावेज़, घोषणाएं और संसाधन प्राप्त करें।'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="w-full">
              <div className="w-full bg-white rounded-t-xl border border-gray-200 overflow-hidden">
                {/* Header Grid */}
                <div className="grid grid-cols-[80px_1fr_140px] gap-4 bg-gray-50 border-b border-gray-200 p-4 text-sm font-semibold text-gray-700">
                  <div className="text-center text-gray-500">S.I no</div>
                  <div className="uppercase tracking-wider text-xs font-bold text-[#631012]">
                    Description
                  </div>
                  <div className="text-center uppercase tracking-wider text-xs font-bold text-[#631012]">
                    Downloads
                  </div>{' '}
                  {/* Downloads */}
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
