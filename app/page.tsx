
import Aboutus from './homepage/aboutus/aboutus';

import Event from './homepage/event/event';
import Placement from './homepage/palcement/placement';
import News from './homepage/news/news';
import Achieve from './homepage/achievements/achieve';
import Director from './homepage/directormessage/director';
import Gallery from './homepage/gallery/gallery';
import Hero from './homepage/hero/hero';
import Academics from './homepage/academics/page';

export default function Home() {
  return (
    <div className="relative min-h-screen">

      {/* <div className='relative w-full h-[calc(100vh-135px)] flex flex-col items-center justify-center overflow-hidden bg-black z-0'>
        <img
          src="/admin.jpg"
          alt="NITH Admin Block"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/70 via-red-800/50 to-red-600/30 opacity-40 mix-blend-multiply"></div>

       <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 pt-10">
  
  
  <img 
    src="logo2.png" 
    alt="NITH Logo" 
    className="w-40 h-40 md:w-56 md:h-56 mb-6 drop-shadow-xl" 
  />

  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg font-sans">
    राष्ट्रीय प्रौद्योगिकी संस्थान हमीरपुर
  </h1>
  

  <h2 className="text-xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg font-sans">
    National Institute of Technology Hamirpur
  </h2>
  

  <p className="mt-4 text-sm md:text-lg font-medium drop-shadow-md text-gray-200">
    An Institute of National Importance
  </p>
  
</div>
      </div> */}

      <div className="relative z-10 bg-white">
        <Hero />
      </div>

      <main>
        <section className="w-full bg-white py-6 font-sans">
          <div className="w-full px-2 sm:px-4 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div id="events" className="flex-1 flex min-w-0">
                <Event />
              </div>
              <div id="academics" className="flex-1 flex min-w-0">
                <Academics />
              </div>
              <div id="news" className="flex-1 flex min-w-0">
                <News />
              </div>
            </div>
          </div>
        </section>
        
          <section id="achievements" className="w-full bg-white ">
          <div className="w-full px-2 sm:px-4 lg:px-8">
            <Achieve />
          </div>
        </section>
        {/* About Us section */}
        <section id="aboutus">
          <Aboutus />
        </section>
        <section id="placement">
          <Placement />
        </section>
        {/* Placement and Event sections */}

        {/* News section */}

        {/* Achievements section */}
      

        {/* Director's message */}
        <section id="director">
          <Director />
        </section>

        {/* Gallery section */}
        <section id="gallery">
          <Gallery />
        </section>
      </main>


    </div>
  );
}
