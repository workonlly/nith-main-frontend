'use client';

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { FileText, Download, ExternalLink, RefreshCw, Calendar } from 'lucide-react';

interface BogMinute {
  id: string;
  title: string;
  meeting_date: string;
  document_url: string;
  uploaded_by: string;
  uploaded_date?: string;
}

const FALLBACK_MINUTES: BogMinute[] = [
  { id: '1', title: '26th Meeting of Board of Governors', meeting_date: '2023-12-15', document_url: '#', uploaded_by: 'Admin', uploaded_date: '2024-01-10' },
  { id: '2', title: '25th Meeting of Board of Governors', meeting_date: '2023-08-20', document_url: '#', uploaded_by: 'Admin', uploaded_date: '2023-09-05' },
  { id: '3', title: '24th Meeting of Board of Governors', meeting_date: '2023-03-10', document_url: '#', uploaded_by: 'Admin', uploaded_date: '2023-04-01' },
];

const API_BASE = `http://${process.env.NEXT_PUBLIC_URL || 'localhost:4000'}/bog`;

export default function BogMinutesPage() {
  const language = useSelector((state: RootState) => state.language.value);
  const [minutes, setMinutes] = useState<BogMinute[]>(FALLBACK_MINUTES);
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
      console.warn('Failed to load BOG minutes from backend. Using fallback data.', err);
      setMinutes(FALLBACK_MINUTES);
      setError('Could not connect to server. Showing cached data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchMinutes(); }, []);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN', {
      day: 'numeric', month: 'long', year: 'numeric',
    });
  };

  return (
    <section className="py-6">
      {error && (
        <div className="mb-4 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-sm flex items-center gap-2">
          <span>⚠️ {error}</span>
        </div>
      )}

      <div className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        {/* Table Header */}
        <div className="grid grid-cols-[60px_1fr_160px_160px_60px] gap-3 bg-[#631012]/5 border-b border-gray-200 p-4 text-xs font-bold uppercase tracking-wider text-[#631012]">
          <div className="text-center">{language === 'en' ? 'S.No.' : 'क्र.सं.'}</div>
          <div>{language === 'en' ? 'Particulars' : 'विवरण'}</div>
          <div className="text-center flex items-center justify-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {language === 'en' ? 'Meeting Date' : 'बैठक तिथि'}
          </div>
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
            <p className="text-sm">{language === 'en' ? 'No minutes available.' : 'कोई कार्यवृत्त उपलब्ध नहीं है।'}</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {minutes.map((minute, index) => (
              <div
                key={minute.id}
                className="grid grid-cols-[60px_1fr_160px_160px_60px] gap-3 p-4 hover:bg-gray-50 transition-colors items-center"
              >
                <div className="text-center font-mono text-sm text-gray-400 font-medium">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-700 font-medium leading-snug">{minute.title || '—'}</div>
                <div className="text-center text-sm text-gray-500">
                  {minute.meeting_date ? formatDate(minute.meeting_date) : '—'}
                </div>
                <div className="text-center text-sm text-gray-500">
                  {minute.uploaded_date ? formatDate(minute.uploaded_date) : '—'}
                </div>
                <div className="flex justify-center">
                  {minute.document_url && minute.document_url !== '#' ? (
                    <a
                      href={minute.document_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 bg-[#631012] text-white rounded-lg hover:bg-[#7a1214] transition-colors"
                      title={language === 'en' ? 'View PDF' : 'PDF देखें'}
                    >
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
        {language === 'en'
          ? `Showing ${minutes.length} record${minutes.length !== 1 ? 's' : ''}`
          : `${minutes.length} रिकॉर्ड दिखाए जा रहे हैं`}
      </p>
    </section>
  );
}
