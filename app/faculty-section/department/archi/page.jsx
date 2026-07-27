"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Microscope, Network } from "lucide-react";

const menuItems = [
  { label: "About", href: "/faculty-section/department/archi" },
  {
    label: "Vision & Mission",
    href: "/faculty-section/department/archi/vision-mission",
  },
  { label: "Faculty", href: "/faculty-section/department/archi/faculty" },
  { label: "Staff", href: "/faculty-section/department/archi/staff" },
  {
    label: "Programmes",
    href: "/faculty-section/department/archi/programme-offered",
  },
  { label: "Labs", href: "/faculty-section/department/archi/labs" },
  {
    label: "Research",
    href: "/faculty-section/department/archi/research-publications",
  },
  { label: "Contact", href: "/faculty-section/department/archi/contact" },
];

const academicProgrammes = [
  {
    name: "Bachelor Programmes Offered",
    Icon: GraduationCap,
    details:
      "Five-year undergraduate programme (B. Arch) including semester training as per norms of Council of Architecture.",
  },
  {
    name: "Master Programmes Offered",
    Icon: Microscope,
    details:
      "Two-year postgraduate programme (M. Arch. in Sustainable Architecture) with focus on energy efficiency and sustainable design.",
  },
  {
    name: "Doctoral Programmes Offered",
    Icon: Network,
    details:
      "Advanced doctoral research programmes (Ph.D.) in Architecture, Urban Planning, Hill Architecture, and Heritage Conservation.",
  },
];

export default function ArchiDepartmentPage() {
  const pathname = usePathname() || "";

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          {/* Hero / Banner */}
          <div className="bg-gradient-to-r from-white via-slate-50 to-gray-50 p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
                  Department of Architecture
                </h1>
                <p className="mt-2 text-gray-600 max-w-2xl">
                  Shaping sustainable, context-sensitive design and research.
                </p>
              </div>

              <div className="hidden sm:block">
                <div className="w-52 h-28 bg-[url('/images/archi-banner.jpg')] bg-cover bg-center rounded-md shadow-inner"></div>
              </div>
            </div>
          </div>

          {/* Top Navigation (replaces sidebar) */}
          <nav className="border-t border-b border-gray-100 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
              <ul className="flex flex-wrap gap-2 py-3 overflow-x-auto">
                {menuItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href} className="list-none">
                      <Link
                        href={item.href}
                        className={`inline-block px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                          active
                            ? "bg-red-700 text-white shadow"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <div className="p-6 sm:p-10">
            <div className="max-w-3xl">
              <header className="mb-6">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                  About the Department
                </h1>
                <p className="mt-2 text-gray-600">
                  The Department of Architecture blends technical skill,
                  regional knowledge and sustainable design to address the
                  challenges of hill regions.
                </p>
              </header>

              <section className="mb-6 text-gray-700 leading-7">
                <p>
                  Architecture is a multidisciplinary field concerned with the
                  planning, design and construction of the built environment.
                  Our department emphasises design excellence, contextual
                  research and practical training for students, preparing them
                  to contribute to both professional practice and academia.
                </p>
                <p className="mt-4">
                  Established in 2000, the Department offers an engaging
                  academic environment with modern laboratories, well-equipped
                  classrooms, and strong student–faculty interaction. The
                  curriculum is periodically reviewed to remain aligned with
                  contemporary practice and regulatory standards.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Strength of the Department
                </h2>
                <p className="mt-3 text-gray-700 leading-7">
                  Our key strengths are experienced faculty across several
                  specialisations, dedicated research in hill architecture and
                  heritage conservation, and laboratory facilities that support
                  both teaching and applied projects. The department maintains
                  close links with industry and regional stakeholders to give
                  students real-world exposure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Academic Programmes
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                  {academicProgrammes.map((programme) => (
                    <div
                      key={programme.name}
                      className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-red-50 text-red-700 inline-flex items-center justify-center">
                          <programme.Icon size={20} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 m-0">
                          {programme.name}
                        </h3>
                      </div>

                      <p className="mt-4 text-gray-600 flex-1">
                        {programme.details}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
