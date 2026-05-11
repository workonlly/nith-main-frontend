'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search } from 'lucide-react';
import Aboutnith from '../slidebar/aboutnith/aboutnith';
import Academic from '../slidebar/Academics/academic';
import Administration from '../slidebar/Administration/administration';
import Authorities from '../slidebar/Authorities/authorities';
import Alumni from '../slidebar/Alumni/alumini';
import Department from '../slidebar/Departments/department';
import Downloads from '../slidebar/downloads/downloads';
import Faculty from '../slidebar/Faculty/faculty';
import Student from '../slidebar/Student/student';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { toggleLanguage } from '../../redux/language_converter';

function Header31() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const language = useSelector((state: RootState) => state.language.value);
  const dispatch = useDispatch();

  // Top Bar Lists
  const accessibilityItems = [
    { label: 'A+', label2: 'ए+' },
    { label: 'A-', label2: 'ए-' },
    { label: 'Toggle Contrast', label2: 'कंट्रास्ट' },
    { label: 'Grey Scale', label2: 'ग्रे स्केल' },
    { label: 'Links', label2: 'लिंक' },
    { label: 'Reset', label2: 'रीसेट' },
  ];

  const quickLinks = [
    { label: 'Home', label2: 'होम' },
    { label: 'Internet', label2: 'इंटरनेट' },
    { label: 'eOffice', label2: 'ई-ऑफिस' },
    { label: 'Directory', label2: 'डायरेक्टरी' },
    { label: 'Faculty Portfolio', label2: 'फैकल्टी पोर्टफोलियो' },
  ];

  return (
    <div className="flex flex-col w-full font-sans bg-white shadow-xl relative">
      <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(rgba(99,16,18,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,16,18,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0 transition-all duration-300"></div>

      {/* 1. TOP UTILITY BAR */}
      <div className="bg-[#500c0e] text-gray-300 text-[clamp(8px,1.5vw,10px)] py-1 sm:py-2 px-2 sm:px-4 md:px-8 border-b border-[#631012]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-1 sm:gap-2 tracking-[0.05em] sm:tracking-widest uppercase">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 opacity-90">
            {accessibilityItems.map((item) => (
              <button
                key={item.label}
                className="hover:text-white hover:underline transition-all duration-300 px-0.5 text-[clamp(7px,1.1vw,10px)] sm:text-[clamp(8px,1.3vw,11px)] md:text-[clamp(9px,1.5vw,12px)]"
              >
                {language == 'en' ? item.label : item.label2}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-5 font-semibold md:ml-auto">
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                href="#"
                className="hover:text-white hover:underline decoration-white underline-offset-4 transition-all duration-300 text-[clamp(7px,1.1vw,10px)] sm:text-[clamp(8px,1.3vw,11px)] md:text-[clamp(9px,1.5vw,12px)] px-0.5"
              >
                {language == 'en' ? item.label : item.label2}
              </Link>
            ))}
            <span className="hidden md:block w-px h-3 bg-white/20 my-auto hover:text-black rounded-sm hover:bg-white" />
            <button
              type="button"
              className="hover:text-black rounded-sm hover:bg-white p-1 text-[clamp(7px,1.1vw,10px)] sm:text-[clamp(8px,1.3vw,11px)] md:text-[clamp(9px,1.5vw,12px)]"
              onClick={() => {
                dispatch(toggleLanguage());
              }}
            >
              {language === 'en' ? 'English' : 'हिंदी'}
            </button>
          </div>
        </div>
      </div>

      {/* 2. HEADER - SEPARATED LAYOUT */}
      <div className="py-2 sm:py-3 md:py-4 px-2 sm:px-4 md:px-8 relative z-20 overflow-hidden">
        {/* Background Texture */}

        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-20 w-64 h-64 bg-[#631012]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 relative z-10">
          {/* === LEFT SIDE: LOGO & PILLAR === */}
          <Link
            href="/"
            className="flex flex-row items-center gap-3 sm:gap-4 md:gap-6 group"
          >
            {/* LOGO */}
            <div className="relative p-1 sm:p-2 transition-transform duration-500">
              <div className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 drop-shadow-xl">
                <img
                  src="/l.png"
                  alt="NITH Logo"
                  className="object-contain h-full w-full"
                />
              </div>
            </div>
          </Link>

          {/* === RIGHT SIDE: TEXT STACK === */}
          <Link
            href="/"
            className={`flex flex-col ${language == 'en' ? 'gap-0' : 'gap-2'} justify-center items-center md:items-end text-center md:text-right group px-10`}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="hidden lg:block w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gradient-to-l from-[#631012] to-transparent"></span>
              <h3
                className={`text-[clamp(9px,3vw,14px)] font-bold text-[#631012] uppercase transition-all duration-300 ${language == 'en' ? 'tracking-[0.15em] sm:tracking-[0.25em]' : 'tracking-normal'}`}
              >
                {language == 'en'
                  ? ' National Institute of Technology'
                  : ' राष्ट्रीय प्रौद्योगिकी संस्थान हमीरपुर'}
              </h3>
            </div>

            <h1
              className={`text-[clamp(2rem,5vw,6rem)] font-black text-black tracking-tighter leading-[0.9] mt-1 sm:mt-2 drop-shadow-sm transition-all duration-500 origin-center`}
              key={language}
            >
              {language == 'en' ? 'HAMIRPUR' : ' हमीरपुर'}
            </h1>

            <p className="text-[clamp(9px,1.8vw,11px)] text-gray-500 font-serif italic transition-all duration-300 sm:mt-2 flex items-center gap-2 justify-center md:justify-end">
              {language == 'en'
                ? ' An Institute of National Importance'
                : 'राष्ट्रीय महत्व का संस्थान'}
              {/* Dot color changed to Maroon */}
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#631012] rounded-full"></span>
            </p>
          </Link>
        </div>
      </div>

      {/* 3. NAVIGATION BAR - WHITE HOVER EFFECTS */}
      <div className="w-full relative z-40 px-2 sm:px-4 md:px-8 mb-1">
        <div className="max-w-[1400px] mx-auto bg-[#631012] text-white shadow-2xl rounded-sm relative overflow-visible">
          <nav className="flex flex-nowrap items-center justify-between px-1 sm:px-2 no-scrollbar overflow-x-auto">
            <div className="flex flex-wrap items-center h-full w-full justify-center gap-y-1">
              {/* Responsive nav item: text shrinks more on small screens */}
              {[
                {
                  id: 'about',
                  label: 'About NITH',
                  label2: 'संस्थान के बारे में',
                },
                {
                  id: 'authorities',
                  label: 'Authorities',
                  label2: 'प्राधिकरण',
                },
                {
                  id: 'administration',
                  label: 'Administration',
                  label2: 'प्रशासन',
                },
                {
                  id: 'departments',
                  label: 'Departments',
                  label2: 'विभाग',
                },
                {
                  id: 'academics',
                  label: 'Academics',
                  label2: 'शैक्षणिक',
                },
                {
                  id: 'student',
                  label: 'Student',
                  label2: 'छात्र',
                },
                {
                  id: 'faculty',
                  label: 'Faculty',
                  label2: 'संकाय',
                },
                {
                  id: 'alumni',
                  label: 'Alumni',
                  label2: 'पूर्व छात्र',
                },
                {
                  id: 'downloads',
                  label: 'Downloads',
                  label2: 'डाउनलोड',
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="text-white  uppercase tracking-[0.05em] sm:tracking-[0.1em] px-1 sm:px-2 lg:px-4 h-8 sm:h-11 md:h-13 flex items-center gap-1 cursor-pointer hover:text-white transition-all whitespace-nowrap text-[clamp(6px,0.95vw,9px)] sm:text-[clamp(7px,1.1vw,10px)] md:text-[clamp(8px,1.3vw,11px)]"
                  onMouseEnter={() => setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {language == 'en' ? item.label : item.label2}
                  <ChevronDown
                    size={10}
                    className={`transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`}
                  />
                </div>
              ))}
            </div>
          </nav>

          {/* Single Dropdown Menu */}
          {activeDropdown && (
            <div
              className="absolute top-full left-0 right-0 bg-white text-black shadow-2xl z-[9999] overflow-auto"
              style={{ minHeight: '300px', maxHeight: '70vh' }}
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="p-4 sm:p-6 md:p-8 lg:p-10 max-w-[1400px] mx-auto">
                {activeDropdown === 'about' && <Aboutnith />}
                {activeDropdown === 'authorities' && <Authorities />}
                {activeDropdown === 'administration' && <Administration />}
                {activeDropdown === 'departments' && <Department />}
                {activeDropdown === 'academics' && <Academic />}
                {activeDropdown === 'student' && <Student />}
                {activeDropdown === 'faculty' && <Faculty />}
                {activeDropdown === 'alumni' && <Alumni />}
                {activeDropdown === 'downloads' && <Downloads />}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header31;
