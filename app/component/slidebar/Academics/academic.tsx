import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import {
  ChevronRight,
  ArrowUpRight,
  CalendarDays,
  GraduationCap,
  BookOpen,
  Lock,
} from 'lucide-react';

const academicData = [
  {
    id: '01',
    category: 'General Affairs',
    category2: 'सामान्य मामले', // Hindi Category
    sections: [
      {
        title: 'Resources',
        title2: 'संसाधन', // Hindi Section Title
        links: [
          {
            title: 'Activities',
            title2: 'गतिविधियां',
            href: '/academics/activities',
          },
          {
            title: 'Functionaries',
            title2: 'पदाधिकारी',
            href: '/academics/functionaries',
          },
          {
            title: 'Academic Notices',
            title2: 'शैक्षणिक सूचनाएं',
            href: '/academics/academic-notices',
          },
          {
            title: 'NAD Cell',
            title2: 'एनएडी सेल',
            href: '/academics/nad-cell',
          },
          {
            title: 'Fee Structure',
            title2: 'शुल्क संरचना',
            href: '/academics/fee-structure',
          },
          {
            title: 'Class Timetable',
            title2: 'कक्षा समय सारिणी',
            href: '/academics/class-timetable',
          },
        ],
      },
      {
        title: 'Calendars',
        title2: 'कैलेंडर', // Hindi Section Title
        links: [
          {
            title: 'Academic Calenders',
            title2: 'शैक्षणिक कैलेंडर',
            href: '/academics/calendar',
          },
          {
            title: 'Odd Semester 2025-26',
            title2: 'विषम सेमेस्टर 2025-26',
            href: '#',
          },
          {
            title: 'Even Semester 2025-26',
            title2: 'सम सेमेस्टर 2025-26',
            href: '#',
          },
        ],
      },
    ],
  },
  {
    id: '02',
    category: 'Lifecycle',
    category2: 'जीवनचक्र', // Hindi Category
    sections: [
      {
        title: 'Admissions & Registrations',
        title2: 'प्रवेश और पंजीकरण', // Hindi Section Title
        links: [
          {
            title: 'Admissions 2025-26',
            title2: 'प्रवेश 2025-26',
            href: '/academics/admissions-2025-26',
          },
          {
            title: 'Admissions Desk',
            title2: 'प्रवेश डेस्क',
            href: '#',
          },
          {
            title: 'Registration 2025-26',
            title2: 'पंजीकरण 2025-26',
            href: '/academics/registration-2025-26',
          },
          {
            title: 'International Admissions',
            title2: 'अंतरराष्ट्रीय प्रवेश',
            href: '/academics/international-admissions',
          },
        ],
      },
      {
        title: 'Examinations',
        title2: 'परीक्षाएं', // Hindi Section Title
        links: [
          {
            title: 'Exam Schedules',
            title2: 'परीक्षा कार्यक्रम',
            href: '#',
          },
          {
            title: 'Exam Guidelines',
            title2: 'परीक्षा दिशानिर्देश',
            href: '#',
          },
          {
            title: 'Evaluation Schedules',
            title2: 'मूल्यांकन कार्यक्रम',
            href: '#',
          },
        ],
      },
      {
        title: 'Results',
        title2: 'परिणाम', // Hindi Section Title
        links: [
          {
            title: 'View Results',
            title2: 'परिणाम देखें',
            href: 'http://results.nith.ac.in/',
          },
          {
            title: 'Certificate Issuance',
            title2: 'प्रमाण पत्र जारी करना',
            href: '/academics/certificates-issuance-guidelines',
          },
          {
            title: 'Certificate Verification',
            title2: 'प्रमाण पत्र सत्यापन',
            href: '/academics/certificates-verification-guidelines',
          },
        ],
      },
    ],
  },
  {
    id: '03',
    category: 'Programmes',
    category2: 'कार्यक्रम', // Hindi Category
    sections: [
      {
        title: 'Bachelor (UG)',
        title2: 'स्नातक (UG)', // Hindi Section Title
        links: [
          {
            title: 'Bachelor Ordinances',
            title2: 'स्नातक अध्यादेश',
            href: '/academics/bachelor-ordinances',
          },
          {
            title: 'Structure & Syllabus',
            title2: 'संरचना और पाठ्यक्रम',
            href: '/academics/course-structure-syllabus',
          },
          {
            title: 'Old UG Manual',
            title2: 'पुरानी यूजी नियमावली',
            href: '#',
          },
        ],
      },
      {
        title: 'Master (PG)',
        title2: 'स्नातकोत्तर (PG)', // Hindi Section Title
        links: [
          {
            title: 'Master Ordinances',
            title2: 'स्नातकोत्तर अध्यादेश',
            href: '/academics/master-ordinances',
          },
          {
            title: 'Structure & Syllabus',
            title2: 'संरचना और पाठ्यक्रम',
            href: '/academics/course-structure-syllabus',
          },
          {
            title: 'Old PG Manual',
            title2: 'पुरानी पीजी नियमावली',
            href: '#',
          },
        ],
      },
      {
        title: 'Doctoral (PhD)',
        title2: 'डॉक्टरेट (PhD)', // Hindi Section Title
        links: [
          {
            title: 'Doctoral Ordinances',
            title2: 'डॉक्टरेट अध्यादेश',
            href: '/academics/doctoral-ordinances',
          },
          {
            title: 'Old PG Manual',
            title2: 'पुरानी पीजी नियमावली',
            href: '#',
          },
        ],
      },
    ],
  },
];

function Academic() {
  const language = useSelector((state: RootState) => state.language.value);
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-12">
          {academicData.map((column) => (
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

              {/* Sections */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {column.sections.map((section, idx) => (
                  <div key={idx} className="group/section">
                    {/* Sub-Section Title */}
                    <h4 className="text-[clamp(9px,1.8vw,12px)] font-semibold text-gray-400 uppercase tracking-widest mb-2 sm:mb-3 pl-1 sm:pl-2 border-l border-transparent group-hover/section:border-gray-200 transition-all">
                      {language == 'en' ? section.title : section.title2}
                    </h4>

                    {/* Links List */}
                    <ul className="space-y-0.5 sm:space-y-1">
                      {section.links.map((link, linkIdx) => {
                        // Active State
                        return (
                          <li key={linkIdx}>
                            <Link
                              href={link.href === '#' ? '/' : link.href}
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
                        );
                      })}
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
}

export default Academic;
