'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


 import { useSelector } from 'react-redux';
 import { RootState } from '../../store';
 import Link from 'next/link';
 import Header31 from '../../components/header3';
 import Footer from '../../components/footer';
 import { getHistoryData, getTimelineData } from '../api/api';



// ======================================================
// SCHEMAS / INTERFACES (Safe for null values from Backend)
// ======================================================
interface HistoryData {
  description1: string | null;
  description1_hi?: string | null;
  description2: string | null;
  description2_hi?: string | null;
  legacy: string | null;
  legacy_hi?: string | null;
}

interface TimelineEvent {
  id?: number;
  year: string;
  event_date: string;
  title: string | null;
  title_hi?: string | null;
  subtitle: string | null;
  subtitle_hi?: string | null;
  description: string | null;
  description_hi?: string | null;
}

// ======================================================
// FALLBACK DATA (For initial render or API failover)
// ======================================================
const fallbackHistoryData: HistoryData = {
  description1: 'Regional Engineering College Hamirpur was established in 1986.',
  description1_hi: 'क्षेत्रीय इंजीनियरिंग कॉलेज हमीरपुर की स्थापना 1986 में हुई थी।',
  description2: 'The institute became NIT in 2002.',
  description2_hi: 'संस्थान 2002 में एनआईटी बना।',
  legacy: 'NIT Hamirpur has a strong legacy of excellence.',
  legacy_hi: 'एनआईटी हमीरपुर की उत्कृष्टता की मजबूत विरासत है।',
};

const fallbackTimelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: '1986',
    event_date: '1986-08-07',
    title: 'Establishment',
    title_hi: 'स्थापना',
    subtitle: 'REC Hamirpur Founded',
    subtitle_hi: 'आरईसी हमीरपुर स्थापित',
    description: 'Regional Engineering College Hamirpur was established.',
    description_hi: 'क्षेत्रीय इंजीनियरिंग कॉलेज हमीरपुर की स्थापना हुई।',
  },
  {
    id: 2,
    year: '2002',
    event_date: '2002-06-26',
    title: 'Upgradation to NIT',
    title_hi: 'एनआईटी में उन्नयन',
    subtitle: 'Deemed University Status',
    subtitle_hi: 'डीम्ड यूनिवर्सिटी का दर्जा',
    description: 'REC Hamirpur became National Institute of Technology.',
    description_hi: 'आरईसी हमीरपुर राष्ट्रीय प्रौद्योगिकी संस्थान बना।',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
};

export default function HistoryPage() {
  // Pull language configuration from your Redux store
  // (In local, RootState will map directly to this store selector)
  const language = useSelector((state: any) => state.language.value) as 'en' | 'hi';

  const [historyData, setHistoryData] = useState<HistoryData>(fallbackHistoryData);
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>(fallbackTimelineEvents);
  const [loading, setLoading] = useState(true);
  const [apiFailed, setApiFailed] = useState(false);

  // ======================================================
  // DYNAMIC BILINGUAL RENDER LOGIC
  // Falls back to alternative column text if one language is NULL
  // ======================================================
  const renderText = (enVal: string | null | undefined, hiVal: string | null | undefined): string => {
    if (language === 'hi') {
      return hiVal || enVal || '';
    }
    return enVal || hiVal || '';
  };

  // ======================================================
  // FETCH API DATA
  // ======================================================
  useEffect(() => {
    async function fetchAllData() {
      try {
        setLoading(true);

        const [history, timeline] = await Promise.all([
          getHistoryData(),
          getTimelineData(),
        ]);

        if (history) {
          setHistoryData(history);
        }

        if (timeline && timeline.length > 0) {
          setTimelineEvents(timeline);
        }
      } catch (error) {
        console.error('API failed, using local bilingual fallback data:', error);
        setApiFailed(true);
      } finally {
        setLoading(false);
      }
    }

    fetchAllData();
  }, []);

  const headerDescription = renderText(historyData?.description1, historyData?.description1_hi);
  const mainDescription = renderText(historyData?.description2, historyData?.description2_hi);
  const activeLegacyText = renderText(historyData?.legacy, historyData?.legacy_hi);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header31 />

      <div className="bg-gray-50 py-4 px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-[#800000] transition-colors duration-200"
            >
              {language === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}
            </Link>
            <span>›</span>
            <span className="text-gray-400">
              {language === 'hi' ? 'परिचय' : 'About'}
            </span>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              {language === 'hi' ? 'इतिहास' : 'History'}
            </span>
          </nav>
        </div>
      </div>

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
            {language === 'hi' ? 'हमारा इतिहास' : 'Our History'}
          </h1>
          {headerDescription ? (
            <div
              className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light"
              dangerouslySetInnerHTML={{ __html: headerDescription }}
            />
          ) : (
            <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              {language === 'hi'
                ? '1986 में हमारी स्थापना से लेकर राष्ट्रीय महत्व के संस्थान बनने तक — उत्कृष्टता और विकास की एक यात्रा।'
                : 'From our establishment in 1986 to becoming an Institute of National Importance — a journey of excellence and growth.'}
            </p>
          )}
        </motion.div>
      </section>

      <section className="relative py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto space-y-4"
            >
              {mainDescription ? (
                <div dangerouslySetInnerHTML={{ __html: mainDescription }} />
              ) : (
                <p>
                  {language === 'hi' ? (
                    <>
                      राष्ट्रीय प्रौद्योगिकी संस्थान हमीरपुर (NIT Hamirpur) भारत के इकतीस एनआईटी में से एक है। यह{' '}
                      <span className="font-semibold text-[#800000]">7 अगस्त 1986</span> को क्षेत्रीय इंजीनियरिंग कॉलेज
                      (REC) के रूप में अस्तित्व में आया।
                    </>
                  ) : (
                    <>
                      National Institute of Technology Hamirpur (NIT Hamirpur) is one of the thirty-one NITs of India.
                      It came into existence on <span className="font-semibold text-[#800000]">7th August 1986</span> as
                      Regional Engineering College (REC) — a joint and cooperative enterprise of the Government of India
                      and the Government of Himachal Pradesh.
                    </>
                  )}
                </p>
              )}
              <p>
                {language === 'hi'
                  ? 'अपनी स्थापना के समय, संस्थान में केवल दो विभाग थे:'
                  : 'At the time of its inception, the Institute had only two departments:'}
              </p>
              <div className="flex justify-center gap-8 mt-6 mb-6">
                <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-200">
                  <span className="font-semibold text-[#800000]">
                    {language === 'hi' ? 'सिविल इंजीनियरिंग' : 'Civil Engineering'}
                  </span>
                </div>
                <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-200">
                  <span className="font-semibold text-[#800000]">
                    {language === 'hi' ? 'इलेक्ट्रिकल इंजीनियरिंग' : 'Electrical Engineering'}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 italic">
                {language === 'hi'
                  ? 'प्रत्येक विभाग में ३० छात्रों की प्रारंभिक प्रवेश क्षमता थी।'
                  : 'with an initial intake of 30 students in each.'}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'hi' ? 'समयरेखा' : 'Timeline'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              {language === 'hi'
                ? 'आरईसी से एनआईटी के सफर के मुख्य मील के पत्थर'
                : 'Key milestones in our journey from REC to NIT'}
            </p>
          </motion.div>

          <div className="hidden md:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#631012] via-[#8B1E1E] to-[#631012]"></div>

            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;
              const activeTitle = renderText(event.title, event.title_hi);
              const activeDescription = renderText(event.description, event.description_hi);

              return (
                <motion.div
                  key={event.id || index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  variants={isLeft ? fadeInLeft : fadeInRight}
                  transition={{
                    duration: 0.7,
                    ease: 'easeOut',
                    delay: index * 0.2,
                  }}
                  className={`relative flex items-center mb-16 ${
                    isLeft ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`w-5/12 ${isLeft ? 'pr-12 text-right' : 'pl-12 text-left'}`}
                  >
                    <motion.div
                      className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="mb-3">
                        <span className="inline-block bg-[#631012] text-white px-4 py-1 rounded-full text-sm font-semibold">
                          {event.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {activeTitle}
                      </h3>
                      <p className="text-sm text-[#631012] font-medium mb-3">
                        {event.event_date}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {activeDescription}
                      </p>
                    </motion.div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#631012] rounded-full border-4 border-white shadow-lg z-10"></div>
                </motion.div>
              );
            })}
          </div>

          <div className="md:hidden relative">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#631012] via-[#8B1E1E] to-[#631012]"></div>

            {timelineEvents.map((event, index) => {
              const activeTitle = renderText(event.title, event.title_hi);
              const activeDescription = renderText(event.description, event.description_hi);

              return (
                <motion.div
                  key={event.id || index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeUp}
                  transition={{
                    duration: 0.6,
                    ease: 'easeOut',
                    delay: index * 0.15,
                  }}
                  className="relative pl-16 pb-12 last:pb-0"
                >
                  <div className="absolute left-4 top-0 w-5 h-5 bg-[#800000] rounded-full border-4 border-white shadow-lg z-10"></div>

                  <motion.div
                    className="bg-white rounded-xl shadow-lg p-5 border border-gray-200"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="mb-2">
                      <span className="inline-block bg-[#800000] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {activeTitle}
                    </h3>
                    <p className="text-sm text-[#800000] font-medium mb-2">
                      {event.event_date}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {activeDescription}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#800000]/5 text-[#800000] text-sm font-semibold rounded-full mb-4">
              {language === 'hi' ? 'रूपांतरण की कहानी' : 'Transformation Story'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'hi' ? 'उत्कृष्टता का सफर' : 'Journey of Excellence'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              {language === 'hi' ? 'प्रारंभिक चरण से राष्ट्रीय गरिमा तक' : 'From humble beginnings to national recognition'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group relative bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#800000] to-[#631012] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#800000]/10 text-[#800000] text-xs font-bold rounded-full mb-1">
                      1986
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#800000] transition-colors">
                      {language === 'hi' ? 'आरंभ' : 'The Beginning'}
                    </h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#800000] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-bold text-gray-900">
                        {language === 'hi' ? '२ विभाग:' : '2 Departments:'}
                      </span>{' '}
                      {language === 'hi' ? 'सिविल और इलेक्ट्रिकल इंजीनियरिंग' : 'Civil & Electrical Engineering'}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#800000] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-bold text-gray-900">
                        {language === 'hi' ? '६० विद्यार्थी:' : '60 Students:'}
                      </span>{' '}
                      {language === 'hi' ? 'प्रथम बैच में कुल प्रवेश' : 'admitted in the inaugural batch'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group relative bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#800000] to-[#631012] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#800000]/10 text-[#800000] text-xs font-bold rounded-full mb-1">
                      Present
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#800000] transition-colors">
                      {language === 'hi' ? 'आज का परिदृश्य' : 'Today'}
                    </h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#800000] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-bold text-gray-900">
                        {language === 'hi' ? '२०+ विभाग:' : '20+ Departments:'}
                      </span>{' '}
                      {language === 'hi' ? 'इंजीनियरिंग, विज्ञान और प्रबंधन' : 'Engineering, Sciences & Management'}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#800000] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-bold text-gray-900">
                        {language === 'hi' ? '५०००+ विद्यार्थी:' : '5000+ Students:'}
                      </span>{' '}
                      {language === 'hi' ? 'अध्ययनरत शैक्षणिक कार्यक्रम' : 'pursuing UG, PG & Doctoral programs'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-gradient-to-r from-[#800000] to-[#8B1E1E] rounded-3xl shadow-2xl p-10 md:p-12 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

            <div className="relative flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl md:text-3xl font-bold mb-4">
                  {language === 'hi' ? 'उत्कृष्टता की निरंतर विरासत' : 'Continuing the Legacy of Excellence'}
                </h4>
                {activeLegacyText ? (
                  <div
                    className="text-white/90 leading-relaxed text-lg"
                    dangerouslySetInnerHTML={{ __html: activeLegacyText }}
                  />
                ) : (
                  <p className="text-white/90 leading-relaxed text-lg">
                    {language === 'hi'
                      ? 'सिर्फ 2 विभागों और 60 छात्रों की मामूली शुरुआत से आज भारत के प्रमुख तकनीकी संस्थानों में से एक बनने तक का हमारा सफर अद्वितीय प्रतिबद्धता को दर्शाता है।'
                      : 'From a modest beginning with just 2 departments and 60 students to becoming one of India&apos;s premier technical institutions, our journey reflects unwavering commitment to excellence.'}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}