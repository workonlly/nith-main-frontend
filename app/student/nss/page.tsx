'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const SECTIONS = [
  {
    key: 'about',
    title: 'About NSS',
    content:
      'The National Service Scheme (NSS) is a public service program under the Ministry of Youth Affairs and Sports. NSS aims to develop students personality through community service and to inculcate social responsibility among youth.',
  },
  {
    key: 'objective',
    title: 'Objective of NSS',
    content:
      '1) To understand community issues and work towards solutions. 2) To foster social responsibility and leadership. 3) To provide service experience that complements academic learning.',
  },
  {
    key: 'activities',
    title: 'NSS Regular Activities',
    content:
      'Regular activities include community outreach, blood donation camps, environmental drives, awareness campaigns, skill-development workshops, campus cleanliness drives, and disaster relief support. (Dummy list)',
  },
  {
    key: 'contact',
    title: 'Contact Us',
    content:
      'NSS Coordinator: nss-coordinator@nith.ac.in\nPhone: +91-00000-00000\nOffice: Student Affairs Building, Office hours: Mon-Fri 10:00-16:00',
  },
];

export default function Page() {
  const [active, setActive] = useState<string>('about');
  const current = SECTIONS.find((s) => s.key === active) ?? SECTIONS[0];

  return (
    <div className=" bg-gray-50  ">
      <div>
        <Header31 />
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
            <span className="text-[#800000] font-medium">NSS</span>
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
            National Service Scheme (NSS)
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            NSS encourages students to participate in community service and
            social outreach activities to foster social responsibility and
            leadership.
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-72 bg-white rounded-lg shadow-sm p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">NSS</h3>
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
              {current.key === 'objective' ? (
                <div>
                  <p>Key objectives of NSS include:</p>
                  <ul>
                    <li>
                      Developing student personality through community service.
                    </li>
                    <li>Creating social awareness and leadership skills.</li>
                    <li>Promoting national integration and social cohesion.</li>
                  </ul>
                </div>
              ) : current.key === 'activities' ? (
                <div>
                  <ul>
                    <li>Weekly community camps and outreach programs.</li>
                    <li>Blood donation and health awareness camps.</li>
                    <li>Environmental drives and cleanliness campaigns.</li>
                    <li>Skill-building workshops and training sessions.</li>
                  </ul>
                </div>
              ) : current.key === 'contact' ? (
                <div>
                  <p>
                    <strong>Coordinator:</strong> NSS Coordinator
                    <br />
                    <strong>Email:</strong>{' '}
                    <a
                      href="mailto:nss-coordinator@nith.ac.in"
                      className="text-[#800000]"
                    >
                      nss-coordinator@nith.ac.in
                    </a>
                    <br />
                    <strong>Phone:</strong> +91-00000-00000
                  </p>
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
                View Activities Calendar
              </a>
              <a
                href="mailto:nss-coordinator@nith.ac.in"
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-100"
              >
                Contact Coordinator
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
