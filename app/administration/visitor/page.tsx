'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function VisitorPage() {
  const language = useSelector((state: RootState) => state.language.value);
  return (
    <div className="min-h-screen bg-white">
      

      <div className="bg-gray-50 py-4 px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-[#800000] transition-colors duration-200"
            >
              {language == 'en' ? 'Home' : 'होम'}
            </Link>
            <span>›</span>
            <span className="text-gray-400">
              {language == 'en' ? 'Administration' : 'प्रशासन'}
            </span>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              {language == 'en' ? 'Visitor' : 'आगंतुक'}
            </span>
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
            {language == 'en' ? 'Visitor' : 'आगंतुक'}
          </h1>

          <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            {language == 'en'
              ? 'Official Visitor of the Institute'
              : 'संस्थान के आधिकारिक आगंतुक'}
          </p>
        </motion.div>
      </section>

      {/* Visitor details separated into its own section */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200">
            <div className="flex flex-col items-center gap-8">
              {/* Image area */}
              <div className="flex-shrink-0">
                <div className="w-72 h-96 md:w-96 md:h-screen bg-gradient-to-br from-[#800000] to-[#631012] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/presidentimage.jpg"
                    alt="Visitor"
                    width={688}
                    height={1088}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="w-full text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {language == 'en'
                    ? 'Smt. Droupadi Murmu'
                    : 'श्रीमती द्रौपदी मुर्मु'}
                </h2>

                <div className="inline-block mb-6 px-4 py-2 bg-[#800000]/10 rounded-full">
                  <p className="text-[#800000] font-semibold text-sm uppercase tracking-wide">
                    {language == 'en'
                      ? 'President of India'
                      : 'भारत की राष्ट्रपति'}
                  </p>
                </div>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
                  {language == 'en'
                    ? `Her Excellency Honorable Smt. Droupadi Murmu, The President of India, is the ex officio visitor of the Institute.`
                    : `माननीय श्रीमती द्रौपदी मुर्मु, भारत की राष्ट्रपति, संस्थान की पदेन आगंतुक हैं।`}
                </p>

                <div className="flex flex-col items-center gap-4">
                  <Link
                    href="https://rashtrapati.gov.in"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#800000] text-white font-semibold rounded-2xl hover:bg-[#631012] shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {language == 'en' ? 'Official Portal' : 'आधिकारिक पोर्टल'}
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <p className="text-sm text-gray-500 max-w-xs">
                    {language == 'en'
                      ? `For formal communications, please use the President's official channels.`
                      : `औपचारिक संचार के लिए, कृपया राष्ट्रपति के आधिकारिक चैनलों का उपयोग करें।`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
