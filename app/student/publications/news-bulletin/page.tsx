'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, Calendar, Download, Mail } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const BULLETINS = [
  {
    id: 'b-2026-01',
    title: 'Institute News Bulletin - January 2026',
    date: '2026-01-15',
    excerpt:
      'Highlights: Convocation details, Research grants awarded, Upcoming events and important notices for students and faculty.',
    pdf: '#',
  },
  {
    id: 'b-2025-12',
    title: 'Institute News Bulletin - December 2025',
    date: '2025-12-10',
    excerpt:
      'Year-end highlights, departmental achievements, and campus events roundup.',
    pdf: '#',
  },
  {
    id: 'b-2025-09',
    title: 'Institute News Bulletin - September 2025',
    date: '2025-09-05',
    excerpt:
      'Student achievements, upcoming workshops and notable alumni interactions.',
    pdf: '#',
  },
];

const ARCHIVE = Array.from({ length: 12 }).map((_, i) => ({
  id: `arch-${i}`,
  title: `News Bulletin ${2025 - (i % 5)}-${(i % 12) + 1}`,
  date: `2025-${String((i % 12) + 1).padStart(2, '0')}-01`,
  pdf: '#',
}));

export default function NewsBulletinPage() {
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
            <span className="text-gray-400">Student</span>
            <span>›</span>
            <span className="text-gray-400">Publications</span>
            <span>›</span>
            <span className="text-[#800000] font-medium">News Bulletin</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center py-24 md:py-32 px-6 md:px-12"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            News Bulletin
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Official monthly digest that summarizes campus news, important
            notices, achievements and upcoming events for the institute
            community.
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <section className="mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Latest Bulletins
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Browse recent editions and download the full PDF for details.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BULLETINS.map((b) => (
              <motion.div
                key={b.id}
                variants={fadeInScale}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#800000] flex items-center justify-center text-white">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{b.title}</h3>
                    <div className="text-sm text-gray-500">
                      {new Date(b.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mt-4 text-sm">{b.excerpt}</p>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={b.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#800000] text-white rounded-md text-sm hover:bg-[#6a0000]"
                  >
                    <FileText className="w-4 h-4" /> View
                  </a>
                  <a
                    href={b.pdf}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Download className="w-4 h-4" /> Download PDF
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">Archive</h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Past bulletins organized chronologically.
            </p>
          </motion.div>

          <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left bg-gray-50">
                  <th className="px-4 py-3">Sl. No.</th>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {ARCHIVE.map((a, idx) => (
                  <tr key={a.id} className="border-b">
                    <td className="px-4 py-3 align-top">{idx + 1}</td>
                    <td className="px-4 py-3 align-top">{a.title}</td>
                    <td className="px-4 py-3 align-top">
                      {new Date(a.date).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 align-top">
                      <div className="flex gap-2">
                        <a
                          href={a.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#800000] text-white rounded-md text-sm hover:bg-[#6a0000]"
                        >
                          View
                        </a>
                        <a
                          href={a.pdf}
                          download
                          className="inline-flex items-center gap-2 px-3 py-1.5 border rounded-md text-sm text-gray-700 hover:bg-gray-100"
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

        <section className="mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              For submissions, corrections or circulation requests contact the
              Publications Office.
            </p>
          </motion.div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-lg bg-[#800000] flex items-center justify-center text-white">
                <Mail className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Publications Office
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Email:{' '}
                  <a
                    className="text-[#800000]"
                    href="mailto:publications@nith.ac.in"
                  >
                    publications@nith.ac.in
                  </a>
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Phone: +91-00000-00000
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Office hours: Mon-Fri 09:30-17:30
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}
