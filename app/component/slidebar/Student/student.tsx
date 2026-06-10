import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import {
  ChevronRight,
  ArrowUpRight,
  Smile,
  Trophy,
  Scale,
  HandCoins,
  Tent,
  Guitar,
  Cpu,
  HeartHandshake,
} from 'lucide-react';

const studentData = [
  {
    id: '01',
    category: 'Campus Life',
    category2: 'परिसर जीवन', // Hindi Category
    sections: [
      {
        title: 'Essentials',
        title2: 'आवश्यक', // Hindi Section Title
        links: [
          {
            title: 'Student Activities',
            title2: 'छात्र गतिविधियां',
            href: '/student/activities',
          },
          {
            title: 'Functionaries',
            title2: 'पदाधिकारी',
            href: '/student/functionaries',
          },
          {
            title: 'Student Notices',
            title2: 'छात्र सूचनाएं',
            href: '/student/notices',
          },
          {
            title: 'SGRC',
            title2: 'एसजीआरसी (SGRC)',
            href: '/student/sgrc',
          },
        ],
      },
      {
        title: 'Accommodation',
        title2: 'आवास', // Hindi Section Title
        links: [
          {
            title: 'Hostels at NITH',
            title2: 'एनआईटीएच में छात्रावास',
            href: '/student/hostels-at-nith',
          },
          {
            title: 'Hostel Management',
            title2: 'छात्रावास प्रबंधन',
            href: '/student/hostel-management',
          },
          {
            title: 'Hostel Booklet',
            title2: 'छात्रावास पुस्तिका',
            href: '/student/hostel-booklet',
          },
        ],
      },
    ],
  },
  {
    id: '02',
    category: 'Extracurriculars',
    category2: 'पाठ्येतर गतिविधियां', // Hindi Category
    sections: [
      {
        title: 'Cultural',
        title2: 'सांस्कृतिक', // Hindi Section Title
        icon: Guitar,
        links: [
          {
            title: 'Clubs/Socities List',
            title2: 'क्लब सूची',
            href: '/student/cultural/introduction',
          },
          {
            title: "Hill'ffair (Festival)",
            title2: "हिल'फेयर (महोत्सव)",
            href: '/student/cultural/hillfair',
          },
          {
            title: 'SPIC MACAY',
            title2: 'स्पिक मैके (SPIC MACAY)',
            href: '/student/cultural/spic-macay',
          },
        ],
      },
      {
        title: 'Technical',
        title2: 'तकनीकी', // Hindi Section Title
        links: [
          {
            title: 'Clubs/Socities List',
            title2: 'क्लब सूची',
            href: '/student/technical/introduction',
          },
          {
            title: 'Nimbus (Tech Fest)',
            title2: 'निम्बस (टेक फेस्ट)',
            href: '/student/technical/nimbus',
          },
          {
            title: 'Innovation',
            title2: 'नवाचार',
            href: '/student/technical/innovation',
          },
        ],
      },
      {
        title: 'Sports & Wellness',
        title2: 'खेल और कल्याण', // Hindi Section Title
        links: [
          {
            title: 'Sports Introduction',
            title2: 'खेल परिचय',
            href: '/student/sports/introduction',
          },
          {
            title: 'Lalkaar (Sports Meet)',
            title2: 'लकार (खेल मीट)',
            href: '/student/sports/lalkaar',
          },
          {
            title: 'Yoga Day',
            title2: 'योग दिवस',
            href: '/student/sports/yoga-day',
          },
        ],
      },
      {
        title: 'Service & Publishing',
        title2: 'सेवा और प्रकाशन', // Hindi Section Title
        links: [
          {
            title: 'NSS Activities',
            title2: 'एनएसएस (NSS) गतिविधियां',
            href: '/student/nss',
          },
          {
            title: 'NCC Activities',
            title2: 'एनसीसी (NCC) गतिविधियां',
            href: '/student/ncc',
          },
          {
            title: 'Magazine',
            title2: 'पत्रिका',
            href: '/student/publications/magazine',
          },
          {
            title: 'News Bulletin',
            title2: 'समाचार बुलेटिन',
            href: '/student/publications/news-bulletin',
          },
        ],
      },
    ],
  },
  {
    id: '03',
    category: 'Conduct',
    category2: 'आचरण', // Hindi Category
    sections: [
      {
        title: 'Discipline',
        title2: 'अनुशासन', // Hindi Section Title
        links: [
          {
            title: 'Discipline Rules',
            title2: 'अनुशासन नियम',
            href: '/student/discipline/rules',
          },
          {
            title: 'Discipline Board',
            title2: 'अनुशासन बोर्ड',
            href: '/student/discipline/board',
          },
        ],
      },
      {
        title: 'Counselling',
        title2: 'परामर्श', // Hindi Section Title
        links: [
          {
            title: 'Counselling Rules',
            title2: 'परामर्श नियम',
            href: '/student/counselling/rules',
          },
          {
            title: 'Counselling Board',
            title2: 'परामर्श बोर्ड',
            href: '/student/counselling/board',
          },
        ],
      },
      {
        title: 'Governance',
        title2: 'शासन', // Hindi Section Title
        links: [
          {
            title: 'Student Council Rules',
            title2: 'छात्र परिषद नियम',
            href: '/student/council/rules',
          },
          {
            title: 'Student Council Board',
            title2: 'छात्र परिषद बोर्ड',
            href: '/student/council/board',
          },
        ],
      },
      {
        title: 'Anti-Ragging',
        title2: 'रैगिंग विरोधी', // Hindi Section Title
        links: [
          {
            title: 'Anti-Ragging Rules',
            title2: 'रैगिंग विरोधी नियम',
            href: '/student/anti-ragging/rules',
          },
          {
            title: 'Anti-Ragging Committee',
            title2: 'रैगिंग विरोधी समिति',
            href: '/student/anti-ragging/committee',
          },
        ],
      },
    ],
  },
  {
    id: '04',
    category: 'Welfare',
    category2: 'कल्याण', // Hindi Category
    sections: [
      {
        title: 'Benefits',
        title2: 'लाभ', // Hindi Section Title
        links: [
          {
            title: 'Scholarships',
            title2: 'छात्रवृत्ति',
            href: '/student/welfare/scholarships',
          },
          {
            title: 'Prizes & Medals',
            title2: 'पुरस्कार और पदक',
            href: '/student/welfare/prizes-medals',
          },
          {
            title: 'Insurance',
            title2: 'बीमा',
            href: '/student/welfare/insurance',
          },
        ],
      },
    ],
  },
];

const Student = () => {
  const language = useSelector((state: RootState) => state.language.value);
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-12">
          {studentData.map((column) => (
            <div key={column.id} className="flex flex-col">
              {/* Column Header */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 group/header">
                <span className="font-mono text-base sm:text-lg md:text-xl text-gray-200 group-hover/header:text-[#800000] transition-colors duration-300">
                  {column.id}
                </span>
                <div className="flex items-center gap-1 sm:gap-2 border-l-2 border-[#800000] pl-2 sm:pl-3">
                  <h3 className="text-[clamp(10px,2vw,14px)] font-bold uppercase tracking-wider text-gray-800">
                    {language == 'en' ? column.category : column.category2}
                  </h3>
                </div>
              </div>

              {/* Sections Loop */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {column.sections.map((section, idx) => (
                  <div key={idx} className="group/section">
                    {/* Sub-Section Title */}
                    <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3 pl-1 sm:pl-2 border-l border-transparent group-hover/section:border-gray-200 transition-all">
                      <h4 className="text-[clamp(9px,1.8vw,12px)] font-semibold text-gray-400 uppercase tracking-widest">
                        {language == 'en' ? section.title : section.title2}
                      </h4>
                    </div>

                    {/* Links List */}
                    <ul className="space-y-0.5 sm:space-y-1">
                      {section.links.map((link) => (
                        <li key={link.title}>
                          <Link
                            href={link.href}
                            className="flex items-center justify-between group/link py-1.5 sm:py-2 px-1 sm:px-2 rounded-r hover:bg-gray-50 transition-all duration-300"
                          >
                            <div className="flex items-center gap-2 sm:gap-3">
                              <ChevronRight
                                size={12}
                                className="text-gray-300 group-hover/link:text-[#800000] transition-colors sm:w-3.5 sm:h-3.5"
                              />
                              <span className="text-[clamp(10px,2vw,14px)] font-medium text-gray-600 group-hover/link:text-black transition-colors">
                                {language == 'en' ? link.title : link.title2}
                              </span>
                            </div>

                            {/* Hover Indicator */}
                            <ArrowUpRight
                              size={10}
                              className="opacity-0 -translate-x-2 text-[#800000] group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 sm:w-3 sm:h-3"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Student;
