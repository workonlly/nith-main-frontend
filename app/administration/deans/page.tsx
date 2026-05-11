'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const deans = [
  {
    name: 'Dr. Siddhartha Sharma',
    role: 'Associate Professor, Department of Mechanical Engineering',
    resp: 'Academic',
    phone: '254006',
    email: 'dac@nith.ac.in',
  },
  {
    name: 'Prof. Sushil Chauhan',
    role: 'Professor, Department of Electrical Engineering',
    resp: 'Faculty Welfare',
    phone: '254009',
    email: 'dfw@nith.ac.in',
  },
  {
    name: 'Prof. Yogeshver Dutt Sharma',
    role: 'Professor, Department of Mathematics and Scientific Computing',
    resp: 'Student Welfare',
    phone: '254008',
    email: 'dsw@nith.ac.in',
  },
  {
    name: 'Prof. Raman Parti',
    role: 'Professor, Department of Civil Engineering',
    resp: 'Planning & Development',
    phone: '254005',
    email: 'dpd@nith.ac.in',
  },
  {
    name: 'Prof. Rakesh Sehgal',
    role: 'Professor (HAG), Department of Mechanical Engineering',
    resp: 'Research & Consultancy',
    phone: '254007',
    email: 'drc@nith.ac.in',
  },
  {
    name: 'Prof. Ashwani Kumar',
    role: 'Professor, Department of Electrical Engineering',
    resp: 'Alumni & Resources',
    phone: '254054',
    email: 'dar@nith.ac.in',
  },
];

const associateDeans = [
  {
    name: 'Dr. Subhash Chand',
    resp: 'Faculty Recruitment & Discipline',
    phone: '254136',
    email: 'schand@nith.ac.in',
  },
  {
    name: 'Dr. Hemant Kumar Vinayak',
    resp: 'Civil Infrastructure & Maintenance',
    phone: '-',
    email: 'hkvced@nith.ac.in',
  },
  {
    name: 'Dr. Bharat Bhushan Sharma',
    resp: 'Electrical Infrastructure & Maintenance',
    phone: '254540',
    email: 'bhushan@nith.ac.in',
  },
  {
    name: 'Dr. Ravinder Nath Sharma',
    resp: 'UG-PG Establishment',
    phone: '254532',
    email: 'nath@nith.ac.in',
  },
  {
    name: 'Dr. Rohit Dhiman',
    resp: 'Examination & Evaluation',
    phone: '254601',
    email: 'ad-ee@nith.ac.in',
  },
  {
    name: 'Dr. Naveen Chauhan',
    resp: 'Faculty Activity & Support',
    phone: '-',
    email: 'naveen@nith.ac.in',
  },
  {
    name: 'Dr. Pardeep Singh',
    resp: 'Student Activities & Scholarships',
    phone: '254436',
    email: 'ad_sas@nith.ac.in',
  },
  {
    name: 'Dr. Sunil Sharma',
    resp: 'Student Discipline & Counselling',
    phone: '254316',
    email: 'sunils@nith.ac.in',
  },
  {
    name: 'Dr. Philemon Daniel',
    resp: 'Consultancy Projects and Testing',
    phone: '254650',
    email: 'phildani7@nith.ac.in',
  },
  {
    name: 'Dr. Surinder Kumar Soni',
    resp: 'Research Projects & Collaborations, Start-Up',
    phone: '254630',
    email: 'soni@nith.ac.in',
  },
  {
    name: 'Dr. Gargi Khanna',
    resp: 'Alumni & Resources',
    phone: '2544536',
    email: 'gargi@nith.ac.in',
  },
  {
    name: 'Dr. Somesh Kumar Sharma',
    resp: 'Resource Generation & Industrialization',
    phone: '2544732',
    email: 'somesh@nith.ac.in',
  },
  {
    name: 'Dr. Vandana Sharma',
    resp: 'Admissions and Registration',
    phone: '254920',
    email: 'ad-ar@nith.ac.in',
  },
];

export default function DeansPage() {
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
            <span className="text-gray-400">Administration</span>
            <span>›</span>
            <span className="text-[#800000] font-medium">Deans</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center py-24 md:py-32 px-6 md:px-12"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            Deans
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            List of Deans and Associate Deans with responsibilities and contact
            details.
          </p>
        </motion.div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 overflow-x-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Deans</h2>
            <table className="w-full table-auto text-left">
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
                {deans.map((d, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="py-4 align-top">{i + 1}</td>
                    <td className="py-4 align-top">
                      <div className="font-medium">{d.name}</div>
                      <div className="text-sm text-gray-500">{d.role}</div>
                    </td>
                    <td className="py-4 align-top">{d.resp}</td>
                    <td className="py-4 align-top">{d.phone}</td>
                    <td className="py-4 align-top">
                      <a
                        className="text-[#800000] font-medium"
                        href={`mailto:${d.email}`}
                      >
                        {d.email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 overflow-x-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Associate Deans
            </h2>
            <table className="w-full table-auto text-left">
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
                {associateDeans.map((a, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="py-4 align-top">{i + 1}</td>
                    <td className="py-4 align-top">{a.name}</td>
                    <td className="py-4 align-top">{a.resp}</td>
                    <td className="py-4 align-top">{a.phone}</td>
                    <td className="py-4 align-top">
                      <a
                        className="text-[#800000] font-medium"
                        href={`mailto:${a.email}`}
                      >
                        {a.email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
