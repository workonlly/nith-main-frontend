'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';

type ActivityCategory =
  | 'All'
  | 'Reunions'
  | 'Webinars'
  | 'Hackathons'
  | 'Campus Events';
type ActivityMode = 'Online' | 'Offline' | 'Hybrid';

interface Activity {
  id: number;
  date: string;
  title: string;
  category: Exclude<ActivityCategory, 'All'>;
  mode: ActivityMode;
  location: string;
  description: string;
}

// Sample data by AI - Yha pe API call karna hai future me
const activitiesData: Activity[] = [
  {
    id: 1,
    date: '2025-01-15',
    title: 'Annual Alumni Reunion 2025',
    category: 'Reunions',
    mode: 'Offline',
    location: 'Main Auditorium, NIT Hamirpur',
    description:
      'Join us for the grand annual reunion celebrating decades of excellence.',
  },
  {
    id: 2,
    date: '2025-01-20',
    title: 'Tech Talk: AI in Industry',
    category: 'Webinars',
    mode: 'Online',
    location: 'Zoom',
    description:
      'Learn about AI applications in modern industry from our distinguished alumni.',
  },
  {
    id: 3,
    date: '2025-02-05',
    title: 'Code Sprint 2025',
    category: 'Hackathons',
    mode: 'Hybrid',
    location: 'CS Block & Online',
    description: '48-hour hackathon with mentorship from industry experts.',
  },
  {
    id: 4,
    date: '2025-02-14',
    title: 'Campus Tour & Meet',
    category: 'Campus Events',
    mode: 'Offline',
    location: 'NIT Hamirpur Campus',
    description: 'Explore the new campus developments with current students.',
  },
  {
    id: 5,
    date: '2025-02-28',
    title: 'Batch of 2015 Reunion',
    category: 'Reunions',
    mode: 'Offline',
    location: 'Guest House, NIT Hamirpur',
    description: 'Special reunion for the graduating class of 2015.',
  },
  {
    id: 6,
    date: '2025-03-10',
    title: 'Career Guidance Webinar',
    category: 'Webinars',
    mode: 'Online',
    location: 'Google Meet',
    description: 'Alumni sharing career insights with current students.',
  },
  {
    id: 7,
    date: '2025-03-20',
    title: 'Innovation Hackathon',
    category: 'Hackathons',
    mode: 'Hybrid',
    location: 'Innovation Hub & Discord',
    description: 'Build innovative solutions for real-world problems.',
  },
  {
    id: 8,
    date: '2025-04-01',
    title: 'Foundation Day Celebration',
    category: 'Campus Events',
    mode: 'Offline',
    location: 'Open Air Theatre',
    description:
      "Celebrate the institute's foundation day with cultural events.",
  },
  {
    id: 9,
    date: '2025-04-15',
    title: 'Startup Stories Webinar',
    category: 'Webinars',
    mode: 'Online',
    location: 'Microsoft Teams',
    description: 'Alumni entrepreneurs share their startup journeys.',
  },
  {
    id: 10,
    date: '2025-04-25',
    title: 'Silver Jubilee Reunion',
    category: 'Reunions',
    mode: 'Offline',
    location: 'Convention Center',
    description: '25 years celebration for batch of 2000.',
  },
  {
    id: 11,
    date: '2025-05-05',
    title: 'ML Workshop',
    category: 'Webinars',
    mode: 'Online',
    location: 'Zoom',
    description: 'Hands-on machine learning workshop by industry experts.',
  },
  {
    id: 12,
    date: '2025-05-15',
    title: 'Green Campus Initiative',
    category: 'Campus Events',
    mode: 'Offline',
    location: 'Botanical Garden',
    description: 'Tree plantation drive with alumni participation.',
  },
  {
    id: 13,
    date: '2025-05-25',
    title: 'Blockchain Hackathon',
    category: 'Hackathons',
    mode: 'Hybrid',
    location: 'Tech Hub & Online',
    description: 'Build decentralized applications with mentor support.',
  },
  {
    id: 14,
    date: '2025-06-10',
    title: 'Alumni Sports Meet',
    category: 'Campus Events',
    mode: 'Offline',
    location: 'Sports Complex',
    description: 'Annual sports competition among alumni batches.',
  },
  {
    id: 15,
    date: '2025-06-20',
    title: 'Batch of 2020 Reunion',
    category: 'Reunions',
    mode: 'Hybrid',
    location: 'Seminar Hall & Zoom',
    description: 'First reunion for the pandemic batch.',
  },
];

const categories: ActivityCategory[] = [
  'All',
  'Reunions',
  'Webinars',
  'Hackathons',
  'Campus Events',
];

const ITEMS_PER_PAGE = 10;

export default function Activities() {
  const [activeCategory, setActiveCategory] = useState<ActivityCategory>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const filteredActivities = useMemo(() => {
    if (activeCategory === 'All') return activitiesData;
    return activitiesData.filter(
      (activity) => activity.category === activeCategory
    );
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredActivities.length / ITEMS_PER_PAGE);
  const paginatedActivities = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredActivities.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredActivities, currentPage]);

  const handleCategoryChange = (category: ActivityCategory) => {
    setActiveCategory(category);
    setCurrentPage(1);
    setExpandedCard(null);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
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
              <span className="text-gray-400">Alumni</span>
              <span>›</span>
              <span className="text-[#800000] font-medium">Activities</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-br from-[#631012] via-[#7a1a1d] to-[#4a0c0e] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Alumni Activities
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                Stay connected with your alma mater through reunions, webinars,
                hackathons, and campus events designed to foster lifelong bonds.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-sm p-4 md:p-6 mb-8"
            >
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <svg
                  className="w-5 h-5 text-[#631012]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                <span className="font-semibold text-gray-700">
                  Filter by Category:
                </span>
              </div>

              <div className="hidden md:flex flex-wrap gap-3 mt-4">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-[#631012] text-white shadow-lg shadow-[#631012]/25'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4 mt-4">
                <div className="flex gap-2 min-w-max">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                        activeCategory === category
                          ? 'bg-[#631012] text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-6 flex items-center justify-between"
            >
              <p className="text-gray-600">
                Showing{' '}
                <span className="font-semibold text-[#631012]">
                  {paginatedActivities.length}
                </span>{' '}
                of{' '}
                <span className="font-semibold">
                  {filteredActivities.length}
                </span>{' '}
                activities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden lg:block bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Activity Title
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Mode
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Location / Platform
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <AnimatePresence mode="wait">
                      {paginatedActivities.map((activity, index) => (
                        <motion.tr
                          key={activity.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="hover:bg-gray-50/80 transition-colors duration-200 group"
                        >
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {formatDate(activity.date)}
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="max-w-xs">
                              <p className="font-semibold text-gray-900 group-hover:text-[#631012] transition-colors">
                                {activity.title}
                              </p>
                              <p className="text-sm text-gray-500 truncate mt-1">
                                {activity.description}
                              </p>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <span className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                              {activity.category}
                            </span>
                          </td>
                          <td className="px-6 py-5">
                            <span className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                              {activity.mode}
                            </span>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-2 text-gray-600">
                              <svg
                                className="w-4 h-4 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-sm">
                                {activity.location}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-5 text-center">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#631012] text-white text-sm font-medium hover:bg-[#7a1a1d] transition-colors shadow-sm hover:shadow-md"
                            >
                              View Details
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </motion.button>
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
            </motion.div>

            <div className="lg:hidden space-y-4">
              <AnimatePresence mode="wait">
                {paginatedActivities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden"
                  >
                    <div
                      className="p-5 cursor-pointer"
                      onClick={() =>
                        setExpandedCard(
                          expandedCard === activity.id ? null : activity.id
                        )
                      }
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-16 rounded-xl overflow-hidden shadow-sm border border-gray-100 flex-shrink-0">
                            <div className="h-5 bg-gradient-to-r from-[#631012] to-[#7a1a1d] flex items-center justify-center">
                              <span className="text-[10px] font-semibold text-white uppercase tracking-wider">
                                {new Date(activity.date).toLocaleDateString(
                                  'en-US',
                                  { month: 'short' }
                                )}
                              </span>
                            </div>
                            <div className="h-11 bg-white flex flex-col items-center justify-center">
                              <span className="text-xl font-bold text-gray-800 leading-none">
                                {new Date(activity.date).getDate()}
                              </span>
                              <span className="text-[10px] text-gray-400 font-medium">
                                {new Date(activity.date).getFullYear()}
                              </span>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 leading-tight">
                              {activity.title}
                            </h3>
                            <p className="text-xs text-gray-400 mt-0.5">
                              {new Date(activity.date).toLocaleDateString(
                                'en-US',
                                { weekday: 'long' }
                              )}
                            </p>
                          </div>
                        </div>
                        <motion.div
                          animate={{
                            rotate: expandedCard === activity.id ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </motion.div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                          {activity.category}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                          {activity.mode}
                        </span>
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedCard === activity.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-2 border-t border-gray-100 space-y-4">
                            <p className="text-gray-600 text-sm">
                              {activity.description}
                            </p>
                            <div className="flex items-center gap-2 text-gray-600">
                              <svg
                                className="w-4 h-4 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-sm">
                                {activity.location}
                              </span>
                            </div>
                            <button className="w-full py-3 rounded-xl bg-[#631012] text-white font-medium hover:bg-[#7a1a1d] transition-colors flex items-center justify-center gap-2">
                              View Details
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {paginatedActivities.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl shadow-sm p-12 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No activities found
                </h3>
                <p className="text-gray-500 mb-6">
                  There are no activities in this category at the moment.
                </p>
                <button
                  onClick={() => handleCategoryChange('All')}
                  className="px-6 py-2.5 rounded-lg bg-[#631012] text-white font-medium hover:bg-[#7a1a1d] transition-colors"
                >
                  View All Activities
                </button>
              </motion.div>
            )}

            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex justify-center"
              >
                <div className="inline-flex items-center gap-1 bg-white rounded-xl shadow-sm p-2">
                  {/* Previous Button */}
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      currentPage === 1
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-[#631012]'
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  <div className="flex items-center gap-1 px-2">
                    {getPageNumbers().map((page, index) => (
                      <React.Fragment key={index}>
                        {page === '...' ? (
                          <span className="px-3 py-2 text-gray-400">...</span>
                        ) : (
                          <button
                            onClick={() => setCurrentPage(page as number)}
                            className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                              currentPage === page
                                ? 'bg-[#631012] text-white shadow-md'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            {page}
                          </button>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      currentPage === totalPages
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-[#631012]'
                    }`}
                  >
                    <span className="hidden sm:inline">Next</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
