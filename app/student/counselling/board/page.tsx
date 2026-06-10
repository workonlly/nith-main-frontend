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
              Student Counselling Board
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
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            Student Counselling Board
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Student Counseling Facility helps students with academic, personal
            and psychological concerns through a structured three-tier
            counseling board.
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6 prose prose-sm max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900">Overview</h2>

            <p>
              Student Counseling Facility has been established to help the
              students in solving their specific problems related to academics,
              personal, psychological etc., so that they are able to achieve
              academic excellence and develop an integrated personality during
              their stay on the campus. The Student Counseling Board of NIT
              Hamirpur will work under three tiers: Internal Committee, External
              Committee and Student Committee. The First Tier is the Internal
              Counseling Committee.
            </p>

            <h3 className="mt-6 text-lg font-medium text-gray-900">
              Committee Composition (Internal Counseling Committee)
            </h3>
            <div className="overflow-x-auto">
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
                    <td className="px-4 py-3 align-top">
                      Departmental Counsellor (Concerned Student Dept./Centre)
                    </td>
                    <td className="px-4 py-3 align-top">Member(s)</td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">6</td>
                    <td className="px-4 py-3 align-top">
                      Faculty Incharge (Counselling)
                    </td>
                    <td className="px-4 py-3 align-top">Member Convener</td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">7</td>
                    <td className="px-4 py-3 align-top">
                      All AFIs (Counselling)
                    </td>
                    <td className="px-4 py-3 align-top">Member(s)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mt-6 text-lg font-medium text-gray-900">
              Departmental Counsellors
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse table-auto">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-4 py-2">Sl. No.</th>
                    <th className="px-4 py-2">Name of Department</th>
                    <th className="px-4 py-2">Departmental Counsellor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">1</td>
                    <td className="px-4 py-3 align-top">
                      Department of Civil Engineering
                    </td>
                    <td className="px-4 py-3 align-top">
                      (i) Dr. Sanku Konai
                      <br />
                      (ii) Dr. Arpita Saha
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">2</td>
                    <td className="px-4 py-3 align-top">
                      Department of Mechanical Engineering
                    </td>
                    <td className="px-4 py-3 align-top">
                      (i) Dr. Dilshad Ahmad Khan
                      <br />
                      (ii) Dr. Parnika Shrivasta
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">3</td>
                    <td className="px-4 py-3 align-top">
                      Department of Chemical Engineering
                    </td>
                    <td className="px-4 py-3 align-top">
                      (i) Dr. Rahul Saha
                      <br />
                      (ii) Dr. Smita Mondal
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">4</td>
                    <td className="px-4 py-3 align-top">
                      Department of Electrical Engineering
                    </td>
                    <td className="px-4 py-3 align-top">
                      (i) Dr. Ram Niwas Mahia
                      <br />
                      (ii) Dr. Himesh Handa
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">5</td>
                    <td className="px-4 py-3 align-top">
                      Dept. of Electronics & Communication Engineering
                    </td>
                    <td className="px-4 py-3 align-top">
                      (i) Dr. Sandeep Kumar Singh
                      <br />
                      (ii) Dr. Sankalita Viswas
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">6</td>
                    <td className="px-4 py-3 align-top">
                      Dept. of Computer Science & Engineering
                    </td>
                    <td className="px-4 py-3 align-top">
                      (i) Dr. Jyoti Srivastava
                      <br />
                      (ii) Dr. Nagendra Pratap Singh
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">7</td>
                    <td className="px-4 py-3 align-top">
                      Dept. of Material Science & Engineering
                    </td>
                    <td className="px-4 py-3 align-top">
                      (i) Dr. Raj Bahadur Singh
                      <br />
                      (ii) Dr. Nitesh Kumar
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">8</td>
                    <td className="px-4 py-3 align-top">
                      Dept. of Physics and Photonics Science
                    </td>
                    <td className="px-4 py-3 align-top">
                      (i) Dr. Vimal Sharma
                      <br />
                      (ii) Dr. Rajesh Sharma
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">9</td>
                    <td className="px-4 py-3 align-top">Dept. of Chemistry</td>
                    <td className="px-4 py-3 align-top">
                      (i) Dr. Kalyan Sunder Ghosh
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">10</td>
                    <td className="px-4 py-3 align-top">
                      Dept. of Mathematics & Scientific Computing
                    </td>
                    <td className="px-4 py-3 align-top">
                      (i) Dr. Rifaqat Ali
                      <br />
                      (ii) Dr. Subit Kumar Jain
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">11</td>
                    <td className="px-4 py-3 align-top">
                      Dept. of Managements
                    </td>
                    <td className="px-4 py-3 align-top">
                      (i) Dr. Neeraj Dhiman
                      <br />
                      (ii) Dr. Shampy Kamboj
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">12</td>
                    <td className="px-4 py-3 align-top">
                      Dept. of Humanities & Social Science
                    </td>
                    <td className="px-4 py-3 align-top">
                      (i) Dr. Manoj Kumar Yadav
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 align-top">13</td>
                    <td className="px-4 py-3 align-top">
                      Dept. of Architecture
                    </td>
                    <td className="px-4 py-3 align-top">
                      (i) Dr. Punit Sharma
                      <br />
                      (ii) Ar. Neetu Kapoor
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-sm text-gray-600">
              Departmental counsellors are available for scheduled counseling as
              well as on a walk-in basis depending on availability. For specific
              concerns please reach out to the relevant departmental counsellor.
            </p>
          </article>

          <aside className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Need Help?
            </h3>
            <p className="text-sm text-gray-600">
              For counseling requests or urgent support contact:
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <div>
                <div className="font-medium">
                  Associate Dean (Student Discipline & Counselling)
                </div>
                <div className="text-gray-600">
                  Email:{' '}
                  <a
                    href="mailto:associate.dean@nith.ac.in"
                    className="text-[#800000]"
                  >
                    associate.dean@nith.ac.in
                  </a>
                </div>
              </div>

              <div>
                <div className="font-medium">
                  Faculty Incharge (Counselling)
                </div>
                <div className="text-gray-600">
                  Email:{' '}
                  <a
                    href="mailto:counselling@nith.ac.in"
                    className="text-[#800000]"
                  >
                    counselling@nith.ac.in
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
