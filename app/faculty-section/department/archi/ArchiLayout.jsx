"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function ArchiLayout({ children }) {
  const pathname = usePathname() || "";

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-800">
                Department of Architecture
              </h2>
              <p className="text-sm text-gray-600 hidden sm:block">
                National Institute of Technology
              </p>
            </div>
          </div>

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

          <div className="p-6 sm:p-8">
            <div className="max-w-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
