import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import {
  ChevronRight,
  ArrowUpRight,
  GraduationCap,
  Users,
  FolderOpen,
  Download,
} from 'lucide-react';

const downloadsData = [
  {
    id: '01',
    category: 'Students',
    category2: 'छात्र', // Hindi Category
    icon: GraduationCap,
    links: [
      {
        title: 'Browse Student Downloads',
        title2: 'छात्र डाउनलोड देखें', // Hindi Title
        href: '/Download_routes/Download-for-students',
        description: 'Forms, Manuals & Guidelines',
        description2: 'फॉर्म, नियमावली और दिशानिर्देश', // Hindi Description
      },
    ],
  },
  {
    id: '02',
    category: 'Faculty & Staff',
    category2: 'संकाय एवं कर्मचारी', // Hindi Category
    icon: Users,
    links: [
      {
        title: 'Browse Faculty Downloads',
        title2: 'संकाय डाउनलोड देखें', // Hindi Title
        href: '/Download_routes/Download-for-Faculty',
        description: 'Administrative & Academic Forms',
        description2: 'प्रशासनिक और शैक्षणिक फॉर्म', // Hindi Description
      },
    ],
  },
  {
    id: '03',
    category: 'General',
    category2: 'सामान्य', // Hindi Category
    icon: FolderOpen,
    links: [
      {
        title: 'Miscellaneous Downloads',
        title2: 'विविध डाउनलोड', // Hindi Title
        href: '/Download_routes/Miscellaneous-Downloads',
        description: 'Public Documents & Archives',
        description2: 'सार्वजनिक दस्तावेज और अभिलेखागार', // Hindi Description
      },
    ],
  },
];

const Downloads = () => {
  const language = useSelector((state: RootState) => state.language.value);
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* The Grid - 3 Columns for perfect balance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-12">
          {downloadsData.map((column) => (
            <div key={column.id} className="flex flex-col">
              {/* Column Header */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 group/header">
                <span className="font-mono text-base sm:text-lg md:text-xl text-gray-200 group-hover/header:text-[#800000] transition-colors duration-300">
                  {column.id}
                </span>
                <div className="flex items-center gap-1 sm:gap-2 border-l-2 border-[#800000] pl-2 sm:pl-3">
                  <column.icon
                    size={14}
                    className="text-gray-400 group-hover/header:text-gray-900 transition-colors sm:w-4 sm:h-4"
                  />
                  <h3 className="text-[clamp(10px,2vw,14px)] font-bold uppercase tracking-wider text-gray-800">
                    {language == 'en' ? column.category : column.category2}
                  </h3>
                </div>
              </div>

              {/* Links List */}
              <ul className="space-y-0.5 sm:space-y-1">
                {column.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between group/link py-2 sm:py-3 px-1 sm:px-2 rounded-r hover:bg-gray-50 transition-all duration-300 border-b border-gray-50 last:border-0"
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        {/* Download Icon to indicate action */}
                        <Download
                          size={12}
                          className="text-gray-300 group-hover/link:text-[#800000] transition-colors sm:w-3.5 sm:h-3.5"
                        />

                        <div>
                          <span className="block text-[clamp(11px,2vw,14px)] font-medium text-gray-600 group-hover/link:text-black transition-colors">
                            {language == 'en' ? link.title : link.title2}
                          </span>
                          {/* Added small description text since there is only 1 link per column */}
                          <span className="block text-[clamp(8px,1.5vw,10px)] text-gray-400 uppercase tracking-wide mt-0.5">
                            {language == 'en'
                              ? link.description
                              : link.description2}
                          </span>
                        </div>
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
    </section>
  );
};

export default Downloads;
