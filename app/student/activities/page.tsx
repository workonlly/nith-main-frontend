'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function Page() {
  const language = useSelector((state: RootState) => state.language.value);

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
              {language == 'en' ? 'Activities' : 'गतिविधियां'}
            </span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative z-10 text-center py-20 px-6 md:px-12">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
              {language == 'en' ? 'ACTIVITIES' : 'गतिविधियां'}
            </h1>
            <p className="text-white/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              {language == 'en'
                ? 'Duties and responsibilities of the Dean (Student Welfare)'
                : 'डीन (छात्र कल्याण) के कर्तव्य और जिम्मेदारियाँ'}
            </p>
          </div>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {language == 'en'
              ? 'Dean (Student Welfare) — Role & Responsibilities'
              : 'डीन (छात्र कल्याण) — भूमिका और जिम्मेदारियां'}
          </h2>

          <p className="text-gray-700 mb-4">
            {language == 'en'
              ? 'As per the schedule ‘C’ of NIT statutes the role and responsibilities of the Dean (Student Welfare) is to conduct activities throughout the year are as follows:'
              : "एनआईटी नियमावली की अनुसूची 'C' के अनुसार, डीन (छात्र कल्याण) की भूमिकाएँ और जिम्मेदारियाँ वर्ष भर गतिविधियों का संचालन करना हैं।"}
          </p>

          <div className="prose prose-slate">
            <ul className="list-disc space-y-2 pl-6">
              <li>Advice the Director in organising the student counseling.</li>
              <li>
                Responsible for the publication of students’ Magazine, News
                Bulletins, News Letter etc.
              </li>
              <li>
                Advice the Director in matters related to students discipline
                and welfare.
              </li>
              <li>
                Assist the Director in matters related to the Students
                Union/Association/Council.
              </li>
              <li>
                Co-Ordinate the NCC, NSS, Games, Swimming Pool, Sports, Cultural
                and Co-curricular and Extra-curricular activities of the
                students.
              </li>
              <li>Keep a record of Alumni and correspond with them.</li>
              <li>
                Conduct the enquiries of students indulged in indiscipline.
              </li>
              <li>
                Correspond with Parents/Guardians of students about their
                progress and individual problem/welfare.
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
