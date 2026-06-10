'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface FormData {
  fullName: string;
  rollNumber: string;
  email: string;
  mobile: string;

  degree: string;
  department: string;
  passingYear: string;

  currentOrganization: string;
  designation: string;
  industry: string;
  currentCity: string;
  currentCountry: string;

  areasOfInterest: string[];
  willingToSupport: string;

  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export default function AlumniRegistration() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    rollNumber: '',
    email: '',
    mobile: '',
    degree: '',
    department: '',
    passingYear: '',
    currentOrganization: '',
    designation: '',
    industry: '',
    currentCity: '',
    currentCountry: '',
    areasOfInterest: [],
    willingToSupport: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const degrees = ['B.Tech', 'M.Tech', 'Ph.D', 'MCA', 'MSc', 'MBA', 'Other'];

  const departments = [
    'Computer Science & Engineering',
    'Electronics & Communication Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Chemical Engineering',
    'Architecture',
    'Physics',
    'Chemistry',
    'Mathematics',
    'Management Studies',
    'Other',
  ];

  const industries = [
    'Information Technology',
    'Manufacturing',
    'Finance & Banking',
    'Healthcare',
    'Education',
    'Government',
    'Consulting',
    'Research & Development',
    'Telecommunications',
    'Energy',
    'Aerospace',
    'Automotive',
    'Other',
  ];

  const interestOptions = [
    'Mentoring Students',
    'Guest Lectures',
    'Recruitment Support',
    'Research Collaboration',
    'Fundraising',
    'Event Organization',
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.mobile)) {
      newErrors.mobile = 'Invalid mobile number';
    }

    if (!formData.degree) {
      newErrors.degree = 'Degree is required';
    }

    if (!formData.department) {
      newErrors.department = 'Department is required';
    }

    if (!formData.passingYear) {
      newErrors.passingYear = 'Passing year is required';
    }

    if (!formData.currentOrganization.trim()) {
      newErrors.currentOrganization = 'Current organization is required';
    }

    if (!formData.designation.trim()) {
      newErrors.designation = 'Designation is required';
    }

    if (!formData.industry) {
      newErrors.industry = 'Industry is required';
    }

    if (!formData.currentCity.trim()) {
      newErrors.currentCity = 'Current city is required';
    }

    if (!formData.currentCountry.trim()) {
      newErrors.currentCountry = 'Current country is required';
    }

    if (!formData.willingToSupport) {
      newErrors.willingToSupport =
        'Please indicate your willingness to support';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleInterestChange = (interest: string) => {
    setFormData((prev) => {
      const currentInterests = prev.areasOfInterest;
      const newInterests = currentInterests.includes(interest)
        ? currentInterests.filter((i) => i !== interest)
        : [...currentInterests, interest];
      return { ...prev, areasOfInterest: newInterests };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would make the actual API call
      // const response = await fetch('/api/alumni/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      setSubmitSuccess(true);
      setTimeout(() => {
        setFormData({
          fullName: '',
          rollNumber: '',
          email: '',
          mobile: '',
          degree: '',
          department: '',
          passingYear: '',
          currentOrganization: '',
          designation: '',
          industry: '',
          currentCity: '',
          currentCountry: '',
          areasOfInterest: [],
          willingToSupport: '',
          consent: false,
        });
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError(
        'An error occurred while submitting the form. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      rollNumber: '',
      email: '',
      mobile: '',
      degree: '',
      department: '',
      passingYear: '',
      currentOrganization: '',
      designation: '',
      industry: '',
      currentCity: '',
      currentCountry: '',
      areasOfInterest: [],
      willingToSupport: '',
      consent: false,
    });
    setErrors({});
    setSubmitError('');
    setSubmitSuccess(false);
  };

  return (
    <>
      
      <div className="min-h-screen bg-gray-50">
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
              <span className="text-gray-400">Alumni</span>
              <span>›</span>
              <span className="text-[#800000] font-medium">Registration</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-br from-[#631012] via-[#7a1a1d] to-[#4a0c0e] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Alumni Registration
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                Join the official NIT Hamirpur Alumni Network. Stay connected,
                contribute to your alma mater, and be part of a thriving
                community of accomplished professionals.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-10 mb-8 shadow-sm"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#631012] to-[#7a1a1d] rounded-2xl mb-4 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  About Alumni Registration
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Join thousands of NITH alumni worldwide. Registration takes
                  only a few minutes and opens doors to lifelong connections and
                  opportunities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Who Can Register
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        All graduates of National Institute of Technology,
                        Hamirpur, across
                        <strong> all programs and batches</strong>. Whether you
                        graduated decades ago or recently, we welcome you to
                        join our alumni network.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Purpose & Benefits
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Maintain an <strong>updated alumni database</strong>,
                        facilitate networking opportunities, stay informed about
                        institute developments, events, and initiatives. Connect
                        with fellow alumni globally.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        How We Use Your Data
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Your data is used{' '}
                        <strong>solely for alumni engagement</strong>: event
                        invitations, newsletters, mentorship programs,
                        professional networking, and keeping you connected with
                        your alma mater.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-amber-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Privacy & Security
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        We are{' '}
                        <strong>committed to protecting your privacy</strong>.
                        Your information will not be shared with third parties
                        without consent and is stored securely in compliance
                        with data protection regulations.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="mt-6 pt-6 border-t border-blue-200">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <svg
                    className="w-5 h-5 text-[#631012]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Note:</strong> All fields marked with{' '}
                    <span className="text-red-500">*</span> are mandatory.
                    Registration typically takes 5-7 minutes to complete.
                  </span>
                </div>
              </div>
            </motion.div>

            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-900">
                        Registration Successful!
                      </h3>
                      <p className="text-green-700 mt-1">
                        Thank you for registering. You will receive a
                        confirmation email shortly.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {submitError && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-900">
                      Submission Error
                    </h3>
                    <p className="text-red-700 mt-1">{submitError}</p>
                  </div>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-sm p-6 md:p-10"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#631012] text-white font-bold">
                      1
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Personal Information
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#631012] focus:border-transparent transition-all ${
                          errors.fullName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="rollNumber"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Roll Number{' '}
                        <span className="text-gray-400 text-xs">
                          (if available)
                        </span>
                      </label>
                      <input
                        type="text"
                        id="rollNumber"
                        name="rollNumber"
                        value={formData.rollNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#631012] focus:border-transparent transition-all"
                        placeholder="e.g., CSE-19201"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#631012] focus:border-transparent transition-all ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="mobile"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#631012] focus:border-transparent transition-all ${
                          errors.mobile ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="+91 98765 43210"
                      />
                      {errors.mobile && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.mobile}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#631012] text-white font-bold">
                      2
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Academic Information
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="degree"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Degree / Program <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="degree"
                        name="degree"
                        value={formData.degree}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#631012] focus:border-transparent transition-all ${
                          errors.degree ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select Degree</option>
                        {degrees.map((degree) => (
                          <option key={degree} value={degree}>
                            {degree}
                          </option>
                        ))}
                      </select>
                      {errors.degree && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.degree}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="department"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Department <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#631012] focus:border-transparent transition-all ${
                          errors.department
                            ? 'border-red-500'
                            : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select Department</option>
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </select>
                      {errors.department && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.department}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="passingYear"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Batch / Passing Year{' '}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="passingYear"
                        name="passingYear"
                        value={formData.passingYear}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#631012] focus:border-transparent transition-all ${
                          errors.passingYear
                            ? 'border-red-500'
                            : 'border-gray-300'
                        }`}
                        placeholder="e.g., 2020 or 2016-2020"
                      />
                      {errors.passingYear && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.passingYear}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#631012] text-white font-bold">
                      3
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Professional Information
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="currentOrganization"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Current Organization{' '}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="currentOrganization"
                        name="currentOrganization"
                        value={formData.currentOrganization}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#631012] focus:border-transparent transition-all ${
                          errors.currentOrganization
                            ? 'border-red-500'
                            : 'border-gray-300'
                        }`}
                        placeholder="Company or Organization name"
                      />
                      {errors.currentOrganization && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.currentOrganization}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="designation"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Designation <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#631012] focus:border-transparent transition-all ${
                          errors.designation
                            ? 'border-red-500'
                            : 'border-gray-300'
                        }`}
                        placeholder="Your job title"
                      />
                      {errors.designation && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.designation}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="industry"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Industry / Sector{' '}
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#631012] focus:border-transparent transition-all ${
                          errors.industry ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select Industry</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind}>
                            {ind}
                          </option>
                        ))}
                      </select>
                      {errors.industry && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.industry}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="currentCity"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Current City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="currentCity"
                        name="currentCity"
                        value={formData.currentCity}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#631012] focus:border-transparent transition-all ${
                          errors.currentCity
                            ? 'border-red-500'
                            : 'border-gray-300'
                        }`}
                        placeholder="City name"
                      />
                      {errors.currentCity && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.currentCity}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="currentCountry"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Current Country <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="currentCountry"
                        name="currentCountry"
                        value={formData.currentCountry}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#631012] focus:border-transparent transition-all ${
                          errors.currentCountry
                            ? 'border-red-500'
                            : 'border-gray-300'
                        }`}
                        placeholder="Country name"
                      />
                      {errors.currentCountry && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.currentCountry}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#631012] text-white font-bold">
                      4
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Additional Information{' '}
                      <span className="text-gray-400 text-lg">(Optional)</span>
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Areas of Interest
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {interestOptions.map((interest) => (
                          <label
                            key={interest}
                            className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                          >
                            <input
                              type="checkbox"
                              checked={formData.areasOfInterest.includes(
                                interest
                              )}
                              onChange={() => handleInterestChange(interest)}
                              className="w-5 h-5 text-[#631012] rounded focus:ring-[#631012]"
                            />
                            <span className="text-gray-700">{interest}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Willingness to Support Alumni Activities{' '}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="willingToSupport"
                            value="Yes"
                            checked={formData.willingToSupport === 'Yes'}
                            onChange={handleInputChange}
                            className="w-5 h-5 text-[#631012] focus:ring-[#631012]"
                          />
                          <span className="text-gray-700">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="willingToSupport"
                            value="No"
                            checked={formData.willingToSupport === 'No'}
                            onChange={handleInputChange}
                            className="w-5 h-5 text-[#631012] focus:ring-[#631012]"
                          />
                          <span className="text-gray-700">No</span>
                        </label>
                      </div>
                      {errors.willingToSupport && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.willingToSupport}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Privacy & Consent
                    </h3>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        className={`mt-1 w-5 h-5 text-[#631012] rounded focus:ring-[#631012] ${
                          errors.consent ? 'border-red-500' : ''
                        }`}
                      />
                      <span className="text-sm text-gray-700">
                        I confirm that the information provided is correct and
                        consent to its use for official alumni-related
                        communication. I have read and agree to the{' '}
                        <Link
                          href="/privacy-policy"
                          className="text-[#631012] hover:underline"
                        >
                          Privacy Policy
                        </Link>
                        . <span className="text-red-500">*</span>
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.consent}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`flex-1 px-8 py-4 rounded-lg font-semibold text-white transition-all shadow-lg ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-[#631012] hover:bg-[#7a1a1d] shadow-[#631012]/25'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Submit Registration'
                    )}
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={handleReset}
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`px-8 py-4 rounded-lg font-semibold border-2 transition-all ${
                      isSubmitting
                        ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                        : 'border-[#631012] text-[#631012] hover:bg-[#631012] hover:text-white'
                    }`}
                  >
                    Reset Form
                  </motion.button>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 bg-white rounded-2xl shadow-sm p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Need Help?
              </h3>
              <p className="text-gray-700 mb-4">
                If you encounter any issues during registration or have
                questions, please contact the Alumni Relations Office:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#631012]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Email:{' '}
                    <a
                      href="mailto:alumni@nith.ac.in"
                      className="text-[#631012] hover:underline"
                    >
                      alumni@nith.ac.in
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#631012]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-700">Phone: +91-1972-254802</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      
    </>
  );
}
