'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type AwardFrequency = 'Annual' | 'Biennial';

interface AwardInitiative {
  id: number;
  name: string;
  initiatedBy: string;
  yearIntroduced: number;
  frequency: AwardFrequency;
  description: string;
}

interface AwardCategory {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Sample data - Replace with API call in production
const awardCategories: AwardCategory[] = [
  {
    id: 1,
    title: 'Distinguished Alumni Award',
    description:
      'Recognizes exceptional achievements and contributions to society, profession, or alma mater.',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  },
  {
    id: 2,
    title: 'Young Alumni Achievement Award',
    description:
      'Honors alumni under 40 who have demonstrated outstanding early career success and innovation.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    id: 3,
    title: 'Alumni Service Award',
    description:
      'Acknowledges dedicated service to NITH alumni association and institutional development.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    id: 4,
    title: 'Excellence in Industry / Academia / Research',
    description:
      'Celebrates outstanding contributions and leadership in industry, academia, or research fields.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    id: 5,
    title: 'Social Impact and Public Service Award',
    description:
      'Honors alumni making significant positive impact through public service and social initiatives.',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
];

const awardInitiatives: AwardInitiative[] = [
  {
    id: 1,
    name: 'Distinguished Alumni Award',
    initiatedBy: 'Alumni Association',
    yearIntroduced: 2005,
    frequency: 'Annual',
    description: 'Annual recognition of outstanding alumni achievements',
  },
  {
    id: 2,
    name: 'Young Achiever Award',
    initiatedBy: 'Institute',
    yearIntroduced: 2012,
    frequency: 'Annual',
    description: 'Celebrating promising young alumni under 40',
  },
  {
    id: 3,
    name: 'Lifetime Service Award',
    initiatedBy: 'Alumni Association',
    yearIntroduced: 2008,
    frequency: 'Biennial',
    description: 'Honoring lifelong dedication to NITH community',
  },
  {
    id: 4,
    name: 'Innovation Excellence Award',
    initiatedBy: 'Institute',
    yearIntroduced: 2015,
    frequency: 'Annual',
    description: 'Recognizing groundbreaking innovations and patents',
  },
  {
    id: 5,
    name: 'Social Impact Award',
    initiatedBy: 'Alumni Association',
    yearIntroduced: 2018,
    frequency: 'Annual',
    description: 'Acknowledging contributions to social welfare',
  },
  {
    id: 6,
    name: 'Excellence in Academia Award',
    initiatedBy: 'Institute',
    yearIntroduced: 2010,
    frequency: 'Biennial',
    description: 'Celebrating outstanding academic contributions',
  },
  {
    id: 7,
    name: 'Entrepreneurship Award',
    initiatedBy: 'Alumni Association',
    yearIntroduced: 2016,
    frequency: 'Annual',
    description: 'Honoring successful alumni entrepreneurs',
  },
  {
    id: 8,
    name: 'Research Excellence Award',
    initiatedBy: 'Institute',
    yearIntroduced: 2014,
    frequency: 'Biennial',
    description: 'Recognizing significant research contributions',
  },
];

const eligibilityCriteria = [
  {
    step: '01',
    title: 'Eligibility',
    points: [
      'Must be a graduate or postgraduate of NIT Hamirpur',
      'No current disciplinary proceedings or adverse records',
      'Demonstrated excellence in chosen field',
      'Upholding the values and reputation of the institute',
    ],
  },
  {
    step: '02',
    title: 'Nomination Process',
    points: [
      'Self-nomination or nomination by peers/faculty',
      'Submit detailed nomination form with supporting documents',
      'Provide evidence of achievements and impact',
      'Include recommendation letters (minimum 2)',
    ],
  },
  {
    step: '03',
    title: 'Selection Process',
    points: [
      'Review by Alumni Awards Committee',
      'Evaluation based on predefined criteria',
      'Shortlisting and verification of credentials',
      'Final selection by Board of Governors',
    ],
  },
  {
    step: '04',
    title: 'Recognition',
    points: [
      'Formal citation and trophy presentation',
      'Featured on NITH website and publications',
      'Invitation to speak at institute events',
      'Lifetime membership of alumni association',
    ],
  },
];

export default function AwardsInitiatives() {
  const getFrequencyBadge = (frequency: AwardFrequency) => {
    return frequency === 'Annual'
      ? 'bg-blue-50 text-blue-700 border-blue-200'
      : 'bg-purple-50 text-purple-700 border-purple-200';
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
                Awards Initiatives
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
                Awards Initiatives
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                Recognizing excellence, celebrating achievements, and honoring
                the outstanding contributions of our distinguished alumni
                community.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-sm p-6 md:p-10 mb-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#631012] to-[#7a1a1d] flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    About Alumni Awards
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      The Alumni Awards Initiatives at NIT Hamirpur represent
                      our commitment to recognizing and celebrating the
                      exceptional achievements of our alumni who have made
                      significant contributions to society, their professions,
                      and our alma mater.
                    </p>
                    <p>
                      These awards serve multiple purposes: they honor
                      individual excellence, inspire current students and fellow
                      alumni, strengthen our alumni community bonds, and
                      showcase the caliber of talent that NITH produces. Through
                      these initiatives, we acknowledge not just professional
                      success, but also dedication to social service,
                      innovation, research excellence, and lifelong commitment
                      to the institute&lsquo;s values.
                    </p>
                    <p>
                      Our alumni community plays a vital role in instituting and
                      supporting these awards, ensuring that the recognition
                      remains meaningful and continues to evolve with changing
                      times while maintaining the highest standards of
                      excellence.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Categories of Awards
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We recognize excellence across multiple dimensions to honor
                  diverse achievements and contributions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {awardCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#631012] text-white flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={category.icon}
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {category.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Awards Initiatives & Schemes
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Comprehensive overview of ongoing and established award
                  programs
                </p>
              </div>

              <div className="hidden lg:block bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Award Name
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Initiated By
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Year
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Frequency
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <AnimatePresence mode="popLayout">
                        {awardInitiatives.map((award, index) => (
                          <motion.tr
                            key={award.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="hover:bg-gray-50/80 transition-colors duration-200"
                          >
                            <td className="px-6 py-5">
                              <div>
                                <p className="font-semibold text-gray-900">
                                  {award.name}
                                </p>
                                <p className="text-sm text-gray-500 mt-1">
                                  {award.description}
                                </p>
                              </div>
                            </td>
                            <td className="px-6 py-5">
                              <span className="text-sm text-gray-700">
                                {award.initiatedBy}
                              </span>
                            </td>
                            <td className="px-6 py-5">
                              <span className="text-sm font-medium text-gray-900">
                                {award.yearIntroduced}
                              </span>
                            </td>
                            <td className="px-6 py-5">
                              <span
                                className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium border ${getFrequencyBadge(
                                  award.frequency
                                )}`}
                              >
                                {award.frequency}
                              </span>
                            </td>
                          </motion.tr>
                        ))}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="lg:hidden space-y-4">
                <AnimatePresence mode="popLayout">
                  {awardInitiatives.map((award, index) => (
                    <motion.div
                      key={award.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-white rounded-xl shadow-sm p-5 border border-gray-100"
                    >
                      <div className="mb-3">
                        <h3 className="font-bold text-gray-900 text-lg">
                          {award.name}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        {award.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-gray-500 mb-1">Initiated By</p>
                          <p className="font-medium text-gray-900">
                            {award.initiatedBy}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500 mb-1">Year Introduced</p>
                          <p className="font-medium text-gray-900">
                            {award.yearIntroduced}
                          </p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-gray-500 mb-1">Frequency</p>
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium border ${getFrequencyBadge(
                              award.frequency
                            )}`}
                          >
                            {award.frequency}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {awardInitiatives.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 bg-white rounded-2xl"
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
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No Awards Found
                  </h3>
                  <p className="text-gray-500">
                    No award initiatives match your current filter.
                  </p>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Eligibility & Selection Process
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Understanding the criteria and process for award nominations
                  and selection
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {eligibilityCriteria.map((section, index) => (
                  <motion.div
                    key={section.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#631012] to-[#7a1a1d] flex items-center justify-center">
                        <span className="text-white text-xl font-bold">
                          {section.step}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {section.title}
                        </h3>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {section.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-[#631012] flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-12"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Recognition & Benefits
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Awardees receive prestigious recognition and become part of an
                  elite community
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
                    title: 'Citation & Trophy',
                    description:
                      'Formal certificate and prestigious trophy presented at convocation',
                  },
                  {
                    icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z',
                    title: 'Media Coverage',
                    description:
                      'Featured prominently on website and alumni publications',
                  },
                  {
                    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
                    title: 'Speaking Opportunities',
                    description:
                      'Invitation to address students and participate in events',
                  },
                  {
                    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
                    title: 'Lifetime Membership',
                    description:
                      'Honorary lifetime membership of alumni association',
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={benefit.icon}
                        />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="bg-gradient-to-br from-[#631012] via-[#7a1a1d] to-[#4a0c0e] rounded-2xl shadow-xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join Us in Celebrating Excellence
              </h2>
              <p className="text-gray-200 text-lg mb-8 max-w-3xl mx-auto">
                Help us recognize and honor outstanding alumni. Nominate
                deserving candidates or propose new award initiatives to
                strengthen our community.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#631012] rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                  Nominate an Alumni
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors border-2 border-white/30 backdrop-blur-sm"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Propose an Award Initiative
                </motion.button>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-gray-300 text-sm">
                  For inquiries about award nominations or initiatives, contact{' '}
                  <a
                    href="mailto:alumni@nith.ac.in"
                    className="text-white font-semibold hover:underline"
                  >
                    alumni@nith.ac.in
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      
    </>
  );
}
