'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function InnovationPage() {
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
            <Link
              href="/student/technical"
              className="hover:text-[#800000] transition-colors duration-200"
            >
              {language == 'en' ? 'Technical' : 'तकनीकी'}
            </Link>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              {language == 'en' ? 'Innovation' : 'इनोवेशन'}
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
        >
          <div className="relative z-10 text-center py-20 px-6 md:px-12">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
              {language == 'en' ? 'INNOVATION HUB' : 'इनोवेशन हब'}
            </h1>

            <p className="text-white/85 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              {language == 'en'
                ? 'Our Innovation Hub helps transform ideas into prototypes and impactful projects through mentorship, workshops, and access to maker-spaces. Students learn by building — from ideation to demonstration and, where possible, incubation.'
                : 'हमारा इनोवेशन हब मेंटॉरशिप, कार्यशालाएँ और मेकर-स्पेस तक पहुँच प्रदान करके विचारों को प्रोटोटाइप और उपयोगी परियोजनाओं में बदलने में मदद करता है। छात्र विचार से लेकर प्रदर्शन और संभव होने पर इनक्यूबेशन तक निर्माण के माध्यम से सीखते हैं।'}
            </p>
          </div>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {language == 'en'
              ? 'About Innovation Hub'
              : 'इनोवेशन हब के बारे में'}
          </h2>

          <div className="prose prose-slate text-gray-700">
            {language == 'en' ? (
              <>
                <p>
                  The Innovation Hub is a student-centred ecosystem that
                  encourages experimentation, rapid prototyping and
                  interdisciplinary collaboration. It supports students from
                  ideation and design through to working prototypes and
                  demonstrations.
                </p>

                <p>
                  Through regular workshops, mentorship programs, and demo days,
                  the hub connects students with faculty mentors and industry
                  experts, enabling practical learning and project showcase
                  opportunities.
                </p>
              </>
            ) : (
              <>
                <p>
                  इनोवेशन हब एक छात्र-केंद्रित पारिस्थितिकी तंत्र है जो प्रयोग,
                  त्वरित प्रोटोटाइपिंग और बहु-विषयक सहयोग को प्रोत्साहित करता
                  है। यह विचार, डिज़ाइन से लेकर कार्यशील प्रोटोटाइप और प्रदर्शन
                  तक छात्रों का समर्थन करता है।
                </p>

                <p>
                  नियमित कार्यशालाओं, मेंटॉरशिप कार्यक्रमों और डेमो दिनों के
                  माध्यम से, हब छात्रों को फैकल्टी मेंटर्स और उद्योग विशेषज्ञों
                  से जोड़ता है, जिससे व्यावहारिक सीखने और परियोजना प्रदर्शन के
                  अवसर मिलते हैं।
                </p>
              </>
            )}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3">
            {language == 'en' ? 'Focus Areas' : 'केंद्रित क्षेत्र'}
          </h3>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              {language == 'en'
                ? 'Rapid prototyping and product development'
                : 'त्वरित प्रोटोटाइप और उत्पाद विकास'}
            </li>
            <li>
              {language == 'en'
                ? 'Design thinking and user-centred design'
                : 'डिज़ाइन थिंकिंग और उपयोगकर्ता-केंद्रित डिज़ाइन'}
            </li>
            <li>
              {language == 'en'
                ? 'IoT, Embedded Systems and Robotics'
                : 'IoT, एंबेडेड सिस्टम और रोबोटिक्स'}
            </li>
            <li>
              {language == 'en'
                ? 'Software systems, AI and data-driven projects'
                : 'सॉफ़्टवेयर सिस्टम, AI और डेटा-आधारित परियोजनाएँ'}
            </li>
            <li>
              {language == 'en'
                ? 'Startup incubation and entrepreneurship support'
                : 'स्टार्टअप इनक्यूबेशन और उद्यमिता समर्थन'}
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3">
            {language == 'en'
              ? 'Programs & Opportunities'
              : 'कार्यक्रम और अवसर'}
          </h3>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              {language == 'en'
                ? 'Workshops, bootcamps and hands-on labs'
                : 'वर्कशॉप, बूटकैम्प और व्यावहारिक लैब'}
            </li>
            <li>
              {language == 'en'
                ? 'Mentorship from faculty and industry'
                : 'फैकल्टी और उद्योग से मेंटॉरशिप'}
            </li>
            <li>
              {language == 'en'
                ? 'Access to maker-spaces and prototyping equipment'
                : 'मेकर-स्पेस और प्रोटोटाइप उपकरणों तक पहुँच'}
            </li>
            <li>
              {language == 'en'
                ? 'Funding, grants and project showcases'
                : 'फंडिंग, अनुदान और परियोजना प्रदर्शन'}
            </li>
            <li>
              {language == 'en'
                ? 'Intellectual property and prototype support'
                : 'बौद्धिक संपदा और प्रोटोटाइप समर्थन'}
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3">
            {language == 'en' ? 'How to Join' : 'कैसे जुड़ें'}
          </h3>

          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>
              {language == 'en'
                ? 'Attend the introductory session or workshops'
                : 'परिचयात्मक सत्र या कार्यशालाओं में भाग लें'}
            </li>
            <li>
              {language == 'en'
                ? 'Form or join a project team with peers'
                : 'सहपाठियों के साथ एक परियोजना टीम बनाएं या उसमें शामिल हों'}
            </li>
            <li>
              {language == 'en'
                ? 'Apply for mentorship or small grants when ready'
                : 'तैयार होने पर मेंटॉरशिप या छोटे अनुदान के लिए आवेदन करें'}
            </li>
            <li>
              {language == 'en'
                ? 'Showcase your prototype at demo days and apply for incubation'
                : 'डेमो दिनों पर अपना प्रोटोटाइप दिखाएँ और इनक्यूबेशन के लिए आवेदन करें'}
            </li>
          </ol>

          <div className="mt-4 text-sm text-gray-700">
            <p>
              {language == 'en' ? (
                <>
                  For queries or to propose a project, contact{' '}
                  <span className="text-[#800000] underline">
                    innovation@nit.ac.in
                  </span>
                  .
                </>
              ) : (
                <>
                  प्रश्न या परियोजना प्रस्ताव करने के लिए संपर्क करें{' '}
                  <span className="text-[#800000] underline">
                    innovation@nit.ac.in
                  </span>
                  ।
                </>
              )}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
