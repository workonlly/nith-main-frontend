'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAboutNithData } from '../api/api';
import { useEffect, useState } from 'react';

const TrainIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0h-.01M15 17a2 2 0 104 0m-4 0h-.01M9 17h6"
    />
  </svg>
);

const PlaneIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
);

const BusIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
    />
  </svg>
);

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const fadeInScale = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

interface ConnectivityInfo {
  icon: React.ReactNode;
  title: string;
  nearestPoint: string;
  distance: string;
  travelTime?: string;
  services: string;
  additionalInfo?: string;
}

export default function ConnectivityPage() {
  const language = useSelector((state: RootState) => state.language.value);
  const connectivityModes: ConnectivityInfo[] = [
    {
      icon: <TrainIcon />,
      title: 'By Rail',
      nearestPoint: 'Una Railway Station (Himachal Pradesh)',
      distance: 'Approximately 80 km',
      travelTime: '~2-3 hours',
      services:
        'Una is well-linked to all parts of the country. Regular bus and taxi services are available from Una to Hamirpur.',
      additionalInfo:
        'Trains from Delhi, Chandigarh, and Ambala connect to Una, from where road transport to Hamirpur takes around 2–3 hours.',
    },
    {
      icon: <PlaneIcon />,
      title: 'By Air',
      nearestPoint: 'Dharamshala Airport (Gaggal, District Kangra)',
      distance: 'About 75 km',
      travelTime: '~2 hours',
      services:
        'Chandigarh International Airport — approximately 200 km (~4 hours). Both airports have taxi and cab facilities.',
      additionalInfo:
        'Both airports have taxi and cab facilities directly to Hamirpur, with scenic routes through the Himalayan foothills.',
    },
    {
      icon: <BusIcon />,
      title: 'By Road',
      nearestPoint: 'National Highways NH-3',
      distance: '450 km from Delhi | 200 km from Chandigarh',
      travelTime: '~5 hours from Chandigarh',
      services:
        'Frequent HRTC and private bus services connect Hamirpur to Delhi, Chandigarh, Shimla, Dharamshala, and other major cities.',
      additionalInfo:
        'The campus is just 4 km from the main bus stand on the Hamirpur–Tauni Devi road.',
    },
  ];
  const [connectivityData, setConnectivityData] = useState<Record<
    string,
    unknown
  > | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // NEW: Fetch data on component mount (ID 6 = Connectivity)
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await getAboutNithData(6); // ID 6 for Connectivity

        if (response.success && response.data) {
          setConnectivityData(response.data);
        } else {
          setError('Connectivity information not found');
        }
      } catch (err) {
        setError('Failed to load connectivity data');
        console.error('Connectivity fetch error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

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
            <span className="text-gray-400">About</span>
            <span>›</span>
            <span className="text-[#800000] font-medium">Connectivity</span>
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
            Connectivity
          </h1>
          {connectivityData?.description ? (
            <div
              className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light"
              dangerouslySetInnerHTML={{ __html: connectivityData.description }}
            />
          ) : (
            <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              Well connected to all major cities through rail, air, and road
              networks — situated amidst serene hills while offering excellent
              accessibility
            </p>
          )}
        </motion.div>
      </section>

      <section className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#800000]/5 text-[#800000] text-sm font-semibold rounded-full mb-4">
              Travel Options
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How to Reach
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Multiple convenient options to reach our campus
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {connectivityModes.map((mode, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeInScale}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: 'easeOut',
                }}
                whileHover={{
                  y: -8,
                  transition: { type: 'spring', stiffness: 300 },
                }}
                className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-[#800000] text-white py-6 flex items-center justify-center flex-col gap-3">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { type: 'spring', stiffness: 400 },
                    }}
                  >
                    {mode.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold uppercase tracking-wide">
                    {mode.title}
                  </h3>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-[#800000] mb-1">
                      Nearest Point:
                    </h4>
                    <p className="text-gray-700 text-sm">{mode.nearestPoint}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#800000] mb-1">
                      Distance:
                    </h4>
                    <p className="text-gray-700 text-sm">{mode.distance}</p>
                    {mode.travelTime && (
                      <span className="inline-block mt-1 bg-[#800000]/10 text-[#800000] text-xs font-medium px-3 py-1 rounded-full">
                        {mode.travelTime}
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#800000] mb-1">
                      Services Available:
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {mode.services}
                    </p>
                  </div>

                  {mode.additionalInfo && (
                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-gray-600 text-xs leading-relaxed italic">
                        {mode.additionalInfo}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#800000]/5 text-[#800000] text-sm font-semibold rounded-full mb-4">
              Find Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Campus Location Map
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Navigate to our campus with ease
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-200">
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8919045449387!2d76.52076631515635!3d31.456267681398645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391adb4924f6f56b%3A0x2e7c3c1c6ea930c5!2sNational%20Institute%20of%20Technology%2C%20Hamirpur!5e0!3m2!1sen!2sin!4v1635847891234!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NIT Hamirpur Location Map"
                ></iframe>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm mb-3">
                  National Institute of Technology Hamirpur, Anu, Hamirpur,
                  Himachal Pradesh – 177005
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=National+Institute+of+Technology+Hamirpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#800000] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#631012] transition-colors shadow-md hover:shadow-lg"
                >
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
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-[#800000]/5 text-[#800000] text-sm font-semibold rounded-full mb-4">
              Quick Reference
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Quick Travel Guide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Essential travel information from major cities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#800000]"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#800000]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                From Delhi
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#800000] mt-1">•</span>
                  <span>Distance: ~450 km</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#800000] mt-1">•</span>
                  <span>By Road: 8-9 hours via NH-44 & NH-3</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#800000] mt-1">•</span>
                  <span>By Train: Delhi to Una, then road to Hamirpur</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#800000]"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#800000]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                From Chandigarh
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#800000] mt-1">•</span>
                  <span>Distance: ~200 km</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#800000] mt-1">•</span>
                  <span>By Road: 4-5 hours via NH-3</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#800000] mt-1">•</span>
                  <span>Regular HRTC buses available</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
