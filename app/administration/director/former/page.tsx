'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const nitDirectors = [
  {
    name: 'Prof. Lalit Kumar Awasthi',
    tenure: '10-10-2020 to 02-02-2022',
    image: '/images/former/directors/lalit.jpg',
  },
  {
    name: 'Dr. Vinod Yadava',
    tenure: '23-03-2018 to 09-10-2020',
    image: '/images/former/directors/vinod.jpg',
  },
  {
    name: 'Dr. Ajay K Sharma',
    tenure: '03-05-2016 to 21-03-2018',
    image: '/images/former/directors/ajay.jpg',
  },
  {
    name: 'Dr. Rajnish Shrivastava',
    tenure: '18-10-2011 to 03-05-2016',
    image: '/images/former/directors/rajnish.jpg',
  },
  {
    name: 'Dr. R.L. Sharma',
    tenure: '06-11-2010 to 18-10-2011',
    image: '/images/former/directors/rlsharma.jpg',
  },
  {
    name: 'Dr. I.K. Bhat',
    tenure: '07-11-2005 to 06-11-2010',
    image: '/images/former/directors/ikbhat.jpg',
  },
  {
    name: 'Dr. S.K. Bhowmik',
    tenure: '01-01-2005 to 06-11-2005',
    image: '/images/former/directors/bhowmik1.jpg',
  },
  {
    name: 'Dr. Chandra Shakher',
    tenure: '07-08-2003 to 31-12-2004',
    image: '/images/former/directors/chandra.jpg',
  },
  {
    name: 'Dr. S.K. Bhowmik',
    tenure: '04-07-2002 to 06-08-2003',
    image: '/images/former/directors/bhowmik2.jpg',
  },
  {
    name: 'Dr. R.C. Sharma',
    tenure: '26-06-2002 to 03-07-2002',
    image: '/images/former/directors/rcsharma.jpg',
  },
];

const recPrincipals = [
  {
    name: 'Dr. R.C. Sharma',
    tenure: '11-06-2001 to 25-06-2002',
    image: '/images/former/rec/rcsharma.jpg',
  },
  {
    name: 'Dr. S.K. Bhowmik',
    tenure: '21-03-2000 to 10-06-2001',
    image: '/images/former/rec/bhowmik.jpg',
  },
  {
    name: 'Mrs. Anuradha Thakur (IAS)',
    tenure: '27-10-1999 to 21-03-2000',
    image: '/images/former/rec/anuradha.jpg',
  },
  {
    name: 'Mr. Kamlesh Pant (IAS)',
    tenure: '01-07-1999 to 23-10-1999',
    image: '/images/former/rec/kamlesh.jpg',
  },
  {
    name: 'Dr. C.L. Dhar',
    tenure: '29-07-1998 to 30-06-1999',
    image: '/images/former/rec/cldhar.jpg',
  },
  {
    name: 'Dr. R.L. Chauhan',
    tenure: '19-03-1994 to 25-07-1998',
    image: '/images/former/rec/rlchauhan.jpg',
  },
  {
    name: 'Dr. Rameshwar Jha',
    tenure: '03-04-1990 to 18-03-1994',
    image: '/images/former/rec/rameshwar.jpg',
  },
  {
    name: 'Dr. R.C. Chauhan',
    tenure: '20-01-1986 to 02-04-1990',
    image: '/images/former/rec/rcchauhan.jpg',
  },
];

export default function FormerDirectorsPage() {
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
              Home
            </Link>
            <span>›</span>
            <span className="text-gray-400">Administration</span>
            <span>›</span>
            <span className="text-[#800000] font-medium">Former Directors</span>
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
            Former Directors, NIT Hamirpur
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            A list of former Directors and former Principals of REC Hamirpur.
          </p>
        </motion.div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Former Directors (NIT Hamirpur)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {nitDirectors.map((d, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="w-full h-48 bg-gray-100">
                  <Image
                    src={d.image}
                    alt={d.name}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {d.name}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Tenure: {d.tenure}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Former Principals (REC Hamirpur)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recPrincipals.map((p, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="w-full h-48 bg-gray-100">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {p.name}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Tenure: {p.tenure}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
