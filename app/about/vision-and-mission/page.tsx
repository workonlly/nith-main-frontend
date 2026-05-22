'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; 

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import Header31 from '../../components/header3';
import Footer from '../../components/footer';

import {
  Eye,
  Lightbulb,
  Beaker,
  Users,
  Heart,
  Globe,
} from 'lucide-react'; 

import { getVisionMissionData, VisionMissionRawResponse } from '../api/api';

// ======================================================
// ANIMATIONS
// ======================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const fadeInScale = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

// ======================================================
// CLEAN UI TYPES
// ======================================================

interface MissionPillar {
  id?: number;
  title: string;
  description: string;
}

interface LegacyStat {
  id?: number;
  value: string;
  label: string;
  description: string;
}

interface VisionMissionData {
  guiding_principles_heading: string;
  guiding_principles_description: string;
  vision_heading: string;
  vision_subtitle: string;
  vision_description: string;
  strategic_objectives_heading: string;
  mission_heading: string;
  mission_subtitle: string;
  tagline: string;
  tagline_description: string;
  legacy_heading: string;
  legacy_subheading: string;
  missionPillars: MissionPillar[];
  legacyStats: LegacyStat[];
}

// ======================================================
// STATIC BILINGUAL FALLBACKS (If API fails/loads)
// ======================================================

const fallbackVisionMissionData = {
  en: {
    guiding_principles_heading: 'Guiding Principles',
    guiding_principles_description: 'NIT Hamirpur strives for academic excellence, innovation, leadership, and social responsibility.',
    vision_heading: 'Our Vision',
    vision_subtitle: 'Empowering Innovation and Leadership',
    vision_description: 'To be a globally recognized institution fostering excellence in education, research, and technological advancement.',
    strategic_objectives_heading: 'Strategic Objectives',
    mission_heading: 'Our Mission',
    mission_subtitle: 'Building Future Leaders Through Quality Education',
    tagline: 'Excellence Through Innovation',
    tagline_description: 'Dedicated to creating impactful leaders and researchers.',
    legacy_heading: 'Our Legacy',
    legacy_subheading: 'Decades of Excellence in Technical Education',
    missionPillars: [
      { id: 1, title: 'Academic Excellence', description: 'Provide high-quality technical education and lifelong learning.' },
      { id: 2, title: 'Research & Innovation', description: 'Promote advanced research and innovative technologies.' },
      { id: 3, title: 'Holistic Development', description: 'Develop leadership, ethics, and teamwork among students.' },
      { id: 4, title: 'Social Contribution', description: 'Use technology and knowledge to serve society.' },
      { id: 5, title: 'Global Competence', description: 'Build international collaborations and global exposure.' },
    ],
    legacyStats: [
      { id: 1, value: '35+', label: 'Years', description: 'Of excellence in technical education' },
      { id: 2, value: '5000+', label: 'Students', description: 'Across multiple disciplines' },
      { id: 3, value: '100+', label: 'Faculty', description: 'Dedicated academic professionals' },
    ],
  },
  hi: {
    guiding_principles_heading: 'मार्गदर्शक सिद्धांत',
    guiding_principles_description: 'एनआईटी हमीरपुर शैक्षणिक उत्कृष्टता, नवाचार, नेतृत्व और सामाजिक जिम्मेदारी के लिए प्रयास करता है।',
    vision_heading: 'हमारा दृष्टिकोण',
    vision_subtitle: 'नवाचार और नेतृत्व को सशक्त बनाना',
    vision_description: 'शिक्षा, अनुसंधान और तकनीकी प्रगति में उत्कृष्टता को बढ़ावा देने वाला एक विश्व स्तर पर मान्यता प्राप्त संस्थान बनना।',
    strategic_objectives_heading: 'रणनीतिक उद्देश्य',
    mission_heading: 'हमारा मिशन',
    mission_subtitle: 'गुणवत्तापूर्ण शिक्षा के माध्यम से भविष्य के नेताओं का निर्माण',
    tagline: 'नवाचार के माध्यम से उत्कृष्टता',
    tagline_description: 'प्रभावशाली नेताओं और शोधकर्ताओं को बनाने के लिए समर्पित।',
    legacy_heading: 'हमारी विरासत',
    legacy_subheading: 'तकनीकी शिक्षा में दशकों की उत्कृष्टता',
    missionPillars: [
      { id: 1, title: 'शैक्षणिक उत्कृष्टता', description: 'उच्च गुणवत्ता वाली तकनीकी शिक्षा और आजीवन सीख प्रदान करना।' },
      { id: 2, title: 'अनुसंधान और नवाचार', description: 'उन्नत अनुसंधान और नवीन तकनीकों को बढ़ावा देना।' },
      { id: 3, title: 'समग्र विकास', description: 'छात्रों में नेतृत्व, नैतिकता और टीम वर्क विकसित करना।' },
      { id: 4, title: 'सामाजिक योगदान', description: 'समाज की सेवा के लिए प्रौद्योगिकी और ज्ञान का उपयोग करना।' },
      { id: 5, title: 'वैश्विक सक्षमता', description: 'अंतर्राष्ट्रीय सहयोग और वैश्विक प्रदर्शन का निर्माण करना।' },
    ],
    legacyStats: [
      { id: 1, value: '35+', label: 'वर्ष', description: 'तकनीकी शिक्षा में उत्कृष्टता के' },
      { id: 2, value: '5000+', label: 'छात्र', description: 'विभिन्न विषयों में' },
      { id: 3, value: '100+', label: 'संकाय', description: 'समर्पित शैक्षणिक पेशेवर' },
    ],
  }
};

// ======================================================
// COMPONENT
// ======================================================

export default function VisionMissionPage() {
  const language = useSelector((state: RootState) => state.language.value);

  const [rawApiData, setRawApiData] = useState<VisionMissionRawResponse | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch from Backend Express Service
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await getVisionMissionData();
        if (response) {
          setRawApiData(response);
        }
      } catch (error) {
        console.error('Failed fetching vision-mission content, falling back to static strings:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // ======================================================
  // BILINGUAL LOGIC RESOLUTION (PRESERVES UI COMPLETENESS)
  // ======================================================
  const visionMissionData: VisionMissionData = React.useMemo(() => {
    const fbEn = fallbackVisionMissionData.en;
    const fbHi = fallbackVisionMissionData.hi;
    const activeFallback = language === 'hi' ? fbHi : fbEn;

    if (!rawApiData) return activeFallback;

    // Helper to resolve string values across mutually exclusive columns
    const renderText = (
      enVal: string | null | undefined,
      hiVal: string | null | undefined,
      fallbackEn: string,
      fallbackHi: string
    ): string => {
      if (language === 'hi') {
        return hiVal || enVal || fallbackHi || fallbackEn;
      }
      return enVal || hiVal || fallbackEn || fallbackHi;
    };

    return {
      guiding_principles_heading: renderText(
        rawApiData.guiding_principles_heading_en,
        rawApiData.guiding_principles_heading_hi,
        fbEn.guiding_principles_heading,
        fbHi.guiding_principles_heading
      ),
      guiding_principles_description: renderText(
        rawApiData.guiding_principles_description_en,
        rawApiData.guiding_principles_description_hi,
        fbEn.guiding_principles_description,
        fbHi.guiding_principles_description
      ),
      vision_heading: renderText(
        rawApiData.vision_heading_en,
        rawApiData.vision_heading_hi,
        fbEn.vision_heading,
        fbHi.vision_heading
      ),
      vision_subtitle: renderText(
        rawApiData.vision_subtitle_en,
        rawApiData.vision_subtitle_hi,
        fbEn.vision_subtitle,
        fbHi.vision_subtitle
      ),
      vision_description: renderText(
        rawApiData.vision_description_en,
        rawApiData.vision_description_hi,
        fbEn.vision_description,
        fbHi.vision_description
      ),
      strategic_objectives_heading: renderText(
        rawApiData.strategic_objectives_heading_en,
        rawApiData.strategic_objectives_heading_hi,
        fbEn.strategic_objectives_heading,
        fbHi.strategic_objectives_heading
      ),
      mission_heading: renderText(
        rawApiData.mission_heading_en,
        rawApiData.mission_heading_hi,
        fbEn.mission_heading,
        fbHi.mission_heading
      ),
      mission_subtitle: renderText(
        rawApiData.mission_subtitle_en,
        rawApiData.mission_subtitle_hi,
        fbEn.mission_subtitle,
        fbHi.mission_subtitle
      ),
      tagline: renderText(
        rawApiData.tagline_en,
        rawApiData.tagline_hi,
        fbEn.tagline,
        fbHi.tagline
      ),
      tagline_description: renderText(
        rawApiData.tagline_description_en,
        rawApiData.tagline_description_hi,
        fbEn.tagline_description,
        fbHi.tagline_description
      ),
      legacy_heading: renderText(
        rawApiData.legacy_heading_en,
        rawApiData.legacy_heading_hi,
        fbEn.legacy_heading,
        fbHi.legacy_heading
      ),
      legacy_subheading: renderText(
        rawApiData.legacy_subheading_en,
        rawApiData.legacy_subheading_hi,
        fbEn.legacy_subheading,
        fbHi.legacy_subheading
      ),
      missionPillars: (rawApiData.missionPillars && rawApiData.missionPillars.length > 0)
        ? rawApiData.missionPillars.map((pillar, idx) => ({
            id: pillar.id,
            title: renderText(pillar.title_en, pillar.title_hi, fbEn.missionPillars[idx]?.title || '', fbHi.missionPillars[idx]?.title || ''),
            description: renderText(pillar.description_en, pillar.description_hi, fbEn.missionPillars[idx]?.description || '', fbHi.missionPillars[idx]?.description || ''),
          }))
        : activeFallback.missionPillars,
      legacyStats: (rawApiData.legacyStats && rawApiData.legacyStats.length > 0)
        ? rawApiData.legacyStats.map((stat, idx) => ({
            id: stat.id,
            value: renderText(stat.value_en, stat.value_hi, fbEn.legacyStats[idx]?.value || '', fbHi.legacyStats[idx]?.value || ''),
            label: renderText(stat.label_en, stat.label_hi, fbEn.legacyStats[idx]?.label || '', fbHi.legacyStats[idx]?.label || ''),
            description: renderText(stat.description_en, stat.description_hi, fbEn.legacyStats[idx]?.description || '', fbHi.legacyStats[idx]?.description || ''),
          }))
        : activeFallback.legacyStats,
    };
  }, [rawApiData, language]);

  const icons = [Lightbulb, Beaker, Users, Heart, Globe];

  return (
    <div className="min-h-screen bg-white">
      <Header31 />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4 px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#800000] transition-colors duration-200">
              {language === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}
            </Link>
            <span>›</span>
            <span className="text-gray-400">
              {language === 'hi' ? 'परिचय' : 'About'}
            </span>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              {language === 'hi' ? 'दृष्टिकोण और मिशन' : 'Vision & Mission'}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
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
            {visionMissionData.guiding_principles_heading}
          </h1>
          <div
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light"
            dangerouslySetInnerHTML={{ __html: visionMissionData.guiding_principles_description }}
          />
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInScale}
            transition={{ duration: 0.7 }}
            whileHover={{
              scale: 1.02,
              transition: { type: 'spring', stiffness: 300 },
            }}
            className="bg-white border border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all p-10 md:p-16 flex flex-col items-center text-center"
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { type: 'spring', stiffness: 400 },
              }}
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#800000] to-[#631012] flex items-center justify-center mb-6 shadow-lg"
            >
              <Eye className="w-10 h-10 text-white" />
            </motion.div>

            <span className="inline-block px-4 py-1.5 bg-[#800000]/5 text-[#800000] text-sm font-semibold rounded-full mb-4">
              {visionMissionData.vision_heading}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {visionMissionData.vision_subtitle}
            </h2>

            <div className="relative">
              <svg className="absolute -left-6 -top-4 w-12 h-12 text-[#800000]/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic px-8">
                {visionMissionData.vision_description}
              </p>
              <svg className="absolute -right-6 -bottom-4 w-12 h-12 text-[#800000]/20 rotate-180" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section & Pillars */}
      <section className="relative py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#800000]/5 text-[#800000] text-sm font-semibold rounded-full mb-4">
              {visionMissionData.strategic_objectives_heading}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {visionMissionData.mission_heading}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              {visionMissionData.mission_subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visionMissionData.missionPillars.map((mission, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeInScale}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
                  className="group relative bg-white border border-gray-200 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#800000] to-[#631012] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-[#800000] transition-colors">
                        {mission.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {mission.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legacy Stats Section */}
      {visionMissionData.legacyStats && visionMissionData.legacyStats.length > 0 && (
        <section className="py-24 bg-gray-50 border-t border-b border-gray-100 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{visionMissionData.legacy_heading}</h2>
              <p className="text-gray-500">{visionMissionData.legacy_subheading}</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {visionMissionData.legacyStats.map((stat, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-4xl font-extrabold text-[#800000] mb-2">{stat.value}</div>
                  <div className="text-lg font-bold text-gray-800 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tagline Banner */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-[#800000] to-[#8B1E1E] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wIDJ2MTJoLTJ2LTEyaDJ6bTAgMTRjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYgNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {visionMissionData.tagline}
            </h3>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              {visionMissionData.tagline_description}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}