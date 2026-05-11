'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

type Notice = {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD or human
  category: string;
  file?: string;
};

const sampleNotices: Notice[] = [
  {
    id: 'n1',
    title: 'Orientation Schedule for New Students (Jan 2026)',
    date: '2026-01-10',
    category: 'General',
    file: '/docs/notices/orientation-2026.pdf',
  },
  {
    id: 'n2',
    title: 'Hostel Mess Charges Revision',
    date: '2025-12-15',
    category: 'Hostels',
    file: '/docs/notices/mess-charges-2026.pdf',
  },
  {
    id: 'n3',
    title: 'Placement Drive: Company X on Campus',
    date: '2025-11-20',
    category: 'Placement',
    file: '/docs/notices/placement-companyx.pdf',
  },
  {
    id: 'n4',
    title: 'Sports Day Notice & Registration',
    date: '2025-10-02',
    category: 'Sports',
    file: '/docs/notices/sports-day-2025.pdf',
  },
  {
    id: 'n5',
    title: 'Vaccination Drive — Student Health Office',
    date: '2025-09-18',
    category: 'Health',
    file: '/docs/notices/vaccination-2025.pdf',
  },
];

export default function Page() {
  const language = useSelector((state: RootState) => state.language.value);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(sampleNotices.map((n) => n.category)))],
    []
  );

  const filtered = useMemo(() => {
    return sampleNotices.filter((n) => {
      const matchesQuery = n.title.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'All' || n.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <div className="min-h-screen bg-white">
      <Header31 />

      <div className="bg-gray-50 py-4 px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-[#800000] transition-colors duration-200"
            >
              {language == 'en' ? 'Home' : 'होम'}
            </Link>
            <span>›</span>
            <span className="text-gray-400">
              {language == 'en' ? 'Student' : 'छात्र'}
            </span>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              {language == 'en' ? 'Notices' : 'सूचनाएँ'}
            </span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center py-20 px-6 md:px-12"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            {language == 'en' ? 'Notices' : 'सूचनाएँ'}
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            {language == 'en'
              ? 'Latest student notices, circulars and announcements'
              : 'छात्रों के लिए नवीनतम सूचनाएँ, परिपत्र और घोषणाएँ'}
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {language == 'en' ? 'Student Notices' : 'छात्र सूचनाएँ'}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                {filtered.length} {language == 'en' ? 'results' : 'परिणाम'}
              </p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={
                  language == 'en' ? 'Search notices' : 'सूचनाएँ खोजें'
                }
                className="w-full md:w-64 rounded-2xl border border-slate-200 px-4 py-2 shadow-sm focus:ring-2 focus:ring-sky-200"
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-2xl border border-slate-200 px-4 py-2 shadow-sm"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left table-auto hidden md:table">
              <thead>
                <tr className="text-sm text-gray-500 border-b">
                  <th className="py-3 pr-6 w-48">Date</th>
                  <th className="py-3 pr-6">Title</th>
                  <th className="py-3 pr-6 w-36">Category</th>
                  <th className="py-3 pr-6 w-40">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((n) => (
                  <tr key={n.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 align-top text-slate-600">{n.date}</td>
                    <td className="py-3 align-top">
                      <div className="font-medium text-slate-800">
                        {n.title}
                      </div>
                    </td>
                    <td className="py-3 align-top text-slate-600">
                      {n.category}
                    </td>
                    <td className="py-3 align-top">
                      <div className="flex items-center gap-3">
                        {n.file ? (
                          <a
                            href={n.file}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-2 rounded-lg bg-gradient-to-br from-[#800000] to-[#631012] text-white"
                          >
                            View
                          </a>
                        ) : (
                          <span className="text-sm text-slate-500">—</span>
                        )}
                        {n.file && (
                          <a
                            href={n.file}
                            download
                            className="px-3 py-2 rounded-lg border border-slate-200"
                          >
                            Download
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile stacked list */}
            <div className="md:hidden mt-2 space-y-3">
              {filtered.map((n) => (
                <div
                  key={n.id}
                  className="p-4 rounded-2xl border border-slate-100 bg-white shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-medium text-slate-800">
                        {n.title}
                      </div>
                      <div className="text-sm text-slate-500 mt-1">
                        {n.category} • {n.date}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {n.file ? (
                        <a
                          href={n.file}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-2 rounded-lg bg-[#800000] text-white text-sm"
                        >
                          View
                        </a>
                      ) : (
                        <span className="text-sm text-slate-500">—</span>
                      )}
                      {n.file && (
                        <a
                          href={n.file}
                          download
                          className="text-sm text-slate-600"
                        >
                          Download
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="p-6 text-center text-slate-600">
                No notices match your search.
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
