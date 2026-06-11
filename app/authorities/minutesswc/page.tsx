'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { FileText, ExternalLink, RefreshCw, Calendar } from 'lucide-react';

interface Minute {
  id: string;
  title: string;
  date?: string;
  meeting_date?: string;
  documentUrl?: string;
  document_url?: string;
  uploadedDate?: string;
  uploaded_date?: string;
  uploadedBy?: string;
  uploaded_by?: string;
}

const FALLBACK_MINUTES: Minute[] = [
  { id: '1', title: '42nd Meeting of the Senate', meeting_date: '2024-01-20', document_url: '#', uploaded_date: '2024-02-05' },
  { id: '2', title: '41st Meeting of the Senate', meeting_date: '2023-07-12', document_url: '#', uploaded_date: '2023-08-01' },
  { id: '3', title: '40th Meeting of the Senate', meeting_date: '2023-01-28', document_url: '#', uploaded_date: '2023-02-15' },
];

const API_BASE = `http://${process.env.NEXT_PUBLIC_URL || 'localhost:4000'}/senate`;

export default function SenateMinutesPage() {
  const language = useSelector((state: RootState) => state.language.value);
  const [minutes, setMinutes] = useState<Minute[]>(FALLBACK_MINUTES);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMinutes = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/minutes`);
      if (!res.ok) throw new Error(`Server returned status ${res.status}`);
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setMinutes(data);
      } else {
        setMinutes(FALLBACK_MINUTES);
      }
    } catch (err) {
      console.warn('Failed to load Senate minutes from backend. Using fallback data.', err);
      setMinutes(FALLBACK_MINUTES);
      setError('Could not connect to server. Showing cached data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchMinutes(); }, []);

  const formatDate = (m: Minute, field: 'meeting' | 'upload') => {
    const raw = field === 'meeting'
      ? (m.date || m.meeting_date || '')
      : (m.uploadedDate || m.uploaded_date || '');
    if (!raw) return '—';
    const d = new Date(raw);
    if (isNaN(d.getTime())) return raw;
    return d.toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN', {
      day: 'numeric', month: 'long', year: 'numeric',
    });
  };

  const getDocUrl = (m: Minute) => m.documentUrl || m.document_url || null;

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#631012] via-[#7a1a1d] to-[#4a0c0e] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {language === 'en' ? 'Minutes of the Senate' : 'सीनेट की कार्यवृत्त'}
              </h1>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                {language === 'en'
                  ? 'Official meeting minutes of the Senate at NIT Hamirpur.'
                  : 'एनआईटी हमीरपुर में सीनेट की आधिकारिक बैठक कार्यवृत्त।'}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-[#631012] transition-colors">
                {language === 'en' ? 'Home' : 'होम'}
              </Link>
              <span>›</span>
              <span className="text-gray-800 font-medium">
                {language === 'en' ? 'Minutes of the Senate' : 'सीनेट की कार्यवृत्त'}
              </span>
            </nav>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-sm">⚠️ {error}</div>
            )}

            <div className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="grid grid-cols-[60px_1fr_160px_160px_60px] gap-3 bg-[#631012]/5 border-b border-gray-200 p-4 text-xs font-bold uppercase tracking-wider text-[#631012]">
                <div className="text-center">{language === 'en' ? 'S.No.' : 'क्र.सं.'}</div>
                <div>{language === 'en' ? 'Particulars' : 'विवरण'}</div>
                <div className="text-center flex items-center justify-center gap-1"><Calendar className="w-3.5 h-3.5" />{language === 'en' ? 'Meeting Date' : 'बैठक तिथि'}</div>
                <div className="text-center">{language === 'en' ? 'Uploaded On' : 'अपलोड तिथि'}</div>
                <div className="text-center">{language === 'en' ? 'View' : 'देखें'}</div>
              </div>

              {loading ? (
                <div className="flex items-center justify-center py-16 gap-3 text-gray-500">
                  <RefreshCw className="animate-spin w-5 h-5" />
                  <span className="text-sm">{language === 'en' ? 'Loading minutes...' : 'लोड हो रहा है...'}</span>
                </div>
              ) : minutes.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                  <FileText className="w-12 h-12 mb-3 opacity-30" />
                  <p className="text-sm">{language === 'en' ? 'No minutes available.' : 'कोई कार्यवृत्त उपलब्ध नहीं।'}</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {minutes.map((minute, index) => (
                    <div key={minute.id} className="grid grid-cols-[60px_1fr_160px_160px_60px] gap-3 p-4 hover:bg-gray-50 transition-colors items-center">
                      <div className="text-center font-mono text-sm text-gray-400">{String(index + 1).padStart(2, '0')}</div>
                      <div className="text-sm text-gray-700 font-medium leading-snug">{minute.title || '—'}</div>
                      <div className="text-center text-sm text-gray-500">{formatDate(minute, 'meeting')}</div>
                      <div className="text-center text-sm text-gray-500">{formatDate(minute, 'upload')}</div>
                      <div className="flex justify-center">
                        {getDocUrl(minute) && getDocUrl(minute) !== '#' ? (
                          <a href={getDocUrl(minute)!} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-8 h-8 bg-[#631012] text-white rounded-lg hover:bg-[#7a1214] transition-colors">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        ) : (
                          <span className="text-gray-300 text-xs italic">N/A</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <p className="text-xs text-gray-400 mt-3 text-center">
              {language === 'en' ? `Showing ${minutes.length} record${minutes.length !== 1 ? 's' : ''}` : `${minutes.length} रिकॉर्ड दिखाए जा रहे हैं`}
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
