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
    <div className="bg-white rounded-sm border border-gray-200 shadow-sm overflow-hidden flex flex-col w-full h-full">
      <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white z-10">
        <div className="flex items-center gap-3">
          <h2 className="text-xl md:text-2xl font-bold text-[#631012] tracking-tight">
            Announcements
          </h2>
        </div>
      </div>

      <div className="flex flex-col h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
        {announcements.map((item) => (
          <div
            key={item.id}
            className={`group relative flex items-center justify-between py-4 px-6 border-b border-gray-50 hover:bg-[#631012]/5 transition-all duration-300 cursor-pointer ${item.highlight ? 'bg-red-50/40' : ''}`}
          >
            <div className="flex items-start gap-4 flex-1">
              <div className="hidden sm:flex flex-col items-center justify-center w-12 h-12 flex-shrink-0 rounded-sm bg-gray-50 border border-gray-200 text-gray-500 group-hover:border-[#631012]/30 group-hover:text-[#631012] transition-colors shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">
                  {item.date.split(' ')[0]}
                </span>
                <span className="text-lg font-extrabold leading-none">
                  {item.date.split(' ')[1]}
                </span>
              </div>

              <div className="flex flex-col justify-center gap-1.5 pr-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-sm border tracking-wide ${
                      item.highlight
                        ? 'bg-red-100 text-red-700 border-red-200'
                        : 'bg-gray-100 text-gray-600 border-gray-200 group-hover:bg-white'
                    }`}
                  >
                    {item.type}
                  </span>
                  {item.isNew && (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-red-600 animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                      NEW
                    </span>
                  )}
                </div>

                <p
                  className={`text-sm font-medium leading-snug transition-colors ${
                    item.highlight
                      ? 'text-[#631012]'
                      : 'text-gray-700 group-hover:text-black'
                  }`}
                >
                  {item.text}
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 pl-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-300 border border-transparent group-hover:bg-[#631012] group-hover:text-white group-hover:border-[#631012] transition-all duration-300 transform group-hover:translate-x-1 shadow-sm">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #e5e7eb;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: #9ca3af;
        }
      `}</style>
    </div>
  );
}
