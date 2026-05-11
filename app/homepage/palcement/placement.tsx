import React from 'react';

function Placement() {
  return (
    <section className="py-16 px-6 bg-black relative">
      {/* Background image with low opacity */}
      <div className="absolute inset-0 bg-[url('/nith.jpg')] bg-cover bg-center bg-fixed opacity-50"></div>

      {/* Content with full opacity */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3
              className="text-4xl font-bold uppercase tracking-wider"
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px #FFFFFF',
                letterSpacing: '0.05em',
              }}
            >
              Placement Statistics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-[#631012]">95%</div>
                <div className="text-gray-600">Placement Rate</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-[#631012]">₹12L</div>
                <div className="text-gray-600">Avg Package</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              Top Recruiters
            </h3>
            <p className="text-white">
              Leading companies from various sectors visit our campus for
              recruitment including technology giants, consulting firms, and
              core engineering companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Placement;
