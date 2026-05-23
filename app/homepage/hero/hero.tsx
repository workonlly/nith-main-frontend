'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import './hero.css';

type Homepage = {
  heading_en: string;
  heading_hi: string;

  tagline_en: string;
  tagline_hi: string;

  description_en: string;
  description_hi: string;
};

async function getHomepageData(): Promise<Homepage> {
  const res = await fetch(
    'http://localhost:4000/v1/homepage/hero',
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch homepage data');
  }

  const result = await res.json();

  return result.data;
}

export default function Hero() {
  const [homepage, setHomepage] =
    useState<Homepage | null>(null);

  const [language, setLanguage] = useState<'en' | 'hi'>(
    'en'
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHomepageData();
        setHomepage(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden mt-53">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/nith.jpg"
          alt="NIT Hamirpur Campus"
          fill
          className="object-cover scale-105 animate-hero-zoom"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />

      {/* Language Toggle */}
      <div className="absolute top-8 right-8 z-20">
        <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1 shadow-lg">

          <button
            onClick={() => setLanguage('en')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              language === 'en'
                ? 'bg-white text-black'
                : 'text-white hover:bg-white/10'
            }`}
          >
            English
          </button>

          <button
            onClick={() => setLanguage('hi')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              language === 'hi'
                ? 'bg-white text-black'
                : 'text-white hover:bg-white/10'
            }`}
          >
            हिंदी
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">

          <div className="max-w-3xl transition-all duration-500">

            {/* Heading */}
            <p className="text-sm md:text-base tracking-[0.2em] uppercase text-white/80 font-light mb-6">

              {language === 'en'
                ? homepage?.heading_en ||
                  'NIT HAMIRPUR'
                : homepage?.heading_hi ||
                  'एनआईटी हमीरपुर'}
            </p>

            {/* Tagline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">

              {language === 'en'
                ? homepage?.tagline_en ||
                  'Shaping Minds. Building Futures.'
                : homepage?.tagline_hi ||
                  'दिमाग को आकार देना। भविष्य का निर्माण करना।'}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl font-light">

              {language === 'en'
                ? homepage?.description_en ||
                  'Default description...'
                : homepage?.description_hi ||
                  'डिफ़ॉल्ट विवरण...'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}