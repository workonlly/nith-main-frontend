'use client';

import React, { useState } from 'react';
import Image from 'next/image';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    src:
      i % 3 === 0
        ? '/award.jpg'
        : i % 2 === 0
          ? '/direct.jpg'
          : '/workshop.jpg',
    title: `Gallery Image ${i + 1}`,
    category: ['Event', 'Achievement', 'Campus'][i % 3],
  }));

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#631012] mb-3 border-b-4 border-[#631012] pb-2 inline-block">
            Gallery
          </h2>
          <p className="text-gray-600 mt-4">
            Explore moments from our campus events, achievements, and vibrant
            community.
          </p>
        </div>

        {/* Masonry Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image) => {
            return (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image.id)}
                className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 shadow-md hover:shadow-xl hover:border-[#631012] transition-all duration-300 cursor-pointer h-72 w-full"
              >
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#631012]/80 via-[#631012]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  {/* Category badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/30">
                      {image.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-lg">
                    {image.title}
                  </h3>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-12 border-l-transparent border-t-12 border-t-[#631012] group-hover:border-l-12 group-hover:border-l-[#631012] transition-all duration-300"></div>

                {/* Icon - appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-2-13h4v6h-4z" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal/Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full max-w-4xl max-h-96 bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image display */}
              <div className="relative w-full h-96">
                <Image
                  src={galleryImages[selectedImage - 1].src}
                  alt={galleryImages[selectedImage - 1].title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#631012] text-white flex items-center justify-center hover:bg-red-900 transition-colors shadow-lg"
              >
                ✕
              </button>

              {/* Info */}
              <div className="p-6 bg-white">
                <h2 className="text-2xl font-bold text-[#631012] mb-2">
                  {galleryImages[selectedImage - 1].title}
                </h2>
                <p className="text-gray-600">
                  {galleryImages[selectedImage - 1].category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
