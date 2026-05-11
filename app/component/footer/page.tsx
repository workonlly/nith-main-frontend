'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function Footer() {
  // --- Data Arrays for Links ---
  const language = useSelector((state: RootState) => state.language.value);

  const rulesLinks = [
    { name: 'Recruitment Rules', name2: 'भर्ती नियम', href: '#' },
    { name: 'Employee Rules', name2: 'कर्मचारी नियम', href: '#' },
    { name: 'Institute Rules', name2: 'संस्थान नियम', href: '#' },
    { name: 'Annual Reports', name2: 'वार्षिक रिपोर्ट', href: '#' },
    {
      name: 'Notices/Office Orders',
      name2: 'सूचनाएं/कार्यालय आदेश',
      href: '#',
    },
    { name: 'Act & Statutes', name2: 'अधिनियम और विधियां', href: '#' },
    { name: 'Photo/Video Gallery', name2: 'फोटो/वीडियो गैलरी', href: '#' },
    {
      name: 'Research & Publications @ NITH',
      name2: 'NITH पर शोध और प्रकाशन',
      href: '#',
    },
    { name: 'Media Coverage @ NITH', name2: 'NITH पर मीडिया कवरेज', href: '#' },
    { name: 'RTI', name2: 'सूचना का अधिकार', href: '#' },
    { name: 'New Criminal Laws', name2: 'नए आपराधिक कानून', href: '#' },
  ];

  const goiLinks = [
    {
      name: 'DST NIDHI (i-TBI@NITH)',
      name2: 'DST NIDHI (i-TBI@NITH)',
      href: '#',
    },
    { name: 'CM Startup @ NITH', name2: 'CM स्टार्टअप @ NITH', href: '#' },
    { name: 'MOOC @ NITH', name2: 'MOOC @ NITH', href: '#' },
    { name: 'GIAN @ NITH', name2: 'GIAN @ NITH', href: '#' },
    { name: 'NIRF@NITH', name2: 'NIRF@NITH', href: '#' },
    { name: 'ARIIA@NITH', name2: 'ARIIA@NITH', href: '#' },
    { name: 'SKill India @ NITH', name2: 'कौशल भारत @ NITH', href: '#' },
    { name: 'SBA @ NITH', name2: 'SBA @ NITH', href: '#' },
    { name: 'UBA @ NITH', name2: 'UBA @ NITH', href: '#' },
    { name: 'RAA @ NITH', name2: 'RAA @ NITH', href: '#' },
    { name: 'EBSB @ NITH', name2: 'EBSB @ NITH', href: '#' },
    {
      name: 'Literacy Mission @ NITH',
      name2: 'साक्षरता मिशन @ NITH',
      href: '#',
    },
    { name: 'NAD @ NITH', name2: 'NAD @ NITH', href: '#' },
  ];

  const importantLinks = [
    { name: 'Newsletter', name2: 'समाचार पत्र', href: '#' },
    { name: 'MoE', name2: 'शिक्षा मंत्रालय', href: '#' },
    { name: 'PMRF', name2: 'PMRF', href: '#' },
    { name: 'NIT Council', name2: 'NIT परिषद', href: '#' },
    { name: 'Digital India', name2: 'डिजिटल भारत', href: '#' },
    {
      name: 'National Career Service',
      name2: 'राष्ट्रीय कैरियर सेवा',
      href: '#',
    },
    {
      name: 'Vittiya Saksharta Abhiyan',
      name2: 'वित्तीय साक्षरता अभियान',
      href: '#',
    },
    { name: 'CEC', name2: 'CEC', href: '#' },
    { name: 'MyGov', name2: 'MyGov', href: '#' },
    { name: 'PMNRF', name2: 'PMNRF', href: '#' },
    { name: 'TIFAC-CORE@NITH', name2: 'TIFAC-CORE@NITH', href: '#' },
    { name: 'FAQ', name2: 'अक्सर पूछे जाने वाले प्रश्न', href: '#' },
    { name: 'BIS', name2: 'BIS', href: '#' },
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-[#3d0f12] via-[#4d1a1d] to-[#5b2226] text-white py-10 font-sans border-t-4 border-white/20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col xl:flex-row items-start justify-between gap-12">
          {/* Left side - Logo, Institute Info, Contact, Map, Social Icons */}
          <div className="flex-shrink-0 space-y-6 max-w-sm">
            {/* Logo and Institute Name */}
            <div className="flex items-start gap-4">
              <img
                src="/logo.png"
                alt="NITH logo"
                className="h-16 w-16 rounded-full ring-2 ring-white/20 bg-white p-1 shadow-lg"
              />
              <div>
                <h3 className="font-bold text-lg leading-tight text-white tracking-wide">
                  {language == 'en'
                    ? 'National Institute Of Technology'
                    : 'राष्ट्रीय प्रौद्योगिकी संस्थान'}
                </h3>
                <p className="text-sm font-medium text-white/80">
                  {language == 'en'
                    ? 'Hamirpur, Himachal Pradesh'
                    : 'हमीरपुर, हिमाचल प्रदेश'}
                </p>
              </div>
            </div>

            {/* Address and Phone */}
            <div className="space-y-3 text-sm text-white/90">
              <div className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-white mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="leading-relaxed">
                  {language == 'en'
                    ? 'NIT Hamirpur, Anu, Hamirpur, Himachal Pradesh 177005, India'
                    : 'NIT हमीरपुर, अनु, हमीरपुर, हिमाचल प्रदेश 177005, भारत'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 text-white shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>
                  {language == 'en' ? '+91-1972-254011' : '+91-1972-254011'}
                </span>
              </div>
            </div>

            {/* Map and Social Row */}
            <div className="flex items-center gap-4 pt-2">
              {/* Social Icons */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  {['f', 'in', 'x', 'ig'].map((icon) => (
                    <a
                      key={icon}
                      href={icon === 'f' ? 'https://facebook.com' : icon === 'in' ? 'https://linkedin.com' : icon === 'x' ? 'https://x.com' : 'https://instagram.com'}
                      className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white hover:bg-white hover:text-[#3d0f12] transition-all duration-300 border border-white/20"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
                <a
                  href="mailto:registrar@nith.ac.in"
                  className="inline-block text-xs font-semibold text-white hover:text-white/80 transition-colors underline underline-offset-4"
                >
                  Write to Registrar
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Three columns of links */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full">
            {/* Column 1: Rules & Reports */}
            <div>
              <h4 className="text-white font-bold mb-4 text-base border-b border-white/20 pb-2 inline-block">
                {language == 'en' ? 'Rules and Reports' : 'नियम और रिपोर्ट'}
              </h4>
              <ul className="text-white/80 text-xs space-y-2.5">
                {rulesLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href === '#' ? '/' : link.href}
                      className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {language == 'en' ? link.name : link.name2}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: GOI Initiatives */}
            <div>
              <h4 className="text-white font-bold mb-4 text-base border-b border-white/20 pb-2 inline-block">
                {language == 'en' ? 'GOI Initiatives@nith' : 'GOI पहल@nith'}
              </h4>
              <ul className="text-white/80 text-xs space-y-2.5">
                {goiLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href === '#' ? '/' : link.href}
                      className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {language == 'en' ? link.name : link.name2}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Important Links */}
            <div>
              <h4 className="text-white font-bold mb-4 text-base border-b border-white/20 pb-2 inline-block">
                {language == 'en' ? 'Important Links' : 'महत्वपूर्ण लिंक'}
              </h4>
              <ul className="text-white/80 text-xs space-y-2.5">
                {importantLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {language == 'en' ? link.name : link.name2}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-white/60 text-xs tracking-wider">
            {language == 'en'
              ? `© ${new Date().getFullYear()} National Institute of Technology, Hamirpur. All Rights Reserved.`
              : `© ${new Date().getFullYear()} राष्ट्रीय प्रौद्योगिकी संस्थान, हमीरपुर। सर्वाधिकार सुरक्षित।`}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
