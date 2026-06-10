'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

type Doc = {
  id: string;
  title: string;
  date?: string;
  url?: string;
};

const ODD_DOCS: Doc[] = [
  {
    id: 'odd-1',
    title: 'Academic Calendar - Odd Semester (AY 2025-26)',
    date: '2025-07-01',
    url: '/pdfs/calendar-odd-2025-26.pdf',
  },
  {
    id: 'odd-2',
    title: 'Examination Schedule - Odd Semester Jan 2026',
    date: '2026-01-05',
    url: '/pdfs/exam-schedule-odd-2026.pdf',
  },
];

const EVEN_DOCS: Doc[] = [
  {
    id: 'even-1',
    title: 'Academic Calendar - Even Semester (AY 2025-26)',
    date: '2026-01-01',
    url: '/pdfs/calendar-even-2025-26.pdf',
  },
  {
    id: 'even-2',
    title: 'Examination Schedule - Even Semester Apr 2026',
    date: '2026-04-10',
    url: '/pdfs/exam-schedule-even-2026.pdf',
  },
];

export default function Page() {
  const [tab, setTab] = useState<'odd' | 'even'>('even');

  const docs = tab === 'odd' ? ODD_DOCS : EVEN_DOCS;

  return (
    <div className="min-h-screen bg-white">
      

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
            <span className="text-gray-400">Academics</span>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              Academic Calendar
            </span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center py-24 md:py-32 px-6 md:px-12"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            Academic Calendar
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Official academic calendars & examination schedules for Odd and Even
            semesters — view or download PDFs.
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Academic Calendar
            </h2>
            <div className="flex items-center bg-gray-100 rounded-md p-1">
              <button
                onClick={() => setTab('odd')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${tab === 'odd' ? 'bg-white text-[#800000] shadow' : 'text-gray-700 hover:bg-gray-200'}`}
                aria-pressed={tab === 'odd'}
              >
                Odd Semester
              </button>
              <button
                onClick={() => setTab('even')}
                className={`ml-2 px-4 py-2 text-sm font-medium rounded-md transition-colors ${tab === 'even' ? 'bg-white text-[#800000] shadow' : 'text-gray-700 hover:bg-gray-200'}`}
                aria-pressed={tab === 'even'}
              >
                Even Semester
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left table-fixed border-collapse">
              <colgroup>
                <col style={{ width: '6%' }} />
                <col style={{ width: '64%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '18%' }} />
              </colgroup>
              <thead>
                <tr className="bg-gray-50 text-sm text-gray-600">
                  <th className="py-3 px-4">Sl.</th>
                  <th className="py-3 px-4">Document</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {docs.map((d, i) => (
                  <tr
                    key={d.id}
                    className={`border-b hover:bg-gray-50 ${i % 2 === 1 ? 'bg-gray-50' : ''}`}
                  >
                    <td className="py-3 px-4 text-sm text-gray-700 align-top">
                      {i + 1}
                    </td>
                    <td className="py-3 px-4 align-top">
                      <a
                        href={d.url ?? '#'}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-900 font-medium hover:text-[#800000]"
                      >
                        {d.title}
                      </a>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600 align-top">
                      {d.date ?? '-'}
                    </td>
                    <td className="py-3 px-4 align-top">
                      <div className="flex items-center gap-2">
                        <a
                          href={d.url ?? '#'}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 border rounded-full text-sm bg-white text-[#800000] border-[#800000]"
                        >
                          View
                        </a>
                        <a
                          href={d.url ?? '#'}
                          download
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#800000] text-white rounded-full text-sm"
                        >
                          Download
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900">Notes</h3>
          <p className="mt-2 text-gray-700 text-sm">
            Please refer to the official institute notices for any last-minute
            changes to calendars or examination schedules. For queries contact
            the Office of Academic Affairs at{' '}
            <a
              href="mailto:academic@nith.ac.in"
              className="text-[#800000] underline"
            >
              academic@nith.ac.in
            </a>
            .
          </p>
        </section>
      </main>

      
    </div>
  );
}
