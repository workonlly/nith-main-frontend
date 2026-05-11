'use client';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Calendar,
  PauseCircle,
  Megaphone,
  ArrowUpRight,
} from 'lucide-react';

// --- Types & Transforms ---
type NewsData = {
  id: number;
  Heading: string;
  Subheading: string;
  Description: string;
  image: string;
  startedAt: string;
  endedAt: string;
  createdAt: string;
  updatedAt: string;
};

// Mock News Data
const mockNewsData: NewsData[] = [
  {
    id: 1,
    Heading: 'NITH Convocation 2025',
    Subheading: 'Annual Convocation Ceremony',
    Description:
      'The 25th Convocation Ceremony of NITH was held with academic excellence and student achievements celebrated.',
    image: '/group.jpg',
    startedAt: new Date('2024-10-18').toISOString(),
    endedAt: new Date('2024-10-18').toISOString(),
    createdAt: new Date('2024-10-18').toISOString(),
    updatedAt: new Date('2024-10-18').toISOString(),
  },
  {
    id: 2,
    Heading: 'Campus Recruitment Drive',
    Subheading: 'Top Companies Recruiting',
    Description:
      'Leading IT companies and consulting firms are recruiting NITH graduates with competitive packages.',
    image: '/robosocnith_cover.jpg',
    startedAt: new Date('2024-10-15').toISOString(),
    endedAt: new Date('2024-10-15').toISOString(),
    createdAt: new Date('2024-10-15').toISOString(),
    updatedAt: new Date('2024-10-15').toISOString(),
  },
];

const transformNews = (news: NewsData) => ({
  id: news.id,
  title: news.Heading,
  subtitle: news.Subheading,
  image: news.image,
  description: news.Description,
  // Formatting date to be easily split later (e.g., "Oct 24 2024")
  dateObj: new Date(news.startedAt),
  dateString: new Date(news.startedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }),
  category: 'NEWS',
});

// --- Main Component ---
function News() {
  const [newsData, setNewsData] = useState<NewsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const language = useSelector((state: RootState) => state.language.value);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 300));
        setNewsData(mockNewsData);
      } catch (err) {
        setError('Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const displayNews = newsData.map(transformNews);

  // --- Loading State ---
  if (loading) {
    return (
      <section className="py-12 px-6 bg-gray-50 min-h-[500px] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#631012] mb-4"></div>
          <p className="text-gray-600 font-medium">Loading updates...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-3 p-6  font-sans ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* --- LEFT COLUMN: ADMISSIONS (Unchanged) --- */}
          <div>
            <h3 className="text-3xl font-bold text-[#631012] mb-6 border-b-4 border-[#631012] pb-2 inline-block">
              {language == 'en' ? 'Admissions' : ' प्रवेश'}
            </h3>
            <div className="space-y-4">
              <div className="group border border-gray-200 rounded-xl p-6 bg-white hover:border-[#631012] hover:shadow-lg transition-all cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold text-[#631012] group-hover:text-red-700 transition-colors mb-1">
                      {language == 'en' ? 'B.Tech' : 'बी.टेक'}
                    </h4>
                    <p className="text-gray-500 text-sm font-medium">
                      {language == 'en'
                        ? 'Undergraduate Program'
                        : 'अंडरग्रेजुएट प्रोग्राम'}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#631012] transition-colors" />
                </div>
              </div>

              <div className="group border border-gray-200 rounded-xl p-6 bg-white hover:border-[#631012] hover:shadow-lg transition-all cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold text-[#631012] group-hover:text-red-700 transition-colors mb-1">
                      M.Tech, M.Sc, MBA
                    </h4>
                    <p className="text-gray-500 text-sm font-medium">
                      Postgraduate Program
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#631012] transition-colors" />
                </div>
              </div>

              <div className="group border border-gray-200 rounded-xl p-6 bg-white hover:border-[#631012] hover:shadow-lg transition-all cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold text-[#631012] group-hover:text-red-700 transition-colors mb-1">
                      Ph.D
                    </h4>
                    <p className="text-gray-500 text-sm font-medium">
                      Doctorate Program
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#631012] transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: UPDATED LATEST NEWS (Span 2 Columns) --- */}
          <div className="lg:col-span-2  ">
            {/* The Announcement-Style Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col w-full h-full ">
              {/* Card Header (Text Only) */}
              <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-white z-10">
                <div className="flex flex-col">
                  <h2 className="text-4xl underline font-bold text-[#631012] tracking-tight">
                    Latest News
                  </h2>
                </div>
              </div>

              {/* The Scrollable List */}
              {error || displayNews.length === 0 ? (
                <div className="p-12 text-center text-gray-500 flex flex-col items-center justify-center h-full">
                  <p>{error || 'No news updates available at the moment.'}</p>
                </div>
              ) : (
                <div className="flex flex-col h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                  {displayNews.map((item, index) => {
                    // Extract date parts
                    const month = item.dateObj.toLocaleString('en-US', {
                      month: 'short',
                    });
                    const day = item.dateObj.getDate();
                    const isNew = index === 0; // First item is "New"

                    return (
                      <div
                        key={item.id}
                        className={`group relative flex items-center justify-between py-6 px-8 border-b border-gray-100 hover:bg-[#631012]/5 transition-all duration-300 cursor-pointer ${isNew ? 'bg-red-50/30' : ''}`}
                      >
                        {/* Left Side: Date & Text */}
                        <div className="flex items-start gap-6 flex-1">
                          {/* Date Box */}
                          <div className="hidden sm:flex flex-col items-center justify-center w-16 h-16 flex-shrink-0 rounded-2xl bg-gray-50 border border-gray-200 text-gray-500 group-hover:border-[#631012]/20 group-hover:text-[#631012] transition-colors shadow-sm">
                            <span className="text-xs font-bold uppercase tracking-wider opacity-70">
                              {month}
                            </span>
                            <span className="text-xl font-extrabold">
                              {day}
                            </span>
                          </div>

                          {/* Content */}
                          <div className="flex flex-col justify-center gap-2 pr-6">
                            <div className="flex items-center gap-3">
                              {/* Category Tag */}
                              <span className="text-xs font-bold px-2.5 py-1 rounded-md border tracking-wide bg-gray-100 text-gray-600 border-gray-200 group-hover:bg-white">
                                {item.category}
                              </span>

                              {/* New Badge */}
                              {isNew && (
                                <span className="flex items-center gap-1.5 text-xs font-bold text-red-600 animate-pulse">
                                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                                  NEW
                                </span>
                              )}
                            </div>

                            {/* Title */}
                            <h4
                              className={`text-lg font-medium leading-snug transition-colors ${
                                isNew
                                  ? 'text-[#631012]'
                                  : 'text-gray-700 group-hover:text-black'
                              }`}
                            >
                              {item.title}
                            </h4>
                          </div>
                        </div>

                        {/* Right Side: Arrow */}
                        <div className="flex-shrink-0 pl-4">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center text-gray-300 border border-transparent group-hover:bg-[#631012] group-hover:text-white group-hover:border-[#631012] transition-all duration-300 transform group-hover:translate-x-2 shadow-sm">
                            <ArrowRight size={20} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
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

export default News;
