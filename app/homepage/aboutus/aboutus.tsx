'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const data = [
  { n: '3.4 Cr', d: 'Highest Package' },
  { n: '1.2 Cr', d: 'Average Package' },
  { n: '500+', d: 'Companies' },
  { n: '1500+', d: 'Internships' },
  { n: '95%', d: 'Placement Rate' },
  { n: '2000+', d: 'Students Placed' },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const mockAboutData = {
  AboutDesc:
    'National Institute of Technology Hamirpur (NITH) is one of the premier engineering institutions in India. Established in 1986, NITH has been nurturing talent and fostering innovation through quality education and research. Our commitment to excellence has made us a leading institute in technical education.',
};

function Aboutus() {
  const [aboutDesc, setAboutDesc] = useState<string>('');

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 200));
        if (mounted) {
          setAboutDesc(mockAboutData.AboutDesc || '');
        }
      } catch (e) {
        console.error('Failed to load about description', e);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full blur-[100px] opacity-60 pointer-events-none transform translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-50 rounded-full blur-[80px] opacity-80 pointer-events-none transform -translate-x-1/2 translate-y-1/3"></div>

      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left side - About Us content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-[#631012] tracking-tight mb-8">
              About Us
            </h2>

            <div className="prose prose-lg text-gray-600">
              <p className="leading-relaxed mb-6 font-medium">
                National Institute of Technology Hamirpur is one of the thirty-one NITs of the country, which came into existence on 7th August 1986 as Regional Engineering College, a joint and cooperative enterprise of the Govt. of India and Govt. of Himachal Pradesh. At the time of inception, the Institute had only two departments i.e., Civil and Electrical Engineering having an intake of 30 students in each.
              </p>
              
              <p className="leading-relaxed">
                Today, the institute offers a wide range of undergraduate, postgraduate, and doctoral programs across various engineering disciplines, sciences, and humanities. Set against the picturesque backdrop of the Dhauladhar ranges, the sprawling lush green campus provides an enriching environment that fosters academic excellence, cutting-edge research, and holistic student development.
              </p>
            </div>
            
            <button className="mt-10 px-8 py-3.5 bg-[#631012] text-white font-semibold rounded-sm hover:bg-red-900 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>

          {/* Right side - Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {data.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(99,16,18,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center"
              >
                <h3 className="text-3xl sm:text-4xl font-black text-[#631012] mb-2 tracking-tight">
                  {item.n}
                </h3>
                <p className="text-gray-500 font-medium text-sm sm:text-base uppercase tracking-wide">
                  {item.d}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Aboutus;
