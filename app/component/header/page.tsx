'use client';
import React, { useState, useRef } from 'react';
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
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const language = useSelector((state: RootState) => state.language.value);
  const dispatch = useDispatch();

  const handleMouseEnter = (id: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

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
    <div className="flex flex-col w-full font-sans bg-white sticky top-0 z-50 shadow-sm">
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-[#500c0e] text-gray-200 py-1.5 px-4 md:px-8 border-b border-[#631012]">
        <div className="max-w-[1600px] mx-auto flex flex-wrap justify-center md:justify-between items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs tracking-wide">
          
          {/* Accessibility Items */}
          <div className="flex items-center gap-2">
            {accessibilityItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <button className="hover:text-white transition-colors">
                  {language == 'en' ? item.label : item.label2}
                </button>
                <span className="text-white/30">|</span>
              </React.Fragment>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-2">
            {quickLinks.map((item, index) => (
              <React.Fragment key={item.label}>
                <Link href="/" className="hover:text-white transition-colors">
                  {language == 'en' ? item.label : item.label2}
                </Link>
                <span className="text-white/30">|</span>
              </React.Fragment>
            ))}
            <button
            type="button"
            className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white px-2 py-0.5 rounded transition-colors ml-1"
            onClick={() => dispatch(toggleLanguage())}
          >
            {language === 'en' ? 'EN' : 'HI'}
            <ChevronDown size={12} />
          </button>
          </div>

          {/* Language Toggle */}
          
        </div>
      </div>

      {/* 2. HEADER & NAVIGATION (Simple White Background) */}
      <div className="bg-white py-3 px-4 md:px-8 relative z-20 border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto flex flex-col xl:flex-row items-center justify-between gap-4">
          
          {/* LEFT SIDE: LOGO & TEXT */}
          <Link href="/" className="flex items-center gap-4 group text-left w-full xl:w-auto justify-center xl:justify-start">
            {/* LOGO */}
            <div className="h-16 w-16 md:h-20 md:w-20 shrink-0">
              <img
                src="/l.png"
                alt="NITH Logo"
                className="object-contain h-full w-full"
              />
            </div>
            
            {/* TEXT */}
            <div className="flex flex-col justify-center text-[#631012]">
              <h3 className="font-semibold text-[clamp(14px,1.5vw,18px)] leading-tight">
                राष्ट्रीय प्रौद्योगिकी संस्थान हमीरपुर
              </h3>
              <h3 className="font-bold text-[clamp(14px,1.5vw,18px)] leading-tight">
                National Institute of Technology Hamirpur
              </h3>
              <p className="text-gray-500 font-medium text-[clamp(11px,1vw,13px)] mt-0.5">
                (An Institute of National Importance)
              </p>
            </div>
          </Link>

          {/* RIGHT SIDE: NAVIGATION */}
          <nav className="flex flex-wrap items-center justify-center xl:justify-end gap-x-6 gap-y-3 w-full xl:w-auto mt-2 xl:mt-0">
            {[
              { id: 'about', label: 'About NITH', label2: 'संस्थान के बारे में' },
              { id: 'authorities', label: 'Authorities', label2: 'प्राधिकरण' },
              { id: 'administration', label: 'Administration', label2: 'प्रशासन' },
              { id: 'departments', label: 'Departments', label2: 'विभाग' },
              { id: 'academics', label: 'Academics', label2: 'शैक्षणिक' },
              { id: 'student', label: 'Student', label2: 'छात्र' },
              { id: 'faculty', label: 'Faculty', label2: 'संकाय' },
              { id: 'alumni', label: 'Alumni', label2: 'पूर्व छात्र' },
              { id: 'downloads', label: 'Downloads', label2: 'डाउनलोड' },
            ].map((item) => (
              <div
                key={item.id}
                className="text-[#631012] font-medium text-[15px] flex items-center gap-1 cursor-pointer hover:text-black transition-colors whitespace-nowrap py-2"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                {language == 'en' ? item.label : item.label2}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180' : ''}`}
                />
              </div>
            ))}
          </nav>
        </div>

        {/* Dropdown Menu Overlay */}
        {activeDropdown && (
          <div
            className="absolute top-full left-0 right-0 bg-white shadow-xl z-[9999] overflow-auto "
            style={{ minHeight: '300px', maxHeight: '70vh' }}
            onMouseEnter={() => {
              if (activeDropdown) handleMouseEnter(activeDropdown);
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="p-6 md:p-8 max-w-[1600px] mx-auto text-[#631012]">
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
  );
}

export default Header31;