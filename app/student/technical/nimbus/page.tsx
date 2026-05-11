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

export default function NimbusPage() {
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
              {language == 'en' ? 'Nimbus' : 'निम्बस'}
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
              {language == 'en' ? 'NIMBUS' : 'निम्बस'}
            </h1>

            <p className="text-white/85 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              {language == 'en' ? (
                <>
                  NIMBUS is all about students from different branches coming
                  together, forming departmental teams and societies, making
                  technical projects and organising workshops and exhibitions.
                  In other words, students working for Nimbus gain knowledge
                  about all sorts of technologies around, couple it with hands
                  on experience and spread it around the campus for all other
                  students to learn.
                </>
              ) : (
                <>
                  NIMBUS विभिन्न शाखाओं के छात्रों को एक साथ लाकर विभागीय टीमों
                  और सोसाइटीज़ का निर्माण करने, तकनीकी परियोजनाएँ बनाने और
                  कार्यशालाएँ व प्रदर्शनियाँ आयोजित करने पर केंद्रित है। दूसरे
                  शब्दों में, Nimbus पर काम करने वाले छात्र विविध तकनीकों का
                  ज्ञान प्राप्त करते हैं, उसे व्यावहारिक अनुभव के साथ जोड़ते हैं
                  और पूरे परिसर में अन्य छात्रों के लिए साझा करते हैं।
                </>
              )}
            </p>
          </div>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <div className="prose prose-slate text-gray-700">
            {language == 'en' ? (
              <>
                <p>
                  NIMBUS brings together students across disciplines to foster
                  hands-on technical learning and peer-driven mentorship. Teams
                  and societies formed under Nimbus work on prototypes, host
                  workshops, put up exhibitions and run knowledge-sharing
                  sessions that benefit the wider student community.
                </p>

                <p>
                  Participation in Nimbus activities equips students with
                  practical skills, exposure to multidisciplinary technologies
                  and opportunities to present projects at college and
                  inter-college events.
                </p>
              </>
            ) : (
              <>
                <p>
                  NIMBUS विभिन्न विषयों के छात्रों को व्यावहारिक तकनीकी शिक्षा
                  और सहपाठी-आधारित मार्गदर्शन को बढ़ावा देने के लिए एक साथ लाता
                  है। Nimbus के तहत गठित टीमें प्रोटोटाइप पर काम करती हैं,
                  कार्यशालाएँ आयोजित करती हैं, प्रदर्शनियाँ लगाती हैं और उन
                  ज्ञान-साझा सत्रों का संचालन करती हैं जो व्यापक छात्र समुदाय के
                  लिए लाभदायक होते हैं।
                </p>

                <p>
                  Nimbus गतिविधियों में भाग लेने से छात्रों को व्यावहारिक कौशल,
                  बहु-विषयक तकनीकों का अनुभव और कॉलेज तथा अंतर-कॉलेज कार्यक्रमों
                  में परियोजनाएँ प्रस्तुत करने के अवसर मिलते हैं।
                </p>
              </>
            )}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3">
            {language == 'en' ? 'Key Activities' : 'मुख्य गतिविधियाँ'}
          </h3>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              {language == 'en'
                ? 'Departmental teams and technical societies'
                : 'विभागीय टीमें और तकनीकी सोसाइटीज़'}
            </li>
            <li>
              {language == 'en'
                ? 'Project showcases and exhibitions'
                : 'परियोजना प्रदर्शन और प्रदर्शनियाँ'}
            </li>
            <li>
              {language == 'en'
                ? 'Workshops, hands-on labs and training sessions'
                : 'वर्कशॉप, व्यावहारिक लैब और प्रशिक्षण सत्र'}
            </li>
            <li>
              {language == 'en'
                ? 'Interdisciplinary collaboration and mentorship'
                : 'बाहु-आयामी सहयोग और मार्गदर्शन'}
            </li>
            <li>
              {language == 'en'
                ? 'Opportunities to present projects and participate in competitions'
                : 'परियोजनाएँ प्रस्तुत करने और प्रतियोगिताओं में भाग लेने के अवसर'}
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
