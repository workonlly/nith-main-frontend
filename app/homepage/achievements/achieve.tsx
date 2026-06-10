'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Achievement {
  id: number;
  tagline: string;
  Heading: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface TransformedAchievement {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
}

// Mock Achievements Data
const mockAchievements: Achievement[] = [
  {
    id: 1,
    tagline: 'Academic Excellence',
    Heading: 'Ranked Among Top Engineering Institutes',
    description:
      'NITH consistently ranked in top 20 engineering institutions in India for academic excellence and research contributions.',
    image: '/nith.jpg',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    tagline: 'Industry Recognition',
    Heading: 'Strategic Partnerships with Leading Companies',
    description:
      'Collaborations with Fortune 500 companies and tech giants for placement and internship opportunities.',
    image: '/award.jpg',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    tagline: 'Research & Innovation',
    Heading: 'Strong Research Output and Publications',
    description:
      'Faculty and students contributing to peer-reviewed journals and international research conferences.',
    image: '/workshop.jpg',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 4,
    tagline: 'Global Alumni',
    Heading: 'Alumni Network Across the Globe',
    description:
      'A strong network of successful alumni holding key positions in leading multinational corporations.',
    image: '/group.jpg',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

function Achieve() {
  const [achievements, setAchievements] = useState<TransformedAchievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Transform database achievement to display format
  const transformAchievement = (
    achievement: Achievement
  ): TransformedAchievement => ({
    id: achievement.id,
    title: achievement.Heading,
    image: achievement.image,
    description: achievement.description,
    category: achievement.tagline, // Using tagline as category
  });

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 300));
        const transformedAchievements = mockAchievements.map(transformAchievement);
        setAchievements(transformedAchievements);
        if (transformedAchievements.length > 0) {
          setSelectedIndex(0);
        }
      } catch (err) {
        setError('Error fetching achievements');
        console.error('Error fetching achievements:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  const handlePrev = useCallback(() => {
    if (achievements.length === 0) return;
    setSelectedIndex(
      (prev) => (prev - 1 + achievements.length) % achievements.length
    );
  }, [achievements.length]);

  const handleNext = useCallback(() => {
    if (achievements.length === 0) return;
    setSelectedIndex((prev) => (prev + 1) % achievements.length);
  }, [achievements.length]);

  // Autoplay functionality
  useEffect(() => {
    if (achievements.length === 0 || isHovered) return;

    const intervalId = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [achievements.length, isHovered, handleNext]);

  // Get visible cards for carousel
  const getVisibleCards = () => {
    if (achievements.length === 0) return [];

    return achievements.map((achievement, index) => {
      let diff = index - selectedIndex;
      const half = Math.floor(achievements.length / 2);

      // Handle wrapping for infinite carousel
      if (diff > half) {
        diff -= achievements.length;
      } else if (diff < -half) {
        diff += achievements.length;
      }

      return {
        achievement,
        index,
        offset: diff,
      };
    });
  };

  const visibleCards = getVisibleCards();

  // Loading state
  if (loading) {
    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#631012] mb-12 border-b-4 border-[#631012] pb-2 inline-block">
            Achievements
          </h2>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#631012]"></div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#631012] mb-12 border-b-4 border-[#631012] pb-2 inline-block">
            Achievements
          </h2>
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  // Empty state
  if (achievements.length === 0) {
    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#631012] mb-12 border-b-4 border-[#631012] pb-2 inline-block">
            Achievements
          </h2>
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-600">No achievements available</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div 
      className="w-full py-12 px-2 sm:px-6 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-2xl md:text-4xl font-bold text-[#631012] tracking-tight ">
        Achievements
      </h2>

      {/* Carousel with navigation buttons */}
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Left navigation button */}
        <button
          onClick={handlePrev}
          className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-400 hover:text-white hover:bg-[#631012] hover:border-[#631012] transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md transform hover:-translate-x-1 z-50 focus:outline-none"
          aria-label="Previous Achievement"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        {/* Carousel container */}
        <div className="flex-1 overflow-hidden relative h-[480px]">
          <div className="relative w-full h-full flex items-center justify-center perspective-1000">
            {visibleCards.map(({ achievement, index, offset }) => {
              // Safety check to ensure achievement exists
              if (!achievement) return null;

              const isCenter = offset === 0;
              let scale = 0.75;
              let opacity = 0.3;
              let zIndex = 10 + Math.abs(offset) * -1; // Center is highest z-index

              if (offset === -1 || offset === 1) {
                scale = 0.88;
                opacity = 0.6;
                zIndex = 20;
              } else if (isCenter) {
                scale = 1;
                opacity = 1;
                zIndex = 30;
              }

              return (
                <div
                  key={achievement.id}
                  onClick={() => setSelectedIndex(index)}
                  className={`absolute transition-all duration-700 ease-in-out ${isCenter ? 'cursor-default' : 'cursor-pointer'}`}
                  style={{
                    transform: `translateX(${offset * 320}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                >
                  {/* Card */}
                  <div
                    className={`w-[340px] bg-white rounded-sm overflow-hidden transition-all duration-700 ${
                      isCenter
                        ? 'shadow-[0_20px_50px_-12px_rgba(99,16,18,0.15)] border border-transparent'
                        : 'shadow-sm border border-gray-100'
                    }`}
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden bg-gray-100 group">
                      <Image
                        src={achievement.image || '/placeholder.jpg'}
                        alt={achievement.title || 'Achievement'}
                        fill
                        className={`object-cover transition-transform duration-1000 ${isCenter ? 'scale-105' : 'grayscale-[40%] group-hover:grayscale-0'}`}
                      />
                      {/* Elegant Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                    </div>

                    {/* Content */}
                    <div className="p-7 relative bg-white">
                      {/* Category badge */}
                      <div className="absolute -top-4 right-6">
                        <span className="inline-block px-4 py-1.5 bg-white text-[#631012] text-[10px] uppercase tracking-widest font-bold rounded-sm shadow-md border border-gray-50">
                          {achievement.category || 'General'}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className={`font-bold mb-3 line-clamp-2 transition-colors duration-300 ${isCenter ? 'text-gray-900 text-xl' : 'text-gray-600 text-lg'}`}>
                        {achievement.title || 'Untitled Achievement'}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 font-medium">
                        {achievement.description || 'No description available'}
                      </p>
                      
                      {/* Divider for active card */}
                      <div className={`h-0.5 bg-gray-100 mt-5 transition-all duration-500 ${isCenter ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right navigation button */}
        <button
          onClick={handleNext}
          className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-400 hover:text-white hover:bg-[#631012] hover:border-[#631012] transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md transform hover:translate-x-1 z-50 focus:outline-none"
          aria-label="Next Achievement"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {achievements.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              selectedIndex === idx 
                ? 'w-8 h-1.5 bg-[#631012]' 
                : 'w-2 h-1.5 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Achieve;
