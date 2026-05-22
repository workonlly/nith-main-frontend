'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ArrowRight } from 'lucide-react';

import {
  Target,
  Lightbulb,
  Users,
  BookOpen,
  Globe,
  TrendingUp,
  Leaf,
  GraduationCap,
} from 'lucide-react';

// Import our updated endpoint type structures
import { getStrategicGoalsData, GoalsCombinedResponse } from '../api/api';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Map icons array to preserve the original visual layout sequence
const iconSequence = [
  Target,
  Lightbulb,
  Users,
  BookOpen,
  Globe,
  TrendingUp,
  Leaf,
  GraduationCap,
];

// Clean types for resolved page states
interface UIResolvedGoal {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface UIResolvedPageData {
  heading: string;
  subheading: string;
  ctaButtonText: string;
  goals: UIResolvedGoal[];
}

// Hardcoded fallbacks precisely matching your frontend's original static state
const staticFallbackData = {
  en: {
    heading: 'Strategic Goals',
    subheading: 'Our blueprint for institutional growth, academic excellence, and global impact over the coming decade.',
    ctaButtonText: 'Learn more',
    goals: [
      { icon: Target, title: 'Academic Excellence', description: 'To strengthen academic programs through innovation in pedagogy, curriculum modernization, and outcome-based education.' },
      { icon: Lightbulb, title: 'Research and Innovation', description: 'To encourage interdisciplinary research and technological advancements that contribute to societal and industrial progress.' },
      { icon: Users, title: 'Faculty and Staff Development', description: 'To attract, retain, and nurture world-class faculty and staff by fostering a supportive work environment.' },
      { icon: BookOpen, title: 'Student-Centric Infrastructure', description: 'To provide state-of-the-art infrastructure and modern learning environments that promote holistic development.' },
      { icon: Globe, title: 'Internationalization', description: 'To expand international collaborations, student exchanges, and globally recognized research initiatives.' },
      { icon: TrendingUp, title: 'Industry Integration', description: 'To enhance partnerships with key industries for student placements, internships, and collaborative consulting.' },
      { icon: Leaf, title: 'Sustainability Initiatives', description: 'To transform the campus into a green, energy-efficient ecosystem with zero-carbon objectives.' },
      { icon: GraduationCap, title: 'Alumni Engagement', description: 'To build a global network of alumni contributing actively to mentorship and institutional advancement.' }
    ]
  },
  hi: {
    heading: 'रणनीतिक लक्ष्य',
    subheading: 'आने वाले दशक में संस्थागत विकास, शैक्षणिक उत्कृष्टता और वैश्विक प्रभाव के लिए हमारा खाका।',
    ctaButtonText: 'अधिक जानें',
    goals: [
      { icon: Target, title: 'शैक्षणिक उत्कृष्टता', description: 'शिक्षाशास्त्र में नवाचार, पाठ्यक्रम आधुनिकीकरण और परिणाम-आधारित शिक्षा के माध्यम से शैक्षणिक कार्यक्रमों को मजबूत करना।' },
      { icon: Lightbulb, title: 'अनुसंधान और नवाचार', description: 'अंतरविषयक अनुसंधान और तकनीकी प्रगति को बढ़ावा देना जो सामाजिक और औद्योगिक प्रगति में योगदान करते हैं।' },
      { icon: Users, title: 'संकाय और कर्मचारी विकास', description: 'एक सहायक कार्य वातावरण को बढ़ावा देकर विश्व स्तरीय संकाय और कर्मचारियों को आकर्षित करना, बनाए रखना और उनका पोषण करना।' },
      { icon: BookOpen, title: 'छात्र-केंद्रित बुनियादी ढांचा', description: 'अत्याधुनिक बुनियादी ढांचा और आधुनिक शिक्षण वातावरण प्रदान करना जो समग्र विकास को बढ़ावा देते हैं।' },
      { icon: Globe, title: 'अंतर्राष्ट्रीयकरण', description: 'अंतर्राष्ट्रीय सहयोग, छात्र विनिमय और विश्व स्तर पर मान्यता प्राप्त अनुसंधान पहलों का विस्तार करना।' },
      { icon: TrendingUp, title: 'उद्योग एकीकरण', description: 'छात्रों के प्लेसमेंट, इंटर्नशिप और सहयोगी परामर्श के लिए प्रमुख उद्योगों के साथ साझेदारी बढ़ाना।' },
      { icon: Leaf, title: 'स्थिरता पहल', description: 'शून्य-कार्बन उद्देश्यों के साथ परिसर को एक हरित, ऊर्जा-कुशल पारिस्थितिकी तंत्र में बदलना।' },
      { icon: GraduationCap, title: 'पूर्व छात्र जुड़ाव', description: 'परामर्श और संस्थागत उन्नति में सक्रिय रूप से योगदान देने वाले पूर्व छात्रों का एक वैश्विक नेटवर्क बनाना।' }
    ]
  }
};

export default function GoalsPage() {
  const language = useSelector((state: RootState) => state.language.value);
  const [apiData, setApiData] = useState<GoalsCombinedResponse | null>(null);

  useEffect(() => {
    async function loadGoals() {
      try {
        const data = await getStrategicGoalsData();
        if (data) {
          setApiData(data);
        }
      } catch (err) {
        console.error('Failed fetching server goals, running local fallbacks:', err);
      }
    }
    loadGoals();
  }, []);

  // ======================================================
  // DATA INTERLOCKING COMPILER (PRESERVES LAYOUT COMPLETENESS)
  // ======================================================
  const resolvedContent: UIResolvedPageData = useMemo(() => {
    const fbEn = staticFallbackData.en;
    const fbHi = staticFallbackData.hi;
    const activeFallback = language === 'hi' ? fbHi : fbEn;

    if (!apiData) return activeFallback;

    // Helper checking current language value first, falling back to alternative if null
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

    // 1. Resolve Main Layout Copy Heading Strings
    const heading = textSelector(
      apiData.mainData?.heading_en,
      apiData.mainData?.heading_hi,
      activeFallback.heading
    );

    const subheading = textSelector(
      apiData.mainData?.subheading_en,
      apiData.mainData?.subheading_hi,
      activeFallback.subheading
    );

    // 2. Resolve Action CTA Button Strings
    const ctaButtonText = textSelector(
      apiData.ctaButtonData?.buttonText_en || apiData.ctaButtonData?.button_text_en,
      apiData.ctaButtonData?.buttonText_hi || apiData.ctaButtonData?.button_text_hi,
      activeFallback.ctaButtonText
    );

    // 3. Resolve Dynamic Goal Grid Collections Array
    let goals: UIResolvedGoal[] = [];
    if (apiData.cardsData && apiData.cardsData.length > 0) {
      goals = apiData.cardsData.map((card, idx) => {
        const title = textSelector(card.title_en, card.title_hi, fbEn.goals[idx]?.title || '');
        const description = textSelector(card.description_en, card.description_hi, fbEn.goals[idx]?.description || '');
        const iconSelected = iconSequence[idx % iconSequence.length];

        return {
          icon: iconSelected,
          title,
          description,
        };
      });
    } else {
      goals = activeFallback.goals;
    }

    return {
      heading,
      subheading,
      ctaButtonText,
      goals,
    };
  }, [apiData, language]);

  return (
    <div className="min-h-screen bg-white">
      <Header31 />

      {/* Breadcrumb Navigation Line Block */}
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
              {language === 'en' ? 'Strategic Goals' : 'रणनीतिक लक्ष्य'}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section Container */}
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
            {resolvedContent.heading}
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            {resolvedContent.subheading}
          </p>
        </motion.div>
      </section>

      {/* Strategic Goals Dynamic Card Grid Element */}
      <section className="py-24 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {resolvedContent.goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInScale}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -8,
                    transition: { type: 'spring', stiffness: 300 },
                  }}
                  className="group relative bg-white rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#800000] to-[#631012] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-[#800000] transition-colors">
                      {goal.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {goal.description}
                    </p>

                    <div className="mt-4 flex items-center text-[#800000] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">
                        {resolvedContent.ctaButtonText}
                      </span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}