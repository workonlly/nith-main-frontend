'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import Gallery from '@/app/homepage/gallery/gallery';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function SpicMacayPage() {
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
              {language == 'en' ? 'SPIC MACAY' : 'SPIC MACAY'}
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
              {language == 'en' ? 'About SPIC MACAY' : 'SPIC MACAY के बारे में'}
            </h1>
            <p className="text-white/85 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              {language == 'en'
                ? 'A movement to bring Indian classical arts to educational institutions and to inspire youth with their cultural heritage.'
                : 'शैक्षिक संस्थानों तक भारतीय शास्त्रीय कलाओं को पहुँचाने और युवा वर्ग में सांस्कृतिक विरासत के प्रति प्रेरणा जगाने की एक पहल।'}
            </p>
          </div>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {language == 'en'
              ? 'Beginning of SPIC MACAY'
              : 'SPIC MACAY की शुरुआत'}
          </h2>

          <div className="prose prose-slate text-gray-700">
            {language == 'en' ? (
              <>
                <p>
                  An idea originates and finds someone through whom it can
                  manifest itself. That fortunate someone experiences during the
                  birth process a feeling beyond description. Imagine for a
                  moment that you are witnessing the creation of the universe.
                </p>

                <p>
                  The &ldquo;big bang&rdquo; of SPIC MACAY came in 1972 at a
                  concert of Ustad Nasir Aminuddin Dagar and Ustad Zia
                  Fariduddin Dagar at the Brooklyn Academy of Music in New York.
                  After a few sporadic concerts (notable amongst them was that
                  of Ustad Ali Akbar Khan) at Columbia University between
                  1972–76, the idea took a more defined direction in 1977 in
                  India. In 1979, a two-day programme at IIT Delhi featuring
                  Ustad Bismillah Khan, Dagar Bandhu, Ustad Amjad Ali Khan and
                  Ustad Sitahid Parvez was organised by MEFYS (Mechanical
                  Engineering Final Year Students), where the name SPIC MACAY
                  was first launched with the aim to resist deculturisation.
                </p>

                <p>
                  The first lecture-demonstration series LEC-DEM&rsquo;79
                  followed the same year with presentations by Pandit Birju
                  Maharaj, Smt. Sonal Mansingh, Ustad Asad Ali Khan, Dagar
                  Bandhu and Ustad Munawwar Ali Khan across colleges in Delhi.
                  FEST was used as the name for the annual festival in 1980, and
                  SPIC MACAY expanded to multiple cities and institutions
                  through the 1980s and 1990s.
                </p>
              </>
            ) : (
              <>
                <p>
                  एक विचार उत्पन्न होता है और किसी माध्यम से व्यक्त होने का
                  मार्ग पाता है। जो भाग्यशाली व्यक्ति इसे जन्म देते समय अनुभव
                  करता है, वह अनुभूति अवर्णनीय होती है।
                </p>

                <p>
                  SPIC MACAY की &quot;बिग बैंग&quot; 1972 में ब्लूक्सिन एकेडमी
                  ऑफ़ म्यूजिक, न्यूयॉर्क में उस्ताद नासिर अमीनुद्दीन डागर और
                  उस्ताद जिया फरीदुद्धीन डागर के एक कार्यक्रम में हुई। 1979 में
                  IIT दिल्ली में आयोजित दो दिवसीय कार्यक्रम में SPIC MACAY नाम
                  पहली बार प्रचलित हुआ और इसका उद्देश्य पश्चिमीकरण के बजाय
                  संस्कृति की रक्षा करना था।
                </p>

                <p>
                  LEC-DEM&apos;79 और बाद में FEST के माध्यम से यह आन्दोलन 1980
                  और उसके बाद के वर्षों में व्यापक रूप से फैल गया।
                </p>
              </>
            )}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {language == 'en' ? 'The Movement' : 'आंदोलन'}
          </h3>

          <div className="prose prose-slate text-gray-700">
            {language == 'en' ? (
              <>
                <p>SPIC MACAY is an affirmation of:</p>
                <ul>
                  <li>
                    a priceless cultural heritage rooted in what is essentially
                    Indian.
                  </li>
                  <li>
                    the pulsating and dynamic vitality of the young person.
                  </li>
                  <li>
                    a solid value-based education that includes aesthetics and
                    spirituality.
                  </li>
                  <li>
                    the effectiveness of voluntary work in inculcating a spirit
                    of service.
                  </li>
                  <li>
                    the need for an inspired perspective in a world bombarded by
                    information.
                  </li>
                  <li>
                    all that is beautiful, lofty and wholesome in the human
                    spirit.
                  </li>
                </ul>
              </>
            ) : (
              <>
                <p>SPIC MACAY निम्न बातों का समर्थन करता है:</p>
                <ul>
                  <li>
                    भारतीय जड़ों पर आधारित अमूल्य सांस्कृतिक विरासत की पहचान।
                  </li>
                  <li>
                    युवा वर्ग की जीवंत ऊर्जा और उनकी सांस्कृतिक जिम्मेदारी।
                  </li>
                  <li>
                    सौंदर्य और आध्यात्मिकता वाले मूल्य-आधारित शिक्षा का महत्व।
                  </li>
                  <li>स्वयंसेवा के माध्यम से सेवा भावना का विकास।</li>
                  <li>जानकारी के सागर में प्रेरित दृष्टिकोण की आवश्यकता।</li>
                </ul>
              </>
            )}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {language == 'en' ? 'Its Growth' : 'विकास'}
          </h3>

          <div className="prose prose-slate text-gray-700">
            {language == 'en' ? (
              <p>
                The movement caught the imagination of the young and began to
                grow geographically and numerically. With a combination of
                careful introductions and enthusiastic demand, SPIC MACAY
                developed into a network of over 200 centres in India and
                abroad, conducting about 1000 events yearly.
              </p>
            ) : (
              <p>
                यह आंदोलन युवाओं के मन में जगह बनाने लगा और भौगोलिक और
                संख्यात्मक रूप से विकसित हुआ। संयमित परिचय और उत्साहपूर्ण मांग
                के संयोजन से, SPIC MACAY ने भारत और विदेशों में 200 से अधिक
                केंद्र विकसित किए और प्रतिवर्ष लगभग 1000 कार्यक्रम आयोजित किए।
              </p>
            )}
          </div>
        </section>

        {/* Small Gallery */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {language == 'en' ? 'Gallery' : 'गैलरी'}
          </h3>
          <Gallery />
        </section>
      </main>

      
    </div>
  );
}
