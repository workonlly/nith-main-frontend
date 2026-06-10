'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Separate lists for NIT Hamirpur and REC Hamirpur
const nitList = [
  {
    name: 'Prof. Chandra Shakher',
    years: '2018 to 2021',
    image: '/images/former/chandra.jpg',
  },
  {
    name: 'Senapathy (Kris) Gopalakrishan',
    years: '2014 to 2017',
    image: '/images/former/kris.jpg',
  },
  {
    name: 'Prof. V.S. Ramamurthy',
    years: '2011 to 2014',
    image: '/images/former/ramamurthy.jpg',
  },
  {
    name: 'Dr. R.L. Chauhan',
    years: '2005 to 2011',
    image: '/images/former/chauhan.jpg',
  },
  {
    name: 'Prof. R.S. Nirjar',
    years: '2003 to 2005',
    image: '/images/former/nirjar.jpg',
  },
  {
    name: 'Sh. Ravinder Singh Thakur',
    years: '1999 to 2003',
    image: '/images/former/ravinder.jpg',
  },
  {
    name: 'Sh. Prem Kumar Dhumal',
    years: '1998 to 1999',
    image: '/images/former/dhumal.jpg',
  },
  {
    name: 'Sh. Chander Kumar',
    years: '1994 to 1998',
    image: '/images/former/chander.jpg',
  },
  {
    name: 'Sh. P.P. Shrivastava',
    years: '1993',
    image: '/images/former/shrivastava.jpg',
  },
  {
    name: 'Thakur Jagdev Chand',
    years: '1991 to 1992',
    image: '/images/former/jagdev.jpg',
  },
  {
    name: 'Sh. Shanta Kumar',
    years: '1990 to 1991',
    image: '/images/former/shanta.jpg',
  },
  {
    name: 'Sh. Natha Singh Thakur',
    years: '1989',
    image: '/images/former/natha.jpg',
  },
  {
    name: 'Sh. Dharam Singh',
    years: '1988 to 1989',
    image: '/images/former/dharam.jpg',
  },
  {
    name: 'Sh. Virbhadhra Singh',
    years: '1986 to 1988',
    image: '/images/former/virbhadra.jpg',
  },
];

const recList = [
  {
    name: 'Sh. L.M. Thaper',
    years: '2003',
    image: '/images/former/thaper.jpg',
    note: 'Former Chairman, REC Hamirpur',
  },
];

export default function FormerChairpersonsPage() {
  return (
    <div className="min-h-screen bg-white">
      

      <div className="bg-gray-50 py-4 px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-[#800000] transition-colors duration-200"
            >
              Home
            </Link>
            <span>›</span>
            <span className="text-gray-400">Administration</span>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              Former Chairpersons
            </span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center py-24 md:py-32 px-6 md:px-12"
        >
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            Former Chairpersons, NIT Hamirpur
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            A record of the Institute&apos;s past Chairpersons and their
            tenures.
          </p>
        </motion.div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            NIT Hamirpur Chairpersons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {nitList.map((item, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="w-full h-48 bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">{item.years}</p>
                </div>
              </article>
            ))}
          </div>

          {recList.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                REC Hamirpur Chairpersons
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recList.map((item, idx) => (
                  <article
                    key={idx}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                  >
                    <div className="w-full h-48 bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={400}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{item.years}</p>
                      {item.note && (
                        <p className="text-sm text-gray-500 mt-2">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      
    </div>
  );
}
