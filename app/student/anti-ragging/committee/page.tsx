'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Page() {
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
            <span className="text-[#800000] font-medium">
              Anti Ragging Empowered Committee
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
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Anti Ragging Empowered Committee
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            The Committee is responsible for ensuring a ragging-free campus and
            handling complaints as per Institute regulations and UGC guidelines.
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6 prose prose-sm max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900">
              Committee Details
            </h2>

            <p>
              The Anti Ragging Empowered Committee is constituted to take prompt
              action on complaints of ragging and ensure a safe and respectful
              environment for all students. The committee investigates reported
              incidents, recommends disciplinary action and coordinates with
              hostel authorities and law enforcement when necessary.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm border-collapse table-auto">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-4 py-2">Sl. No.</th>
                    <th className="px-4 py-2">Designation</th>
                    <th className="px-4 py-2">Responsibility</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">1</td>
                    <td className="px-4 py-3 align-top">
                      Dean (Student Welfare)
                    </td>
                    <td className="px-4 py-3 align-top">Chairperson</td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">2</td>
                    <td className="px-4 py-3 align-top">
                      Associate Dean (Student Discipline & Counselling)
                    </td>
                    <td className="px-4 py-3 align-top">Member</td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">3</td>
                    <td className="px-4 py-3 align-top">
                      Chief Warden (Hostels)
                    </td>
                    <td className="px-4 py-3 align-top">Member</td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">4</td>
                    <td className="px-4 py-3 align-top">
                      Faculty Incharge (Training & Placement)
                    </td>
                    <td className="px-4 py-3 align-top">Member</td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">5</td>
                    <td className="px-4 py-3 align-top">Concerned HoD/HoC</td>
                    <td className="px-4 py-3 align-top">Members</td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">6</td>
                    <td className="px-4 py-3 align-top">
                      Warden of Concerned Hostel
                    </td>
                    <td className="px-4 py-3 align-top">Member</td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">7</td>
                    <td className="px-4 py-3 align-top">
                      Faculty Incharge (Student Discipline)
                    </td>
                    <td className="px-4 py-3 align-top">Member Secretary</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-sm text-gray-600">
              If you witness or experience ragging, please report immediately to
              the Committee or the Dean&apos;s office. Confidential reporting
              channels are available.
            </p>
          </article>

          <aside className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Need Help?
            </h3>
            <p className="text-sm text-gray-600">
              To report an incident or seek assistance, contact:
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <div>
                <div className="font-medium">Dean (Student Welfare)</div>
                <div className="text-gray-600">
                  Email:{' '}
                  <a
                    href="mailto:dean.student@nith.ac.in"
                    className="text-[#800000]"
                  >
                    dean.student@nith.ac.in
                  </a>
                </div>
              </div>

              <div>
                <div className="font-medium">
                  Faculty Incharge (Student Discipline)
                </div>
                <div className="text-gray-600">
                  Email:{' '}
                  <a
                    href="mailto:discipline@nith.ac.in"
                    className="text-[#800000]"
                  >
                    discipline@nith.ac.in
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/student/discipline/board"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#800000] text-white rounded-md text-sm hover:bg-[#6a0000]"
                >
                  View Discipline Board
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      
    </div>
  );
}
