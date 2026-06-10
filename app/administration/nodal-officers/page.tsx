'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

interface NodalOfficer {
  slNo: number;
  name: string;
  responsibility: string;
  phone: string;
  email: string;
}

const nodalOfficers: NodalOfficer[] = [
  {
    slNo: 1,
    name: 'Dr. Archana Santosh Nanoty (Registrar)',
    responsibility: 'Media Cell',
    phone: '254010',
    email: 'registrar@nith.ac.in',
  },
  {
    slNo: 2,
    name: 'Dr. Subhash Chand',
    responsibility: 'Legal Cell',
    phone: '254136',
    email: 'schand@nith.ac.in',
  },
  {
    slNo: 3,
    name: 'Dr. Anoop Kumar',
    responsibility: 'Hindi Cell',
    phone: '254726',
    email: 'anoop@nith.ac.in',
  },
  {
    slNo: 4,
    name: 'Dr. Chander Prakash',
    responsibility:
      'Unnat Bharat Abhiyan & India Universities and Institutes Network for Disaster Risk Reduction (IUINDRR)',
    phone: '254344',
    email: 'uba.rbl@nith.ac.in',
  },
  {
    slNo: 5,
    name: 'Dr. Rajeev Kumar',
    responsibility: 'Rashtriya Avishkar Abhiyan',
    phone: '254434',
    email: 'rajeev@nith.ac.in',
  },
  {
    slNo: 6,
    name: 'Dr. Sandeep Sharma',
    responsibility: 'Swachh Bharat Abhiyan',
    phone: '254924',
    email: 'sandeep@nith.ac.in',
  },
  {
    slNo: 7,
    name: 'Dr. Dharmendra',
    responsibility: 'Skill India',
    phone: '254318',
    email: 'djha@nith.ac.in',
  },
  {
    slNo: 8,
    name: 'Dr. Supriya Jaiswal',
    responsibility: 'Ek Bharat Shereshtha Bharat',
    phone: '254501',
    email: 'supriya@nith.ac.in',
  },
  {
    slNo: 9,
    name: 'Dr. Krishan Kumar',
    responsibility: 'MeitY',
    phone: '254642',
    email: 'krishan_rathod@nith.ac.in',
  },
  {
    slNo: 10,
    name: 'Dr. Rajiv Kumar Sharma',
    responsibility:
      'YUKTI (Young India combating COVID with Knowledge, Technology and Innovation)',
    phone: '254738',
    email: 'rksfme@nith.ac.in',
  },
  {
    slNo: 11,
    name: 'Dr. Arun Kumar Yadav',
    responsibility:
      'Equal Opportunity Cell and Liaison Officer for Visually Challenged/PwD Category',
    phone: '254402',
    email: 'ayadav@nith.ac.in',
  },
  {
    slNo: 12,
    name: 'Dr. Richa Joshi',
    responsibility: 'ARIIA',
    phone: '254150',
    email: 'richajoshi@nith.ac.in',
  },
  {
    slNo: 13,
    name: 'Dr. Mani Verma',
    responsibility: 'Red Ribbon Club',
    phone: '254690',
    email: 'doctor@nith.ac.in',
  },
  {
    slNo: 14,
    name: 'Dr. Kuldeep Kumar Sharma',
    responsibility: 'NIRF',
    phone: '254117',
    email: 'kks@nith.ac.in',
  },
  {
    slNo: 15,
    name: 'Dr. Ravinder Nath Sharma',
    responsibility: 'National Educational Policy (NEP)',
    phone: '254532',
    email: 'nath@nith.ac.in',
  },
  {
    slNo: 16,
    name: 'Sh. Anil Kumar Sharma ( DR F&A)',
    responsibility: 'Pension',
    phone: '254032',
    email: 'draccount@nith.ac.in',
  },
  {
    slNo: 17,
    name: 'Dr. Abhijeet Bhattacharyya',
    responsibility: 'Digital India',
    phone: '254601',
    email: 'abhijit@nith.ac.in',
  },
  {
    slNo: 18,
    name: 'Dr. Sunil Sharma',
    responsibility: 'National Task Force',
    phone: '254316',
    email: 'sunils@nith.ac.in',
  },
  {
    slNo: 19,
    name: 'Dr. Gargi Khanna,DoECE',
    responsibility: 'MeitY-Scholarship',
    phone: '254634, 98058 70101',
    email: 'krishan_rathod@nith.ac.in',
  },
  {
    slNo: 20,
    name: 'Dr. Neetu Kapoor, DoARCH',
    responsibility: 'Institute Magazine & News Bulletin',
    phone: '254930, 7018302021',
    email: 'neetu@nith.ac.in',
  },
  {
    slNo: 21,
    name: 'Dr. Ray Singh Meena, DoCE',
    responsibility: 'Jan Jaliya Gaurav Diwas (JJGD)',
    phone: '254301',
    email: 'rsmeena@nith.ac.in',
  },
];

export default function NodalOfficersPage() {
  return (
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
            <span className="text-gray-400">Administration</span>
            <span>›</span>
            <span className="text-[#800000] font-medium">Nodal Officers</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center py-24 md:py-32 px-6 md:px-12"
        >
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            Nodal Officers
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Officers responsible for various institutional initiatives
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-2xl px-6 py-3 text-center border-b-2 border-[#800000]">
            <h2 className="text-xl font-semibold text-gray-700">
              Nodal Officers
            </h2>
          </div>

          <div className="bg-white rounded-b-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gradient-to-r from-[#800000] to-[#631012] text-white">
                    <th className="px-6 py-4 text-sm font-semibold">Sl. No.</th>
                    <th className="px-6 py-4 text-sm font-semibold">Name</th>
                    <th className="px-6 py-4 text-sm font-semibold">
                      Responsibility
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold">
                      Phone No.
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {nodalOfficers.map((officer) => (
                    <tr
                      key={officer.slNo}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {officer.slNo}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                        {officer.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {officer.responsibility}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {officer.phone}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <a
                          href={`mailto:${officer.email}`}
                          className="text-[#631012] hover:underline"
                        >
                          {officer.email}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </main>

      
    </div>
  );
}
