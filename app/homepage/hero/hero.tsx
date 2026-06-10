'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './hero.css';

type Homepage = {
  HeroMain: string;
  HeroSub: string;
  HeroDesc: string;
};

function getHomepageData(): Homepage {
  return {
    HeroMain: 'NIT HAMIRPUR',
    HeroSub: 'Shaping Minds. Building Futures.',
    HeroDesc:
      'NIT Hamirpur is committed to academic excellence in engineering, technology, architecture, and sciences—empowering students through innovation, research, and a value-based learning environment.',
  };
}

const CAROUSEL_IMAGES = [
  '/nith.jpg',
  '/admin.jpg',
  '/nith.jpg',
];

const HOT_LINKS = [
  { id: 1, title: 'Admissions 2024', url: '#' },
  { id: 2, title: 'Academic Calendar', url: '#' },
  { id: 3, title: 'Tender Notices', url: '#' },
  { id: 4, title: 'Recruitment', url: '#' },
  { id: 5, title: 'Student Portal', url: '#' },
];

export default function Hero() {
  const homepage = getHomepageData();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const HeroMain = homepage.HeroMain || 'NIT HAMIRPUR';
  const HeroSub = homepage.HeroSub || 'Shaping Minds. Building Futures.';
  const HeroDesc =
    homepage.HeroDesc ||
    'NIT Hamirpur is committed to academic excellence in engineering, technology, architecture, and sciences—empowering students through innovation, research, and a value-based learning environment.';

  return (
    <>
      {/* Hero Section - Carousel */}
      <section className="relative w-full h-[80vh] p-2">
        
        {/* Carousel Viewport */}
        <div className="absolute inset-0 p-2">
          <div className="h-full w-full overflow-hidden rounded-xl" ref={emblaRef}>
            <div className="flex h-full w-full">
              {CAROUSEL_IMAGES.map((src, index) => (
                <div className="relative flex-[0_0_100%] h-full min-w-0" key={index}>
                  <Image
                    src={src}
                    alt={`NIT Hamirpur Campus ${index + 1}`}
                    fill
                    className="object-cover animate-hero-zoom"
                    priority={index === 0}
                  />
                
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-0 flex items-center z-20 px-6 md:px-10 pointer-events-none">
          <button 
            onClick={scrollPrev}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all pointer-events-auto cursor-pointer shadow-lg"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center z-20 px-6 md:px-10 pointer-events-none">
          <button 
            onClick={scrollNext}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all pointer-events-auto cursor-pointer shadow-lg"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

      
      </section>
     
       
      <section className='px-2'>
      <div className="relative z-20 -mt-5  w-[calc(100%)] md:w-[calc(100%)] bg-white/95 backdrop-blur-sm border border-gray-200 shadow-xl rounded-b-sm p-3 flex items-center  overflow-x-auto hide-scrollbar">
        <div className="flex items-center gap-6 px-4 whitespace-nowrap">
          <div className="font-bold uppercase tracking-wider text-[#631012] border-r border-gray-300 pr-6 text-sm flex items-center">
            <span className="relative flex h-2.5 w-2.5 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            Quick Links
          </div>
          {HOT_LINKS.map((link) => (
            <a 
              key={link.id} 
              href={link.url} 
              className="text-sm text-gray-700 hover:text-[#631012] transition-colors font-semibold cursor-pointer"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
      </section>
    </>
  );
}
