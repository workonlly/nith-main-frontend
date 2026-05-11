'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';
import { ShieldCheck, Download } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function InsurancePage() {
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
            <span className="text-gray-400">Student</span>
            <span>›</span>
            <span className="text-gray-400">Welfare</span>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              Insurance &amp; Mediclaims
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
          className="relative z-10 text-center py-20 md:py-28 px-6 md:px-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Insurance &amp; Mediclaims
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-md md:text-lg leading-relaxed">
            The Institute provides insurance cover through Personal Accident
            Insurance [Group (Unnamed)] Policy under student safety scheme to
            all of its students every year.
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900">Overview</h2>
              <p className="text-gray-600 mt-2">
                The salient features of this Policy coverage per Student are as
                Under:
              </p>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse table-auto">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-4 py-3">Sl. No.</th>
                      <th className="px-4 py-3">Particulars</th>
                      <th className="px-4 py-3">Coverage Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 align-top">1</td>
                      <td className="px-4 py-3 align-top">
                        Personal accident cover per student for sum assured.
                      </td>
                      <td className="px-4 py-3 align-top">Rs. 2,00,000/-</td>
                    </tr>

                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 align-top">2</td>
                      <td className="px-4 py-3 align-top">
                        Medical expenses per student per annum (Accidental
                        Hospitalization only)
                      </td>
                      <td className="px-4 py-3 align-top">Rs. 50,000/-</td>
                    </tr>

                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 align-top">3</td>
                      <td className="px-4 py-3 align-top">
                        Personal accident death only cover to one of the parents
                        who is responsible to pay tuition fees + other charges
                        of Institute as per records.
                      </td>
                      <td className="px-4 py-3 align-top">
                        Rs. 1,00,000/- per annum for 03 years.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 text-gray-700">
                <p>
                  Claim under above Policy shall be entertained through
                  Institute only. Hence, all necessary formalities are to be
                  done through Institute only. Institute shall lodge claim on
                  behalf of the student with the Insurance Company. Payment of
                  claim shall also be made through Institute only.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="/pdfs/insurance-policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-[#800000] text-white rounded-md text-sm hover:bg-[#6a0000]"
                >
                  <Download className="w-4 h-4" /> Policy Document
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">
                How to file a claim
              </h3>
              <ol className="list-decimal list-inside text-gray-600 text-sm space-y-2">
                <li>
                  Inform the Institute Office immediately and submit all
                  required documents.
                </li>
                <li>
                  The Institute will lodge the claim with the insurer on behalf
                  of the student.
                </li>
                <li>
                  All communications and settlement will be coordinated through
                  the Institute.
                </li>
              </ol>
            </div>
          </section>

          <aside className="bg-white rounded-2xl shadow-md p-6 h-fit">
            <h3 className="text-lg font-semibold mb-2">Need Assistance?</h3>
            <p className="text-sm text-gray-600 mb-4">
              For claim support and clarifications contact the Student Welfare
              Office.
            </p>

            <div className="space-y-3 text-sm">
              <div>
                <div className="font-medium">Student Welfare Office</div>
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

      <Footer />
    </div>
  );
}
