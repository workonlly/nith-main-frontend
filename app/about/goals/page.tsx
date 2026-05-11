'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getAboutNithData } from '../api/api';
import { useEffect, useState } from 'react';
import {
  Target,
  Lightbulb,
  Users,
  BookOpen,
  Globe,
  TrendingUp,
  Leaf,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const goals = [
  {
    icon: Target,
    title: 'Academic Excellence',
    description:
      'To strengthen academic programs through innovation in pedagogy, curriculum modernization, and outcome-based education.',
  },
  {
    icon: Lightbulb,
    title: 'Research and Innovation',
    description:
      'To encourage interdisciplinary research and technological advancements that contribute to societal and industrial progress.',
  },
  {
    icon: Globe,
    title: 'Global Collaboration',
    description:
      'To establish partnerships with reputed international universities, research bodies, and industries to promote global knowledge exchange.',
  },
  {
    icon: Leaf,
    title: 'Sustainability & Environment',
    description:
      'To embed sustainable practices in campus life, infrastructure, and research, ensuring eco-conscious growth and green initiatives.',
  },
  {
    icon: Users,
    title: 'Student Development',
    description:
      'To nurture leadership, entrepreneurship, and ethics among students through holistic education and experiential learning.',
  },
  {
    icon: BookOpen,
    title: 'Social Responsibility',
    description:
      'To apply science and technology for addressing community needs and driving inclusive development at regional and national levels.',
  },
  {
    icon: TrendingUp,
    title: 'Infrastructure & Digital Growth',
    description:
      'To continuously upgrade infrastructure and embrace digital transformation to enhance academic and administrative efficiency.',
  },
  {
    icon: GraduationCap,
    title: 'Faculty Empowerment',
    description:
      'To promote continuous faculty training, research opportunities, and academic freedom for enhanced teaching and mentorship quality.',
  },
];

const roadmap = [
  {
    title: 'Strengthening Teaching-Learning Framework',
    description:
      'Regular curriculum revision and inclusion of modern technologies to enhance learning outcomes.',
  },
  {
    title: 'Enhancing Research Infrastructure',
    description:
      'Developing state-of-the-art laboratories and research centers to foster cutting-edge innovation.',
  },
  {
    title: 'Building Industry Linkages',
    description:
      'Establishing strong partnerships with leading industries for internships, placements, and collaborative research.',
  },
  {
    title: 'Promoting Global Exposure',
    description:
      'Facilitating international collaborations, student exchange programs, and faculty development initiatives.',
  },
  {
    title: 'Ensuring Continuous Quality Improvement',
    description:
      'Implementing robust quality assurance mechanisms and accreditation standards for sustained excellence.',
  },
];

export default function GoalsPage() {
  const [connectivityData, setConnectivityData] = useState<Record<
    string,
    unknown
  > | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data on component mount (ID 4 = Goals)
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await getAboutNithData(4);

        if (response.success && response.data) {
          setConnectivityData(response.data);
        } else {
          setError('Goals information not found');
        }
      } catch (err) {
        setError('Failed to load goals data');
        console.error('Goals fetch error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);
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
            <span className="text-gray-400">About</span>
            <span>›</span>
            <span className="text-[#800000] font-medium">Goals</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center py-24 md:py-32 px-6 md:px-12"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            Our Goals
          </h1>
          {connectivityData?.description ? (
            <div
              className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light"
              dangerouslySetInnerHTML={{ __html: connectivityData.description }}
            />
          ) : (
            <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              Defining our long-term vision of excellence in education,
              research, and societal growth through innovation, sustainability,
              and inclusive development.
            </p>
          )}
        </motion.div>
      </section>

      <section className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Institutional Goals
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Eight pillars driving our commitment to excellence, innovation,
              and sustainable growth
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInScale}
                  whileHover={{
                    y: -8,
                    transition: { type: 'spring', stiffness: 300 },
                  }}
                  className="group relative bg-white rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#800000] to-[#631012] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-[#800000] transition-colors">
                      {goal.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {goal.description}
                    </p>

                    <div className="mt-4 flex items-center text-[#800000] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
