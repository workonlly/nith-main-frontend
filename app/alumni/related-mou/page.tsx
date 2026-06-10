'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface MoUItem {
  id: number;
  title: string;
  draftedDate: string;
  documentUrl: string;
  fileType: 'pdf' | 'doc' | 'docx';
}

// Sample MoU data by Ai - API call karna idhar
const sampleMoUData: MoUItem[] = [
  {
    id: 1,
    title:
      'MoU between NITH Alumni Association and XYZ Corporation for Industry-Academia Collaboration',
    draftedDate: '2025-01-10',
    documentUrl: '/documents/mou/mou-xyz-corp.pdf',
    fileType: 'pdf',
  },
  {
    id: 2,
    title: 'MoU for Alumni Mentorship Program with ABC Tech Foundation',
    draftedDate: '2024-12-15',
    documentUrl: '/documents/mou/mou-abc-tech.pdf',
    fileType: 'pdf',
  },
  {
    id: 3,
    title: 'MoU for Scholarship Endowment Fund with Alumni Chapter USA',
    draftedDate: '2024-11-20',
    documentUrl: '/documents/mou/mou-scholarship.pdf',
    fileType: 'pdf',
  },
  {
    id: 4,
    title: 'MoU for Joint Research Initiatives with Alumni Network Europe',
    draftedDate: '2024-10-05',
    documentUrl: '/documents/mou/mou-research.pdf',
    fileType: 'pdf',
  },
  {
    id: 5,
    title:
      'MoU for Campus Infrastructure Development with NITH Alumni Foundation',
    draftedDate: '2024-09-18',
    documentUrl: '/documents/mou/mou-infrastructure.pdf',
    fileType: 'pdf',
  },
  {
    id: 6,
    title:
      'MoU for Startup Incubation Support with Alumni Entrepreneurs Network',
    draftedDate: '2024-08-25',
    documentUrl: '/documents/mou/mou-startup.pdf',
    fileType: 'pdf',
  },
  {
    id: 7,
    title:
      'MoU for Annual Alumni Meet Organization with Local Chapters Consortium',
    draftedDate: '2024-07-12',
    documentUrl: '/documents/mou/mou-annual-meet.pdf',
    fileType: 'pdf',
  },
  {
    id: 8,
    title: 'MoU for Student Internship Program with Global Alumni Partners',
    draftedDate: '2024-06-30',
    documentUrl: '/documents/mou/mou-internship.pdf',
    fileType: 'pdf',
  },
];

const ITEMS_PER_PAGE = 10;

const TableSkeleton = () => (
  <div className="animate-pulse">
    {[1, 2, 3, 4, 5].map((i) => (
      <div
        key={i}
        className="flex items-center gap-4 px-6 py-5 border-b border-gray-100"
      >
        <div className="w-12 h-5 bg-gray-200 rounded"></div>
        <div className="flex-1 h-5 bg-gray-200 rounded"></div>
        <div className="w-28 h-5 bg-gray-200 rounded"></div>
        <div className="flex gap-2">
          <div className="w-20 h-9 bg-gray-200 rounded-lg"></div>
          <div className="w-24 h-9 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    ))}
  </div>
);

const CardSkeleton = () => (
  <div className="animate-pulse space-y-4">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="bg-white rounded-xl p-5 shadow-sm">
        <div className="h-4 bg-gray-200 rounded w-16 mb-3"></div>
        <div className="h-5 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-5 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
        <div className="flex gap-2">
          <div className="h-10 bg-gray-200 rounded-lg flex-1"></div>
          <div className="h-10 bg-gray-200 rounded-lg flex-1"></div>
        </div>
      </div>
    ))}
  </div>
);

export default function AlumniRelatedMoU() {
  const [mous, setMous] = useState<MoUItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // TODO: Replace with actual API call
        // const response = await fetch('/api/alumni/mou');
        // const result = await response.json();

        // Sort by date (latest first)
        const sortedData = [...sampleMoUData].sort(
          (a, b) =>
            new Date(b.draftedDate).getTime() -
            new Date(a.draftedDate).getTime()
        );
        setMous(sortedData);
      } catch (err) {
        console.error('Error fetching MoUs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(mous.length / ITEMS_PER_PAGE);
  const paginatedMous = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return mous.slice(start, start + ITEMS_PER_PAGE);
  }, [mous, currentPage]);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleRead = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = (url: string, title: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.slice(0, 50).replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
              <span className="text-[#800000] font-medium">
                Alumni Related MoUs
              </span>
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
                Alumni Related MoUs
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                Official Memorandums of Understanding associated with NITH
                Alumni initiatives and collaborations.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <p className="text-gray-600">
                Showing{' '}
                <span className="font-semibold text-[#631012]">
                  {paginatedMous.length}
                </span>{' '}
                of <span className="font-semibold">{mous.length}</span> MoUs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden lg:block bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              {loading ? (
                <TableSkeleton />
              ) : mous.length === 0 ? (
                <div className="p-12 text-center">
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No MoUs Available
                  </h3>
                  <p className="text-gray-500">
                    There are no Memorandums of Understanding available at the
                    moment.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-20">
                          Sl. No.
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          MoU Title
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-40">
                          Date Drafted On
                        </th>
                        <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-52">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <AnimatePresence mode="wait">
                        {paginatedMous.map((mou, index) => (
                          <motion.tr
                            key={mou.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="hover:bg-gray-50/80 transition-colors duration-200 group"
                          >
                            <td className="px-6 py-5 text-sm text-gray-500 font-medium">
                              {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                            </td>
                            <td className="px-6 py-5">
                              <div className="flex items-center justify-start gap-3">
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#631012]/10 flex items-center justify-center">
                                  <svg
                                    className="w-5 h-5 text-[#631012]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={1.5}
                                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                  </svg>
                                </div>
                                <span className="text-sm font-medium text-gray-900 group-hover:text-[#631012] transition-colors leading-relaxed">
                                  {mou.title}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-5">
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <svg
                                  className="w-4 h-4 text-gray-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                {formatDate(mou.draftedDate)}
                              </div>
                            </td>
                            <td className="px-6 py-5">
                              <div className="flex items-center justify-center gap-2">
                                <button
                                  onClick={() => handleRead(mou.documentUrl)}
                                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#631012] bg-[#631012]/10 rounded-lg hover:bg-[#631012]/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#631012]/50 cursor-pointer"
                                  aria-label={`Read ${mou.title}`}
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
                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                  </svg>
                                  Read
                                </button>
                                <button
                                  onClick={() =>
                                    handleDownload(mou.documentUrl, mou.title)
                                  }
                                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-[#631012] rounded-lg hover:bg-[#7a1a1d] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#631012]/50 cursor-pointer"
                                  aria-label={`Download ${mou.title}`}
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
                                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                    />
                                  </svg>
                                  Download
                                </button>
                              </div>
                            </td>
                          </motion.tr>
                        ))}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </div>
              )}
            </motion.div>

            <div className="lg:hidden">
              {loading ? (
                <CardSkeleton />
              ) : mous.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl shadow-sm p-8 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No MoUs Available
                  </h3>
                  <p className="text-gray-500 text-sm">
                    There are no Memorandums of Understanding available at the
                    moment.
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence mode="wait">
                    {paginatedMous.map((mou, index) => (
                      <motion.div
                        key={mou.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-center justify-start gap-3 mb-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#631012]/10 text-[#631012] text-sm font-semibold flex items-center justify-center">
                            {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                          </span>
                          <div className="flex-1">
                            <h3 className="text-sm font-semibold text-gray-900 leading-relaxed">
                              {mou.title}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 ml-11">
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
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span>Drafted on: {formatDate(mou.draftedDate)}</span>
                        </div>

                        <div className="flex gap-3 ml-11">
                          <button
                            onClick={() => handleRead(mou.documentUrl)}
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#631012] bg-[#631012]/10 rounded-lg hover:bg-[#631012]/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#631012]/50 cursor-pointer"
                            aria-label={`Read ${mou.title}`}
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
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                            Read
                          </button>
                          <button
                            onClick={() =>
                              handleDownload(mou.documentUrl, mou.title)
                            }
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#631012] rounded-lg hover:bg-[#7a1a1d] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#631012]/50 cursor-pointer"
                            aria-label={`Download ${mou.title}`}
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
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                              />
                            </svg>
                            Download
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {!loading && mous.length > ITEMS_PER_PAGE && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex justify-center"
              >
                <div className="inline-flex items-center gap-1 bg-white rounded-xl shadow-sm p-2">
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#631012]/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#631012]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    About Alumni MoUs
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    These Memorandums of Understanding represent official
                    agreements between NIT Hamirpur and various alumni
                    associations, organizations, and partners. They outline
                    collaborative initiatives, scholarship programs,
                    infrastructure development, research partnerships, and other
                    activities that benefit the NITH community. For any queries
                    regarding these MoUs, please contact the Alumni Relations
                    Office.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      
    </>
  );
}
