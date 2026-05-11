import React from 'react';

export default function WorkshopDownloadsPage() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="w-full">
          <div className="w-full bg-white rounded-t-xl border border-gray-200 overflow-hidden">
            {/* Header Grid */}
            <div className="grid grid-cols-[80px_1fr_140px_140px] gap-4 bg-gray-50 border-b border-gray-200 p-4 text-sm font-semibold text-gray-700">
              <div className="text-center text-gray-500">S.I no</div>
              <div className="uppercase tracking-wider text-xs font-bold text-[#631012]">
                Particulars
              </div>
              <div className="text-center uppercase tracking-wider text-xs font-bold text-[#631012]">
                Remarks
              </div>
              <div className="text-center uppercase tracking-wider text-xs font-bold text-[#631012]">
                date of Upload
              </div>
            </div>
            {/* Example Data Row (to show alignment) */}
            <div className="grid grid-cols-[80px_1fr_140px_140px] gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 items-center">
              <div className="text-center font-mono text-gray-400">01</div>
              <div className="text-gray-600 text-sm">
                Registration form for the 2025 alumni meet.
              </div>
              <div className="text-gray-600 text-sm">
                Registration form for the 2025 alumni meet.
              </div>
              <div className="text-gray-600 text-sm">dates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
