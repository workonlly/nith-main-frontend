'use client';

import React, { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    const pdf = '/pdfs/fee-structure.pdf';
    window.location.href = pdf;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="text-center">
        <p className="text-lg text-gray-700 mb-4">
          Opening the fee structure PDF...
        </p>
        <p className="text-sm text-gray-600">
          If you are not redirected automatically,{' '}
          <a
            href="/pdfs/fee-structure.pdf"
            className="text-[#800000] underline"
          >
            click here to open the PDF
          </a>
          .
        </p>
      </div>
    </div>
  );
}
