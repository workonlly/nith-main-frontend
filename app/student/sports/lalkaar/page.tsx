'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export default function Page() {
  const language = useSelector((state: RootState) => state.language.value);
  const [active, setActive] = useState('about');

  const sections = [
    {
      key: 'about',
      en: 'About Us',
      hi: 'हमारे बारे में',
      contentEn:
        'Lalkaar is an annual sports and cultural meet celebrating student energy, teamwork and competitive spirit. It features exhibitions, matches, and performances across disciplines.',
      contentHi:
        'ललकार एक वार्षिक खेल और सांस्कृतिक सम्मेलन है जो छात्र ऊर्जा, टीम वर्क और प्रतिस्पर्धी भावना का जश्न मनाता है। इसमें प्रदर्शन, मैच और कई गतिविधियाँ शामिल हैं।',
    },
    {
      key: 'facilities',
      en: 'Facilities',
      hi: 'सुविधाएँ',
      contentEn:
        'Our campus provides outdoor fields, indoor stadiums, gymnasia and training spaces. Temporary arrangements are made during the event for staging and spectator areas.',
      contentHi:
        'हमारे परिसर में बाहरी मैदान, इनडोर स्टेडियम, जिम और प्रशिक्षण स्थान शामिल हैं। कार्यक्रम के दौरान स्टेजिंग और दर्शक क्षेत्रों के लिए अस्थायी व्यवस्था की जाती है।',
    },
    {
      key: 'events',
      en: 'Events',
      hi: 'आयोजन',
      contentEn:
        'Events include athletics, team sports (football, basketball, volleyball), martial arts demonstrations, and cultural performances.',
      contentHi:
        'आयोजनों में एथलेटिक्स, टीम स्पोर्ट्स (फुटबॉल, बास्केटबॉल, वॉलीबॉल), मार्शल आर्ट्स प्रदर्शन और सांस्कृतिक कार्यक्रम शामिल हैं।',
    },
    {
      key: 'karates',
      en: 'Karates',
      hi: 'मुक्केबाज़ी',
      contentEn:
        'Karate demonstrations and friendly competitions are organised with coaching clinics for beginners.',
      contentHi:
        'कराते प्रदर्शन और फ्रेंडली प्रतियोगिताएँ आयोजित की जाती हैं, जिनमें शुरुआती के लिए कोचिंग क्लिनिक्स शामिल हैं।',
    },
    {
      key: 'yoga',
      en: 'Yoga',
      hi: 'योग',
      contentEn:
        'Yoga sessions and workshops focusing on wellness, flexibility and mindfulness are conducted by certified instructors.',
      contentHi:
        'स्वास्थ्य, लचीलापन और माइंडफुलनेस पर केंद्रित योग सत्र और कार्यशालाएँ प्रमाणित प्रशिक्षकों द्वारा कराई जाती हैं।',
    },
    {
      key: 'achievements',
      en: 'Achievements',
      hi: 'उपलब्धियाँ',
      contentEn:
        'Students consistently secure top positions in zonal and national competitions; several medalists emerge each year.',
      contentHi:
        'छात्र क्षेत्रीय और राष्ट्रीय प्रतियोगिताओं में लगातार शीर्ष स्थान प्राप्त करते हैं; प्रत्येक वर्ष कई पदक विजेता उभरते हैं।',
    },
    {
      key: 'contact',
      en: 'Contact Us',
      hi: 'संपर्क करें',
      contentEn:
        'For inquiries: Sports Office | Phone: 254570 | Email: sports@nith.ac.in',
      contentHi:
        'संपर्क के लिए: खेल कार्यालय | फोन: 254570 | ईमेल: sports@nith.ac.in',
    },
  ];

  const activeSection = sections.find((s) => s.key === active)!;

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
            <span>›</span>
            <span className="text-[#800000] font-medium">
              {language == 'en' ? 'Lalkaar' : 'ललकार'}
            </span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center py-20 px-6 md:px-12"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            {language == 'en' ? 'LALKAAR' : 'ललकार'}
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            {language == 'en'
              ? 'A celebration of sports, martial arts and student performances.'
              : 'खेल, मार्शल आर्ट्स और छात्र प्रदर्शन का उत्सव।'}
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr_280px] gap-6">
          {/* Left Sidebar */}
          <aside className="hidden md:block">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
              <h3 className="text-lg font-semibold mb-3">
                {language == 'en' ? 'Explore' : 'खोजें'}
              </h3>
              <nav className="space-y-2">
                {sections.map((s) => (
                  <button
                    key={s.key}
                    onClick={() => setActive(s.key)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition ${active === s.key ? 'bg-[#800000] text-white' : 'hover:bg-gray-100'}`}
                  >
                    {language == 'en' ? s.en : s.hi}
                  </button>
                ))}
              </nav>
            </div>
          </aside>
          {/* Main / Right display */}
          <section className="space-y-6">
            {/* Mobile selector */}
            <div className="md:hidden bg-white rounded-lg shadow-sm p-4">
              <label className="sr-only">
                {language == 'en' ? 'Select section' : 'धारा चुनें'}
              </label>
              <select
                value={active}
                onChange={(e) => setActive(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-2"
              >
                {sections.map((s) => (
                  <option key={s.key} value={s.key}>
                    {language == 'en' ? s.en : s.hi}
                  </option>
                ))}
              </select>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-2xl font-semibold mb-3">
                {language == 'en' ? activeSection.en : activeSection.hi}
              </h2>
              <p className="text-gray-700">
                {language == 'en'
                  ? activeSection.contentEn
                  : activeSection.contentHi}
              </p>
              {/* Dummy extra content for display */}
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>
                  {language == 'en'
                    ? 'Date: 10th March, 2026'
                    : 'तिथि: 10 मार्च, 2026'}
                </p>
                <p>
                  {language == 'en'
                    ? 'Venue: Institute Sports Ground'
                    : 'स्थल: संस्थान खेल मैदान'}
                </p>
                <p>
                  {language == 'en'
                    ? 'Coordinator: Prof. R.K. Jamalta — jamalta@nith.ac.in'
                    : 'समन्वयक: प्रो. आर.के. जमालता — jamalta@nith.ac.in'}
                </p>
              </div>
              {/* Quick actions / links */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                    href="/student/sports"
                  className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-[#800000] hover:text-white transition"
                >
                  {language == 'en' ? 'Register' : 'पंजीकरण'}
                </Link>
                <Link
                  href="/student/sports"
                  className="px-4 py-2 rounded-lg border border-slate-200"
                >
                  {language == 'en'
                    ? 'Download Brochure'
                    : 'ब्रॉशर डाउनलोड करें'}
                </Link>
              </div>
            </motion.div>
          </section>
          <aside className="hidden md:block">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
              <h4 className="font-semibold mb-2">
                {language == 'en' ? 'Quick Info' : 'त्वरित जानकारी'}
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  {language == 'en'
                    ? 'Crowd expected: 1500+'
                    : 'अपेक्षित भीड़: 1500+'}
                </li>
                <li>
                  {language == 'en'
                    ? 'Refreshments stalls: Available'
                    : 'खाद्य स्टॉल: उपलब्ध'}
                </li>
                <li>
                  {language == 'en'
                    ? 'First-aid: At main gate'
                    : 'प्रथम चिकित्सा: मुख्य गेट पर'}
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      
    </div>
  );
}
