'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CreditCard, AlertCircle, Mail, Home } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const fadeInScale = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Certificate fees data
const certificateFees = [
  {
    slNo: 1,
    name: {
      en: 'Bonafide Certificate',
      hi: 'बोनाफाइड प्रमाण पत्र',
    },
    fee: '₹500',
  },
  {
    slNo: 2,
    name: {
      en: 'Character Certificate',
      hi: 'चरित्र प्रमाण पत्र',
    },
    fee: '₹500',
  },
  {
    slNo: 3,
    name: {
      en: 'Migration Certificate',
      hi: 'माइग्रेशन प्रमाण पत्र',
    },
    fee: '₹2,000',
  },
  {
    slNo: 4,
    name: {
      en: 'Transcript (within India)',
      hi: 'ट्रांसक्रिप्ट (भारत में)',
    },
    fee: '₹2,000 ',
  },
  {
    slNo: 5,
    name: {
      en: 'Transcript (outside India)',
      hi: 'ट्रांसक्रिप्ट (भारत के बाहर)',
    },
    fee: '₹5,000 ',
  },
  {
    slNo: 6,
    name: {
      en: 'Misc. (Backlog, Rank, Verification/Attestation of DMC/Degree etc.)',
      hi: 'अन्य (बैकलॉग, रैंक, सत्यापन/प्रमाणन आदि)',
    },
    fee: '₹500 ',
  },
  {
    slNo: 7,
    name: {
      en: 'Duplicate Grade Card / Duplicate Provisional Degree / Degree Certificate',
      hi: 'डुप्लिकेट ग्रेड कार्ड / डुप्लिकेट प्रोविजनल डिग्री / डिग्री प्रमाण पत्र',
    },
    fee: '₹1,000 ',
  },
  {
    slNo: 8,
    name: {
      en: 'Medium of Instruction Certificate',
      hi: 'शिक्षण माध्यम प्रमाण पत्र',
    },
    fee: '₹500',
  },
  {
    slNo: 9,
    name: {
      en: 'Verification of Degree (within India)',
      hi: 'डिग्री सत्यापन (भारत में)',
    },
    fee: '₹1,000',
  },
  {
    slNo: 10,
    name: {
      en: 'Verification of Degree (outside India)',
      hi: 'डिग्री सत्यापन (भारत के बाहर)',
    },
    fee: '$100',
  },
  {
    slNo: 11,
    name: {
      en: 'Verification through Govt./Govt.-Aided Institutions',
      hi: 'सरकारी/सरकारी सहायता प्राप्त संस्थानों के माध्यम से सत्यापन',
    },
    fee: '0',
  },
];

export default function AlumniAssist() {
  const language = useSelector((state: RootState) => state.language.value);
  return (
    <div className="min-h-screen bg-white">
      

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-[#800000] transition-colors duration-200"
            >
              {language === 'en' ? 'Home' : 'होम'}
            </Link>
            <span>›</span>
            <span className="text-gray-400">
              {language === 'en' ? 'Alumni' : 'पूर्व छात्र'}
            </span>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              {language === 'en' ? 'Alumni Assist' : 'अलुम्नाई सहायता'}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#631012] via-[#7a1a1d] to-[#4a0c0e] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'en' ? 'Alumni Assist' : 'अलुम्नाई सहायता'}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              {language === 'en'
                ? 'This section provides important procedures, rules, and assistance details for alumni of NIT Hamirpur.'
                : 'यह अनुभाग एनआईटी हमीरपुर के पूर्व छात्रों के लिए महत्वपूर्ण प्रक्रियाएं, नियम और सहायता विवरण प्रदान करता है।'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-white via-gray-50/30 to-white">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section 1: Duplicate Degree Certificate */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInScale}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
          >
            <div className="bg-[#800000] px-6 py-4">
              <h2 className="text-lg md:text-xl font-semibold text-white">
                {language === 'en'
                  ? 'Procedure for Issue of Duplicate Degree Certificate'
                  : 'डुप्लिकेट डिग्री प्रमाण पत्र जारी करने की प्रक्रिया'}
              </h2>
            </div>
            <div className="p-6">
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  {language === 'en'
                    ? 'Register an F.I.R. for loss of Detailed Marks Card / Semester Grade Report / Degree.'
                    : 'विस्तृत अंक पत्र/सेमेस्टर ग्रेड रिपोर्ट/डिग्री की हानि के लिए एफ.आई.आर. दर्ज करें।'}
                </li>
                <li>
                  {language === 'en'
                    ? 'After waiting 15 days, advertise the loss in a National daily newspaper.'
                    : '15 दिन प्रतीक्षा के बाद, राष्ट्रीय दैनिक समाचार पत्र में हानि का विज्ञापन दें।'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Apply with a copy of the newspaper cutting to:'
                    : 'समाचार पत्र की कटिंग की प्रति के साथ आवेदन करें:'}
                  <div className="mt-2 ml-6 text-sm">
                    <p>
                      <span className="font-medium">
                        {language === 'en' ? 'To:' : 'प्रति:'}
                      </span>{' '}
                      <a
                        href="mailto:ar-acad@nith.ac.in"
                        className="text-[#800000] hover:underline"
                      >
                        ar-acad@nith.ac.in
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">
                        {language === 'en' ? 'CC:' : 'सीसी:'}
                      </span>{' '}
                      <a
                        href="mailto:certificate-acad@nith.ac.in"
                        className="text-[#800000] hover:underline"
                      >
                        certificate-acad@nith.ac.in
                      </a>
                    </p>
                  </div>
                </li>
                <li>
                  {language === 'en'
                    ? 'Submit an affidavit on Non-Judicial stamp paper of Rs. 10/-.'
                    : '₹10/- के गैर-न्यायिक स्टाम्प पेपर पर शपथ पत्र जमा करें।'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Deposit/remit the requisite fee in cash to the Cashier or via Bank Draft in favour of Registrar, NIT Hamirpur (HP).'
                    : 'आवश्यक शुल्क कैशियर को नकद या बैंक ड्राफ्ट के माध्यम से रजिस्ट्रार, एनआईटी हमीरपुर (एचपी) के पक्ष में जमा करें।'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Duplicate Degree Certificate will be issued by the Registrar (or Director-cum-Chairman, Senate in absence).'
                    : 'डुप्लिकेट डिग्री प्रमाण पत्र रजिस्ट्रार (या अनुपस्थिति में निदेशक-सह-अध्यक्ष, सीनेट) द्वारा जारी किया जाएगा।'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Duplicate degree will be prepared like the original, with "Sd/-" in place of signature.'
                    : 'डुप्लिकेट डिग्री मूल की तरह तैयार की जाएगी, जिसमें हस्ताक्षर के स्थान पर "Sd/-" होगा।'}
                </li>
              </ol>
            </div>
          </motion.div>

          {/* Section 2: Duplicate Marks Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInScale}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
          >
            <div className="bg-[#800000] px-6 py-4">
              <h2 className="text-lg md:text-xl font-semibold text-white">
                {language === 'en'
                  ? 'Procedure for Issue of Duplicate Detailed Marks Cards / Semester Grade Reports'
                  : 'डुप्लिकेट विस्तृत अंक पत्र/सेमेस्टर ग्रेड रिपोर्ट जारी करने की प्रक्रिया'}
              </h2>
            </div>
            <div className="p-6">
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  {language === 'en'
                    ? 'Issued by the Academic Section.'
                    : 'शैक्षणिक अनुभाग द्वारा जारी किया गया।'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Submission of F.I.R. copy in case of loss.'
                    : 'हानि की स्थिति में एफ.आई.आर. की प्रति जमा करें।'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Payment of requisite fee.'
                    : 'आवश्यक शुल्क का भुगतान।'}
                </li>
                <li>
                  {language === 'en' ? 'Apply to:' : 'आवेदन करें:'}
                  <div className="mt-2 ml-6 text-sm">
                    <p>
                      <span className="font-medium">
                        {language === 'en' ? 'To:' : 'प्रति:'}
                      </span>{' '}
                      <a
                        href="mailto:ar-acad@nith.ac.in"
                        className="text-[#800000] hover:underline"
                      >
                        ar-acad@nith.ac.in
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">
                        {language === 'en' ? 'CC:' : 'सीसी:'}
                      </span>{' '}
                      <a
                        href="mailto:certificate-acad@nith.ac.in"
                        className="text-[#800000] hover:underline"
                      >
                        certificate-acad@nith.ac.in
                      </a>
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* Section 3: Migration Certificate */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInScale}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
          >
            <div className="bg-[#800000] px-6 py-4">
              <h2 className="text-lg md:text-xl font-semibold text-white">
                {language === 'en'
                  ? 'Procedure for Issue of Migration Certificate'
                  : 'माइग्रेशन प्रमाण पत्र जारी करने की प्रक्रिया'}
              </h2>
            </div>
            <div className="p-6">
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  {language === 'en'
                    ? 'Issued by the Academic Section.'
                    : 'शैक्षणिक अनुभाग द्वारा जारी किया गया।'}
                </li>
                <li>
                  {language === 'en'
                    ? 'Submission of application along with requisite fee.'
                    : 'आवश्यक शुल्क के साथ आवेदन जमा करें।'}
                </li>
                <li>
                  {language === 'en' ? 'Apply to:' : 'आवेदन करें:'}
                  <div className="mt-2 ml-6 text-sm">
                    <p>
                      <span className="font-medium">
                        {language === 'en' ? 'To:' : 'प्रति:'}
                      </span>{' '}
                      <a
                        href="mailto:ar-acad@nith.ac.in"
                        className="text-[#800000] hover:underline"
                      >
                        ar-acad@nith.ac.in
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">
                        {language === 'en' ? 'CC:' : 'सीसी:'}
                      </span>{' '}
                      <a
                        href="mailto:certificate-acad@nith.ac.in"
                        className="text-[#800000] hover:underline"
                      >
                        certificate-acad@nith.ac.in
                      </a>
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* Section 4: Charges Table */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInScale}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-gradient-to-r from-[#800000] to-[#631012] px-6 py-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                {language === 'en'
                  ? 'Charges for Issue of Certificates / Documents'
                  : 'प्रमाण पत्र/दस्तावेज जारी करने के लिए शुल्क'}
              </h2>
            </div>
            <div className="p-6 md:p-8">
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-4 text-left text-sm font-bold text-gray-700 border-b-2 border-gray-200 rounded-tl-lg w-20">
                        Sl. No.
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-bold text-gray-700 border-b-2 border-gray-200">
                        Name of Certificate / Document
                      </th>
                      <th className="px-4 py-4 text-right text-sm font-bold text-gray-700 border-b-2 border-gray-200 rounded-tr-lg w-40">
                        Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {certificateFees.map((item, index) => (
                      <tr
                        key={item.slNo}
                        className={`${
                          index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                        } hover:bg-[#800000]/5 transition-colors duration-200`}
                      >
                        <td className="px-4 py-4 text-sm text-gray-600 border-b border-gray-100">
                          {item.slNo}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700 border-b border-gray-100">
                          {language === 'en' ? item.name.en : item.name.hi}
                        </td>
                        <td className="px-4 py-4 text-sm text-right font-semibold text-[#800000] border-b border-gray-100">
                          {item.fee}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Stacked View */}
              <div className="md:hidden space-y-4">
                {certificateFees.map((item) => (
                  <div
                    key={item.slNo}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-gray-500">
                        #{item.slNo}
                      </span>
                      <span className="text-sm font-bold text-[#800000]">
                        {item.fee}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Section 5: Important Note */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInScale}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl shadow-lg border border-amber-200 overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-amber-800 mb-2">
                    {language === 'en' ? 'Important Note' : 'महत्वपूर्ण सूचना'}
                  </h3>
                  <p className="text-amber-900/80 leading-relaxed">
                    {language === 'en'
                      ? 'These formalities are not required in case of application due to mutilation of documents. In such cases, the applicant must attach the mutilated certificate/document along with the application and requisite fee.'
                      : 'दस्तावेज़ के क्षतिग्रस्त होने के कारण आवेदन की स्थिति में ये औपचारिकताएँ आवश्यक नहीं हैं। ऐसे मामलों में, आवेदक को क्षतिग्रस्त प्रमाण पत्र/दस्तावेज़ को आवेदन और आवश्यक शुल्क के साथ संलग्न करना चाहिए।'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
}
