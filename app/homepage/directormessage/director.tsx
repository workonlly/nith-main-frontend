'use client';

import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '../../store'; // Adjust path to your store

// Static Data with English and Hindi translations
const directorData = {
  image: '/direct.jpg',

  // Headers
  label: 'Leadership',
  labelHi: 'नेतृत्व',

  heading: "Director's Message",
  headingHi: 'निदेशक का संदेश',

  // Profile Details
  name: 'Prof. H.M. Suryavanshi',
  nameHi: 'प्रो. एच.एम. सूर्यवंशी',

  designation: 'Director',
  designationHi: 'निदेशक',

  institute: 'National Institute of Technology, Hamirpur',
  instituteHi: 'राष्ट्रीय प्रौद्योगिकी संस्थान, हमीरपुर',

  // The Message
  message:
    'Education is not just about gathering knowledge, but about building character and fostering innovation. At NIT Hamirpur, we strive to create an ecosystem where young minds can flourish, research can solve real-world problems, and students are prepared to lead the nation towards a brighter future.',
  messageHi:
    'शिक्षा केवल ज्ञान एकत्रित करना नहीं है, बल्कि चरित्र निर्माण और नवाचार को बढ़ावा देना है। एनआईटी हमीरपुर में, हम एक ऐसा पारिस्थितिकी तंत्र बनाने का प्रयास करते हैं जहां युवा दिमाग पनप सकें, अनुसंधान वास्तविक दुनिया की समस्याओं को हल कर सके, और छात्र देश को उज्ज्वल भविष्य की ओर ले जाने के लिए तैयार हों।',
};

export default function Director() {
  // 1. Get current language from Redux
  const language = useSelector((state: RootState) => state.language.value);

  return (
    <section className="relative  px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Decorative Patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#631012]/5 skew-x-12 translate-x-20 pointer-events-none" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-gray-200 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* === SECTION HEADER === */}
        <div className="text-center mb-16">
          <span className="text-[#631012] font-bold tracking-widest uppercase text-sm">
            {language === 'en' ? directorData.label : directorData.labelHi}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2">
            {language === 'en' ? directorData.heading : directorData.headingHi}
          </h2>
          <div className="w-20 h-1.5 bg-[#631012] mx-auto mt-4 rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* === LEFT SIDE: IMAGE === */}
          <div className="relative group shrink-0 w-full sm:w-80">
            <div className="relative w-full h-96 sm:h-[28rem] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={directorData.image}
                alt={
                  language === 'en' ? directorData.name : directorData.nameHi
                }
                width={320}
                height={384}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 brightness-100 group-hover:brightness-110"
                priority
              />
            </div>
          </div>

          {/* === RIGHT SIDE: CONTENT === */}
          <div className="relative flex-1 text-center lg:text-left mt-12 lg:mt-0">
            <div className="relative">
              {/* Main Quote Message */}
              <blockquote className="text-lg md:text-2xl leading-relaxed md:leading-9 text-gray-800 font-serif italic mb-8 relative z-10 tracking-wide">
                &ldquo;
                {language === 'en'
                  ? directorData.message
                  : directorData.messageHi}
                &rdquo;
              </blockquote>

              {/* Divider line */}
              <div className="w-16 h-1 bg-gradient-to-r from-[#631012] to-[#631012]/40 mx-auto lg:mx-0 mb-6 rounded-full" />

              {/* Director Info */}
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="space-y-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#631012] leading-tight">
                    {language === 'en'
                      ? directorData.name
                      : directorData.nameHi}
                  </h3>
                  <p className="text-sm md:text-base font-semibold text-gray-600 uppercase tracking-widest">
                    {language === 'en'
                      ? directorData.designation
                      : directorData.designationHi}
                  </p>
                </div>

                {/* Institute Name */}
                <div className="mt-4 pt-4 border-t-2 border-gray-300 w-full lg:w-auto">
                  <p className="text-xs text-gray-500 font-semibold tracking-wider uppercase">
                    {language === 'en'
                      ? directorData.institute
                      : directorData.instituteHi}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
