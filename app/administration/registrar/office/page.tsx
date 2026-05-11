'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

interface Row {
  slNo: number;
  name: string;
  designation: string;
  phone: string;
  email: string;
}

const registrarRows: Row[] = [
  {
    slNo: 1,
    name: 'Dr. Archana Santosh Nanoty',
    designation: 'Registrar',
    phone: '254010, 224390',
    email: 'registrar@nith.ac.in',
  },
];

const officeStaffRows: Row[] = [
  {
    slNo: 1,
    name: 'Mr. Vasu Tyagi',
    designation: 'Junior Assistant',
    phone: '254011',
    email: '-',
  },
  {
    slNo: 2,
    name: 'Mr. Ashwani Kumar',
    designation: 'Senior Assistant (PA)',
    phone: '254011',
    email: 'ashwanisoni@nith.ac.in',
  },
];

function TableSection({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-2xl px-6 py-3 text-center border-b-2 border-[#800000]">
        <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
      </div>

      <div className="bg-white rounded-b-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gradient-to-r from-[#800000] to-[#631012] text-white">
                <th className="px-6 py-4 text-sm font-semibold">Sl. No.</th>
                <th className="px-6 py-4 text-sm font-semibold">Name</th>
                <th className="px-6 py-4 text-sm font-semibold">Designation</th>
                <th className="px-6 py-4 text-sm font-semibold">Phone No.</th>
                <th className="px-6 py-4 text-sm font-semibold">Email</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.slNo}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {row.slNo}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                    {row.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {row.designation}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {row.phone}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {row.email === '-' ? (
                      <span className="text-gray-500">-</span>
                    ) : (
                      <a
                        href={`mailto:${row.email}`}
                        className="text-[#631012] hover:underline"
                      >
                        {row.email}
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}

export default function RegistrarOfficePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header31 />

      {/* Breadcrumbs */}
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
            <Link
              href="/administration/registrar"
              className="hover:text-[#800000] transition-colors duration-200"
            >
              Registrar
            </Link>
            <span>›</span>
            <span className="text-[#800000] font-medium">Registrar Office</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
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
          className="relative z-10 text-center py-20 md:py-28 px-6 md:px-12"
        >
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
            Registrar Office
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light">
            Registrar and office staff contacts
          </p>
        </motion.div>
      </section>

      {/* Tables */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <TableSection title="Registrar" rows={registrarRows} />
        <TableSection title="Office Staff" rows={officeStaffRows} />
      </main>

      <Footer />
    </div>
  );
}
