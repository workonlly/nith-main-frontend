'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Page() {
  const language = useSelector((state: RootState) => state.language.value);

  const rows = [
    ['Dean (Faculty Welfare)', 'Chairman'],
    ['Dean (Student Welfare)', 'Member'],
    ['Dr Pawan Sharma, DoMSC', 'Member'],
    ['FI (Security)', 'Member'],
    ['Associate Dean (Student Disc. & Counc.)', 'Member'],
    ['Chief Warden (Hostels)', 'Member'],
    ['Prof (Mrs.) Rajeevan Chandel, DoECE', 'Member'],
    ['Dr. Naveen Chauhan, DoCSE (Liaison Officer SC/ST Cell)', 'Member'],
    ['Mr. Shivansh, Roll No. 21BCH016', 'Special Invitee'],
  ];

  return (
    <div className="min-h-screen bg-white">
      

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
            <span className="text-[#800000] font-medium">SGRC</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center py-24 md:py-32 px-6 md:px-12"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            Student Grievances Redressal Committee (SGRC)
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            {language == 'en'
              ? 'Committee members and designations'
              : 'समिति सदस्य और पद'}
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Student Grievances Redressal Committee (SGRC)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left table-fixed border-collapse">
              <colgroup>
                <col style={{ width: '8%' }} />
                <col style={{ width: '56%' }} />
                <col style={{ width: '36%' }} />
              </colgroup>
              <thead>
                <tr className="text-sm text-gray-500 border-b">
                  <th className="py-3 pr-6">S.N.</th>
                  <th className="py-3 pr-6">Name</th>
                  <th className="py-3 pr-6">Designation</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="py-3 align-top">{i + 1}</td>
                    <td className="py-3 align-top">
                      <div className="font-medium text-slate-800">{r[0]}</div>
                    </td>
                    <td className="py-3 align-top text-slate-600">{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      
    </div>
  );
}
