'use client';

import React, { useState, useEffect } from 'react';
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
];

function Achieve() {
  const [achievements, setAchievements] = useState<TransformedAchievement[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

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
        const transformedAchievements =
          mockAchievements.map(transformAchievement);
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

  const handlePrev = () => {
    if (achievements.length === 0) return;
    setSelectedIndex(
      (prev) => (prev - 1 + achievements.length) % achievements.length
    );
  };

  const handleNext = () => {
    if (achievements.length === 0) return;
    setSelectedIndex((prev) => (prev + 1) % achievements.length);
  };

  // Get visible cards for carousel
  const getVisibleCards = () => {
    if (achievements.length === 0) return [];

    const result = [];
    for (let i = -2; i <= 2; i++) {
      const idx =
        (selectedIndex + i + achievements.length) % achievements.length;
      const achievement = achievements[idx];
      if (achievement) {
        result.push({
          achievement,
          index: idx,
          offset: i,
        });
      }
    }
    return result;
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
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#631012] mb-12 border-b-4 border-[#631012] pb-2 inline-block">
          Achievements
        </h2>

        {/* Carousel with navigation buttons */}
        <div className="flex items-center gap-8">
          {/* Left navigation button */}
          <button
            onClick={handlePrev}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-[#631012] text-white font-bold text-xl hover:bg-red-900 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110"
          >
            ←
          </button>

          {/* Carousel container */}
          <div className="flex-1 overflow-hidden">
            <div className="relative h-100 flex items-center justify-center">
              {/* Scrollable cards container */}
              <div className="relative w-full h-full flex items-center justify-center perspective">
                {visibleCards.map(({ achievement, index, offset }) => {
                  // Safety check to ensure achievement exists
                  if (!achievement) return null;

                  const isCenter = offset === 0;
                  let scale = 0.7;
                  let opacity = 0.4;
                  let zIndex = 10 + offset;

                  if (offset === -1 || offset === 1) {
                    scale = 0.85;
                    opacity = 0.7;
                    zIndex = 20;
                  } else if (isCenter) {
                    scale = 1;
                    opacity = 1;
                    zIndex = 30;
                  }

                  return (
                    <div
                      key={`${achievement.id}-${offset}-${index}`}
                      onClick={() => setSelectedIndex(index)}
                      className="absolute cursor-pointer transition-all duration-500 ease-out"
                      style={{
                        transform: `translateX(${offset * 280}px) scale(${scale})`,
                        opacity: opacity,
                        zIndex: zIndex,
                      }}
                    >
                      {/* Card */}
                      <div
                        className={`w-72 bg-white rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                          isCenter
                            ? 'border-[#631012] shadow-xl'
                            : 'border-gray-200 shadow-md hover:shadow-lg'
                        }`}
                      >
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden bg-gray-100">
                          <Image
                            src={achievement.image || '/placeholder.jpg'}
                            alt={achievement.title || 'Achievement'}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          {/* Category badge */}
                          <div className="mb-3">
                            <span className="inline-block px-3 py-1 bg-[#631012]/10 text-[#631012] text-xs font-bold rounded-full border border-[#631012]/30">
                              {achievement.category || 'General'}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-lg font-bold text-[#631012] mb-3 line-clamp-2">
                            {achievement.title || 'Untitled Achievement'}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-700 text-sm leading-relaxed line-clamp-2">
                            {achievement.description ||
                              'No description available'}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right navigation button */}
          <button
            onClick={handleNext}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-[#631012] text-white font-bold text-xl hover:bg-red-900 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110"
          >
            →
          </button>
        </div>

        {/* Counter */}
        <div className="flex justify-center mt-8">
          <p className="text-gray-600 font-semibold text-sm">
            <span className="text-[#631012] font-bold">
              {achievements.length > 0 ? selectedIndex + 1 : 0}
            </span>{' '}
            / {achievements.length}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Achieve;
