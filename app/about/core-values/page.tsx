'use client';
import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header31 from '../../components/header3';
import Footer from '../../components/footer';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import {
  ShieldCheck,
  Trophy,
  Users,
  ClipboardCheck,
  Globe,
  Heart,
} from 'lucide-react';

// Import our new combined types and API client function
import { getCoreValuesCombinedData, CoreValuesCombinedResponse } from '../api/api';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

interface CoreValue {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

// Map components sequentially to maintain layout uniformity
const iconSequence = [ShieldCheck, Trophy, Users, ClipboardCheck, Globe, Heart];

// Complete static backup map matching your original layouts
const staticFallbackData = {
  en: {
    heroHeading: 'Our Core Values',
    heroDescription: 'The foundational principles that guide our academic pursuits, research endeavors, and institutional culture every day.',
    pillarsLabel: 'PILLARS',
    pillarsHeading: 'What We Stand For',
    pillarsSubtitle: 'These core beliefs define who we are as an institution and guide our vision for a progressive future.',
    practiceHeading: 'Values in Practice',
    practiceSubtitle: 'How we live our values every single day on campus',
    coreValues: [
      { icon: ShieldCheck, title: 'Integrity', description: 'Upholding the highest ethical standards in research, education, and governance through transparency and honesty.' },
      { icon: Trophy, title: 'Excellence', description: 'Striving for continuous improvement and high standards in academic learning, innovation, and technological development.' },
      { icon: Users, title: 'Inclusivity', description: 'Creating an open, diverse, and supportive campus environment where every community member feels valued and empowered.' },
      { icon: ClipboardCheck, title: 'Accountability', description: 'Taking full responsibility for our actions, institutional commitments, and resource management to build trust.' },
      { icon: Globe, title: 'Global Outlook', description: 'Fostering international mindsets, cross-border research collaborations, and globally competent engineers.' },
      { icon: Heart, title: 'Empathy', description: 'Cultivating compassion, mutual understanding, and human-centric approaches within our university community.' }
    ],
    practiceParagraphs: [
      'From fostering innovation in research to creating an inclusive environment for students from diverse backgrounds, we integrate these principles into every aspect of institutional functioning.',
      'Our commitment to accountability ensures transparency in governance, while empathy drives us to support the holistic development of every member of our academic family.',
      'Together, these values create a vibrant, ethical, and progressive institution dedicated to shaping future leaders and innovators.'
    ]
  },
  hi: {
    heroHeading: 'हमारे मूल मूल्य',
    heroDescription: 'बुनियादी सिद्धांत जो हर दिन हमारे शैक्षणिक प्रयासों, अनुसंधान प्रयासों और संस्थागत संस्कृति का मार्गदर्शन करते हैं।',
    pillarsLabel: 'स्तंभ',
    pillarsHeading: 'हम किसके लिए खड़े हैं',
    pillarsSubtitle: 'ये मूल विश्वास परिभाषित करते हैं कि हम एक संस्था के रूप में कौन हैं और एक प्रगतिशील भविष्य के लिए हमारी दृष्टि का मार्गदर्शन करते हैं।',
    practiceHeading: 'व्यवहार में मूल्य',
    practiceSubtitle: 'हम परिसर में हर दिन अपने मूल्यों को कैसे जीते हैं',
    coreValues: [
      { icon: ShieldCheck, title: 'सत्यनिष्ठा', description: 'पारदर्शिता और ईमानदारी के माध्यम से अनुसंधान, शिक्षा और शासन में उच्चतम नैतिक मानकों को बनाए रखना।' },
      { icon: Trophy, title: 'उत्कृष्टता', description: 'शैक्षणिक सीखने, नवाचार और तकनीकी विकास में निरंतर सुधार और उच्च मानकों के लिए प्रयास करना।' },
      { icon: Users, title: 'समावेशिता', description: 'एक खुला, विविध और सहायक परिसर वातावरण बनाना जहां समुदाय के प्रत्येक सदस्य को मूल्यवान और सशक्त महसूस हो।' },
      { icon: ClipboardCheck, title: 'जवाबदेही', description: 'विश्वास पैदा करने के लिए हमारे कार्यों, संस्थागत प्रतिबद्धताओं और संसाधन प्रबंधन की पूरी जिम्मेदारी लेना।' },
      { icon: Globe, title: 'वैश्विक दृष्टिकोण', description: 'अंतर्राष्ट्रीय मानसिकता, सीमा पार अनुसंधान सहयोग और विश्व स्तर पर सक्षम इंजीनियरों को बढ़ावा देना।' },
      { icon: Heart, title: 'सहानुभूति', description: 'हमारे विश्वविद्यालय समुदाय के भीतर करुणा, आपसी समझ और मानव-केंद्रित दृष्टिकोण विकसित करना।' }
    ],
    practiceParagraphs: [
      'अनुसंधान में नवाचार को बढ़ावा देने से लेकर विविध पृष्ठभूमि के छात्रों के लिए एक समावेशी वातावरण बनाने तक, हम इन सिद्धांतों को संस्थागत कामकाज के हर पहलू में एकीकृत करते हैं।',
      'जवाबदेही के प्रति हमारी प्रतिबद्धता शासन में पारदर्शिता सुनिश्चित करती है, जबकि सहानुभूति हमें अपने शैक्षणिक परिवार के प्रत्येक सदस्य के समग्र विकास का समर्थन करने के लिए प्रेरित करती है।',
      'एक साथ मिलकर, ये मूल्य भविष्य के नेताओं और नवप्रवर्तकों को आकार देने के लिए समर्पित एक जीवंत, नैतिक और प्रगतिशील संस्थान का निर्माण करते हैं।'
    ]
  }
};

export default function CoreValuesPage() {
  const language = useSelector((state: RootState) => state.language.value);
  const [apiData, setApiData] = useState<CoreValuesCombinedResponse | null>(null);

  useEffect(() => {
    async function loadContent() {
      try {
        const payload = await getCoreValuesCombinedData();
        if (payload) setApiData(payload);
      } catch (err) {
        console.error('Failed using remote core values API payload, resolving to local layout backups:', err);
      }
    }
    loadContent();
  }, []);

  // ======================================================
  // CROSS-LANGUAGE COMPILATION ENGINE (MUTUAL EXCLUSIVITY)
  // ======================================================
  const resolved = useMemo(() => {
    const fbEn = staticFallbackData.en;
    const fbHi = staticFallbackData.hi;
    const activeFallback = language === 'hi' ? fbHi : fbEn;

    if (!apiData) return activeFallback;

    // Cross-evaluates columns based on state; traverses to other language text if column is NULL
    const textSelector = (
      enField: string | null | undefined,
      hiField: string | null | undefined,
      fallbackString: string
    ): string => {
      if (language === 'hi') {
        return hiField || enField || fallbackString;
      }
      return enField || hiField || fallbackString;
    };

    const heroHeading = textSelector(apiData.pageData?.hero_heading_en, apiData.pageData?.hero_heading_hi, activeFallback.heroHeading);
    const heroDescription = textSelector(apiData.pageData?.hero_description_en, apiData.pageData?.hero_description_hi, activeFallback.heroDescription);
    const pillarsLabel = textSelector(apiData.pageData?.pillars_label_en, apiData.pageData?.pillars_label_hi, activeFallback.pillarsLabel);
    const pillarsHeading = textSelector(apiData.pageData?.pillars_heading_en, apiData.pageData?.pillars_heading_hi, activeFallback.pillarsHeading);
    const pillarsSubtitle = textSelector(apiData.pageData?.pillars_subtitle_en, apiData.pageData?.pillars_subtitle_hi, activeFallback.pillarsSubtitle);
    const practiceHeading = textSelector(apiData.pageData?.practice_heading_en, apiData.pageData?.practice_heading_hi, activeFallback.practiceHeading);
    const practiceSubtitle = textSelector(apiData.pageData?.practice_subtitle_en, apiData.pageData?.practice_subtitle_hi, activeFallback.practiceSubtitle);

    // Dynamic resolution for values cards
    let coreValues: CoreValue[] = [];
    if (apiData.coreValues && apiData.coreValues.length > 0) {
      coreValues = apiData.coreValues.map((item, idx) => {
        const title = textSelector(item.title_en, item.title_hi, fbEn.coreValues[idx]?.title || '');
        const description = textSelector(item.description_en, item.description_hi, fbEn.coreValues[idx]?.description || '');
        const iconComponent = iconSequence[idx % iconSequence.length];
        return { icon: iconComponent, title, description };
      });
    } else {
      coreValues = activeFallback.coreValues;
    }

    // Dynamic resolution for paragraph lines block
    let practiceParagraphs: string[] = [];
    if (apiData.practiceParagraphs && apiData.practiceParagraphs.length > 0) {
      practiceParagraphs = apiData.practiceParagraphs.map((para, idx) => 
        textSelector(para.paragraph_en, para.paragraph_hi, activeFallback.practiceParagraphs[idx] || '')
      );
    } else {
      practiceParagraphs = activeFallback.practiceParagraphs;
    }

    return {
      heroHeading,
      heroDescription,
      pillarsLabel,
      pillarsHeading,
      pillarsSubtitle,
      practiceHeading,
      practiceSubtitle,
      coreValues,
      practiceParagraphs
    };
  }, [apiData, language]);

  return (
    <div className="min-h-screen bg-white">
      <Header31 />

      {/* Breadcrumb Navigation Frame */}
      <div className="bg-gray-50 py-4 px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-[#800000] transition-colors duration-200"
            >
              {language === 'en' ? 'Home' : 'मुख्य पृष्ठ'}
            </Link>
            <span>›</span>
            <span className="text-gray-400">
              {language === 'en' ? 'About' : 'परिचय'}
            </span>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              {language === 'en' ? 'Core Values' : 'मूल मूल्य'}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center py-24 md:py-32 px-6 md:px-12"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            {resolved.heroHeading}
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            {resolved.heroDescription}
          </p>
        </motion.div>
      </section>

      {/* Core Values Cards Grid Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-sm font-bold text-[#800000] tracking-widest uppercase bg-[#800000]/5 px-4 py-2 rounded-full">
              {resolved.pillarsLabel}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 tracking-tight">
              {resolved.pillarsHeading}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              {resolved.pillarsSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resolved.coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInScale}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    transition: { type: 'spring', stiffness: 300 },
                  }}
                  className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl border border-gray-100/80 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#800000] to-[#631012] flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-[#800000] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px]">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values in Practice Split Banner Section */}
      <section className="py-20 bg-gray-50/50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Title Grid Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
                {resolved.practiceHeading}
              </h2>
              <p className="text-lg text-[#800000] font-medium opacity-90">
                {resolved.practiceSubtitle}
              </p>
            </motion.div>

            {/* Right Flow Paragraph Column Block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 bg-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-10 space-y-6"
            >
              {resolved.practiceParagraphs.map((paraText, idx) => {
                if (!paraText) return null;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#800000] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {paraText}
                    </p>
                  </div>
                );
              })}

              {/* Retain static footer notation when mapping values arrays */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-center text-gray-600 italic text-lg">
                  {language === 'en'
                    ? 'Together, these values create a vibrant, ethical, and progressive institution dedicated to shaping future leaders and innovators.'
                    : 'एक साथ मिलकर, ये मूल्य भविष्य के नेताओं और नवप्रवर्तकों को आकार देने के लिए समर्पित एक जीवंत, नैतिक और प्रगतिशील संस्थान का निर्माण करते हैं।'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}