'use client';

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Users, 
  FileText, 
  ExternalLink, 
  RefreshCw,
  Mail,
  Phone,
  Briefcase,
  Building2,
  Calendar,
  AlertCircle
} from 'lucide-react';

const API_BASE_URL = 'http://localhost:4000/bwc';

type BwcMember = {
  id: string | number;
  name: string;
  designation?: string;
  affiliation?: string;
  position?: string;
  email?: string;
  contactPhone?: string;
  contact_phone?: string;
};

type BwcMinute = {
  id: string | number;
  title: string;
  date?: string;
  meeting_date?: string;
  documentUrl?: string;
  document_url?: string;
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'members' | 'minutes'>('members');
  const [members, setMembers] = useState<BwcMember[]>([]);
  const [minutes, setMinutes] = useState<BwcMinute[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data for public view directly from the live BWC API
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [membersRes, minutesRes] = await Promise.all([
        fetch(`${API_BASE_URL}/members`),
        fetch(`${API_BASE_URL}/minutes`)
      ]);

      if (!membersRes.ok || !minutesRes.ok) {
        throw new Error('Failed to load Building & Works Committee contents from the server.');
      }

      const membersData = await membersRes.json();
      const minutesData = await minutesRes.json();

      setMembers(membersData);
      setMinutes(minutesData);
    } catch (err) {
      console.error('Fetch error details:', err);
      setMembers([]);
      setMinutes([]);
      const message = err instanceof Error ? err.message : 'Connection Error';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  type TabId = 'members' | 'minutes';

  const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
    {
      id: 'members',
      label: 'Committee Members',
      icon: <Users size={16} />,
    },
    {
      id: 'minutes',
      label: 'Meeting Minutes',
      icon: <FileText size={16} />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-stone-800 font-sans">
      
      {/* Breadcrumb Trail */}
      <div className="bg-white border-b border-stone-200 py-3 px-4 sm:px-6 lg:px-8 text-xs text-stone-600 font-medium">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5">
          <span className="hover:underline cursor-pointer">Home</span>
          <span className="text-stone-400">›</span>
          <span className="hover:underline cursor-pointer">Authorities</span>
          <span className="text-stone-400">›</span>
          <span className="text-[#631012] font-semibold">Building & Works Committee (BWC)</span>
        </div>
      </div>

      {/* Flat Red Header Banner (Matches Image Layout) */}
      <div className="bg-[#631012] py-16 px-4 sm:px-6 lg:px-8 text-white text-center rounded-none relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
            {activeTab === 'members' ? 'Building & Works Committee' : 'Minutes of BWC'}
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Latest updates, committee registry, and official meeting minutes from the NITH Building & Infrastructure Authority.
          </p>
        </div>

        {/* Sync Controls */}
        <div className="absolute top-4 right-4 sm:right-6">
          <button
            onClick={fetchData}
            disabled={loading}
            className="bg-white/10 hover:bg-white/20 disabled:bg-white/5 transition-colors text-white text-xs font-semibold px-3 py-1.5 rounded-none flex items-center gap-2 border border-white/15"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            Sync Directory
          </button>
        </div>
      </div>

      {/* Simple Connection Error Box */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-none text-red-900 flex items-start gap-3 shadow-sm max-w-7xl mx-auto mt-6 px-4 sm:px-6">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-red-800 text-sm">Connection Error</h4>
            <p className="text-xs text-red-700 mt-1 leading-relaxed">
              Unable to load Building & Works Committee details. Please check your network connection and try again.
            </p>
          </div>
        </div>
      )}

      {loading ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center flex flex-col items-center justify-center space-y-4">
          <RefreshCw className="w-10 h-10 text-[#631012] animate-spin" />
          <p className="text-sm font-medium text-stone-500">Fetching official records...</p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Navigation Tabs (Sharp Edges) */}
          <div className="border-b border-stone-200 mb-8">
            <div className="flex space-x-1 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-6 py-3.5 font-semibold text-xs uppercase tracking-wider transition-all rounded-none border-b-2
                    ${
                      activeTab === tab.id
                        ? 'border-[#631012] text-[#631012] bg-stone-50'
                        : 'border-transparent text-stone-600 hover:text-[#631012] hover:bg-stone-50/50'
                    }
                  `}
                >
                  <span className="w-4 h-4">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ========================================== MEMBERS TAB ========================================== */}
          {activeTab === 'members' && (
            <div className="space-y-6">
              {members.length === 0 ? (
                <div className="text-stone-500 italic p-12 text-center border border-dashed border-stone-200 rounded-none bg-stone-50 text-sm">
                  No committee members are currently registered in the system directory.
                </div>
              ) : (
                <div className="overflow-x-auto border border-stone-200 rounded-none bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50 text-[11px] font-bold tracking-wider text-stone-600 uppercase">
                        <th className="py-4 px-6 w-20 text-stone-500">S.l no</th>
                        <th className="py-4 px-6 text-[#631012]">PARTICULARS</th>
                        <th className="py-4 px-6 text-stone-500">AFFILIATION / REMARKS</th>
                        <th className="py-4 px-6 text-right text-stone-500">CONTACT INFO</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      {members.map((member, index) => (
                        <tr key={member.id} className="hover:bg-stone-50/30 transition-colors text-sm">
                          <td className="py-5 px-6 font-mono text-stone-400 font-bold">
                            {String(index + 1).padStart(2, '0')}
                          </td>
                          <td className="py-5 px-6">
                            <div className="font-bold text-stone-900 text-base">{member.name}</div>
                            {member.designation && (
                              <div className="text-xs text-[#631012] font-semibold uppercase tracking-wider mt-0.5">
                                {member.designation}
                              </div>
                            )}
                          </td>
                          <td className="py-5 px-6">
                            <div className="text-stone-800 font-medium text-xs sm:text-sm">{member.affiliation || '—'}</div>
                            <div className="text-stone-500 text-xs mt-0.5">{member.position || '—'}</div>
                          </td>
                          <td className="py-5 px-6 text-right">
                            {member.email && (
                              <a href={`mailto:${member.email}`} className="block text-[#631012] hover:underline text-xs font-semibold mb-1">
                                {member.email}
                              </a>
                            )}
                            {/* Uses camelCase contactPhone returned by BWC API, with contact_phone as safe fallback */}
                            {(member.contactPhone || (member as any).contact_phone) && (
                              <span className="block text-stone-500 text-xs">
                                {member.contactPhone || (member as any).contact_phone}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* ========================================== MEETING MINUTES TAB ========================================== */}
          {activeTab === 'minutes' && (
            <div className="space-y-6">
              {minutes.length === 0 ? (
                <div className="text-stone-500 italic p-12 text-center border border-dashed border-stone-200 rounded-none bg-stone-50 text-sm">
                  No meeting minutes are currently available to the public.
                </div>
              ) : (
                <div className="overflow-x-auto border border-stone-200 rounded-none bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50 text-[11px] font-bold tracking-wider text-stone-600 uppercase">
                        <th className="py-4 px-6 w-20 text-stone-500">S.l no</th>
                        <th className="py-4 px-6 text-[#631012]">PARTICULARS</th>
                        <th className="py-4 px-6 text-right text-stone-500">REMARKS</th>
                        <th className="py-4 px-6 text-right text-stone-500 w-48">DATE OF UPLOAD</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      {minutes.map((minute, index) => {
                        // Backend maps meeting_date as "date" in /minutes response
                        const displayDate = minute.date || (minute as any).meeting_date
                          ? new Date(minute.date || (minute as any).meeting_date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            }) 
                          : '—';
                        
                        return (
                          <tr key={minute.id} className="hover:bg-stone-50/30 transition-colors text-sm">
                            <td className="py-5 px-6 font-mono text-stone-400 font-bold">
                              {String(index + 1).padStart(2, '0')}
                            </td>
                            <td className="py-5 px-6 font-medium text-stone-800">
                              {minute.title}
                            </td>
                            <td className="py-5 px-6 text-right">
                              {/* Backend maps document_url as "documentUrl" in /minutes response */}
                              {(minute.documentUrl || (minute as any).document_url) ? (
                                <a
                                  href={minute.documentUrl || (minute as any).document_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-xs text-[#631012] font-semibold hover:underline bg-stone-50 hover:bg-stone-100 px-3 py-1.5 border border-stone-200 rounded-none"
                                >
                                  View Document <ExternalLink className="w-3 h-3" />
                                </a>
                              ) : (
                                <span className="text-xs text-stone-400 italic">No document</span>
                              )}
                            </td>
                            <td className="py-5 px-6 text-right font-medium text-stone-600">
                              {displayDate}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}