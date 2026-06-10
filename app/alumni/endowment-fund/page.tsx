'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Initiative {
  id: number;
  title: string;
  description: string;
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  year: string;
  amount?: string;
}

// Sample data - Can be replaced with API call in future
const initiativesData: Initiative[] = [
  {
    id: 1,
    title: 'Merit Scholarship Fund',
    description:
      'Supporting academically excellent students from economically weaker sections with full tuition fee coverage and book allowances.',
    status: 'Ongoing',
    year: '2024-25',
    amount: '₹50 Lakhs',
  },
  {
    id: 2,
    title: 'Research Excellence Grant',
    description:
      'Funding cutting-edge research projects in AI, renewable energy, and materials science with state-of-the-art equipment.',
    status: 'Ongoing',
    year: '2024-25',
    amount: '₹1.2 Crores',
  },
  {
    id: 3,
    title: 'Advanced Laboratory Setup',
    description:
      'Establishment of advanced laboratories for Computer Science, Electronics, and Mechanical Engineering departments.',
    status: 'Completed',
    year: '2023-24',
    amount: '₹2 Crores',
  },
  {
    id: 4,
    title: 'Student Innovation & Startup Fund',
    description:
      'Seed funding for student-led startups and innovation projects through the incubation center.',
    status: 'Ongoing',
    year: '2024-25',
    amount: '₹75 Lakhs',
  },
  {
    id: 5,
    title: 'Faculty Development Program',
    description:
      'Supporting faculty members for international conferences, research collaborations, and advanced training programs.',
    status: 'Upcoming',
    year: '2025-26',
    amount: '₹40 Lakhs',
  },
  {
    id: 6,
    title: 'Infrastructure Modernization',
    description:
      'Upgrading campus infrastructure including smart classrooms, lecture halls, and recreational facilities.',
    status: 'Upcoming',
    year: '2025-26',
    amount: '₹3 Crores',
  },
];

const objectives = [
  {
    icon: (
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
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    title: 'Student Scholarships & Financial Aid',
    description:
      'Provide merit-based and need-based scholarships to deserving students, ensuring access to quality education regardless of financial background.',
  },
  {
    icon: (
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: 'Faculty Development & Research Support',
    description:
      'Enable faculty members to pursue advanced research, attend international conferences, and collaborate with global institutions.',
  },
  {
    icon: (
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
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: 'Infrastructure & Laboratory Enhancement',
    description:
      'Develop world-class infrastructure, modern laboratories, and advanced equipment to foster innovation and practical learning.',
  },
  {
    icon: (
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: 'Innovation, Startups & Incubation Support',
    description:
      'Promote entrepreneurial culture by providing seed funding, mentorship, and resources for student-led startups and innovative projects.',
  },
  {
    icon: (
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
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: 'Long-term Financial Sustainability',
    description:
      'Build a robust financial foundation that ensures the institute can maintain excellence and adapt to future educational challenges.',
  },
  {
    icon: (
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: 'Student Welfare & Campus Development',
    description:
      'Enhance student life through improved facilities, recreational areas, mental health support, and overall campus development.',
  },
];

export default function EndowmentFundGeneration() {
  const [activeTab, setActiveTab] = useState<
    'All' | 'Ongoing' | 'Completed' | 'Upcoming'
  >('All');
  const [loading, setLoading] = useState(false);

  const filteredInitiatives =
    activeTab === 'All'
      ? initiativesData
      : initiativesData.filter((init) => init.status === activeTab);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ongoing':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Completed':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Upcoming':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <>
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
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
                Endowment Fund Generation
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#631012] via-[#7a1a1d] to-[#4a0c0e] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Endowment Fund Generation
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                Building a sustainable future for NIT Hamirpur through strategic
                endowment initiatives that support academic excellence,
                innovation, and student welfare.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About the Endowment Fund */}
        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#631012] flex items-center justify-center flex-shrink-0">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    About the Endowment Fund
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      An <strong>Endowment Fund</strong> is a permanent fund
                      established to provide long-term financial support to NIT
                      Hamirpur. The principal amount is invested prudently, and
                      the generated returns are utilized to support various
                      institutional initiatives without depleting the core
                      corpus.
                    </p>
                    <p>
                      The Endowment Fund plays a crucial role in supporting{' '}
                      <strong>academic excellence</strong>,{' '}
                      <strong>cutting-edge research</strong>,{' '}
                      <strong>modern infrastructure development</strong>,{' '}
                      <strong>student scholarships</strong>,{' '}
                      <strong>faculty development</strong>, and overall{' '}
                      <strong>student welfare</strong> at the institute.
                    </p>
                    <p>
                      <strong>Alumni participation</strong> is vital to the
                      success of these initiatives. By contributing to the
                      endowment fund, alumni give back to their alma mater,
                      ensuring that future generations of students receive the
                      same quality education and opportunities that shaped their
                      own careers.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Objectives Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Objectives of Endowment Fund Generation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {objectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#631012] text-white flex items-center justify-center mb-4">
                      {objective.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {objective.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {objective.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Initiatives Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">
                  Endowment Fund Initiatives
                </h2>
                <div className="flex flex-wrap gap-2">
                  {(['All', 'Ongoing', 'Completed', 'Upcoming'] as const).map(
                    (tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          activeTab === tab
                            ? 'bg-[#631012] text-white shadow-sm'
                            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                        }`}
                      >
                        {tab}
                      </button>
                    )
                  )}
                </div>
              </div>

              {filteredInitiatives.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredInitiatives.map((initiative, index) => (
                    <motion.div
                      key={initiative.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {initiative.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                                initiative.status
                              )}`}
                            >
                              {initiative.status}
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                              {initiative.year}
                            </span>
                          </div>
                        </div>
                        {initiative.amount && (
                          <div className="text-right ml-4">
                            <div className="text-sm text-gray-500 mb-1">
                              Amount
                            </div>
                            <div className="text-lg font-bold text-[#631012]">
                              {initiative.amount}
                            </div>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {initiative.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl p-12 text-center"
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No initiatives found
                  </h3>
                  <p className="text-gray-600">
                    There are no {activeTab.toLowerCase()} initiatives to
                    display at this time.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Contribution & Participation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-[#631012] via-[#7a1a1d] to-[#4a0c0e] rounded-2xl p-6 md:p-8 mb-8 text-white"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    How You Can Contribute
                  </h2>
                  <div className="space-y-4 text-gray-100 leading-relaxed">
                    <p>
                      Your contribution to the NIT Hamirpur Endowment Fund makes
                      a lasting impact on the lives of students and the future
                      of the institute. There are several ways you can
                      participate:
                    </p>
                    <ul className="space-y-3 ml-6">
                      <li className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>
                          <strong>Financial Contributions:</strong> Make
                          one-time or recurring donations to support the overall
                          endowment corpus.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>
                          <strong>Sponsored Scholarships:</strong> Establish
                          named scholarships in your name or in memory of loved
                          ones.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>
                          <strong>Infrastructure Support:</strong> Sponsor
                          laboratories, classrooms, or specific equipment for
                          academic departments.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>
                          <strong>Research Grants:</strong> Fund specific
                          research projects or provide research fellowships for
                          faculty and students.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-6">
                    <button className="px-6 py-3 bg-white text-[#631012] rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-md">
                      Contribute to Endowment Fund
                    </button>
                    <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-200">
                      Contact Alumni Office
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Transparency & Governance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8 mb-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Transparency & Governance
                  </h2>
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    <p>
                      At NIT Hamirpur, we are committed to maintaining the
                      highest standards of{' '}
                      <strong>transparency and accountability</strong> in
                      managing the endowment fund. Every contribution is handled
                      with utmost care and responsibility.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-white rounded-xl p-4 border border-blue-200">
                        <div className="text-sm text-blue-600 font-semibold mb-1">
                          Oversight
                        </div>
                        <div className="text-sm text-gray-700">
                          Managed by a dedicated committee comprising senior
                          faculty, administration, and alumni representatives.
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-blue-200">
                        <div className="text-sm text-blue-600 font-semibold mb-1">
                          Investment
                        </div>
                        <div className="text-sm text-gray-700">
                          Prudent investment strategies ensure sustainable
                          growth while preserving the principal corpus.
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-blue-200">
                        <div className="text-sm text-blue-600 font-semibold mb-1">
                          Reporting
                        </div>
                        <div className="text-sm text-gray-700">
                          Regular audits and annual reports are published to
                          keep all stakeholders informed.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#631012] text-white flex items-center justify-center flex-shrink-0">
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      Alumni Office
                    </div>
                    <div className="text-sm text-gray-600">
                      National Institute of Technology Hamirpur
                      <br />
                      Hamirpur, Himachal Pradesh - 177005
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#631012] text-white flex items-center justify-center flex-shrink-0">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:alumni@nith.ac.in"
                      className="text-sm text-[#631012] hover:underline"
                    >
                      alumni@nith.ac.in
                    </a>
                    <br />
                    <a
                      href="mailto:endowment@nith.ac.in"
                      className="text-sm text-[#631012] hover:underline"
                    >
                      endowment@nith.ac.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#631012] text-white flex items-center justify-center flex-shrink-0">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      Phone
                    </div>
                    <a
                      href="tel:+911972223467"
                      className="text-sm text-[#631012] hover:underline"
                    >
                      +91-1972-223467
                    </a>
                    <br />
                    <a
                      href="tel:+911972254200"
                      className="text-sm text-[#631012] hover:underline"
                    >
                      +91-1972-254200
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#631012] text-white flex items-center justify-center flex-shrink-0">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      Office Hours
                    </div>
                    <div className="text-sm text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      
    </>
  );
}
