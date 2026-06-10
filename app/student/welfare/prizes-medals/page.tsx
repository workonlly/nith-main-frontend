'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Award,
  Star,
  GraduationCap,
  Users,
  Download,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const PRIZES = [
  {
    id: 'p1',
    icon: Award,
    title: 'Best Academic Performance (B.Tech)',
    description:
      'Awarded to the top graduating student in each B.Tech program for outstanding academic achievement and consistent excellence.',
    eligibility: 'Final year B.Tech students. CGPA and conduct considered.',
    award: 'Medal & Certificate',
  },
  {
    id: 'p2',
    icon: Star,
    title: 'Research Excellence Award',
    description:
      'Recognises students who have made significant research contributions, publications, or project innovations during their tenure.',
    eligibility:
      'Students with peer-reviewed publications or high-impact projects.',
    award: 'Certificate & Cash Prize',
  },
  {
    id: 'p3',
    icon: GraduationCap,
    title: 'Best All-Rounder Student',
    description:
      'Honours a student who demonstrates a balance of academic success, leadership, and community engagement.',
    eligibility:
      'Any student with exemplary records across academics & activities.',
    award: 'Medal & Citation',
  },
  {
    id: 'p4',
    icon: Users,
    title: 'Community Service Medal',
    description:
      'Presented to students who have made noteworthy contributions to social causes and campus community development.',
    eligibility: 'Students with verifiable service hours and initiatives.',
    award: 'Medal & Appreciation Certificate',
  },
];

export default function PrizesMedalsPage() {
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
            <span className="text-gray-400">Welfare</span>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              Prizes &amp; Medals
            </span>
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
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            Prizes &amp; Medals
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            A curated list of campus prizes, medals and awards recognising
            excellence across academics, research and service — complete this
            page as well with consistency.
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Recognitions &amp; Eligibility
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Details on award criteria, nomination process, and what each
                honour represents.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {PRIZES.map((p) => {
                const Icon = p.icon;
                return (
                  <motion.article
                    key={p.id}
                    variants={fadeInScale}
                    className="group relative bg-white rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#800000] to-[#631012] flex items-center justify-center mb-4 shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#800000] transition-colors">
                        {p.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {p.description}
                      </p>

                      <div className="text-sm text-gray-700">
                        <div className="mb-1">
                          <strong className="text-gray-900">
                            Eligibility:
                          </strong>{' '}
                          {p.eligibility}
                        </div>
                        <div>
                          <strong className="text-gray-900">Award:</strong>{' '}
                          {p.award}
                        </div>
                      </div>

                      <div className="mt-4 flex items-center text-[#800000] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-medium">
                          Nomination / Details
                        </span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">
                Downloadable Documents
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Forms, nomination templates and past award lists for reference.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="/pdfs/prizes-medals-guidelines.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg hover:shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#800000] flex items-center justify-center text-white">
                    <Download className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-medium">
                      Prizes &amp; Medals Guidelines
                    </div>
                    <div className="text-xs text-gray-500">Download PDF</div>
                  </div>
                </a>

                <a
                  href="/pdfs/prizes-medals-past-awards.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg hover:shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#800000] flex items-center justify-center text-white">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-medium">
                      Past Awardees (Last 5 Years)
                    </div>
                    <div className="text-xs text-gray-500">View list</div>
                  </div>
                </a>
              </div>
            </div>
          </section>

          <aside className="bg-white rounded-2xl shadow-md p-6 h-fit">
            <h3 className="text-lg font-semibold mb-2">
              Contact &amp; Nomination Desk
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              For nominations, clarifications and ceremony coordination, reach
              out to the faculty incharge below.
            </p>

            <div className="space-y-3 text-sm">
              <div>
                <div className="font-medium">Dr. Jane Doe</div>
                <div className="text-gray-600">
                  Associate Dean (Student Welfare)
                </div>
                <div className="text-gray-600">
                  Email:{' '}
                  <a
                    href="mailto:studentwelfare@nith.ac.in"
                    className="text-[#800000]"
                  >
                    studentwelfare@nith.ac.in
                  </a>
                </div>
                <div className="text-gray-600">Phone: 254000</div>
              </div>

              <div className="pt-2">
                <a
                  href="mailto:studentwelfare@nith.ac.in"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#800000] text-white rounded-md text-sm hover:bg-[#6a0000]"
                >
                  Email Office
                </a>
              </div>
            </div>

            <div className="mt-6 border-t pt-4 text-xs text-gray-500">
              <div>Last updated: Jan 2026</div>
            </div>
          </aside>
        </div>
      </main>

      
    </div>
  );
}
