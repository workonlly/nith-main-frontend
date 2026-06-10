'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const societies = [
  {
    name: 'Robotics & Automation Club',
    focus:
      'Robotics design, autonomous systems, competitions (RoboFest, TechX)',
    faculty: 'Prof. R. Kumar',
    contact: 'robotics@nit.ac.in',
  },
  {
    name: 'Coding Club (CodeCell)',
    focus: 'Competitive programming, coding workshops, hackathons',
    faculty: 'Dr. A. Rao',
    contact: 'codecell@nit.ac.in',
  },
  {
    name: 'AI & ML Society',
    focus: 'Machine learning projects, seminars and research initiatives',
    faculty: 'Dr. S. Bansal',
    contact: 'aiml@nit.ac.in',
  },
  {
    name: 'Electronics & Embedded Systems',
    focus: 'PCB design, embedded projects and IoT labs',
    faculty: 'Prof. T. Iyer',
    contact: 'ees@nit.ac.in',
  },
  {
    name: 'IEEE Student Branch',
    focus: 'Technical talks, publications, standards and networking',
    faculty: 'Prof. M. N. Singh',
    contact: 'ieee@nit.ac.in',
  },
  {
    name: 'Software & App Developers',
    focus: 'Mobile/web development, open-source collaboration',
    faculty: 'Prof. V. Desai',
    contact: 'apps@nit.ac.in',
  },
  {
    name: 'Astronomy & Space Society',
    focus: 'Astronomy nights, astrophotography and public outreach',
    faculty: 'Dr. P. Nair',
    contact: 'astro@nit.ac.in',
  },
  {
    name: 'SAE Collegiate Club',
    focus: 'Vehicle design, Formula/BAJA teams and motorsport events',
    faculty: 'Prof. D. Joshi',
    contact: 'sae@nit.ac.in',
  },
];

export default function TechnicalIntroductionPage() {
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
            <Link
              href="/student/technical"
              className="hover:text-[#800000] transition-colors duration-200"
            >
              {language == 'en' ? 'Technical' : 'तकनीकी'}
            </Link>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              {language == 'en' ? 'Introduction' : 'परिचय'}
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
              {language == 'en' ? 'TECHNICAL — INTRODUCTION' : 'तकनीकी — परिचय'}
            </h1>
            <p className="text-white/85 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              {language == 'en'
                ? 'Technical clubs and societies nurture innovation, hands-on learning, and interdisciplinary projects. Students collaborate on robotics, software, electronics and space initiatives while participating in hackathons, competitions and research programmes.'
                : 'तकनीकी क्लब और सोसाइटी नवप्रवर्तन, व्यावहारिक सीखने और अंत:विषय परियोजनाओं को बढ़ावा देते हैं। छात्र रोबोटिक्स, सॉफ़्टवेयर, इलेक्ट्रॉनिक्स और अन्तरिक्ष पहलों पर सहयोग करते हैं और हैकाथॉन, प्रतियोगिताओं और शोध कार्यक्रमों में भाग लेते हैं।'}
            </p>
          </div>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {language == 'en'
              ? 'About Technical Clubs'
              : 'तकनीकी क्लबों के बारे में'}
          </h2>

          <div className="prose prose-slate text-gray-700">
            {language == 'en' ? (
              <>
                <p>
                  Technical societies provide platforms for students to apply
                  classroom knowledge to real-world problems. From prototype
                  development and coding challenges to inter-college contests
                  and research collaborations, these clubs build practical
                  skills and industry readiness.
                </p>

                <p>
                  Students are encouraged to start new initiatives, take part in
                  national-level competitions, and seek mentorship from faculty
                  and industry experts.
                </p>
              </>
            ) : (
              <>
                <p>
                  तकनीकी सोसाइटी छात्रों को कक्षा के ज्ञान को वास्तविक दुनिया की
                  समस्याओं पर लागू करने का मंच प्रदान करती हैं। प्रोटोटाइप
                  विकास, कोडिंग चुनौतियाँ, अंतर-कॉलेज प्रतियोगिताएँ और शोध सहयोग
                  छात्रों में व्यावहारिक कौशल और इंडस्ट्री के लिए तैयार होने की
                  क्षमता विकसित करते हैं।
                </p>

                <p>
                  छात्रों को नई पहल शुरू करने, राष्ट्रीय स्तर की प्रतियोगिताओं
                  में भाग लेने और फैकल्टी व उद्योग विशेषज्ञों से मार्गदर्शन लेने
                  के लिए प्रोत्साहित किया जाता है।
                </p>
              </>
            )}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              {language == 'en'
                ? 'Technical Societies & Clubs'
                : 'तकनीकी सोसाइटी और क्लब'}
            </h3>
            <p className="text-sm text-gray-500">
              {language == 'en'
                ? 'Click a row to contact the faculty-in-charge'
                : 'किसी पंक्ति पर क्लिक करके संपर्क करें'}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-[#800000] text-white">
                  <th className="px-4 py-3 text-left text-sm font-medium">#</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    {language == 'en' ? 'Society / Club' : 'सोसाइटी / क्लब'}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    {language == 'en'
                      ? 'Focus / Activities'
                      : 'केंद्र / गतिविधियाँ'}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    {language == 'en' ? 'Faculty In-charge' : 'फैकल्टी प्रभारी'}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    {language == 'en' ? 'Contact' : 'संपर्क'}
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-100">
                {societies.map((s, idx) => (
                  <tr
                    key={s.name}
                    className="hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <td className="px-4 py-4 text-sm text-gray-700">
                      {idx + 1}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-900 font-medium">
                      {s.name}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-700">
                      {s.focus}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-700">
                      {s.faculty}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#800000] underline">
                      {s.contact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      
    </div>
  );
}
