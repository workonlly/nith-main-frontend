'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Page() {
  const entries = [
    [
      'Prof. Y. D. Sharma, DoMSC',
      'Dean (SW)',
      '254326',
      '9418153838',
      'dsw@nith.ac.in, yds@nith.ac.in',
    ],
    [
      'Dr. Pardeep Singh, DoCSE',
      'Associate Dean (SA&S)',
      '254436',
      '9459458759',
      'ad_sas@nith.ac.in, pardeep@nith.ac.in',
    ],
    [
      'Dr. Sunil Sharma, DoCE',
      'Associate Dean (SD&C)',
      '254316',
      '9459117100',
      'sunils@nith.ac.in',
    ],
    [
      'Dr. Subit Kumar Jain',
      'FI (Student Welfare Scheme)',
      '254101',
      '9218226102',
      'jain.subit@nith.ac.in',
    ],
    [
      'Dr. Kuldeep Kr. Sharma, DoPPS',
      'Chief Warden (Hostels)',
      '254850',
      '9418780275',
      'cw@nith.ac.in',
    ],
  ];

  const nodal = [
    [
      'Dr. Sandeep Sharma, DoCHE',
      'Swachh Bharat Abhiyan',
      '254924',
      '9418000416',
      'sandeep@nith.ac.in',
    ],
    [
      'Dr. Gargi Khanna, DoECE',
      'MeitY-Scholarship',
      '254634',
      '98058 70101',
      'krishan_rathod@nith.ac.in',
    ],
    [
      'Dr. Neetu Kapoor, DoARCH',
      'Institute Magazine & News Bulletin',
      '254930',
      '7018302021',
      'neetu@nith.ac.in',
    ],
    [
      'Dr. Arun Kumar Yadav, DoCSE',
      'Equal Opportunity Cell',
      '254402',
      '8076374837',
      'ayadav@nith.ac.in',
    ],
    [
      'Dr. Mani Verma, SMO',
      'Red Ribbon Club',
      '254690',
      '7018806030',
      'doctor@nith.ac.in',
    ],
    [
      'Dr. Arun Kumar Yadav, DoCSE',
      'Liaison O/NO Visually Challenged PwD',
      '254402',
      '8076374837',
      'ayadav@nith.ac.in',
    ],
    [
      'Dr. Ajoy Debberma, DoME',
      'Jan Jatiya Gaurav Diwas (JJGD)',
      '254702',
      '9402153595',
      '--',
    ],
  ];

  const faculty = [
    [
      'Dr. Rajeev Kumar, DoCSE',
      'FI (Cultural Activities and Clubs)',
      '254434',
      '9418299787',
      'rajeev@nith.ac.in',
    ],
    [
      'Dr. Zareena J.M., DoHSS',
      'Female FI (Cultural)',
      '254100',
      '9959255502',
      'zareena@nith.ac.in',
    ],
    [
      'Dr. Swaraj Chowdhury, DoCE',
      'AFI (Cultural Activity & Clubs) - Abhinaya',
      '254301',
      '7054259045',
      'swaraj@nith.ac.in',
    ],
    [
      'Dr. Niharika Gupta, (DoME)',
      'AFI (Cultural Activities & Clubs) - Naritya',
      '254702',
      '9958114561',
      'niharikagupta@nith.ac.in',
    ],
    [
      'Dr. Ajay Kumar, Mallick, (DoCSE)',
      'AFI (Cultural Activity & Clubs) - Sangeet',
      '254401',
      '9572189202',
      'ajaymallick@nith.ac.in',
    ],
    [
      'Dr. Meghana Sharma, (DoCE)',
      'AFI (Cultural Activity & Clubs) - Sahitva Kala',
      '254301',
      '9785121383',
      'meghnas@nith.ac.in',
    ],
    [
      'Dr. Jeetendrasingh Maan, (DoMSC)',
      'AFI (Cultural Activity & Clubs) - Nirvahana',
      '254101',
      '9503929060',
      'jeetendra@nith.ac.in',
    ],
    [
      'Dr. Rakesh Sharma, DoECE',
      'FI (Technical Activities)',
      '254644',
      '9418511300',
      'rakesh.sharma@nith.ac.in',
    ],
    [
      'Dr. Kirti Mahajan, DoCE',
      'AFI (Technical Activities)',
      '254301',
      '9882089475',
      'kirtimahajan@nith.ac.in',
    ],
    [
      'Dr. Jai Prakash, DoCHY',
      'FI (E-Cell)',
      '254102',
      '9910533582',
      'jaip@nith.ac.in',
    ],
    [
      'Dr. Robin Singh Badhoria, CSE',
      'AFI (E-Cell)',
      '254401',
      '9329744955',
      'robin.bhadoria@nith.ac.in',
    ],
    [
      'Dr. Param Singh, DoME',
      'FI (Ek Bharat Shreshtha Bharat)',
      '254702',
      '9452869752',
      'psingh@nith.ac.in',
    ],
    [
      'Dr. Sreeram T.S., DoEE',
      'AFI (Yuva Sangam Ph V)',
      '254501',
      '8281486915',
      'sreeram@nith.ac.in',
    ],
    [
      'Sh. R.K. Jamalta, Sports S.',
      'FI (Sports & Games Activities)',
      '254570',
      '7018709303',
      'jamalta@nith.ac.in',
    ],
    [
      'Dr. Khalid Mohd. Pandit, DoCSE',
      'AFI (Indoor Sports)',
      '254401',
      '7006414479',
      'mkhalid@nith.ac.in',
    ],
    [
      'Dr. Manish Kumar Dhiman, DoCHE',
      'AFI (Outdoor Sports)',
      '254882',
      '8473800290',
      'manishdhiman@nith.ac.in',
    ],
    [
      'Dr. Aditi Chauhan, DoCE',
      'AFI (Female Sports)',
      '254301',
      '8894437498',
      'aditi@nith.ac.in',
    ],
    [
      'Dr. Sunil Sharma, DoCE',
      'FI (Student Discipline & Griev. Cell)',
      '254316',
      '9459117100',
      'sunils@nith.ac.in',
    ],
    [
      'Dr. Aman Kumar, DoECE',
      'FI (Student Discipline)',
      '254601',
      '--',
      'akumar@nith.ac.in',
    ],
    [
      'Dr. Sunder Kala Negi, DoHSS',
      'FI (Internal Counselling Cell) / Counsellor-cum-Counselling Administrator',
      '254100',
      '9015956076',
      'sunderkala@nith.ac.in',
    ],
    [
      'Dr. Pardeep Singh, DoCSE',
      'FI (Student Counselling)',
      '254436',
      '9459458759',
      'ad_sas@nith.ac.in',
    ],
    [
      'Dr. (Ms.) Rinshu, DoHSS',
      'AFI (Student Counselling)',
      '254101',
      '7978211574',
      'rinshu@nith.ac.in',
    ],
    [
      'Dr. Subit Kumar Jain, DoMSC',
      'FI (Yoga-Men)',
      '254101',
      '9218226102',
      'jain.subit@nith.ac.in',
    ],
    [
      'Dr. Priyanka, DoCSE',
      'FI (Yoga-Women)',
      '254401',
      '9896084010',
      'dr.priyanka@nith.ac.in',
    ],
    [
      'Dr. Neetu Kapoor, DoARCH',
      'FI (Institute Magazine & News Bulletin)',
      '254930',
      '9418217161',
      'neetu@nith.ac.in',
    ],
    [
      'Dr. Saurabh Kumar, DoECE',
      'FI (ISTE)',
      '254601',
      '9772976467',
      'saurabh@nith.ac.in',
    ],
    [
      'Dr. Mahesh Angira, DoECE',
      'FI (i-STEM)',
      '254601',
      '9772976467',
      'mahesh_angira@nith.ac.in',
    ],
    [
      'Dr. Hammad Saddiqi, DoCHE',
      'AFI (i-STEM)',
      '254882',
      '--',
      'hammad@nith.ac.in',
    ],
    [
      'Dr. Amrit Kumar Roy, DoCE',
      'FI (NCC-Naval Wing)',
      '254306',
      '9882776744',
      'amritroy@nith.ac.in',
    ],
    [
      'Dr. Aniket Sharma, DoARCH',
      'FI (NCC-ARMY WING)',
      '254928',
      '9418016996',
      'aniket@nith.ac.in',
    ],
    [
      'Dr. Aman Kumar, DoECE',
      'FI (NCC-AIR WING)',
      '254601',
      '7307364773',
      'akumar@nith.ac.in',
    ],
    [
      'Dr. Amit Bage, DoECE',
      'FI (NSS)',
      '254601',
      '8789470309',
      'abage@nith.ac.in',
    ],
    [
      'Dr. Nitin Gupta, DoCS&E',
      'FI (Students Scholarships & Mediclaim)',
      '254416',
      '9953996404',
      'nitin@nith.ac.in',
    ],
    [
      'Dr. Aniket Sharma, DoARCH',
      'FI (Security)',
      '254928',
      '9418016996',
      'aniket@nith.ac.in',
    ],
    [
      'Dr. Rakesh Sharma, DoECE',
      'FI (Vikshit Bharat@2047)',
      '254644',
      '9418511300',
      'rakesh.sharma@nith.ac.in',
    ],
    [
      'Dr. Sandeep Sharma, DoArch',
      'FI (Nashamukti Bharat)',
      '254924',
      '9418000416',
      'sandeep@nith.ac.in',
    ],
    [
      'Dr. Amanjeet Kaur, DoARCH',
      'FI (Horticulture)',
      '254916',
      '9418026647',
      'amanjeet@nith.ac.in',
    ],
    [
      'Dr. (Ms.) Rinshu, DoHSS',
      'AFI (Janjatia Gaurav Diwas cum Constitution Day)',
      '254101',
      '7978211574',
      'rinshu@nith.ac.in',
    ],
  ];

  const staff = [
    ['Sh. Raj Kumar', 'Sr. Assistant', '254084', '--', 'rkverma@nith.ac.in'],
    ['Sh. Ravi Das', 'Junior Assistant', '254084', '--', 'ravidasa@nith.ac.in'],
    ['Sh. Jiwan Kumar', 'Office Attendant SG-II', '--', '--', '--'],
  ];

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
            <span className="text-gray-400">Student</span>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              Student Welfare Functionaries
            </span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center py-24 md:py-32 px-6 md:px-12"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            Student Welfare Functionaries
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Contact details and responsibilities of student welfare
            functionaries
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Dean &amp; Senior Functionaries
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left table-fixed border-collapse">
              <colgroup>
                <col style={{ width: '6%' }} />
                <col style={{ width: '28%' }} />
                <col style={{ width: '30%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '24%' }} />
              </colgroup>
              <thead>
                <tr className="text-sm text-gray-500 border-b">
                  <th className="py-3 pr-6">Sl. No.</th>
                  <th className="py-3 pr-6">Name</th>
                  <th className="py-3 pr-6">Responsibility</th>
                  <th className="py-3 pr-6">Phone No.</th>
                  <th className="py-3 pr-6">Mobile No. / Email</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((r, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="py-3">{i + 1}</td>
                    <td className="py-3">{r[0]}</td>
                    <td className="py-3">{r[1]}</td>
                    <td className="py-3">{r[2]}</td>
                    <td className="py-3">
                      {r[3]} •{' '}
                      <a href={`mailto:${r[4]}`} className="text-[#800000]">
                        {r[4]}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Nodal Officers
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left table-fixed border-collapse">
              <colgroup>
                <col style={{ width: '6%' }} />
                <col style={{ width: '28%' }} />
                <col style={{ width: '30%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '24%' }} />
              </colgroup>
              <thead>
                <tr className="text-sm text-gray-500 border-b">
                  <th className="py-3 pr-6">Sl. No.</th>
                  <th className="py-3 pr-6">Name</th>
                  <th className="py-3 pr-6">Responsibility</th>
                  <th className="py-3 pr-6">Phone No.</th>
                  <th className="py-3 pr-6">Mobile No. / Email</th>
                </tr>
              </thead>
              <tbody>
                {nodal.map((r, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="py-3">{i + 1}</td>
                    <td className="py-3">{r[0]}</td>
                    <td className="py-3">{r[1]}</td>
                    <td className="py-3">{r[2]}</td>
                    <td className="py-3">
                      {r[3]} •{' '}
                      {r[4] !== '--' ? (
                        <a href={`mailto:${r[4]}`} className="text-[#800000]">
                          {r[4]}
                        </a>
                      ) : (
                        '--'
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Faculty In-Charge / Assistant Faculty In-Charge
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left table-fixed border-collapse">
              <colgroup>
                <col style={{ width: '6%' }} />
                <col style={{ width: '28%' }} />
                <col style={{ width: '30%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '24%' }} />
              </colgroup>
              <thead>
                <tr className="text-sm text-gray-500 border-b">
                  <th className="py-3 pr-6">Sl. No.</th>
                  <th className="py-3 pr-6">Name</th>
                  <th className="py-3 pr-6">Responsibility</th>
                  <th className="py-3 pr-6">Phone No.</th>
                  <th className="py-3 pr-6">Mobile No. / Email</th>
                </tr>
              </thead>
              <tbody>
                {faculty.map((r, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="py-3">{i + 1}</td>
                    <td className="py-3">{r[0]}</td>
                    <td className="py-3">{r[1]}</td>
                    <td className="py-3">{r[2]}</td>
                    <td className="py-3">
                      {r[3]} •{' '}
                      {r[4] !== '--' ? (
                        <a href={`mailto:${r[4]}`} className="text-[#800000]">
                          {r[4]}
                        </a>
                      ) : (
                        '--'
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Staff</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left table-fixed border-collapse">
              <colgroup>
                <col style={{ width: '6%' }} />
                <col style={{ width: '28%' }} />
                <col style={{ width: '30%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '24%' }} />
              </colgroup>
              <thead>
                <tr className="text-sm text-gray-500 border-b">
                  <th className="py-3 pr-6">Sl. No.</th>
                  <th className="py-3 pr-6">Name</th>
                  <th className="py-3 pr-6">Responsibility</th>
                  <th className="py-3 pr-6">Phone No.</th>
                  <th className="py-3 pr-6">Mobile No. / Email</th>
                </tr>
              </thead>
              <tbody>
                {staff.map((r, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="py-3">{i + 1}</td>
                    <td className="py-3">{r[0]}</td>
                    <td className="py-3">{r[1]}</td>
                    <td className="py-3">{r[2]}</td>
                    <td className="py-3">
                      {r[3]} •{' '}
                      {r[4] !== '--' ? (
                        <a href={`mailto:${r[4]}`} className="text-[#800000]">
                          {r[4]}
                        </a>
                      ) : (
                        '--'
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
