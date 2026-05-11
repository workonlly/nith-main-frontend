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
    <section className="relative py-15 px-6  overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-[#631012]/20 rounded-full blur-3xl opacity-30"></div>

      <div className="w-full mx-auto relative z-10">
        <div className="  gap-12 items-center">
          {/* Left side - About Us content */}
          <motion.div
            className="md:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.h2
              className="text-4xl font-bold text-[#631012] mb-6 inline-block relative"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              }}
            >
              About Us
              <motion.span
                className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#631012]"
                whileInView={{
                  width: '100%',
                  transition: { duration: 0.8, delay: 0.3 },
                }}
              />
            </motion.h2>

            {aboutDesc ? (
              <p className="text-gray-700 leading-relaxed  text-md mt-4">
                {aboutDesc}
              </p>
            ) : (
              <div>
                {' '}
                National Institute of Technology Hamirpur is one of the
                thirty-one NITs of the country, which came into existence on 7th
                August 1986 as Regional Engineering College, a joint and
                cooperative enterprise of the Govt. of India and Govt. of
                Himachal Pradesh. At the time of inception, Institute had only
                two departments i.e., Civil and Electrical Engineering having an
                intake of 30 students in each.
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
