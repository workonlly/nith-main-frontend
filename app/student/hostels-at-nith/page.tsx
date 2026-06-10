'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
  {
    key: 'introduction',
    title: 'Introduction',
    content:
      'NITH provides comfortable hostel accommodation to students with separate hostels for boys and girls. The hostels are supervised by wardens and supported by dedicated staff to ensure safety, hygiene, and a supportive residential environment.',
  },
  {
    key: 'kailash',
    title: 'Kailash Boys Hostel',
    content:
      'Kailash Boys Hostel houses students across multiple batches with common study areas, recreation room and 24x7 security. Facility includes Wi-Fi, mess and sports access.',
  },
  {
    key: 'himgiri',
    title: 'Himgiri Boys Hostel',
    content:
      'Himgiri is known for its quiet study zones and proximity to academic blocks. Hostellers have access to mess facilities and indoor games.',
  },
  {
    key: 'udaygiri',
    title: 'Udaygiri Boys Hostel',
    content:
      'Udaygiri offers well-ventilated rooms and student common rooms. Regular maintenance and housekeeping are provided.',
  },
  {
    key: 'neelkanth',
    title: 'Neelkanth Boys Hostel',
    content:
      'Neelkanth has modern amenities, prepared for senior students and research scholars with dedicated study lounges.',
  },
  {
    key: 'dhauladhar',
    title: 'Dhauladhar Boys Hostel',
    content:
      'Dhauladhar emphasizes community activities and sports; it includes outdoor play areas and common recreation.',
  },
  {
    key: 'vindhyachal',
    title: 'Vindhyachal Boys Hostel',
    content:
      'Vindhyachal provides comfortable accommodation with easy access to central facilities and libraries.',
  },
  {
    key: 'shivalik',
    title: 'Shivalik Boys Hostel',
    content:
      'Shivalik is one of the larger hostels with spacious common areas and frequent cultural events.',
  },
  {
    key: 'ambika',
    title: 'Ambika Girls Hostel',
    content:
      'Ambika Girls Hostel ensures a secure environment with female wardens and dedicated medical liaison.',
  },
  {
    key: 'parvati',
    title: 'Parvati Girls Hostel',
    content:
      'Parvati offers a balanced residential life with study rooms and an active student committee.',
  },
  {
    key: 'mani-mahesh',
    title: 'Mani-Mahesh Girls Hostel',
    content:
      'Mani-Mahesh supports new entrants and emphasizes orientation, welfare and mentorship.',
  },
  {
    key: 'aravali',
    title: 'Aravali Girls Hostel',
    content:
      'Aravali provides comfortable living with proximity to sports and cultural centers.',
  },
  {
    key: 'satpura',
    title: 'Satpura Hostel',
    content:
      'Satpura hosts students with accessible facilities and a responsive warden team.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Page() {
  const [active, setActive] = useState<string>('introduction');
  const current = SECTIONS.find((s) => s.key === active) ?? SECTIONS[0];

  return (
    <div className="min-h-screen bg-white">
      

      <div className="bg-gray-50 py-4 px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-base text-gray-600">
            <Link
              href="/"
              className="hover:text-[#800000] transition-colors duration-200"
            >
              Home
            </Link>
            <span>›</span>
            <span className="text-gray-400">Student</span>
            <span>›</span>
            <span className="text-[#800000] font-medium">NITH Hostels</span>
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
            NITH Hostels
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg leading-relaxed font-light">
            Hostel accommodation, contact points and brief descriptions for each
            hall of residence.
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-72 bg-white rounded-lg shadow-sm p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              NITH Hostels
            </h3>
            <ul className="space-y-2">
              {SECTIONS.map((s) => (
                <li key={s.key}>
                  <button
                    onClick={() => setActive(s.key)}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors text-base ${active === s.key ? 'bg-[#800000] text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content panel (minimal) */}
          <section className="flex-1 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {current.title}
            </h2>
            <div className="mt-4 flex flex-col md:flex-row md:items-start gap-6">
              <img
                src={`/images/hostels/${current.key}.jpg`}
                alt={`${current.title} photo`}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    '/images/hostel-placeholder.jpg';
                }}
                className="w-full md:w-64 h-40 md:h-44 object-cover rounded-md bg-gray-100 flex-shrink-0"
              />

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {current.content}
                  </p>

                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
                    <ul className="text-base text-gray-700 list-disc pl-5">
                      <li>Mess facilities available</li>
                      <li>Common study areas</li>
                      <li>24x7 security</li>
                    </ul>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <a
                      href="/student/welfare"
                      className="inline-flex items-center px-5 py-2 bg-[#800000] text-white text-base font-medium rounded-lg"
                    >
                      Contact Warden
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Right display panel */}
          <aside className="w-full md:w-72 bg-white rounded-lg shadow-sm p-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Quick Info
            </h4>
            <div className="text-base text-slate-700 space-y-3">
              <div>
                <div className="font-medium">Warden & Contacts</div>
                <div className="text-slate-600 text-base">
                  Contact your hostel warden via the Student Office for
                  emergencies and maintenance requests.
                </div>
              </div>

              <div>
                <div className="font-medium">Mess Timings</div>
                <div className="text-slate-600 text-base">
                  Breakfast: 7:30 - 9:00 <br /> Lunch: 12:30 - 2:00 <br />{' '}
                  Dinner: 8:00 - 9:30
                </div>
              </div>

              <div>
                <div className="font-medium">Important Links</div>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="/about/connectivity" className="text-[#800000] text-base">
                      Hostel Rules
                    </a>
                  </li>
                  <li>
                    <a href="/student/hostels-at-nith" className="text-[#800000] text-base">
                      Apply for Maintenance
                    </a>
                  </li>
                  <li>
                    <a href="/student/ncc" className="text-[#800000] text-base">
                      Emergency Contacts
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>

      
    </div>
  );
}
