'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Page() {
  const chief = [
    [
      'Dr. Kuldeep Kr. Sharma, DoPPS',
      'Chief Warden',
      '254850',
      'cw@nith.ac.in',
    ],
  ];

  const himgiri = [
    ['Er. Vinod Kumar', 'Warden', '254803', 'wardenhimgiri@nith.ac.in'],
    ['Dr. Abhishek Singh', 'Assistant Warden', '-', 'abhi.phy@nith.ac.in'],
  ];

  const neelkanth = [
    [
      'Dr. Chandrashekharan S',
      'Warden',
      '254860',
      'wardenneelkanth@nith.ac.in',
    ],
    ['Dr. Anshul Sharma', 'Assistant Warden', '-', 'anshulsharma@nith.ac.in'],
  ];

  const himadri = [
    ['Dr. Vivek Tiwari', 'Warden', '254810', 'wardenhimadri@nith.ac.in'],
    ['Dr. Sandeep Sharma', 'Assistant Warden', '-', 'sandeep.phy@nith.ac.in'],
  ];

  const udaygiri = [
    ['Dr. Sachin Kumar', 'Warden', '-', 'wardenudaygiri@nith.ac.in'],
    ['Dr. Jiwanjot Singh', 'Assistant Warden', '-', 'jiwanjot@nith.ac.in'],
  ];

  const kailash = [
    ['Dr. Talari Ganesh', 'Warden', '254802', 'wardenkailash@nith.ac.in'],
    ['Dr. Aman Kumar', 'Assistant Warden', '-', 'akumar@nith.ac.in'],
  ];

  const vindhyachal = [
    ['Dr. Rajesh Kumar', 'Warden', '254855', 'wardenvindhyachal@nith.ac.in'],
    ['Dr. Mahaveer Singh', 'Assistant Warden', '-', 'mahavir@nith.ac.in'],
  ];

  const dhauladhar = [
    ['Dr. Vikram Verma', 'Warden', '254822', 'wardendhauladhar@nith.ac.in'],
    ['Dr. Hammad Siddiqui', 'Assistant Warden', '-', 'hammad@nith.ac.in'],
  ];

  const ambika = [
    ['Dr. Sunder Kala Negi', 'Warden', '254842', 'wardenambika@nith.ac.in'],
    ['Dr. Upasana Sharma', 'Assistant Warden', '-', 'upasana@nith.ac.in'],
  ];

  const parvati = [
    ['Dr. Sangeeta Sharma', 'Warden', '254845', 'wardenparvati@nith.ac.in'],
    ['Dr. Swechha Roy', 'Assistant Warden', '-', 'sroy@nith.ac.in'],
  ];

  const satpura_aravali = [
    [
      'Dr. Bharti Gaur',
      'Warden',
      '254156',
      'wardenaravali@nith.ac.in wardensatpura@nith.ac.in',
    ],
    [
      'Dr. Neetika',
      'Assistant Warden',
      '-',
      'wardenaravali@nith.ac.in wardensatpura@nith.ac.in',
    ],
  ];

  const mani_mahesh = [
    ['Dr. Supriya Jaiswal', 'Warden', '254832', 'wardenmanimahesh@nith.ac.in'],
    ['Dr. Rinshu', 'Assistant Warden', '254152', 'rinshu@nith.ac.in'],
  ];

  const shivalik = [
    ['Dr. Rajesh Kumar', 'Warden', '-', 'wardenshivalik@nith.ac.in'],
  ];

  return (
    <div className="min-h-screen bg-white">
      

      <div className="bg-gray-50 py-4 px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-8xl mx-auto">
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
              Hostel Functionaries
            </span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center py-20 md:py-28 px-6 md:px-12"
        >
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Hostel Functionaries
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg leading-relaxed font-light">
            Chief Warden and wardens / assistant wardens contact details
          </p>
        </motion.div>
      </section>

      <main className="max-w-8xl mx-auto p-6 space-y-6">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Chief Warden &amp; Warden In-Charges
          </h2>
          <table className="w-full text-left table-auto">
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
              {chief.map((r, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-3">{i + 1}</td>
                  <td className="py-3">{r[0]}</td>
                  <td className="py-3">{r[1]}</td>
                  <td className="py-3">{r[2]}</td>
                  <td className="py-3">
                    <a href={`mailto:${r[3]}`} className="text-[#800000]">
                      {r[3]}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="bg-gray-50 rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Wardens / Assistant Wardens
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <HostelTable title="Himgiri Boys Hostel" rows={himgiri} />
            <HostelTable title="Neelkanth Boys Hostel" rows={neelkanth} />
            <HostelTable title="Himadri Boys Hostel" rows={himadri} />
            <HostelTable title="Udaygiri Boys Hostel" rows={udaygiri} />
            <HostelTable title="Kailash Boys Hostel" rows={kailash} />
            <HostelTable title="Vindhyachal Boys Hostel" rows={vindhyachal} />
            <HostelTable title="Dhauladhar Boys Hostel" rows={dhauladhar} />
            <HostelTable title="Ambika Girls Hostel" rows={ambika} />
            <HostelTable title="Parvati Girls Hostel" rows={parvati} />
            <HostelTable
              title="Satpura & Aravali Girls Hostel"
              rows={satpura_aravali}
            />
            <HostelTable title="Mani Mahesh Girls Hostel" rows={mani_mahesh} />
            <HostelTable title="Shivalik Boys Hostel" rows={shivalik} />
          </div>
        </section>
      </main>

      
    </div>
  );
}

function HostelTable({ title, rows }: { title: string; rows: string[][] }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-xl font-medium text-gray-900 mb-3">{title}</h3>
      <div>
        <table className="w-full text-left table-auto">
          <colgroup>
            <col style={{ width: '6%' }} />
            <col style={{ width: '44%' }} />
            <col style={{ width: '20%' }} />
            <col style={{ width: '15%' }} />
            <col style={{ width: '15%' }} />
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
            {rows.map((r, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-3">{i + 1}</td>
                <td className="py-3">{r[0]}</td>
                <td className="py-3">{r[1]}</td>
                <td className="py-3">{r[2]}</td>
                <td className="py-3">
                  {r[3] ? (
                    <a
                      href={`mailto:${r[3].split(' ')[0]}`}
                      className="text-[#800000]"
                    >
                      {r[3]}
                    </a>
                  ) : (
                    '--'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
