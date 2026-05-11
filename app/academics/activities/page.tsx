'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

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
              {language == 'en' ? 'Academics' : 'शिक्षा'}
            </span>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              {language == 'en' ? 'Activities' : 'गतिविधियां'}
            </span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative z-10 text-center py-20 px-6 md:px-12">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
              {language == 'en' ? 'ACTIVITIES' : 'गतिविधियां'}
            </h1>
            <p className="text-white/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              {language == 'en'
                ? 'Duties and responsibilities of the Dean (Academic)'
                : 'डीन (शैक्षणिक) के कर्तव्य और जिम्मेदारियां'}
            </p>
          </div>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {language == 'en'
              ? 'Dean (Academic) — Duties & Responsibilities'
              : 'डीन (शैक्षणिक) — कर्तव्य और जिम्मेदारियां'}
          </h2>
          <p className="text-gray-700 mb-6">
            {language == 'en'
              ? "As per the schedule 'C' of NIT statutes the duties and responsibilities of the Dean (Academic) is to advise the Director in:"
              : "एनआईटी संविधि के अनुसूची 'सी' के अनुसार, डीन (शैक्षणिक) के कर्तव्य और जिम्मेदारियां निदेशक को निम्नलिखित में सलाह देना है:"}
          </p>

          <div className="prose prose-slate">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                {language == 'en'
                  ? 'Admission and enrollment of students.'
                  : 'छात्रों का प्रवेश और नामांकन।'}
              </li>
              <li>
                {language == 'en'
                  ? 'Finalisation of academic calender, time-tables, registration of students for course work and examinations, class arrangements and all other requirements for proper conduct of class work.'
                  : 'अकादमिक कैलेंडर, समय सारणी, पाठ्यक्रम और परीक्षाओं के लिए छात्रों का पंजीकरण, कक्षा व्यवस्था और कक्षा कार्य के उचित संचालन के लिए अन्य सभी आवश्यकताओं को अंतिम रूप देना।'}
              </li>
              <li>
                {language == 'en'
                  ? "Conduct of class tests and co-coordinating the finalization of session's evaluations and for ensuring the timely declaration of results."
                  : 'कक्षा परीक्षाओं का संचालन और सत्र के मूल्यांकन को अंतिम रूप देने में समन्वय और परिणामों की समय पर घोषणा सुनिश्चित करना।'}
              </li>
              <li>
                {language == 'en'
                  ? 'Supervision of the maintenance of up-to-date academic records of all categories of students.'
                  : 'सभी श्रेणियों के छात्रों के अद्यतन शैक्षणिक रिकॉर्ड के रखरखाव की देखरेख।'}
              </li>
              <li>
                {language == 'en'
                  ? 'Publication and distribution of the syllabi.'
                  : 'पाठ्यक्रम का प्रकाशन और वितरण।'}
              </li>
              <li>
                {language == 'en'
                  ? 'Organizing meeting of all the Institute level academic bodies.'
                  : 'संस्थान स्तर के सभी शैक्षणिक निकायों की बैठकों का आयोजन।'}
              </li>
              <li>
                {language == 'en'
                  ? 'Arranging the issue of all academic certificates, medals and prizes to the students.'
                  : 'छात्रों को सभी शैक्षणिक प्रमाणपत्र, पदक और पुरस्कार जारी करने की व्यवस्था।'}
              </li>
              <li>
                {language == 'en'
                  ? 'To arrange or conduct of those examinations which are to be conducted by the Institute as stipulted in the Institute regulations.'
                  : 'उन परीक्षाओं की व्यवस्था या संचालन करना जो संस्थान के नियमों के अनुसार संस्थान द्वारा आयोजित की जानी हैं।'}
              </li>
              <li>
                {language == 'en'
                  ? 'To formulate policies for the conduct of research and steps to maintain suitable standard by implementing the Board of Governors/Senate decision.'
                  : 'अनुसंधान के संचालन के लिए नीतियों का निर्माण और गवर्निंग बोर्ड/सीनेट के निर्णय को लागू करके उपयुक्त मानदंड बनाए रखने के लिए कदम उठाना।'}
              </li>
              <li>
                {language == 'en'
                  ? 'To execute the policy of the Senate in the conduct of P.G., Ph.D. and other research programmes including the examination of the thesis.'
                  : 'पी.जी., पीएचडी और अन्य अनुसंधान कार्यक्रमों के संचालन में सीनेट की नीति को निष्पादित करना, जिसमें थीसिस की परीक्षा भी शामिल है।'}
              </li>
              <li>
                {language == 'en'
                  ? 'To co-ordinates for the conduct of Convocation.'
                  : 'दीक्षांत समारोह के संचालन के लिए समन्वय करना।'}
              </li>
              <li>
                {language == 'en'
                  ? 'All proposals to modify the teaching programmes will be considered by BOAC, for which Dean (Academic) i.e. the Chairman and if approved will be sent to the Senate for formal approval.'
                  : 'शिक्षण कार्यक्रमों को संशोधित करने के सभी प्रस्ताव बोएसी द्वारा विचार किए जाएंगे, जिसके लिए डीन (शैक्षणिक) यानी अध्यक्ष होंगे और यदि अनुमोदित किए जाएंगे तो औपचारिक अनुमोदन के लिए सीनेट को भेजे जाएंगे।'}
              </li>
              <li>
                {language == 'en'
                  ? 'To admit sponsored Early Faculty Induction Programme and Quality Improvement Programme candidates.'
                  : 'प्रायोजित अर्ली फैकल्टी इंडक्शन प्रोग्राम और क्वालिटी इंप्रूवमेंट प्रोग्राम के उम्मीदवारों को प्रवेश देना।'}
              </li>
              <li>
                {language == 'en'
                  ? 'To suggest the Director to take suitable steps from time to time to strive for the high academic standards.'
                  : 'निदेशक को उच्च शैक्षणिक मानकों के लिए प्रयास करने के लिए समय-समय पर उपयुक्त कदम उठाने का सुझाव देना।'}
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
