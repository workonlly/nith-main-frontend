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
    name: 'Cultural Council',
    focus: 'Coordination of all cultural activities and annual festival',
    faculty: 'Prof. A. Sharma',
    contact: 'council@nit.ac.in',
  },
  {
    name: 'Music Club',
    focus: 'Vocal, instrumental and band performances',
    faculty: 'Dr. R. Verma',
    contact: 'music@nit.ac.in',
  },
  {
    name: 'Dance Club',
    focus: 'Classical, folk and contemporary dance',
    faculty: 'Prof. S. Kaur',
    contact: 'dance@nit.ac.in',
  },
  {
    name: 'Drama & Theatre',
    focus: 'Stage plays, skits and playwriting workshops',
    faculty: 'Dr. N. Iyer',
    contact: 'drama@nit.ac.in',
  },
  {
    name: 'Literary Club',
    focus: 'Debates, creative writing and poetry slams',
    faculty: 'Prof. M. Gupta',
    contact: 'literary@nit.ac.in',
  },
  {
    name: 'Fine Arts Club',
    focus: 'Painting, sketching and applied arts',
    faculty: 'Prof. L. Rao',
    contact: 'arts@nit.ac.in',
  },
  {
    name: 'Photography Club',
    focus: 'Workshops, campus photography and exhibitions',
    faculty: 'Dr. P. Singh',
    contact: 'photo@nit.ac.in',
  },
  {
    name: 'Film & Media Club',
    focus: 'Short films, editing and media workshops',
    faculty: 'Prof. D. Mehta',
    contact: 'media@nit.ac.in',
  },
];

export default function CulturalIntroductionPage() {
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
              href="/student/cultural"
              className="hover:text-[#800000] transition-colors duration-200"
            >
              {language == 'en' ? 'Cultural' : 'सांस्कृतिक'}
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
              {language == 'en'
                ? 'CULTURAL — INTRODUCTION'
                : 'सांस्कृतिक — परिचय'}
            </h1>
            <p className="text-white/85 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              {language == 'en'
                ? 'Cultural activities at our institute enrich student life, foster creativity, and build a sense of community. Through clubs, societies and regular events, students get opportunities to showcase talents, work in teams, and engage with the wider campus culture.'
                : 'हमारे संस्थान में सांस्कृतिक गतिविधियाँ छात्र जीवन को समृद्ध करती हैं, रचनात्मकता को बढ़ावा देती हैं और समुदाय की भावना निर्मित करती हैं। क्लबों, सोसाइटीज़ और कार्यक्रमों के माध्यम से छात्र अपनी प्रतिभा दिखाने, टीम में काम करने और परिसर संस्कृति में भाग लेने के अवसर पाते हैं।'}
            </p>
          </div>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {language == 'en'
              ? 'About Cultural Activities'
              : 'सांस्कृतिक गतिविधियों के बारे में'}
          </h2>

          <div className="prose prose-slate text-gray-700">
            {language == 'en' ? (
              <>
                <p>
                  Cultural engagements play a vital role in holistic student
                  development. Events like cultural nights, music and dance
                  competitions, theatre festivals, art exhibitions and film
                  screenings are organised throughout the year in collaboration
                  with departmental and student clubs.
                </p>

                <p>
                  Students are encouraged to form new clubs, participate in
                  inter-collegiate events, and contribute to annual cultural
                  fests that promote diversity and creative expression.
                </p>
              </>
            ) : (
              <>
                <p>
                  सांस्कृतिक गतिविधियाँ समग्र छात्र विकास में महत्वपूर्ण भूमिका
                  निभाती हैं। सांस्कृतिक रात्रियाँ, संगीत और नृत्य
                  प्रतियोगिताएँ, नाट्य उत्सव, कला प्रदर्शनियाँ और फिल्म
                  स्क्रीनिंग वर्ष भर आयोजित की जाती हैं।
                </p>

                <p>
                  छात्रों को नए क्लब बनाने, अंतर-कॉलेज कार्यक्रमों में भाग लेने
                  और विविधता व रचनात्मक अभिव्यक्ति को बढ़ावा देने वाले वार्षिक
                  उत्सवों में योगदान करने के लिए प्रोत्साहित किया जाता है।
                </p>
              </>
            )}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              {language == 'en'
                ? 'Cultural Societies & Clubs'
                : 'सांस्कृतिक सोसाइटी और क्लब'}
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
