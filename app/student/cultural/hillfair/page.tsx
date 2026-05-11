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

export default function HillfairPage() {
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
              href="/student/cultural"
              className="hover:text-[#800000] transition-colors duration-200"
            >
              {language == 'en' ? 'Cultural' : 'सांस्कृतिक'}
            </Link>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              {language == 'en' ? 'Hill&apos;ffair' : 'हिल&apos;फेयर'}
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
                ? 'ANNUAL CULTURAL FEST (HILL&apos;FFAIR)'
                : 'वार्षिक सांस्कृतिक महोत्सव (हिल&apos;फेयर)'}
            </h1>

            <p className="text-white/85 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              {language == 'en'
                ? 'The unison of arts and manifestations of the human intellect is the attribute that makes our country so truly aesthetic and gratifying that one is drawn into the alchemy of its diversities of cultures. With this as its essence, Hill&apos;ffair has carried the badge for being the best cultural extravaganza in North India and continued to stay true to its grandeur, and that of NIT Hamirpur, with changing times and vogue.'
                : 'कला और मानव बुद्धि की अभिव्यक्ति हमारे देश को सौंदर्यपूर्ण और आनंददायक बनाती है। इसी भाव के साथ हिल&apos;फेयर उत्तर भारत के सर्वश्रेष्ठ सांस्कृतिक उत्सव के रूप में उभरा है और समय के साथ अपनी भव्यता और एनआईटी हमीरपुर की प्रतिष्ठा बनाए रखा है।'}
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
                  With a humble beginning in 1988, Hill&apos;ffair has gradually
                  emerged to be the institute&rsquo;s cultural glory and a
                  portal to immerge pioneering ideas and talents from all over
                  the nation culminating in these three days. Enthralling dance
                  choreographies, music performances, concerts, dramatics,
                  national level competitions and numerous cultural events —
                  all, in the dell of the pastoral White Peak mountains and the
                  placid small-town environment — leave no stone unturned in
                  making the festival an unparalleled celebration of culture,
                  education and competition.
                </p>

                <p>
                  Hill&apos;ffair has not only touched and surpassed past
                  benchmarks but created new milestones for the years to come.
                  In 2017, we strove to carry the enthusiasm to the next level.
                  Dedicated to reminiscing and appreciating our cultural roots,
                  the theme that year was &quot;Inception: rediscovering our
                  roots&quot;.
                </p>

                <p>
                  With the vision to retrace our journeys to our homelands and
                  reconnect with our traditions and culture, we explore the
                  diversity existing within the college community and delve into
                  the medley held by our country.
                </p>
              </>
            ) : (
              <>
                <p>
                  1988 में एक विनम्र शुरुआत के साथ, हिल&apos;फेयर धीरे-धीरे
                  संस्थान की सांस्कृतिक गौरव और राष्ट्रभर से प्रतिभाओं और नवीन
                  विचारों को समेटने वाला मंच बन गया। नृत्य, संगीत, नाटक,
                  राष्ट्रीय स्तर की प्रतियोगिताएँ और अनेक सांस्कृतिक कार्यक्रम —
                  पहाड़ी वाइट पीक की पृष्ठभूमि और शांत छोटे शहर के माहौल में —
                  इस उत्सव को संस्कृति, शिक्षा और प्रतिस्पर्धा का अद्वितीय उत्सव
                  बनाते हैं।
                </p>

                <p>
                  हिल&apos;फेयर ने केवल पिछली उपलब्धियों को पार नहीं किया बल्कि
                  आने वाले वर्षों के लिए नए मील के पत्थर भी बनाए। 2017 में
                  उत्साह को अगले स्तर तक ले जाने का प्रयास किया गया; उस वर्ष का
                  विषय था &quot;Inception: rediscovering our roots&quot;।
                </p>

                <p>
                  अपनी जड़ों की यात्रा को फिर से ट्रेस करने और परंपराओं से
                  जुड़ने के उद्देश्य से, हम कॉलेज समुदाय में निहित विविधता का
                  अन्वेषण करते हैं और देश के सांस्कृतिक संगम में उतरते हैं।
                </p>
              </>
            )}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3">
            {language == 'en' ? 'Festival Highlights' : 'उत्सव की विशेषताएँ'}
          </h3>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Enthralling dance choreographies and music performances</li>
            <li>Concerts and national-level competitions</li>
            <li>Stage dramatics and cultural exhibitions</li>
            <li>Workshops, film screenings, and media events</li>
            <li>
              Opportunities for inter-college collaboration and cultural
              exchange
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
