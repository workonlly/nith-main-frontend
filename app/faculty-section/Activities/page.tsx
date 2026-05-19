'use client';
import React from 'react';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function Page() {
  const language = useSelector((state: RootState) => state.language.value);
  return (
    <div className="min-h-screen bg-white">
      <Header31 />

      <div className="bg-gray-50 py-4 px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-[#800000] transition-colors duration-200"
            >
              {language == 'en' ? 'Home' : 'होम'}
            </Link>
            <span>›</span>
            <span className="text-gray-400">
              {language == 'en' ? 'Faculty' : 'संकाय'}
            </span>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              {language == 'en' ? 'Activities' : 'गतिविधियां'}
            </span>
          </nav>
        </div>
      </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
            {activitiesData.map((activity, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 opacity-50" />

                <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10">
                  {language === 'en' ? activity.heading_en : activity.heading_hn}
                </h3>
                
                {(() => {
                  const subheading = language === 'en' ? activity.subheading_en : activity.subheading_hn;
                  if (!subheading) return null;
                  const bulletPoints = subheading
                    .split(/[,;\n]+/)
                    .map((item: string) => item.trim())
                    .filter((item: string) => item.length > 0);

                  if (bulletPoints.length === 0) return null;

                  return (
                    <ul className="list-disc pl-5 text-red-700 font-semibold mb-4 text-sm uppercase tracking-wider relative z-10 space-y-1">
                      {bulletPoints.map((point: string, idx: number) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  );
                })()}

                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300 relative z-10">
                  {language === 'en' ? activity.small_text : (activity.small_text_hn || activity.small_text)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
