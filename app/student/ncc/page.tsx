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
    key: 'history',
    title: 'History',
    content:
      'The NCC (National Cadet Corps) has its origin in the University Corps formed in the early 20th century. It was later formalized into NCC to develop discipline and leadership among the youth through military-style training and community service.',
  },
  {
    key: 'motto',
    title: 'NCC Motto',
    content:
      "The official motto of NCC is 'Unity and Discipline', emphasizing the values the organization seeks to instill in cadets.",
  },
  {
    key: 'aim',
    title: 'Aim of NCC',
    content:
      'NCC aims to develop character, leadership, a spirit of adventure, and the ideals of selfless service among young citizens.',
  },
  {
    key: 'camps',
    title: 'Central Camps',
    content:
      'Central camps are large-scale training camps where cadets from different units meet for intensive training, adventure sports, leadership camps and competitive events. (Dummy list)',
  },
  {
    key: 'community',
    title: 'Community Services',
    content:
      'NCC cadets participate in community services such as disaster relief, blood donation drives, environmental campaigns, literacy programs and health awareness camps.',
  },
];

export default function Page() {
  const [active, setActive] = useState<string>('history');
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
            <span className="text-[#800000] font-medium">NCC</span>
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
            National Cadet Corps (NCC)
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            NCC fosters discipline, leadership and community service through
            training and outreach programs for students.
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-72 bg-white rounded-lg shadow-sm p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">NCC</h3>
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
              {current.key === 'camps' ? (
                <div>
                  <p>Sample central camp activities include:</p>
                  <ul>
                    <li>Leadership and team-building exercises.</li>
                    <li>Adventure sports (trekking, obstacle courses).</li>
                    <li>Drill and ceremonial training.</li>
                    <li>Competitive events and awarding of certificates.</li>
                  </ul>
                </div>
              ) : current.key === 'community' ? (
                <div>
                  <ul>
                    <li>Disaster relief participation and coordination.</li>
                    <li>Blood donation and health awareness drives.</li>
                    <li>
                      Tree plantation and environmental conservation projects.
                    </li>
                    <li>Community literacy and outreach programs.</li>
                  </ul>
                </div>
              ) : (
                <p>{current.content}</p>
              )}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="/student/welfare"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#800000] text-white rounded-md text-sm hover:bg-[#6a0000]"
              >
                View Training Calendar
              </a>
              <a
                href="mailto:ncc-coordinator@nith.ac.in"
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-100"
              >
                Contact Coordinator
              </a>
            </div>
          </section>
        </div>
      </main>

      
    </div>
  );
}
