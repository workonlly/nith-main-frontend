'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';

interface PastMeet {
  id: number;
  year: string;
  theme: string;
  date: string;
  highlights: string;
  attendees?: number;
  images?: string[];
}

interface ScheduleItem {
  time: string;
  activity: string;
  venue: string;
  speaker?: string;
}

interface GalleryImage {
  id: number;
  url: string;
  year: string;
  caption: string;
}

const upcomingMeet = {
  title: 'Annual Alumni Meet 2025',
  date: 'March 15-17, 2025',
  venue: 'NIT Hamirpur Campus',
  description:
    'Join us for three days of reconnection, celebration, and inspiration as we bring together alumni from across generations to celebrate our shared legacy and strengthen our bonds.',
  registrationOpen: true,
  theme: 'Innovation & Excellence: Building Tomorrow Together',
};

const pastMeets: PastMeet[] = [
  {
    id: 1,
    year: '2024',
    theme: 'Celebrating 50 Years of Excellence',
    date: 'March 10-12, 2024',
    highlights:
      'Record attendance of 800+ alumni, Golden Jubilee celebrations, Distinguished Alumni Awards, Tech Talks, Cultural Night',
    attendees: 850,
    images: ['/alumni/meet2024-1.jpg', '/alumni/meet2024-2.jpg'],
  },
  {
    id: 2,
    year: '2023',
    theme: 'Alumni Connect: Bridging Generations',
    date: 'February 18-20, 2023',
    highlights:
      'Interactive panel discussions, Campus development tour, Batch reunions, Career mentoring sessions, Sports tournaments',
    attendees: 650,
    images: ['/alumni/meet2023-1.jpg'],
  },
  {
    id: 3,
    year: '2022',
    theme: 'Resilience & Revival',
    date: 'October 22-23, 2022',
    highlights:
      'Hybrid format event, Virtual networking sessions, Alumni startup showcase, Research collaborations, Musical evening',
    attendees: 500,
    images: ['/alumni/meet2022-1.jpg'],
  },
  {
    id: 4,
    year: '2019',
    theme: 'Legacy & Leadership',
    date: 'November 15-17, 2019',
    highlights:
      'Leadership summit, Industry-academia meet, Alumni fund announcements, Cultural performances, Gala dinner',
    attendees: 720,
    images: ['/alumni/meet2019-1.jpg'],
  },
  {
    id: 5,
    year: '2018',
    theme: 'Homecoming: Bonds Eternal',
    date: 'March 9-11, 2018',
    highlights:
      'Silver jubilee batch celebrations, Distinguished lectures, Heritage walk, Traditional fest, Bonfire night',
    attendees: 680,
    images: ['/alumni/meet2018-1.jpg'],
  },
];

const schedule: ScheduleItem[] = [
  {
    time: '09:00 AM - 10:00 AM',
    activity: 'Registration & Welcome Coffee',
    venue: 'Main Auditorium Lobby',
  },
  {
    time: '10:00 AM - 11:30 AM',
    activity: "Inaugural Session & Director's Address",
    venue: 'Main Auditorium',
    speaker: 'Prof. Director, NITH',
  },
  {
    time: '11:30 AM - 01:00 PM',
    activity: 'Alumni Panel: Innovation in Industry',
    venue: 'Conference Hall',
    speaker: 'Distinguished Alumni Panel',
  },
  {
    time: '01:00 PM - 02:00 PM',
    activity: 'Networking Lunch',
    venue: 'Institute Dining Hall',
  },
  {
    time: '02:00 PM - 04:00 PM',
    activity: 'Batch-wise Reunions & Campus Tour',
    venue: 'Various Locations',
  },
  {
    time: '04:00 PM - 05:30 PM',
    activity: 'Alumni Excellence Awards Ceremony',
    venue: 'Open Air Theatre',
  },
  {
    time: '06:00 PM - 08:00 PM',
    activity: 'Cultural Evening & Performances',
    venue: 'Open Air Theatre',
  },
  {
    time: '08:00 PM onwards',
    activity: 'Gala Dinner & Networking',
    venue: 'Convention Center',
  },
];

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: '/alumni/gallery1.jpg',
    year: '2024',
    caption: 'Opening Ceremony 2024',
  },
  {
    id: 2,
    url: '/alumni/gallery2.jpg',
    year: '2024',
    caption: 'Cultural Night Performances',
  },
  {
    id: 3,
    url: '/alumni/gallery3.jpg',
    year: '2023',
    caption: 'Panel Discussion Session',
  },
  {
    id: 4,
    url: '/alumni/gallery4.jpg',
    year: '2023',
    caption: 'Batch Reunion Moments',
  },
  {
    id: 5,
    url: '/alumni/gallery5.jpg',
    year: '2022',
    caption: 'Awards Ceremony',
  },
  {
    id: 6,
    url: '/alumni/gallery6.jpg',
    year: '2022',
    caption: 'Campus Tour',
  },
];

export default function AnnualAlumniMeet() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showAllPastMeets, setShowAllPastMeets] = useState(false);

  const displayedMeets = showAllPastMeets ? pastMeets : pastMeets.slice(0, 3);

  return (
    <>
      <Header31 />
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
              <span className="text-gray-400">Alumni</span>
              <span>›</span>
              <span className="text-[#800000] font-medium">
                Annual Alumni Meet
              </span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-br from-[#631012] via-[#7a1a1d] to-[#4a0c0e] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Annual Alumni Meet of NITH
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                Reconnecting alumni with their alma mater and celebrating shared
                journeys of excellence, innovation, and lifelong bonds.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#631012] rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  About the Annual Alumni Meet
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The Annual Alumni Meet is a flagship event of NIT Hamirpur,
                  bringing together graduates from across batches, disciplines,
                  and geographies to celebrate our shared heritage and continued
                  excellence. It serves as a platform for reconnection,
                  knowledge sharing, and strengthening the bonds that tie us to
                  our alma mater.
                </p>
                <p>
                  This cherished tradition provides an opportunity for alumni to
                  revisit the campus, witness its growth, interact with faculty
                  and current students, and contribute to the institute&lsquo;s
                  vision for the future. Through engaging sessions, cultural
                  events, and informal gatherings, the meet fosters a sense of
                  community that transcends time and distance.
                </p>
                <p>
                  The event also recognizes outstanding achievements of alumni
                  who have brought laurels to the institute through their
                  professional accomplishments, social contributions, and
                  exemplary leadership in their respective fields.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                  Upcoming Alumni Meet
                </h2>
                <p className="text-gray-600">
                  Mark your calendars for the next grand reunion
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#631012] to-[#4a0c0e] rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-white space-y-6">
                      <div>
                        <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                          Next Event
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold mb-3">
                          {upcomingMeet.title}
                        </h3>
                        <p className="text-xl text-gray-200 mb-2">
                          {upcomingMeet.theme}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <svg
                            className="w-6 h-6 text-white/80"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="text-lg">{upcomingMeet.date}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <svg
                            className="w-6 h-6 text-white/80"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="text-lg">{upcomingMeet.venue}</span>
                        </div>
                      </div>

                      <p className="text-gray-200 leading-relaxed">
                        {upcomingMeet.description}
                      </p>

                      <div className="flex flex-wrap gap-4 pt-4">
                        <button className="px-8 py-3 bg-white text-[#631012] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                          Register Now
                        </button>
                        <button className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-200">
                          View Schedule
                        </button>
                      </div>
                    </div>

                    <div className="hidden md:block">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                        <div className="aspect-video bg-white/20 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-24 h-24 text-white/40"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <div className="mt-4 text-center text-white/80 text-sm">
                          Event promotional image
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                  Event Schedule
                </h2>
                <p className="text-gray-600">
                  Tentative program overview for Day 1
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-[#631012] to-[#7a1a1d] text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">
                          Time
                        </th>
                        <th className="px-6 py-4 text-left font-semibold">
                          Activity
                        </th>
                        <th className="px-6 py-4 text-left font-semibold">
                          Venue
                        </th>
                        <th className="px-6 py-4 text-left font-semibold">
                          Speaker/Host
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {schedule.map((item, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="hover:bg-gray-50 transition-colors duration-150"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#631012]">
                            {item.time}
                          </td>
                          <td className="px-6 py-4 text-gray-800 font-medium">
                            {item.activity}
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {item.venue}
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {item.speaker || '—'}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="md:hidden divide-y divide-gray-200">
                  {schedule.map((item, index) => (
                    <div key={index} className="p-4 hover:bg-gray-50">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-sm font-semibold text-[#631012]">
                          {item.time}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {item.activity}
                      </h4>
                      <div className="flex flex-col gap-1 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                          </svg>
                          <span>{item.venue}</span>
                        </div>
                        {item.speaker && (
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            <span>{item.speaker}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600">
                    * Schedule is tentative and subject to change. Full 3-day
                    program will be shared with registered participants.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                  Past Alumni Meets
                </h2>
                <p className="text-gray-600">
                  Celebrating decades of memorable reunions and connections
                </p>
              </div>

              <div className="space-y-6">
                {displayedMeets.map((meet, index) => (
                  <motion.div
                    key={meet.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="grid md:grid-cols-12 gap-0">
                      <div className="md:col-span-2 bg-gradient-to-br from-[#631012] to-[#4a0c0e] p-6 flex flex-col items-center justify-center text-white">
                        <div className="text-5xl font-bold mb-2">
                          {meet.year}
                        </div>
                        {meet.attendees && (
                          <div className="text-center">
                            <div className="text-2xl font-semibold">
                              {meet.attendees}+
                            </div>
                            <div className="text-xs text-gray-200">
                              Attendees
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="md:col-span-10 p-6">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                              {meet.theme}
                            </h3>
                            <div className="flex items-center gap-2 text-gray-600 mb-3">
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span className="text-sm">{meet.date}</span>
                            </div>
                          </div>
                          <button className="px-6 py-2 bg-[#631012] text-white rounded-lg hover:bg-[#7a1a1d] transition-colors duration-200 whitespace-nowrap self-start">
                            View Gallery
                          </button>
                        </div>

                        <div className="prose max-w-none">
                          <p className="text-gray-700 leading-relaxed">
                            <span className="font-semibold text-gray-800">
                              Highlights:{' '}
                            </span>
                            {meet.highlights}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {!showAllPastMeets && pastMeets.length > 3 && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowAllPastMeets(true)}
                    className="px-8 py-3 bg-white text-[#631012] font-semibold rounded-lg border-2 border-[#631012] hover:bg-[#631012] hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    View All Past Meets
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                  Event Gallery
                </h2>
                <p className="text-gray-600">
                  Memorable moments from our alumni reunions
                </p>
              </div>

              <div className="flex justify-center gap-3 mb-8 flex-wrap">
                <button
                  onClick={() => setSelectedYear(null)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedYear === null
                      ? 'bg-[#631012] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  All Years
                </button>
                {['2024', '2023', '2022'].map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                      selectedYear === year
                        ? 'bg-[#631012] text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages
                  .filter(
                    (img) => selectedYear === null || img.year === selectedYear
                  )
                  .map((image, index) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedImage(image.id)}
                    >
                      <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg
                            className="w-16 h-16 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-2">
                              {image.year}
                            </span>
                            <p className="font-semibold">{image.caption}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>

              <div className="text-center mt-10">
                <button className="px-8 py-3 bg-[#631012] text-white font-semibold rounded-lg hover:bg-[#7a1a1d] transition-all duration-200 shadow-md hover:shadow-lg">
                  View Complete Gallery
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                  Get Involved
                </h2>
                <p className="text-gray-600">
                  Have questions or want to participate? Reach out to us
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#631012] rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Contact Information
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#631012] mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">Email</p>
                        <a
                          href="mailto:alumni@nith.ac.in"
                          className="text-[#631012] hover:underline"
                        >
                          alumni@nith.ac.in
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#631012] mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">Phone</p>
                        <p className="text-gray-600">+91-1972-254545</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#631012] mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">
                          Alumni Relations Office
                        </p>
                        <p className="text-gray-600">
                          NIT Hamirpur, Himachal Pradesh - 177005
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#631012] rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Quick Actions
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <Link
                      href="/alumni/registration"
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-[#631012] hover:text-white transition-all duration-200 group"
                    >
                      <span className="font-medium">
                        Register for Annual Meet
                      </span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>

                    <Link
                      href="/alumni/network"
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-[#631012] hover:text-white transition-all duration-200 group"
                    >
                      <span className="font-medium">Alumni Network</span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>

                    <Link
                      href="/alumni/endowment-fund"
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-[#631012] hover:text-white transition-all duration-200 group"
                    >
                      <span className="font-medium">
                        Support Endowment Fund
                      </span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>

                    <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-[#631012] hover:text-white transition-all duration-200 group">
                      <span className="font-medium">Download Brochure</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-[#631012] to-[#4a0c0e] rounded-xl p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-3">
                  Stay Connected with NITH Alumni
                </h3>
                <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                  Join our vibrant alumni community and be part of a network
                  that spans the globe. Together, we continue to build on our
                  shared legacy of excellence.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="px-8 py-3 bg-white text-[#631012] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg">
                    Join Alumni Portal
                  </button>
                  <button className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-200">
                    Subscribe to Newsletter
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
