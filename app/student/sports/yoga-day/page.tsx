'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export default function Page() {
  const language = useSelector((state: RootState) => state.language.value);

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
            <span>›</span>
            <span className="text-[#800000] font-medium">
              {language == 'en'
                ? 'International Yoga Day'
                : 'अंतर्राष्ट्रीय योग दिवस'}
            </span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center py-20 px-6 md:px-12"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            {language == 'en'
              ? 'INTERNATIONAL YOGA DAY'
              : 'अंतर्राष्ट्रीय योग दिवस'}
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            {language == 'en'
              ? 'Join the campus community for yoga sessions that promote wellness, balance and mindful living.'
              : 'संपूर्ण छात्र समुदाय में शामिल हो कर स्वास्थ्य, संतुलन और मानसिक शांति के लिए योग सत्रों में भाग लें।'}
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {language == 'en' ? 'About the Event' : 'कार्यक्रम के बारे में'}
          </h2>
          <p className="text-gray-700">
            {language == 'en'
              ? 'International Yoga Day at the institute brings students, staff and faculty together for guided yoga practices, breathing exercises and workshops led by trained instructors. The aim is to encourage physical and mental wellbeing, accessible to participants of all levels.'
              : 'संस्थान में अंतर्राष्ट्रीय योग दिवस छात्रों, स्टाफ और संकाय को प्रशिक्षित प्रशिक्षकों द्वारा संचालित मार्गदर्शित योग, श्वास अभ्यास और कार्यशालाओं के लिए एकत्र करता है। उद्देश्य सभी स्तरों के प्रतिभागियों के लिए शारीरिक और मानसिक स्वास्थ्य को प्रोत्साहित करना है।'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                {language == 'en' ? 'Schedule' : 'अनुसूची'}
              </h3>
              <div className="text-gray-700">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    {language == 'en'
                      ? '06:00 AM – 07:30 AM · Morning Yoga (All levels)'
                      : 'सुबह 06:00 – 07:30 · मॉर्निंग योग (सभी स्तर)'}
                  </li>
                  <li>
                    {language == 'en'
                      ? '08:00 AM – 09:00 AM · Breathing & Relaxation Workshop'
                      : 'सुबह 08:00 – 09:00 · प्राणायाम और विश्राम कार्यशाला'}
                  </li>
                  <li>
                    {language == 'en'
                      ? '10:00 AM – 12:00 PM · Advanced Techniques session'
                      : 'सुबह 10:00 – 12:00 · उन्नत तकनीक सत्र'}
                  </li>
                  <li>
                    {language == 'en'
                      ? '03:00 PM – 04:00 PM · Community Session & Q&A'
                      : 'दोपहर 03:00 – 04:00 · सामुदायिक सत्र और प्रश्नोत्तर'}
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                {language == 'en' ? 'Benefits' : 'लाभ'}
              </h3>
              <div className="text-gray-700">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    {language == 'en'
                      ? 'Improve flexibility, strength and posture'
                      : 'लचीलापन, ताकत और मुद्रा में सुधार'}
                  </li>
                  <li>
                    {language == 'en'
                      ? 'Reduce stress with breathing techniques'
                      : 'श्वास तकनीकों से तनाव में कमी'}
                  </li>
                  <li>
                    {language == 'en'
                      ? 'Increase mental clarity and focus'
                      : 'मानसिक स्पष्टता और एकाग्रता में वृद्धि'}
                  </li>
                  <li>
                    {language == 'en'
                      ? 'Suitable for beginners and advanced practitioners'
                      : 'शुरुआती और उन्नत दोनों के लिए उपयुक्त'}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">
              {language == 'en' ? 'Instructors' : 'प्रशिक्षक'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div className="space-y-1">
                <div className="font-medium">
                  {language == 'en'
                    ? 'Ms. Ananya Sharma'
                    : 'सुश्री अनन्या शर्मा'}
                </div>
                <div className="text-sm">
                  {language == 'en'
                    ? 'Senior Yoga Trainer'
                    : 'वरिष्ठ योग प्रशिक्षक'}
                </div>
                <div className="text-sm">Email: ananya@yoga.nith.ac.in</div>
              </div>

              <div className="space-y-1">
                <div className="font-medium">
                  {language == 'en' ? 'Mr. Vikram Singh' : 'श्री विक्रम सिंह'}
                </div>
                <div className="text-sm">
                  {language == 'en'
                    ? 'Breathwork Specialist'
                    : 'श्वास अभ्यास विशेषज्ञ'}
                </div>
                <div className="text-sm">Email: vikram@yoga.nith.ac.in</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
