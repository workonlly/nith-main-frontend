'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Page() {
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
              Home
            </Link>
            <span>›</span>
            <span className="text-gray-400">Academics</span>
            <span>›</span>
            <span className="text-[#800000] font-medium">Functionaries</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center py-24 md:py-32 px-6 md:px-12"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            Functionaries
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Contact details of academic functionaries and office staff
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Dean &amp; Associate Deans
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left table-fixed border-collapse">
                <colgroup>
                  <col style={{ width: '6%' }} />
                  <col style={{ width: '28%' }} />
                  <col style={{ width: '36%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '20%' }} />
                </colgroup>
                <thead>
                  <tr className="text-sm text-gray-500 border-b">
                    <th className="py-3 pr-6">Sl. No.</th>
                    <th className="py-3 pr-6">Name</th>
                    <th className="py-3 pr-6">Responsibility</th>
                    <th className="py-3 pr-6">Phone No.</th>
                    <th className="py-3 pr-6">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">1</td>
                    <td className="py-3">Dr. Siddhartha Sharma</td>
                    <td className="py-3">Dean (Academics)</td>
                    <td className="py-3">254006</td>
                    <td className="py-3">
                      <a
                        href="mailto:dac@nith.ac.in"
                        className="text-[#800000]"
                      >
                        dac@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">2</td>
                    <td className="py-3">Dr. Ravinder Nath Sharma</td>
                    <td className="py-3">
                      Associate Dean (UG-PG Establishment)
                    </td>
                    <td className="py-3">254532</td>
                    <td className="py-3">
                      <a
                        href="mailto:nath@nith.ac.in"
                        className="text-[#800000]"
                      >
                        nath@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">3</td>
                    <td className="py-3">Dr. Rohit Dhiman</td>
                    <td className="py-3">
                      Associate Dean (Examination &amp; Evaluation)
                    </td>
                    <td className="py-3">254601</td>
                    <td className="py-3">
                      <a
                        href="mailto:ad-ee@nith.ac.in"
                        className="text-[#800000]"
                      >
                        ad-ee@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">4</td>
                    <td className="py-3">Dr. Vandana Sharma</td>
                    <td className="py-3">
                      Associate Dean (Admissions &amp; Registration)
                    </td>
                    <td className="py-3">254920</td>
                    <td className="py-3">
                      <a
                        href="mailto:ad-ar@nith.ac.in"
                        className="text-[#800000]"
                      >
                        ad-ar@nith.ac.in
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg shadow-sm p-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Chairpersons (SBPC / SMPC / SDPC)
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left table-fixed border-collapse">
                <colgroup>
                  <col style={{ width: '6%' }} />
                  <col style={{ width: '28%' }} />
                  <col style={{ width: '36%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '20%' }} />
                </colgroup>
                <thead>
                  <tr className="text-sm text-gray-500 border-b">
                    <th className="py-3 pr-6">Sl. No.</th>
                    <th className="py-3 pr-6">Name</th>
                    <th className="py-3 pr-6">Responsibility</th>
                    <th className="py-3 pr-6">Phone No.</th>
                    <th className="py-3 pr-6">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">1</td>
                    <td className="py-3">Dr. U.K. Pandey</td>
                    <td className="py-3">Chairperson (SDPC)</td>
                    <td className="py-3">254342</td>
                    <td className="py-3">
                      <a
                        href="mailto:ukp@nith.ac.in"
                        className="text-[#800000]"
                      >
                        ukp@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">2</td>
                    <td className="py-3">Dr. Gargi Khanna</td>
                    <td className="py-3">Chairperson (SMPC)</td>
                    <td className="py-3">254634</td>
                    <td className="py-3">
                      <a
                        href="mailto:gargi@nith.ac.in"
                        className="text-[#800000]"
                      >
                        gargi@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">3</td>
                    <td className="py-3">Dr. Rajeevan Chandel</td>
                    <td className="py-3">Chairperson (SBPC)</td>
                    <td className="py-3">254624</td>
                    <td className="py-3">
                      <a
                        href="mailto:rchandel@nith.ac.in"
                        className="text-[#800000]"
                      >
                        rchandel@nith.ac.in
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Admission &amp; Registration &amp; Automation
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left table-fixed border-collapse">
                <colgroup>
                  <col style={{ width: '6%' }} />
                  <col style={{ width: '28%' }} />
                  <col style={{ width: '36%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '20%' }} />
                </colgroup>
                <thead>
                  <tr className="text-sm text-gray-500 border-b">
                    <th className="py-3 pr-6">Sl. No.</th>
                    <th className="py-3 pr-6">Name</th>
                    <th className="py-3 pr-6">Responsibility</th>
                    <th className="py-3 pr-6">Phone No.</th>
                    <th className="py-3 pr-6">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">1</td>
                    <td className="py-3">Dr. Jiwanjot Singh</td>
                    <td className="py-3">Faculty Incharge (Registration)</td>
                    <td className="py-3">254501</td>
                    <td className="py-3">
                      <a
                        href="mailto:jiwanjot@nith.ac.in"
                        className="text-[#800000]"
                      >
                        jiwanjot@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">2</td>
                    <td className="py-3">Dr. Ajoy Debbarma</td>
                    <td className="py-3">
                      Faculty Incharge (Admission &amp; Automation)
                    </td>
                    <td className="py-3">254702</td>
                    <td className="py-3">
                      <a
                        href="mailto:adebbarma@nith.ac.in"
                        className="text-[#800000]"
                      >
                        adebbarma@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">3</td>
                    <td className="py-3">Dr. Nitin Gupta</td>
                    <td className="py-3">
                      Admission Incharge/Coordinator (DASA)
                    </td>
                    <td className="py-3">254416</td>
                    <td className="py-3">
                      <a
                        href="mailto:nitin@nith.ac.in"
                        className="text-[#800000]"
                      >
                        nitin@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">4</td>
                    <td className="py-3">Dr. Khalid Mohamad Pandit</td>
                    <td className="py-3">
                      Assistant Faculty Incharge (Admission &amp; Automation)
                    </td>
                    <td className="py-3">254402</td>
                    <td className="py-3">
                      <a
                        href="mailto:mkhalid@nith.ac.in"
                        className="text-[#800000]"
                      >
                        mkhalid@nith.ac.in
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg shadow-sm p-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Institute Time Table
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left table-fixed border-collapse">
                <colgroup>
                  <col style={{ width: '6%' }} />
                  <col style={{ width: '28%' }} />
                  <col style={{ width: '36%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '20%' }} />
                </colgroup>
                <thead>
                  <tr className="text-sm text-gray-500 border-b">
                    <th className="py-3 pr-6">Sl. No.</th>
                    <th className="py-3 pr-6">Name</th>
                    <th className="py-3 pr-6">Responsibility</th>
                    <th className="py-3 pr-6">Phone No.</th>
                    <th className="py-3 pr-6">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">1</td>
                    <td className="py-3">Dr. Chandra Shekhar Prasad</td>
                    <td className="py-3">Faculty Incharge</td>
                    <td className="py-3">254601</td>
                    <td className="py-3">
                      <a
                        href="mailto:csprasad@nith.ac.in"
                        className="text-[#800000]"
                      >
                        csprasad@nith.ac.in
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              National Education Policy (NEP)
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left table-fixed border-collapse">
                <colgroup>
                  <col style={{ width: '6%' }} />
                  <col style={{ width: '28%' }} />
                  <col style={{ width: '36%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '20%' }} />
                </colgroup>
                <thead>
                  <tr className="text-sm text-gray-500 border-b">
                    <th className="py-3 pr-6">Sl. No.</th>
                    <th className="py-3 pr-6">Name</th>
                    <th className="py-3 pr-6">Responsibility</th>
                    <th className="py-3 pr-6">Phone No.</th>
                    <th className="py-3 pr-6">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">1</td>
                    <td className="py-3">Dr. Om Prakash Yadav</td>
                    <td className="py-3">Faculty Incharge</td>
                    <td className="py-3">254101</td>
                    <td className="py-3">
                      <a
                        href="mailto:opyadav@nith.ac.in"
                        className="text-[#800000]"
                      >
                        opyadav@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">2</td>
                    <td className="py-3">Dr. Katam Nishanth</td>
                    <td className="py-3">Faculty Incharge</td>
                    <td className="py-3">254501</td>
                    <td className="py-3">
                      <a
                        href="mailto:katam@nith.ac.in"
                        className="text-[#800000]"
                      >
                        katam@nith.ac.in
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg shadow-sm p-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Result Processing
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left table-fixed border-collapse">
                <colgroup>
                  <col style={{ width: '6%' }} />
                  <col style={{ width: '28%' }} />
                  <col style={{ width: '36%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '20%' }} />
                </colgroup>
                <thead>
                  <tr className="text-sm text-gray-500 border-b">
                    <th className="py-3 pr-6">Sl. No.</th>
                    <th className="py-3 pr-6">Name</th>
                    <th className="py-3 pr-6">Responsibility</th>
                    <th className="py-3 pr-6">Phone No.</th>
                    <th className="py-3 pr-6">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">1</td>
                    <td className="py-3">Dr. Jyoti Srivasatava</td>
                    <td className="py-3">Faculty Incharge</td>
                    <td className="py-3">254401</td>
                    <td className="py-3">
                      <a
                        href="mailto:jyoti.s@nith.ac.in"
                        className="text-[#800000]"
                      >
                        jyoti.s@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">2</td>
                    <td className="py-3">Dr. Preeti Soni</td>
                    <td className="py-3">Assistant Faculty Incharge</td>
                    <td className="py-3">254402</td>
                    <td className="py-3">
                      <a
                        href="mailto:preeti@nith.ac.in"
                        className="text-[#800000]"
                      >
                        preeti@nith.ac.in
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-10 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Examination &amp; Evaluation
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left table-fixed border-collapse">
                <colgroup>
                  <col style={{ width: '6%' }} />
                  <col style={{ width: '28%' }} />
                  <col style={{ width: '36%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '20%' }} />
                </colgroup>
                <thead>
                  <tr className="text-sm text-gray-500 border-b">
                    <th className="py-3 pr-6">Sl. No.</th>
                    <th className="py-3 pr-6">Name</th>
                    <th className="py-3 pr-6">Responsibility</th>
                    <th className="py-3 pr-6">Phone No.</th>
                    <th className="py-3 pr-6">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">1</td>
                    <td className="py-3">Dr. Rajeev Kumar</td>
                    <td className="py-3">Faculty Incharge</td>
                    <td className="py-3">254434</td>
                    <td className="py-3">
                      <a
                        href="mailto:rajeev@nith.ac.in"
                        className="text-[#800000]"
                      >
                        rajeev@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">2</td>
                    <td className="py-3">Dr. Suket Kumar</td>
                    <td className="py-3">Faculty Incharge (Examination)</td>
                    <td className="py-3">-</td>
                    <td className="py-3">
                      <a
                        href="mailto:suket@nith.ac.in"
                        className="text-[#800000]"
                      >
                        suket@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">3</td>
                    <td className="py-3">Dr. Shampy Kamboj</td>
                    <td className="py-3">Assistant Faculty Incharge</td>
                    <td className="py-3">254150</td>
                    <td className="py-3">
                      <a
                        href="mailto:shampy@nith.ac.in"
                        className="text-[#800000]"
                      >
                        shampy@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">4</td>
                    <td className="py-3">Dr. Sandeep Kumar Singh</td>
                    <td className="py-3">
                      Assistant Faculty Incharge (Evaluation)
                    </td>
                    <td className="py-3">254601</td>
                    <td className="py-3">
                      <a
                        href="mailto:sksingh@nith.ac.in"
                        className="text-[#800000]"
                      >
                        sksingh@nith.ac.in
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-10 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              National Academic Depository (NAD)
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left table-fixed border-collapse">
                <colgroup>
                  <col style={{ width: '6%' }} />
                  <col style={{ width: '28%' }} />
                  <col style={{ width: '36%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '20%' }} />
                </colgroup>
                <thead>
                  <tr className="text-sm text-gray-500 border-b">
                    <th className="py-3 pr-6">Sl. No.</th>
                    <th className="py-3 pr-6">Name</th>
                    <th className="py-3 pr-6">Responsibility</th>
                    <th className="py-3 pr-6">Phone No.</th>
                    <th className="py-3 pr-6">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">1</td>
                    <td className="py-3">Dr. Siddhartha Sharma</td>
                    <td className="py-3">Nodal Officer</td>
                    <td className="py-3">254006</td>
                    <td className="py-3">
                      <a
                        href="mailto:nad@nith.ac.in"
                        className="text-[#800000]"
                      >
                        nad@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">2</td>
                    <td className="py-3">Dr. Nitin Gupta</td>
                    <td className="py-3">Assistant Nodal Officer</td>
                    <td className="py-3">254416</td>
                    <td className="py-3">
                      <a
                        href="mailto:nitin@nith.ac.in"
                        className="text-[#800000]"
                      >
                        nitin@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">3</td>
                    <td className="py-3">Dr. Priyanka</td>
                    <td className="py-3">Assistant Nodal Officer</td>
                    <td className="py-3">254401</td>
                    <td className="py-3">
                      <a
                        href="mailto:dr.priyanka@nith.ac.in"
                        className="text-[#800000]"
                      >
                        dr.priyanka@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">4</td>
                    <td className="py-3">Dr. Arun Kumar Yadav</td>
                    <td className="py-3">Faculty Incharge (NAD-Uploading)</td>
                    <td className="py-3">254402</td>
                    <td className="py-3">
                      <a
                        href="mailto:ayadav@nith.ac.in"
                        className="text-[#800000]"
                      >
                        ayadav@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">5</td>
                    <td className="py-3">Dr. Manender Singh</td>
                    <td className="py-3">
                      Faculty Incharge (NAD-Verification)
                    </td>
                    <td className="py-3">254301</td>
                    <td className="py-3">
                      <a
                        href="mailto:manendra@nith.ac.in"
                        className="text-[#800000]"
                      >
                        manendra@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">6</td>
                    <td className="py-3">Dr. Ram Prakash Sharma</td>
                    <td className="py-3">
                      Faculty Incharge (NAD-Verification)
                    </td>
                    <td className="py-3">254402</td>
                    <td className="py-3">
                      <a
                        href="mailto:ram.sharma@nith.ac.in"
                        className="text-[#800000]"
                      >
                        ram.sharma@nith.ac.in
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-10 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Section Staff
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left table-auto border-collapse">
                <thead>
                  <tr className="text-sm text-gray-500 border-b">
                    <th className="py-3 pr-6">Sl. No.</th>
                    <th className="py-3 pr-6">Name</th>
                    <th className="py-3 pr-6">Responsibility</th>
                    <th className="py-3 pr-6">Phone No.</th>
                    <th className="py-3 pr-6">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">1</td>
                    <td className="py-3">Sh. Satish Chander Sharma</td>
                    <td className="py-3">
                      Joint Registrar (All General Academic Matter)
                    </td>
                    <td className="py-3">254026</td>
                    <td className="py-3">
                      <a
                        href="mailto:dracademic@nith.ac.in"
                        className="text-[#800000]"
                      >
                        dracademic@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">3</td>
                    <td className="py-3">Sh. Gulab Singh Thakur</td>
                    <td className="py-3">
                      Senior Personal Assistant (All Certification matters)
                    </td>
                    <td className="py-3">-</td>
                    <td className="py-3">
                      <a
                        href="mailto:certificate-acad@nith.ac.in"
                        className="text-[#800000]"
                      >
                        certificate-acad@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">4</td>
                    <td className="py-3">Sh. Vinod Kumar</td>
                    <td className="py-3">
                      Stenographer SG-II (All matters related to Results of
                      UG/PG)
                    </td>
                    <td className="py-3">-</td>
                    <td className="py-3">
                      <a
                        href="mailto:result-acad@nith.ac.in"
                        className="text-[#800000]"
                      >
                        result-acad@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">5</td>
                    <td className="py-3">Sh. Harshit Garg</td>
                    <td className="py-3">
                      Superintendent (All matters related to
                      Examination/Evaluation)
                    </td>
                    <td className="py-3">-</td>
                    <td className="py-3">
                      <a
                        href="mailto:exam-acad@nith.ac.in"
                        className="text-[#800000]"
                      >
                        exam-acad@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">6</td>
                    <td className="py-3">Smt. Puspha Devi</td>
                    <td className="py-3">
                      Stenographer SG-I, PA (All matters related to RTI, Hindi
                      Rajbhasha, Statistical information, etc.)
                    </td>
                    <td className="py-3">-</td>
                    <td className="py-3">
                      <a
                        href="mailto:pushpa@nith.ac.in"
                        className="text-[#800000]"
                      >
                        pushpa@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">7</td>
                    <td className="py-3">Smt. Meera Devi</td>
                    <td className="py-3">
                      Assistant SG-II (All matters related to UG programmes)
                    </td>
                    <td className="py-3">-</td>
                    <td className="py-3">
                      <a
                        href="mailto:ug-acad@nith.ac.in"
                        className="text-[#800000]"
                      >
                        ug-acad@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">8</td>
                    <td className="py-3">Sh. Shashi Kant Ratnakar</td>
                    <td className="py-3">
                      Sr. Assistant (All matters related to PhD programmes)
                    </td>
                    <td className="py-3">254073</td>
                    <td className="py-3">
                      <a
                        href="mailto:phd-acad@nith.ac.in"
                        className="text-[#800000]"
                      >
                        phd-acad@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">9</td>
                    <td className="py-3">Sh. Lav Sharma</td>
                    <td className="py-3">
                      Sr. Assistant (All matters related to Senate, Convocation
                      and other miscellaneous matters)
                    </td>
                    <td className="py-3">-</td>
                    <td className="py-3">
                      <a
                        href="mailto:senate-acad@nith.ac.in"
                        className="text-[#800000]"
                      >
                        senate-acad@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">10</td>
                    <td className="py-3">Ms. Sonia Yadav</td>
                    <td className="py-3">
                      Jr. Assistant (All matters related to PG programmes)
                    </td>
                    <td className="py-3">254018</td>
                    <td className="py-3">
                      <a
                        href="mailto:pg-acad@nith.ac.in"
                        className="text-[#800000]"
                      >
                        pg-acad@nith.ac.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">11</td>
                    <td className="py-3">Sh. Suresh Chand</td>
                    <td className="py-3">Office Attendant SG-I</td>
                    <td className="py-3">-</td>
                    <td className="py-3">-</td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">12</td>
                    <td className="py-3">Sh. Balwant Singh</td>
                    <td className="py-3">Office Attendant SG-II</td>
                    <td className="py-3">-</td>
                    <td className="py-3">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
