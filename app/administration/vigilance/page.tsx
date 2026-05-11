'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function VigilancePage() {
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
            <span className="text-[#800000] font-medium">Vigilance Corner</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center py-24 md:py-32 px-6 md:px-12"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            Vigilance Corner
          </h1>

          <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Information and resources related to vigilance, complaints, and
            awareness initiatives.
          </p>
        </motion.div>
      </section>

      {/* CVO card and table */}
      <section className="relative py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Chief Vigilance Officer
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left table-auto">
                <thead>
                  <tr className="text-sm text-gray-500 border-b">
                    <th className="py-3 pr-6">Sl. No.</th>
                    <th className="py-3 pr-6">Name</th>
                    <th className="py-3 pr-6">Responsibility</th>
                    <th className="py-3 pr-6">Phone No.</th>
                    <th className="py-3 pr-6">Email</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-4">1</td>
                    <td className="py-4">Prof. Ram Naresh Sharma</td>
                    <td className="py-4">Chief Vigilance Officer</td>
                    <td className="py-4">254526</td>
                    <td className="py-4">
                      <a
                        href="mailto:cvo@nith.ac.in"
                        className="text-[#800000] font-medium"
                      >
                        cvo@nith.ac.in
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Links to PDFs in tabular format */}
      <section className="relative py-8 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Downloads & Resources
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left table-auto">
                <thead>
                  <tr className="text-sm text-gray-500 border-b">
                    <th className="py-3 pr-6">Document</th>
                    <th className="py-3 pr-6">Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">Who are CVO&apos;s?</td>
                    <td className="py-3">
                      <a
                        href="/pdfs/who-are-cvos.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#800000] font-medium"
                      >
                        Open PDF
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">Anti Corruption Policy @NITH</td>
                    <td className="py-3">
                      <a
                        href="/pdfs/anti-corruption-policy-nith.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#800000] font-medium"
                      >
                        Open PDF
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">
                      Govt. of India Resolution on Public Interest Disclosure
                    </td>
                    <td className="py-3">
                      <a
                        href="/pdfs/govt-resolution-public-interest-disclosure.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#800000] font-medium"
                      >
                        Open PDF
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">
                      How to lodge Direct Complaint with CVC
                    </td>
                    <td className="py-3">
                      <a
                        href="/pdfs/how-to-lodge-complaint-cvc.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#800000] font-medium"
                      >
                        Open PDF
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3">Vigilance Awareness Week</td>
                    <td className="py-3">
                      <a
                        href="/pdfs/vigilance-awareness-week.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#800000] font-medium"
                      >
                        Open PDF
                      </a>
                    </td>
                  </tr>

                  {/* Complaint registration moved to its own section below */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Separate Complaint Registration Section */}
      <section
        id="complaint-registration"
        className="relative py-10 px-6 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Vigilance Complaint Registration
            </h3>

            <p className="text-gray-600 mb-4">
              You may register complaints using the form below. Submissions will
              open your email client addressed to the vigilance office. For
              formal submissions, please use the official channels.
            </p>

            <ComplaintForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ComplaintForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const to = 'vigilance@nith.ac.in';
    const subject = encodeURIComponent('Vigilance Complaint');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full border rounded-lg px-4 py-2"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className="w-full border rounded-lg px-4 py-2"
        />
        <input
          value=""
          disabled
          placeholder="Attachment (use official portal)"
          className="w-full border rounded-lg px-4 py-2 bg-gray-50 text-gray-400"
        />
      </div>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Describe your complaint"
        rows={6}
        className="w-full border rounded-lg px-4 py-3"
      />

      <div className="flex items-center gap-4">
        <button
          type="submit"
          className="px-5 py-2 bg-[#800000] text-white rounded-2xl font-medium"
        >
          Submit via Email
        </button>
        <a
          href="/pdfs/vigilance-complaint-registration.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-[#800000] font-medium"
        >
          Open Registration PDF
        </a>
      </div>
    </form>
  );
}
