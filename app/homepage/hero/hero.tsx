import Image from 'next/image';

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

export default function Hero() {
  const homepage = getHomepageData();

  const HeroMain = homepage.HeroMain || 'NIT HAMIRPUR';
  const HeroSub = homepage.HeroSub || 'Shaping Minds. Building Futures.';
  const HeroDesc =
    homepage.HeroDesc ||
    'NIT Hamirpur is committed to academic excellence in engineering, technology, architecture, and sciences—empowering students through innovation, research, and a value-based learning environment.';

  return (
    <>
      {/* Hero Section - Full Screen */}
      <section className="relative w-full h-screen overflow-hidden mt-53">
        {/* Background Image with Subtle Parallax */}
        <div className="absolute inset-0">
          <Image
            src="/nith.jpg"
            alt="NIT Hamirpur Campus"
            fill
            className="object-cover scale-105 animate-hero-zoom"
            priority
          />
        </div>

        {/* Directional Gradient Overlay - Left darker, right lighter */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20"></div>

        {/* Content Container - Left Aligned */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
            <div className="max-w-3xl">
              {/* Micro Heading - Institution Name */}
              <div className="mb-6 animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
                <p className="text-sm md:text-base tracking-[0.2em] uppercase text-white/80 font-light">
                  {HeroMain}
                </p>
              </div>

              {/* Main Heading - Premium Typography */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
                {HeroSub}
              </h1>

              {/* Supporting Subtext */}
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl font-light animate-fade-in-up [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
                {HeroDesc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
