'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Page() {
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
              {language == 'en' ? 'Student' : 'छात्र'}
            </span>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              {language == 'en' ? 'Sports' : 'खेलकूद'}
            </span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <motion.div
          initial={fadeUp.hidden}
          animate={fadeUp.visible}
          className="relative z-10 text-center py-20 px-6 md:px-12"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            {language == 'en' ? 'SPORTS & GAMES' : 'खेलकूद और खेल'}
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            {language == 'en'
              ? 'Promoting health, teamwork and excellence through various sports and recreational activities.'
              : 'विभिन्न खेल और मनोरंजक गतिविधियों के माध्यम से स्वास्थ्य, टीम भावना और उत्कृष्टता को बढ़ावा देना।'}
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {language == 'en' ? 'Introduction' : 'परिचय'}
          </h2>
          <p className="text-gray-700 mb-4">
            {language == 'en'
              ? 'The Sports & Games section at our institute is dedicated to encouraging physical fitness, sportsmanship and competitive excellence among students. We offer coaching, regular tournaments and facilities across indoor and outdoor disciplines.'
              : 'हमारे संस्थान में खेल और खेल अनुभाग छात्रों में शारीरिक फिटनेस, खेल भावना और प्रतियोगी उत्कृष्टता को बढ़ावा देने के लिए समर्पित है। हम कोचिंग, नियमित टूर्नामेंट और इनडोर और आउटडोर दोनों प्रकार की सुविधाएँ प्रदान करते हैं।'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                {language == 'en' ? 'Facilities' : 'सुविधाएँ'}
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  {language == 'en'
                    ? 'Athletic track and outdoor fields'
                    : 'एथलेटिक ट्रैक और बाहरी मैदान'}
                </li>
                <li>
                  {language == 'en'
                    ? 'Multi-purpose indoor stadium and courts'
                    : 'मल्टी-परपज़ इनडोर स्टेडियम और कोर्ट'}
                </li>
                <li>
                  {language == 'en'
                    ? 'Gymnasium with modern equipment'
                    : 'आधुनिक उपकरणों वाला जिम'}
                </li>
                <li>
                  {language == 'en'
                    ? 'Swimming pool and aquatics facilities'
                    : 'तैराकी पूल और जल क्रीड़ा सुविधाएँ'}
                </li>
                <li>
                  {language == 'en'
                    ? 'Coaching and fitness programs'
                    : 'कोचिंग और फिटनेस प्रोग्राम'}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                {language == 'en' ? 'Major Events' : 'मुख्य आयोजन'}{' '}
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  {language == 'en'
                    ? 'Annual Sports Day (Inter-hostel & Institute level)'
                    : 'वार्षिक खेल दिवस (इंटर-होस्टल और संस्थान स्तर)'}
                </li>
                <li>
                  {language == 'en'
                    ? 'Inter-department tournaments and leagues'
                    : 'इंटर-डिपार्टमेंट टूर्नामेंट और लीग'}
                </li>
                <li>
                  {language == 'en'
                    ? 'External competitions and representation at Inter-NIT meets'
                    : 'बाहरी प्रतियोगिताएँ और इंटर-एनआईटी में प्रतिनिधित्व'}
                </li>
                <li>
                  {language == 'en'
                    ? 'Fitness camps and coaching clinics'
                    : 'फिटनेस कैंप और कोचिंग क्लिनिक्स'}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">
              {language == 'en'
                ? 'Notable Achievements'
                : 'उल्लेखनीय उपलब्धियाँ'}
            </h3>
            <p className="text-gray-700 mb-2">
              {language == 'en'
                ? 'Our teams and individual athletes have secured medals and top finishes at zonal and national level competitions across multiple disciplines.'
                : 'हमारी टीमों और व्यक्तिगत खिलाड़ियों ने कई विषयों में क्षेत्रीय और राष्ट्रीय स्तर की प्रतियोगिताओं में पदक और शीर्ष रैंक हासिल किए हैं।'}
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                {language == 'en'
                  ? 'Consistent representation at Inter-NIT Championships'
                  : 'इंटर-एनआईटी चैम्पियनशिप में लगातार प्रतिनिधित्व'}
              </li>
              <li>
                {language == 'en'
                  ? 'Medal winners in athletics and team sports'
                  : 'एथलेटिक्स और टीम स्पोर्ट्स में पदक विजेता'}
              </li>
              <li>
                {language == 'en'
                  ? 'Regular selection of students for state and national camps'
                  : 'राज्य और राष्ट्रीय शिविरों के लिए नियमित चयन'}
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">
              {language == 'en'
                ? 'Contact & Coordinators'
                : 'संपर्क और समन्वयक'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div className="space-y-1">
                <div className="font-medium">
                  {language == 'en'
                    ? 'Prof. R.K. Jamalta'
                    : 'प्रो. आर.के. जमालता'}
                </div>
                <div className="text-sm">
                  {language == 'en'
                    ? 'Faculty In-charge, Sports & Games'
                    : 'फैकल्टी प्रभारी, खेल और खेल'}
                </div>
                <div className="text-sm">
                  {language == 'en'
                    ? 'Phone: 254570 | Mobile: 7018709303'
                    : 'फोन: 254570 | मोबाइल: 7018709303'}
                </div>
                <div className="text-sm">Email: jamalta@nith.ac.in</div>
              </div>

              <div className="space-y-1">
                <div className="font-medium">
                  {language == 'en' ? 'Sports Office' : 'खेल कार्यालय'}
                </div>
                <div className="text-sm">
                  {language == 'en'
                    ? 'Sports Complex, Institute Campus'
                    : 'खेल परिसर, संस्थान परिसर'}
                </div>
                <div className="text-sm">
                  {language == 'en' ? 'Office: 254570' : 'कार्यालय: 254570'}
                </div>
                <div className="text-sm">
                  {language == 'en'
                    ? 'Email: sports@nith.ac.in'
                    : 'ईमेल: sports@nith.ac.in'}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}
