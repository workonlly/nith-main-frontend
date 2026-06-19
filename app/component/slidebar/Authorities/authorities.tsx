import React from 'react';
import Link from 'next/link';
import { FileText, ChevronRight, ArrowUpRight } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const authoritiesData = [
  {
    title: 'Board of Governors (BOG)',
    title2: 'शासी मंडल (BOG)', // Hindi Title
    code: '01',
    links: [
      
       
      {
        title: ' BOG',
        title2: 'BOG ',
        href: '/authorities/bog',
      }
    ],
  },
  {
    title: 'Finance Committee (FC)',
    title2: 'वित्त समिति (FC)', // Hindi Title
    code: '02',
    links: [
     
      {
        title: ' FC',
        title2: 'वित्त समिति (FC)',
        href: '/authorities/fc',
      },
    ],
  },
  {
    title: 'Building Works Committee (BWC)',
    title2: 'भवन एवं निर्माण समिति (BWC)', // Hindi Title
    code: '03',
    links: [
      
      {
        title: ' BWC',
        title2: 'BWC',
        href: '/authorities/bwc',
      },
    ],
  },
  {
    title: 'Senate',
    title2: 'सीनेट', // Hindi Title
    code: '04',
    links: [
     
      {
        title: 'Senate',
        title2: 'सीनेट',
        href: '/authorities/senate',
      },
    ],
  },
];

function Authorities() {
  const language = useSelector((state: RootState) => state.language.value);
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* Responsive Grid: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-12">
          {authoritiesData.map((section) => (
            <div key={section.title} className="group flex flex-col">
              {/* Column Header with Futuristic Accent */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <span className="font-mono text-base sm:text-lg md:text-xl text-gray-200 group-hover:text-[#800000] transition-colors duration-300">
                  {section.code}
                </span>
                <h3 className="text-[clamp(10px,2vw,14px)] font-bold uppercase tracking-wider text-gray-800 border-l-2 border-[#800000] pl-2 sm:pl-3">
                  {language == 'en' ? section.title : section.title2}
                  {/* Shows "Board of Governors" without the (BOG) to keep it clean */}
                </h3>
              </div>

              {/* Links List */}
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => {
                  return (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between group/link py-1.5 sm:py-2 border-b border-gray-50 hover:border-gray-200 transition-all duration-300"
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <ChevronRight
                            size={12}
                            className="text-gray-400 group-hover/link:text-[#800000] transition-colors sm:w-3.5 sm:h-3.5"
                          />

                          <span className="text-[clamp(9px,1.8vw,12px)] font-medium text-gray-600 group-hover/link:text-black group-hover/link:translate-x-1 transition-all duration-300">
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
    </section>
  );
}

export default Authorities;
