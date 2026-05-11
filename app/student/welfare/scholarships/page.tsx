'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, Download, ExternalLink } from 'lucide-react';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const FACULTY = [
  {
    id: 1,
    name: 'Dr. Puneet Sharma',
    responsibility: 'Faculty Incharge cum Nodal Officer (PM-Vidyalaxmi Scheme)',
    phone: '254926',
    email: 'architect.puneet@nith.ac.in',
  },
  {
    id: 2,
    name: 'Dr. Pardeep Singh',
    responsibility: 'Associate Dean (Student Activities & Scholarships)',
    phone: '254436',
    email: 'ad_sas@nith.ac.in',
  },
];

export default function Page() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return FACULTY;
    return FACULTY.filter(
      (f) =>
        f.name.toLowerCase().includes(q) ||
        f.responsibility.toLowerCase().includes(q) ||
        f.email.toLowerCase().includes(q) ||
        f.phone.includes(q)
    );
  }, [query]);

  function copyEmail(email: string) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
      // Optionally show a tiny toast — keeping simple for now
    }
  }

  function exportCSV() {
    const header = ['Sl. No.', 'Name', 'Responsibility', 'Phone', 'Email'];
    const rows = FACULTY.map((f, i) => [
      String(i + 1),
      f.name,
      f.responsibility,
      f.phone,
      f.email,
    ]);
    const csv = [header, ...rows]
      .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'faculty-functionaries-scholarships.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header31 />

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
            <span className="text-[#800000] font-medium">Scholarships</span>
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
          className="relative z-10 text-center py-24 md:py-28 px-6 md:px-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Scholarships & Welfare
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-md md:text-lg leading-relaxed">
            Centralized information on scholarships, nodal officers, portals and
            downloadable scheme documents — aimed to help students access
            support efficiently.
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Faculty Functionaries
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Key contacts for scholarship-related queries and scheme
                    coordination.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative">
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-[#800000]/30"
                      placeholder="Search by name, role, email or phone"
                      aria-label="Search faculty"
                    />
                    <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                  </div>

                  <button
                    onClick={exportCSV}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-[#800000] text-white rounded-md text-sm hover:bg-[#6a0000]"
                  >
                    <Download className="w-4 h-4" /> Export CSV
                  </button>
                </div>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse table-auto">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-4 py-3">Sl.</th>
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3">Responsibility</th>
                      <th className="px-4 py-3">Phone</th>
                      <th className="px-4 py-3">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((f, idx) => (
                      <tr key={f.id} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 align-top">{idx + 1}</td>
                        <td className="px-4 py-3 align-top font-medium text-gray-900">
                          {f.name}
                        </td>
                        <td className="px-4 py-3 align-top text-gray-600">
                          {f.responsibility}
                        </td>
                        <td className="px-4 py-3 align-top">{f.phone}</td>
                        <td className="px-4 py-3 align-top">
                          <div className="flex items-center gap-3">
                            <a
                              href={`mailto:${f.email}`}
                              className="text-[#800000] underline"
                            >
                              {f.email}
                            </a>
                            <button
                              onClick={() => copyEmail(f.email)}
                              aria-label={`Copy ${f.email}`}
                              className="text-gray-500 hover:text-gray-700 text-sm"
                            >
                              Copy
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {filtered.length === 0 && (
                      <tr>
                        <td
                          colSpan={5}
                          className="px-4 py-6 text-center text-gray-500"
                        >
                          No functionaries match your search.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">
                How to apply / Useful links
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Direct links to portals and downloadable documents for
                scholarship applications and records.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://scholarships.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg hover:shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#800000] flex items-center justify-center text-white">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-medium">
                      National Scholarship Portal
                    </div>
                    <div className="text-xs text-gray-500">
                      Apply / Track applications
                    </div>
                  </div>
                </a>

                <a
                  href="/pdfs/scholarships-2025-26.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg hover:shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#800000] flex items-center justify-center text-white">
                    <Download className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-medium">Details (Session 2025-26)</div>
                    <div className="text-xs text-gray-500">Download PDF</div>
                  </div>
                </a>

                <a
                  href="/pdfs/scholarships-2023-24.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg hover:shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#800000] flex items-center justify-center text-white">
                    <Download className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-medium">Details (Session 2023-24)</div>
                    <div className="text-xs text-gray-500">Download PDF</div>
                  </div>
                </a>

                <a
                  href="https://pmvidyalaxmi.education.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg hover:shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#800000] flex items-center justify-center text-white">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-medium">PM-Vidyalaxmi Scheme</div>
                    <div className="text-xs text-gray-500">
                      Application portal & scheme details
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </section>

          <aside className="bg-white rounded-2xl shadow-md p-6 h-fit">
            <h3 className="text-lg font-semibold mb-2">Need Assistance?</h3>
            <p className="text-sm text-gray-600 mb-4">
              For scholarship queries and application support contact the office
              below.
            </p>

            <div className="space-y-3 text-sm">
              <div>
                <div className="font-medium">Dr. Pardeep Singh</div>
                <div className="text-gray-600">
                  Associate Dean (Student Activities & Scholarships)
                </div>
                <div className="text-gray-600">
                  Email:{' '}
                  <a href="mailto:ad_sas@nith.ac.in" className="text-[#800000]">
                    ad_sas@nith.ac.in
                  </a>
                </div>
                <div className="text-gray-600">Phone: 254436</div>
              </div>

              <div className="pt-2">
                <a
                  href="mailto:ad_sas@nith.ac.in"
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

      <Footer />
    </div>
  );
}
