'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';
import { MapPin, Mountain, Route } from 'lucide-react';


import {
  getAboutCityMain,
  getAboutCityInfoCards,
  getAboutCityDescriptions,
  AboutCityMainRaw,
  AboutCityInfoCardRaw,
  AboutCityDescriptionRaw
} from '../api/api';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

interface CityInfoCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
}

// Icon dictionary to retain specific aesthetic layouts for dynamic data records
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  location: MapPin,
  altitude: Mountain,
  connectivity: Route,
  स्थान: MapPin,
  ऊंचाई: Mountain,
  संयोजकता: Route
};

// ======================================================
// STATIC HARDCODED FALLBACK RECORDS
// ======================================================
const fallbackCityData = {
  en: {
    heading: 'About Hamirpur',
    introduction: 'Set in the peaceful hills of Himachal Pradesh, Hamirpur offers a clean, calm, and welcoming environment for all who visit NIT Hamirpur. With its friendly community and natural beauty, the city creates the perfect backdrop for learning, growth, and new beginnings.',
    overview_title: 'City Overview',
    overview_subtitle: "Essential information about Hamirpur's location and characteristics",
    infoCards: [
      { icon: MapPin, title: 'Location', subtitle: 'Himachal Pradesh, India' },
      { icon: Mountain, title: 'Altitude', subtitle: '785 metres' },
      { icon: Route, title: 'Connectivity', subtitle: 'NH-3 & NH-103' }
    ],
    descriptions: [
      'Hamirpur, the district headquarter, is situated at an altitude of 785 meters in the Himalayan State of Himachal Pradesh, India. Hamirpur is a clean and eco-friendly district and is famous for its high literacy rate.',
      'Hamirpur City is surrounded by pine tree forest and has a good city infrastructure ranging from Quality Educational Institutions including NIT, State Universities and Skill Learning Centres.',
      'During winter, the climate is cold but pleasant when woolens are required. During summer the maximum temperature is around 40 degrees Celsius and cottons are recommended.',
      'It is a major junction on National Highway 3 while National Highway 103 starts from here. The bulk of the population speaks Hindi, with English widely understood.'
    ]
  },
  hi: {
    heading: 'हमीरपुर के बारे में',
    introduction: 'हिमाचल प्रदेश की शांत पहाड़ियों में बसा हमीरपुर, एनआईटी हमीरपुर आने वाले सभी लोगों के लिए एक स्वच्छ, शांत और स्वागत योग्य वातावरण प्रदान करता है। अपने अनुकूल समुदाय और प्राकृतिक सुंदरता के साथ, शहर सीखने, विकास और नई शुरुआत के लिए आदर्श पृष्ठभूमि तैयार करता है।',
    overview_title: 'शहर का अवलोकन',
    overview_subtitle: 'हमीरपुर के स्थान और विशेषताओं के बारे में आवश्यक जानकारी',
    infoCards: [
      { icon: MapPin, title: 'स्थान', subtitle: 'हिमाचल प्रदेश, भारत' },
      { icon: Mountain, title: 'ऊंचाई', subtitle: '785 मीटर' },
      { icon: Route, title: 'संयोजकता', subtitle: 'NH-3 & NH-103' }
    ],
    descriptions: [
      'हमीरपुर, जिला मुख्यालय, हिमाचल प्रदेश के हिमालयी राज्य में 785 मीटर की ऊंचाई पर स्थित है। हमीरपुर एक स्वच्छ और पर्यावरण के अनुकूल जिला है और अपनी उच्च साक्षरता दर के लिए प्रसिद्ध है।',
      'हमीरपुर शहर देवदार के जंगल से घिरा हुआ है और NIT, राज्य विश्वविद्यालयों और कौशल सीखने के केंद्रों सहित गुणवत्ता वाली शैक्षणिक संस्थाओं की अच्छी शहरी बुनियादी ढांचे है।',
      'सदियों में जलवायु ठंडी लेकिन सुखद होती है जब ऊनी कपड़ों की आवश्यकता होती है। गर्मी के दौरान अधिकतम तापमान लगभग 40 डिग्री सेल्सियस होता है और कपास की सिफारिश की जाती है।',
      'यह राष्ट्रीय राजमार्ग 3 पर एक प्रमुख जंक्शन है जबकि राष्ट्रीय राजमार्ग 103 यहां से शुरू होता है। अधिकांश आबादी हिंदी बोलती है, अंग्रेजी व्यापक रूप से समझी जाती है।'
    ]
  }
};

export default function AboutCityPage() {
  const language = useSelector((state: RootState) => state.language.value);

  // Separate states for backend database collections
  const [mainRaw, setMainRaw] = useState<AboutCityMainRaw | null>(null);
  const [cardsRaw, setCardsRaw] = useState<AboutCityInfoCardRaw[]>([]);
  const [descsRaw, setDescsRaw] = useState<AboutCityDescriptionRaw[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAllCityData() {
      try {
        setLoading(true);
        // Execute parallel backend queries
        const [mainRes, cardsRes, descsRes] = await Promise.all([
          getAboutCityMain(),
          getAboutCityInfoCards(),
          getAboutCityDescriptions()
        ]);
        
        if (mainRes) setMainRaw(mainRes);
        if (cardsRes) setCardsRaw(cardsRes);
        if (descsRes) setDescsRaw(descsRes);
      } catch (err) {
        console.error('Failed to load dynamic backend city records, utilizing built-in fallbacks:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchAllCityData();
  }, []);

  // ======================================================
  // INTERLOCKING BILINGUAL RESOLUTION LOGIC
  // ======================================================
  const computedData = useMemo(() => {
    const fbEn = fallbackCityData.en;
    const fbHi = fallbackCityData.hi;
    const activeFallback = language === 'hi' ? fbHi : fbEn;

    // Direct text evaluation across mutually exclusive columns
    const getText = (
      enVal: string | null | undefined, 
      hiVal: string | null | undefined, 
      fallbackDefault: string
    ): string => {
      if (language === 'hi') {
        return hiVal || enVal || fallbackDefault;
      }
      return enVal || hiVal || fallbackDefault;
    };

    // 1. Resolve Heading, Introduction text, and Section Subtitles
    const heading = mainRaw 
      ? getText(mainRaw.heading_en, mainRaw.heading_hi, activeFallback.heading)
      : activeFallback.heading;

    const introduction = mainRaw
      ? getText(mainRaw.introduction_en, mainRaw.introduction_hi, activeFallback.introduction)
      : activeFallback.introduction;

    const overview_title = mainRaw
      ? getText(mainRaw.overview_title_en, mainRaw.overview_title_hi, activeFallback.overview_title)
      : activeFallback.overview_title;

    const overview_subtitle = mainRaw
      ? getText(mainRaw.overview_subtitle_en, mainRaw.overview_subtitle_hi, activeFallback.overview_subtitle)
      : activeFallback.overview_subtitle;

    // 2. Resolve Dynamic Info Cards
    let resolvedCards: CityInfoCard[] = [];
    if (cardsRaw && cardsRaw.length > 0) {
      resolvedCards = cardsRaw.map((card, index) => {
        const titleText = getText(card.label_en, card.label_hi, fbEn.infoCards[index]?.title || 'Info');
        const subtitleText = getText(card.value_en, card.value_hi, fbEn.infoCards[index]?.subtitle || '');
        
        // Find matching icon or map default sequential fallback icon
        const lookupKey = titleText.toLowerCase().trim();
        const IconComponent = iconMap[lookupKey] || fbEn.infoCards[index % fbEn.infoCards.length].icon;

        return {
          icon: IconComponent,
          title: titleText,
          subtitle: subtitleText
        };
      });
    } else {
      resolvedCards = activeFallback.infoCards;
    }

    // 3. Resolve Dynamic Layout Body Descriptions
    let resolvedDescs: string[] = [];
    if (descsRaw && descsRaw.length > 0) {
      resolvedDescs = descsRaw.map((desc, index) => 
        getText(desc.description_en, desc.description_hi, activeFallback.descriptions[index] || '')
      );
    } else {
      resolvedDescs = activeFallback.descriptions;
    }

    return {
      heading,
      introduction,
      overview_title,
      overview_subtitle,
      infoCards: resolvedCards,
      descriptions: resolvedDescs
    };
  }, [mainRaw, cardsRaw, descsRaw, language]);

  return (
    <div className="min-h-screen bg-white">
      <Header31 />

      {/* Breadcrumb Navigation Block */}
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
              {language == 'en' ? 'About' : 'परिचय'}
            </span>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              {language == 'en' ? 'About the City' : 'शहर के बारे में'}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Header Jumbotron Banner */}
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
            {computedData.heading}
          </h1>
          <div
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light"
            dangerouslySetInnerHTML={{ __html: computedData.introduction }}
          />
        </motion.div>
      </section>

      {/* Overview Grid Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {computedData.overview_title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              {computedData.overview_subtitle}
            </p>
          </motion.div>

          {/* Render cards dynamically from computed server state */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {computedData.infoCards.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInScale}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                    transition: { type: 'spring', stiffness: 300 },
                  }}
                  className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#800000] to-[#631012] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#800000] transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-gray-600">{info.subtitle}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dynamic Descriptive Paragraphs Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column Description Layout Mapping */}
              <div className="space-y-4">
                {computedData.descriptions.slice(0, 2).map((text, idx) => (
                  <div key={idx} className="flex items-start gap-5">
                    <div className="w-2 h-2 bg-[#800000] rounded-full mt-2.5 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              {/* Right Column Description Layout Mapping */}
              <div className="space-y-4">
                {computedData.descriptions.slice(2, 4).map((text, idx) => (
                  <div key={idx} className="flex items-start gap-5">
                    <div className="w-2 h-2 bg-[#800000] rounded-full mt-2.5 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{text}</p>
                  </div>
                ))}
                {/* Fallback layout support if additional dynamic records are added to database table */}
                {computedData.descriptions.slice(4).map((text, idx) => (
                  <div key={idx + 4} className="flex items-start gap-5">
                    <div className="w-2 h-2 bg-[#800000] rounded-full mt-2.5 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Campus Embed Map Canvas Block */}
      <section className="relative py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language == 'en' ? 'Location Map' : 'स्थान का नक्शा'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              {language == 'en'
                ? 'Explore our campus location in the scenic Hamirpur valley'
                : 'सुंदर हमीरपुर घाटी में हमारे परिसर के स्थान की खोज करें'}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-200"
          >
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8919045449387!2d76.52076631515635!3d31.456267681398645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391adb4924f6f56b%3A0x2e7c3c1c6ea930c5!2sNational%20Institute%20of%20Technology%2C%20Hamirpur!5e0!3m2!1sen!2sin!4v1635847891234!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NIT Hamirpur Location Map"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}