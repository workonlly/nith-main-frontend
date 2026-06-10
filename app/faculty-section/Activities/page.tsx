'use client';
import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';

export default function Page() {
  const language = useSelector((state: RootState) => state.language.value);
  useEffect(() => {
    const fetchLanguage = async () => {
      const data = await fetch('http://localhost:3000/api/getLanguage', {
        method: 'GET',
      });
      const res = await data.json();
      console.log(res);
    };

    fetchLanguage();
  }, []);

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
              {language == 'en' ? 'Faculty' : 'संकाय'}
            </span>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              {language == 'en' ? 'Activities' : 'गतिविधियां'}
            </span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <div className="relative z-10 text-center py-20 px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            {language == 'en' ? 'ACTIVITIES' : 'गतिविधियां'}
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            {language == 'en'
              ? 'Role and responsibilities of the Dean (Faculty Welfare)'
              : 'डीन (संकाय कल्याण) की भूमिका और जिम्मेदारियां'}
          </p>
        </div>
      </section>
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {language == 'en'
              ? 'Dean (Faculty Welfare) — Role & Responsibilities'
              : 'डीन (संकाय कल्याण) — भूमिका और जिम्मेदारियां'}
          </h2>
          <p className="text-gray-700 mb-6">
            {language == 'en'
              ? "As per the schedule 'C' of NIT statutes the role and responsibilities of the Dean (Faculty Welfare) is to advise the Director in matters related to:"
              : "एनआईटी संविधि के अनुसूची 'सी' के अनुसार, डीन (संकाय कल्याण) की भूमिका और जिम्मेदारियां निदेशक को निम्नलिखित विषयों में सलाह देना है:"}
          </p>

          <div className="prose prose-slate">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                {language == 'en'
                  ? 'Deputation of faculty to various institutions under Quality Improvement Programme.'
                  : 'गुणवत्ता सुधार कार्यक्रम के तहत विभिन्न संस्थानों में संकाय के प्रतिनियुक्ति।'}
              </li>
              <li>
                {language == 'en'
                  ? 'Advice the Director for deputation of the faculty members to various conferences, seminars, short-term courses, training programmes, foreign teaching/training assignments etc.'
                  : 'विभिन्न सम्मेलनों, सेमिनारों, अल्पकालिक पाठ्यक्रमों, प्रशिक्षण कार्यक्रमों, विदेशी शिक्षण/प्रशिक्षण असाइनमेंट आदि के लिए संकाय सदस्यों की प्रतिनियुक्ति के लिए निदेशक को सलाह देना।'}
              </li>
              <li>
                {language == 'en'
                  ? 'Chair the committee meetings of the evaluation of papers submitted or to be submitted to the conferences / seminar by the faculty members.'
                  : 'संकाय सदस्यों द्वारा सम्मेलनों/सेमिनारों को प्रस्तुत किए गए या प्रस्तुत किए जाने वाले पत्रों के मूल्यांकन की समिति की बैठकों की अध्यक्षता करना।'}
              </li>
              <li>
                {language == 'en'
                  ? 'Assist the Director in organizing training programmes for faculty.'
                  : 'संकाय के लिए प्रशिक्षण कार्यक्रमों के आयोजन में निदेशक की सहायता करना।'}
              </li>
              <li>
                {language == 'en'
                  ? 'Assist the Director in the supervision of the construction and the maintenance work of buildings, roads, water supply, sanitation, lawns and gardens, communication networks, water coolers, air conditioners, telephones, etc.'
                  : 'इमारतों, सड़कों, जल आपूर्ति, स्वच्छता, लॉन और बागों, संचार नेटवर्क, वाटर कूलर, एयर कंडीशनर, टेलीफोन आदि के निर्माण और रखरखाव कार्य की निरीक्षण में निदेशक की सहायता करना।'}
              </li>
              <li>
                {language == 'en'
                  ? 'Assist the Director in maintaining the discipline and work ethos among the various departments and between the faculty members.'
                  : 'विभिन्न विभागों और संकाय सदस्यों के बीच अनुशासन और कार्य नीति बनाए रखने में निदेशक की सहायता करना।'}
              </li>
              <li>
                {language == 'en'
                  ? 'Assist the Director in maintaining the high academic standards and achieving academic excellence in the institution.'
                  : 'संस्थान में उच्च शैक्षणिक मानकों को बनाए रखने और शैक्षणिक उत्कृष्टता प्राप्त करने में निदेशक की सहायता करना।'}
              </li>
              <li>
                {language == 'en'
                  ? 'Supervision over faculty discipline, integrity and commitment.'
                  : 'संकाय अनुशासन, सत्यनिष्ठा और प्रतिबद्धता पर निरीक्षण।'}
              </li>
            </ul>
          </div>
        </div>
      </section>

      
    </div>
  );
}
