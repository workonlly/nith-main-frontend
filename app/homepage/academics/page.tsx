'use client';

import React from 'react';
import {
  Megaphone,
  Calendar,
  FileText,
  AlertCircle,
  ArrowRight,
  PauseCircle,
} from 'lucide-react';

// Unified Data Source
const announcements = [
  {
    id: 1,
    type: 'ACADEMIC',
    icon: Megaphone,
    text: 'e-Postgraduate Diploma in Interaction Design (ePGD IxD) IDC School of Design admissions are now open for the upcoming academic year.',
    isNew: true,
    date: 'Oct 24',
  },
  {
    id: 2,
    type: 'EXAM',
    icon: FileText,
    text: 'Attn. JAM 2026 Registered Candidates: Correction window opens tomorrow. Please verify your details immediately.',
    isNew: false,
    date: 'Oct 23',
  },
  {
    id: 3,
    type: 'ADMISSION',
    icon: FileText,
    text: 'Applications are invited for Undergraduate Common Entrance Exam for Design (UCEED) for admission to B.Des programmes.',
    isNew: false,
    date: 'Oct 22',
  },
  {
    id: 4,
    type: 'URGENT',
    icon: AlertCircle,
    text: 'The last date for closing registration of JAM 2026 applications has been extended till Oct 20, 2025. This is the final extension.',
    isNew: false,
    date: 'Oct 20',
    highlight: true,
  },
  {
    id: 5,
    type: 'EVENT',
    icon: Calendar,
    text: 'Convocation Ceremony 2025: Live stream link available on the main portal. Guests are requested to be seated by 9:00 AM.',
    isNew: false,
    date: 'Oct 18',
  },
  {
    id: 6,
    type: 'ACADEMIC',
    icon: Megaphone,
    text: 'Design Schools and result sharing Institutes admission updates regarding 2026 session have been published.',
    isNew: false,
    date: 'Oct 15',
  },
];

export default function Announcements() {
  return (
    <section className="w-full bg-gray-50 py-12 font-sans">
      {/* Container: Set to w-full to cover whole width */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* The Card Container */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col w-full">
          {/* Header */}
          <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-white z-10">
            <div className="flex items-center gap-4">
              <h2 className="text-4xl font-bold text-[#631012] underline tracking-tight">
                Academics
              </h2>
            </div>
          </div>

          {/* Single Column List (Flex-Col) */}
          <div className="flex flex-col h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
            {announcements.map((item) => (
              <div
                key={item.id}
                // Added py-6 px-8 to increase the size of the bar
                className={`group relative flex items-center justify-between py-6 px-8 border-b border-gray-100 hover:bg-[#631012]/5 transition-all duration-300 cursor-pointer ${item.highlight ? 'bg-red-50/40' : ''}`}
              >
                {/* Left Side: Icon & Date */}
                <div className="flex items-start gap-6 flex-1">
                  {/* Date Box: Increased size to w-16 h-16 */}
                  <div className="hidden sm:flex flex-col items-center justify-center w-16 h-16 flex-shrink-0 rounded-2xl bg-gray-50 border border-gray-200 text-gray-500 group-hover:border-[#631012]/20 group-hover:text-[#631012] transition-colors shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider opacity-70">
                      {item.date.split(' ')[0]}
                    </span>
                    <span className="text-xl font-extrabold">
                      {item.date.split(' ')[1]}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center gap-2 pr-6">
                    <div className="flex items-center gap-3">
                      {/* Tag */}
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-md border tracking-wide ${
                          item.highlight
                            ? 'bg-red-100 text-red-700 border-red-200'
                            : 'bg-gray-100 text-gray-600 border-gray-200 group-hover:bg-white'
                        }`}
                      >
                        {item.type}
                      </span>

                      {/* New Badge */}
                      {item.isNew && (
                        <span className="flex items-center gap-1.5 text-xs font-bold text-red-600 animate-pulse">
                          <span className="w-2 h-2 rounded-full bg-red-600"></span>
                          NEW
                        </span>
                      )}
                    </div>

                    {/* Text: Increased to text-lg */}
                    <p
                      className={`text-lg font-medium leading-relaxed transition-colors ${
                        item.highlight
                          ? 'text-[#631012]'
                          : 'text-gray-700 group-hover:text-black'
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>

                {/* Right Side: Arrow Action - Increased Size */}
                <div className="flex-shrink-0 pl-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-gray-300 border border-transparent group-hover:bg-[#631012] group-hover:text-white group-hover:border-[#631012] transition-all duration-300 transform group-hover:translate-x-2 shadow-sm">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles for the custom scrollbar */}
      <style jsx global>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #e5e7eb;
          border-radius: 20px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: #9ca3af;
        }
      `}</style>
    </section>
  );
}
