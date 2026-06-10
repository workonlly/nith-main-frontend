'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const SECTIONS = [
  {
    key: 'institute',
    title: 'Institute Magazine',
    content:
      'The institute publishes an annual cultural magazine that showcases creative works from students across departments, including articles, poems, photographs and artwork.',
  },
  {
    key: 'srijan',
    title: 'Srijan',
    content: `There are certain corners in this universe, where big black holes disorient light, absorbing from it every speck of direction that it was born with; yet there are others where tiny strokes of running ink are capable of evoking emotion. We, at SRIJAN, prosper in the latter. Digging deep into hearts and helming higher into brains, we assemble facts and fiction, amuse and ruse, from haphazard thoughts into a compilation of shiny sheets. SRIJAN is the official annual cultural magazine of the institute.

Looking at it from a distance, the readers get glimpses of the year-around happenings in the college, set amid pieces of art by writers, painters, hotographers and whatnots in the college; up close, the magazine spells to the reader another universe of creativity. All the events and proceedings, activities by various teams and clubs, works carried on in the different departments are accounted. Artworks by creators make the most part of the magazine; they include handfuls of articles, beautiful poems, soulful photographs, paintings, sketches and digital arts.

Behind this compilation of about a couple of 100 pages, lays the hard-work of nights and days that is put together by Team SRIJAN. The team consists of editors, designers and the lately added members of the team the photographers. The team of editors is further split on the basis of language: Hindi and English. Moreover, all the factions consist of members from each year of study in the university. The editors handle the write-ups submitted: filter, edit, filter again, amend to make more reader-friendly, and proofread again. The designers hold the binding element to the magazine; they design each curve and each corner of what we finally have in the handbook.

We, at SRIJAN, welcome the talent to come and reach the surface, celebrate literature with fellow artists and rejoice in art that a stroke of ink can draw.`,
  },
  {
    key: 'archive',
    title: 'Magazine Archive',
    content: 'List of past issues with download links.',
  },
];

const MAGAZINES = [
  'SRIJAN 2023-24',
  'SRIJAN 2022',
  'SRIJAN 2021',
  'SRIJAN 2016',
  'SRIJAN 2015',
  'SRIJAN 2014',
  'SRIJAN 2013',
  'SRIJAN 2012',
  'SRIJAN 2011',
  'SRIJAN 2010',
  'SRIJAN 2009',
  'SRIJAN 2008',
  'SRIJAN 2006',
  'SRIJAN 2004',
  'SRIJAN 2003',
];

export default function Page() {
  const [active, setActive] = useState<string>('institute');
  const current = SECTIONS.find((s) => s.key === active) ?? SECTIONS[0];

  return (
    <div className=" bg-gray-50  ">
      <div>
        
      </div>

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
            <span className="text-[#800000] font-medium">Magazine</span>
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
            Institute Magazine
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            SRIJAN — the official annual cultural magazine of the institute.
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-72 bg-white rounded-lg shadow-sm p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Magazine
            </h3>
            <ul className="space-y-2">
              {SECTIONS.map((s) => (
                <li key={s.key}>
                  <button
                    onClick={() => setActive(s.key)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${active === s.key ? 'bg-[#800000] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content panel */}
          <section className="flex-1 bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <h2 className="text-2xl font-semibold text-gray-900">
                {current.title}
              </h2>
              <div className="text-sm text-gray-500">
                {SECTIONS.findIndex((s) => s.key === current.key) + 1} /{' '}
                {SECTIONS.length}
              </div>
            </div>

            <div className="mt-4 prose prose-sm max-w-none text-gray-700">
              {current.key === 'srijan' ? (
                <div>
                  {current.content.split('\n\n').map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              ) : current.key === 'archive' ? (
                <div>
                  <p className="mb-4">{current.content}</p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse table-auto text-sm">
                      <thead>
                        <tr className="bg-gray-100 text-left">
                          <th className="px-4 py-2">Sl. No.</th>
                          <th className="px-4 py-2">Title</th>
                          <th className="px-4 py-2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {MAGAZINES.map((title, idx) => (
                          <tr key={title} className="border-b">
                            <td className="px-4 py-3 align-top">{idx + 1}</td>
                            <td className="px-4 py-3 align-top">{title}</td>
                            <td className="px-4 py-3 align-top">
                              <div className="flex gap-2">
                                <a
                                  href="/student/publications/magazine"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#800000] text-white rounded-md text-sm hover:bg-[#6a0000]"
                                >
                                  View
                                </a>
                                <a
                                  href="/student/publications/magazine"
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
                </div>
              ) : (
                <p>{current.content}</p>
              )}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="/student/magazine"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#800000] text-white rounded-md text-sm hover:bg-[#6a0000]"
              >
                View Latest Issue
              </a>
              <a
                href="/student/magazine"
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-100"
              >
                Contact Editorial Team
              </a>
            </div>
          </section>
        </div>
      </main>

      
    </div>
  );
}
