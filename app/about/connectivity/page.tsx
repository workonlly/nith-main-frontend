'use client';
import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header31 from '../../components/header3';
import Footer from '../../components/footer';

// Import our new endpoint client functions and interfaces
import { getConnectivityCombinedData, ConnectivityCombinedResponse } from '../api/api';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

// SVG Icon Node Generators to keep exact visual parity
const AirIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const TrainIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17h14" />
  </svg>
);

const BusIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
);

interface LocalOptionUI {
  icon: () => React.JSX.Element;
  title: string;
  description: string;
  nearestLabel: string;
  nearestValue: string;
  distanceLabel: string;
  distanceValue: string;
  timeNeeded: string;
  servicesLabel: string;
  paragraphs: string[];
}

// Hardcoded layout data configurations used when database returns empty records
const staticFallbackData = {
  en: {
    heroHeading: 'Getting Here',
    heroDescription: 'Find out how to reach our beautiful campus located in Hamirpur, Himachal Pradesh, easily accessible by air, rail, or road.',
    optionsLabel: 'MODES OF TRANSPORTATION',
    optionsHeading: 'How to Reach Us',
    optionsSubtitle: 'Select your preferred mode of travel to explore detailed dynamic routes, nearby transfer options, and local services info.',
    travelOptions: [
      {
        icon: AirIcon,
        title: 'By Air',
        description: 'The nearest airports provide smooth connections via domestic flights from standard transit hubs.',
        nearestLabel: 'Nearest Airport',
        nearestValue: 'Gaggal Airport (Dharamshala) or Mohali International Airport',
        distanceLabel: 'Distance',
        distanceValue: '~85 km from Dharamshala, ~210 km from Mohali',
        timeNeeded: 'Approx. 2.5 hours drive from Gaggal Airport',
        servicesLabel: 'Available Services',
        paragraphs: [
          'Prepaid taxi counters are available inside the arrival halls at both airports for direct point-to-point drop-offs.',
          'Car rental apps and localized private operators offer reliable custom drop services directly to the institutional gate lines.'
        ]
      },
      {
        icon: TrainIcon,
        title: 'By Rail',
        description: 'Broad gauge and narrow gauge rail options offer picturesque journeys directly through the lower foothills.',
        nearestLabel: 'Nearest Station',
        nearestValue: 'Una Himachal (Broad Gauge) or Amb Andaura',
        distanceLabel: 'Distance',
        distanceValue: '~80 km from Una terminal link',
        timeNeeded: 'Approx. 2 hours taxi commute over smooth state highways',
        servicesLabel: 'On-Station Transits',
        paragraphs: [
          'Direct express trains connect Una weekly to major junctions including New Delhi, Ambala, and Chandigarh stations.',
          'State buses run frequent cross-routes directly from outside the main station exit gates to Hamirpur bus stands.'
        ]
      },
      {
        icon: BusIcon,
        title: 'By Road',
        description: 'An expansive national and state highway framework links the city cleanly with all neighboring north states.',
        nearestLabel: 'Nearest Bus Hub',
        nearestValue: 'Hamirpur ISBT (Inter-State Bus Terminus)',
        distanceLabel: 'Distance',
        distanceValue: 'Just 4 km away from the campus grounds',
        timeNeeded: 'Local auto-rickshaws take less than 10 minutes to arrive',
        servicesLabel: 'Highway Route Details',
        paragraphs: [
          'Frequent luxury AC Volvo services are operated daily by HRTC from ISBT Kashmiri Gate, New Delhi.',
          'Direct connection corridors connect Hamirpur seamlessly to Chandigarh (4-5 hours) and Jalandhar pathways.'
        ]
      }
    ]
  },
  hi: {
    heroHeading: 'यहाँ कैसे पहुँचें',
    heroDescription: 'हिमाचल प्रदेश के हमीरपुर में स्थित हमारे सुंदर परिसर तक पहुँचने के तरीके खोजें, जो हवाई, रेल या सड़क मार्ग से आसानी से सुलभ है।',
    optionsLabel: 'परिवहन के साधन',
    optionsHeading: 'हम तक कैसे पहुँचें',
    optionsSubtitle: 'विस्तृत मार्गों, नजदीकी ट्रांसफर विकल्पों और स्थानीय सेवाओं की जानकारी के लिए अपने पसंदीदा यात्रा साधन का चयन करें।',
    travelOptions: [
      {
        icon: AirIcon,
        title: 'हवाई मार्ग से',
        description: 'निकटतम हवाई अड्डे मानक पारगमन केंद्रों से घरेलू उड़ानों के माध्यम से सुचारू कनेक्शन प्रदान करते हैं।',
        nearestLabel: 'निकटतम हवाई अड्डा',
        nearestValue: 'गग्गल हवाई अड्डा (धर्मशाला) या मोहाली अंतर्राष्ट्रीय हवाई अड्डा',
        distanceLabel: 'दूरी',
        distanceValue: 'धर्मशाला से ~85 किमी, मोहाली से ~210 किमी',
        timeNeeded: 'गग्गल हवाई अड्डे से लगभग 2.5 घंटे की ड्राइव',
        servicesLabel: 'उपलब्ध सेवाएं',
        paragraphs: [
          'दोनों हवाई अड्डों पर आगमन हॉल के अंदर सीधे ड्रॉप-ऑफ के लिए प्रीपेड टैक्सी काउंटर उपलब्ध हैं।',
          'कार रेंटल ऐप और स्थानीय निजी ऑपरेटर सीधे संस्थागत गेट तक विश्वसनीय कस्टम ड्रॉप सेवाएं प्रदान करते हैं।'
        ]
      },
      {
        icon: TrainIcon,
        title: 'रेल मार्ग से',
        description: 'ब्रॉड गेज और नैरो गेज रेल विकल्प निचली पहाड़ियों के माध्यम से सीधे सुंदर यात्राएं प्रदान करते हैं।',
        nearestLabel: 'निकटतम स्टेशन',
        nearestValue: 'ऊना हिमाचल (ब्रॉड गेज) या अम्ब अन्दौरा',
        distanceLabel: 'दूरी',
        distanceValue: 'ऊना टर्मिनल लिंक से ~80 किमी',
        timeNeeded: 'चिकने राज्य राजमार्गों पर लगभग 2 घंटे का टैक्सी सफर',
        servicesLabel: 'स्टेशन पर पारगमन',
        paragraphs: [
          'सीधी एक्सप्रेस ट्रेनें ऊना को साप्ताहिक रूप से नई दिल्ली, अंबाला और चंडीगढ़ स्टेशनों सहित प्रमुख जंक्शनों से जोड़ती हैं।',
          'मुख्य स्टेशन निकास द्वारों के ठीक बाहर से हमीरपुर बस स्टैंड के लिए राज्य की बसें लगातार चलती हैं।'
        ]
      },
      {
        icon: BusIcon,
        title: 'सड़क मार्ग से',
        description: 'एक विस्तृत राष्ट्रीय और राज्य राजमार्ग ढांचा शहर को सभी पड़ोसी उत्तरी राज्यों से साफ तौर पर जोड़ता है।',
        nearestLabel: 'निकटतम बस हब',
        nearestValue: 'हमीरपुर आईएसबीटी (अंतर-राज्यीय बस टर्मिनस)',
        distanceLabel: 'दूरी',
        distanceValue: 'परिसर के मैदान से मात्र 4 किमी दूर',
        timeNeeded: 'स्थानीय ऑटो-रिक्शा को पहुँचने में 10 मिनट से भी कम समय लगता है',
        servicesLabel: 'राजमार्ग मार्ग विवरण',
        paragraphs: [
          'आईएसबीटी कश्मीरी गेट, नई दिल्ली से एचआरटीसी द्वारा प्रतिदिन लगातार लक्जरी एसी वोल्वो सेवाएं संचालित की जाती हैं।',
          'सीधे संपर्क गलियारे हमीरपुर को चंडीगढ़ (4-5 घंटे) और जालंधर मार्गों से सहजता से जोड़ते हैं।'
        ]
      }
    ]
  }
};

export default function ConnectivityPage() {
  const language = useSelector((state: RootState) => state.language.value);
  const [apiData, setApiData] = useState<ConnectivityCombinedResponse | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getConnectivityCombinedData();
        if (data) setApiData(data);
      } catch (err) {
        console.error('Failed invoking remote connectivity payload endpoints, using defaults:', err);
      }
    }
    loadData();
  }, []);

  // ======================================================
  // DATA PARSING ENGINE (CROSS-LANGUAGE RESOLUTION)
  // ======================================================
  const content = useMemo(() => {
    const fbEn = staticFallbackData.en;
    const fbHi = staticFallbackData.hi;
    const fallback = language === 'hi' ? fbHi : fbEn;

    if (!apiData) return fallback;

    // Direct translation column picker (reverts to alternative string if database entry is empty/null)
    const pickText = (en: string | null | undefined, hi: string | null | undefined, fallbackStr: string): string => {
      if (language === 'hi') return hi || en || fallbackStr;
      return en || hi || fallbackStr;
    };

    const heroHeading = pickText(apiData.pageData?.hero_heading_en, apiData.pageData?.hero_heading_hi, fallback.heroHeading);
    const heroDescription = pickText(apiData.pageData?.hero_description_en, apiData.pageData?.hero_description_hi, fallback.heroDescription);
    const optionsLabel = pickText(apiData.pageData?.travel_options_label_en, apiData.pageData?.travel_options_label_hi, fallback.optionsLabel);
    const optionsHeading = pickText(apiData.pageData?.travel_options_heading_en, apiData.pageData?.travel_options_heading_hi, fallback.optionsHeading);
    const optionsSubtitle = pickText(apiData.pageData?.travel_options_subtitle_en, apiData.pageData?.travel_options_subtitle_hi, fallback.optionsSubtitle);

    // Dynamic compilation of Travel Option Cards
    let travelOptions: LocalOptionUI[] = [];
    if (apiData.travelOptions && apiData.travelOptions.length > 0) {
      travelOptions = apiData.travelOptions.map((opt) => {
        // Find configuration matched by type alias matching signature
        const backupMatch = fbEn.travelOptions.find(b => b.title.toLowerCase().includes(opt.type || '')) || fbEn.travelOptions[0];
        const activeBackupMatch = fallback.travelOptions.find(b => b.title.toLowerCase().includes(opt.type || '')) || fallback.travelOptions[0];

        const title = pickText(opt.title_en, opt.title_hi, activeBackupMatch.title);
        const description = pickText(opt.description_en, opt.description_hi, activeBackupMatch.description);
        const nearestLabel = pickText(opt.nearest_point_label_en, opt.nearest_point_label_hi, activeBackupMatch.nearestLabel);
        const nearestValue = pickText(opt.nearest_point_value_en, opt.nearest_point_value_hi, activeBackupMatch.nearestValue);
        const distanceLabel = pickText(opt.distance_label_en, opt.distance_label_hi, activeBackupMatch.distanceLabel);
        const distanceValue = pickText(opt.distance_value_en, opt.distance_value_hi, activeBackupMatch.distanceValue);
        const timeNeeded = pickText(opt.time_needed_en, opt.time_needed_hi, activeBackupMatch.timeNeeded);
        const servicesLabel = pickText(opt.services_label_en, opt.services_label_hi, activeBackupMatch.servicesLabel);

        // Map bullet sub-strings lists array
        let paragraphs: string[] = [];
        if (opt.servicesParagraphs && opt.servicesParagraphs.length > 0) {
          paragraphs = opt.servicesParagraphs.map(p => pickText(p.paragraph_en, p.paragraph_hi, ''));
        } else {
          paragraphs = activeBackupMatch.paragraphs;
        }

        // Return core matching icon elements dynamically based on DB classification values
        let resolvedIcon = AirIcon;
        if (opt.type === 'train') resolvedIcon = TrainIcon;
        if (opt.type === 'bus') resolvedIcon = BusIcon;

        return {
          icon: resolvedIcon,
          title,
          description,
          nearestLabel,
          nearestValue,
          distanceLabel,
          distanceValue,
          timeNeeded,
          servicesLabel,
          paragraphs
        };
      });
    } else {
      travelOptions = fallback.travelOptions;
    }

    return { heroHeading, heroDescription, optionsLabel, optionsHeading, optionsSubtitle, travelOptions };
  }, [apiData, language]);

  return (
    <div className="min-h-screen bg-white">
      <Header31 />

      {/* Breadcrumb Navigation Bar */}
      <div className="bg-gray-50 py-4 px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#800000] transition-colors duration-200">
              {language === 'en' ? 'Home' : 'मुख्य पृष्ठ'}
            </Link>
            <span>›</span>
            <span className="text-gray-400">{language === 'en' ? 'About' : 'परिचय'}</span>
            <span>›</span>
            <span className="text-[#800000] font-medium">{language === 'en' ? 'Connectivity' : 'कनेक्टिविटी'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Header Section Banner */}
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
            {content.heroHeading}
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            {content.heroDescription}
          </p>
        </motion.div>
      </section>

      {/* Transportation Main Grid Area Section */}
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
              {content.optionsLabel}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 tracking-tight">
              {content.optionsHeading}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              {content.optionsSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content.travelOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInScale}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
                  className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#800000] to-[#631012] flex items-center justify-center mb-6 text-white shadow-lg shadow-[#800000]/20">
                    <IconComponent />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{option.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 border-b border-gray-100 pb-4">
                    {option.description}
                  </p>

                  <div className="space-y-4 text-sm mb-6">
                    <div>
                      <span className="block font-bold text-gray-400 uppercase text-[11px] tracking-wider mb-0.5">
                        {option.nearestLabel}
                      </span>
                      <span className="text-gray-800 font-semibold">{option.nearestValue}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-1">
                      <div>
                        <span className="block font-bold text-gray-400 uppercase text-[11px] tracking-wider mb-0.5">
                          {option.distanceLabel}
                        </span>
                        <span className="text-gray-700 font-medium">{option.distanceValue}</span>
                      </div>
                      <div>
                        <span className="block font-bold text-gray-400 uppercase text-[11px] tracking-wider mb-0.5">
                          {language === 'en' ? 'Time Estimation' : 'समय का अनुमान'}
                        </span>
                        <span className="text-gray-700 font-medium">{option.timeNeeded}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50/80 rounded-2xl p-5 border border-gray-100">
                    <span className="block font-bold text-gray-900 text-xs tracking-wide uppercase mb-3">
                      {option.servicesLabel}
                    </span>
                    <ul className="space-y-2.5 text-xs text-gray-600">
                      {option.paragraphs.map((textLine, pIdx) => {
                        if (!textLine) return null;
                        return (
                          <li key={pIdx} className="flex items-start gap-2">
                            <span className="text-[#800000] font-bold mt-0.5">•</span>
                            <span className="leading-relaxed">{textLine}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Embedded Location Map Platform Block Area */}
      <section className="py-20 bg-gray-50/50 border-t border-gray-100 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-3">
              {language === 'en' ? 'Interactive Campus Map' : 'इंटरैक्टिव कैंपस मैप'}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              {language === 'en'
                ? 'Explore our institutional location details inside the valley area'
                : 'घाटी क्षेत्र के भीतर हमारे संस्थागत स्थान विवरण का अन्वेषण करें'}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInScale}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white rounded-3xl shadow-xl p-4 border border-gray-200"
          >
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8919045449387!2d76.52076631515635!3d31.456267681398645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391adb4924f6f56b%3A0x2e7/maps?q=NIT+Hamirpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}