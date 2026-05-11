'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function RegistrarPage() {
  const language = useSelector((state: RootState) => state.language.value);
  return (
    <div className="min-h-screen bg-gray-50">
      <Header31 />

      {/* Breadcrumbs */}
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
              {language == 'en' ? 'Administration' : 'प्रशासन'}
            </span>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              {language == 'en' ? 'Registrar' : 'रजिस्ट्रार'}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center py-24 md:py-32 px-6 md:px-12"
        >
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            {language == 'en' ? 'Registrar' : 'रजिस्ट्रार'}
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            {language == 'en'
              ? 'Profile summary and contact details'
              : 'प्रोफाइल सारांश और संपर्क विवरण'}
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="flex flex-col md:flex-row gap-8 p-8 md:p-12">
            {/* Placeholder Image + Basic Info */}
            <div className="md:w-1/3 flex-shrink-0">
              <div className="relative aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src="/nith-registrar.jpg"
                  alt="Dr. Archana Santosh Nanoty"
                  width={280}
                  height={360}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-xl font-bold text-gray-900">
                  Dr. Archana Santosh Nanoty
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {language == 'en' ? 'Registrar' : 'रजिस्ट्रार'}
                </p>
                <div className="mt-3 space-y-1 text-sm text-gray-700">
                  <p>
                    {language == 'en' ? 'Email:' : 'ईमेल:'}{' '}
                    <a
                      className="text-[#631012] hover:underline"
                      href="mailto:registrar@nith.ac.in"
                    >
                      registrar@nith.ac.in
                    </a>
                  </p>
                  <p>{language == 'en' ? 'Phone:' : 'फोन:'} 01972-254010</p>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-[#800000] mb-4 border-b-2 border-[#800000] pb-2">
                {language == 'en' ? 'Profile Summary' : 'प्रोफाइल सारांश'}
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {language == 'en' ? (
                  <>
                    <p>
                      With more than 2 decades of experience in academics Dr.
                      Archana started her career as a Lecturer in Dept of
                      Electrical Engg in 1999. She grew professionally in a span
                      of 24 yrs which is evident from the various designations
                      administered by her. She got elevated as Principal in the
                      yr 2010 and took various initiatives like placement
                      training strengthening industry institute interaction. Her
                      dedication and commitment earned her the status of State
                      University (GTU) endorsed Professor Electrical, and
                      Principal w.e.f. 2014. All through her career she has been
                      distinguished by her unique working style she has
                      contributed to the development of various new initiatives
                      like recruitment process at GSFCU. She has been creating
                      platforms for academicians and industries to come together
                      to share their ideas. She has been appointed as referee by
                      DST-GOI to review research proposals. She has been the
                      resource person / session chair at various international
                      conference. A recipient of many National / International
                      Awards. She got the opportunity to serve various
                      Universities in various capacities such as Principal,
                      Professor, director- Technical Education, Director R&D.
                    </p>
                    <p>
                      With her profound creativity Motivational skills, she
                      mentored students/staff to be prepared to face challenges.
                      A member of various Professional bodies: IE, IEEE ISTD
                      ISTE. Ex- Advisory comm member of Society of Power
                      Engineers. Actively contributed in academic Audits, by the
                      universities. Evaluated many Ph.D. thesis for various
                      universities. Some of the other key roles she has
                      administered include Chairperson BOS-EE CVM Uni. 2020-21,
                      Member BOS-EE-UTU, 2018-20. More than 40 publications to
                      her credit that include National/international Journal
                      Souvenir articles, books and conference proceedings.
                    </p>
                    <p>
                      As an inspiring academician she is guiding Ph.D. Scholars
                      as guide of GTU and Doctoral progress committee. About 20
                      of her publications are indexed in Scopus and WoS which
                      has earned more than 100 citations with the H index of 6.
                      She is one of the inventors of 4 granted Patents. She
                      keeps herself updated and she has completed an executive
                      program on Leadership & change Management by IIM Raipur.
                      She is a multifaceted leader who is also a Government of
                      India certified music therapist. With her expertise she
                      has worked as Industry consultant and Trainer -National
                      Power Training Institute.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      शिक्षा के क्षेत्र में दो दशकों से अधिक अनुभव के साथ, डॉ.
                      अर्चना ने 1999 में इलेक्ट्रिकल इंजीनियरिंग विभाग में
                      व्याख्याता के रूप में अपना करियर शुरू किया। 24 वर्षों के
                      दौरान उन्होंने विभिन्न पदों पर कार्य किया है। 2010 में वे
                      प्राचार्य बनीं और प्लेसमेंट ट्रेनिंग,
                      इंडस्ट्री-इंस्टीट्यूट इंटरैक्शन जैसी कई पहल कीं। उनकी
                      प्रतिबद्धता और समर्पण के कारण उन्हें 2014 से राज्य
                      विश्वविद्यालय (GTU) द्वारा प्रोफेसर (इलेक्ट्रिकल) और
                      प्राचार्य के रूप में मान्यता मिली। अपने करियर के दौरान
                      उन्होंने अपनी अनूठी कार्यशैली से कई नई पहलों जैसे GSFCU
                      में भर्ती प्रक्रिया के विकास में योगदान दिया। उन्होंने
                      अकादमिक और औद्योगिक जगत को एक साथ लाने के लिए मंच तैयार
                      किए। उन्हें DST-GOI द्वारा शोध प्रस्तावों की समीक्षा के
                      लिए रेफरी नियुक्त किया गया। वे कई अंतरराष्ट्रीय सम्मेलनों
                      में रिसोर्स पर्सन/सेशन चेयर रही हैं। वे कई
                      राष्ट्रीय/अंतरराष्ट्रीय पुरस्कारों से सम्मानित हैं।
                      उन्होंने विभिन्न विश्वविद्यालयों में प्राचार्य, प्रोफेसर,
                      निदेशक-तकनीकी शिक्षा, निदेशक-आरएंडडी जैसे विभिन्न पदों पर
                      कार्य किया है।
                    </p>
                    <p>
                      अपनी रचनात्मकता और प्रेरणादायक कौशल के साथ, उन्होंने
                      छात्रों/कर्मचारियों को चुनौतियों का सामना करने के लिए
                      तैयार किया। वे कई पेशेवर संस्थाओं की सदस्य हैं: IE, IEEE,
                      ISTD, ISTE। सोसाइटी ऑफ पावर इंजीनियर्स की पूर्व सलाहकार
                      समिति सदस्य। विश्वविद्यालयों द्वारा आयोजित अकादमिक ऑडिट
                      में सक्रिय योगदान। कई विश्वविद्यालयों के लिए पीएचडी थीसिस
                      का मूल्यांकन किया। उनके द्वारा निभाई गई अन्य प्रमुख
                      भूमिकाओं में 2020-21 में सीवीएम विश्वविद्यालय की बीओएस-ईई
                      की अध्यक्षता, 2018-20 में यूटीयू की बीओएस-ईई की सदस्यता
                      शामिल है। उनके नाम 40 से अधिक प्रकाशन हैं जिनमें
                      राष्ट्रीय/अंतरराष्ट्रीय जर्नल, स्मारिका लेख, पुस्तकें और
                      सम्मेलन कार्यवाही शामिल हैं।
                    </p>
                    <p>
                      एक प्रेरणादायक शिक्षाविद् के रूप में वे जीटीयू और डॉक्टोरल
                      प्रोग्रेस कमेटी की पीएचडी स्कॉलर्स का मार्गदर्शन कर रही
                      हैं। उनके लगभग 20 प्रकाशन स्कोपस और WoS में सूचीबद्ध हैं,
                      जिन्हें 100 से अधिक उद्धरण मिले हैं और उनका H-इंडेक्स 6
                      है। वे 4 स्वीकृत पेटेंट की आविष्कारक हैं। वे स्वयं को
                      अपडेट रखती हैं और उन्होंने आईआईएम रायपुर से लीडरशिप और
                      चेंज मैनेजमेंट पर एक्जीक्यूटिव प्रोग्राम पूरा किया है। वे
                      एक बहुआयामी नेता हैं और भारत सरकार द्वारा प्रमाणित म्यूजिक
                      थेरेपिस्ट भी हैं। अपने अनुभव से उन्होंने इंडस्ट्री
                      कंसल्टेंट और ट्रेनर-नेशनल पावर ट्रेनिंग इंस्टीट्यूट के रूप
                      में भी कार्य किया है।
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
