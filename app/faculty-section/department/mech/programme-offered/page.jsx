"use client";

import Link from "next/link";
import "./mech_programmes.css";

const menuItems = [
  { label: "About Us", href: "/faculty-section/department/mech" },
  {
    label: "Vision & Mission",
    href: "/faculty-section/department/mech/vision-mission",
  },
  { label: "Faculty", href: "/faculty-section/department/mech/faculty" },
  { label: "Staff", href: "/faculty-section/department/mech/staff" },
  {
    label: "Programme Offered",
    href: "/faculty-section/department/mech/programme-offered",
    active: true,
  },
  { label: "Labs", href: "/faculty-section/department/mech/labs" },
  {
    label: "Research Publications",
    href: "/faculty-section/department/mech/research-publications",
  },
  { label: "Contact", href: "/faculty-section/department/mech/contact" },
];

const programmes = [
  {
    name: "Bachelor Programmes Offered",
    description: (
      <Link href="https://nith.ac.in/bachelor-course-structure-syllabus">
        Bachelor Course Structure & Syllabus
      </Link>
    ),
  },
  {
    name: "Master Programmes Offered",
    description: (
      <Link href="https://nith.ac.in/master-course-structure-syllabus">
        Master Course Structure & Syllabus
      </Link>
    ),
  },
  {
    name: "Doctoral Programmes Offered",
    description: (
      <Link href="https://www.nith.ac.in/mechanical-engineering#">
        Doctoral Programme Information
      </Link>
    ),
  },
];

export default function MechProgrammesPage() {
  return (
    <main className="mech-programmes-page">
      <div className="mech-programmes-shell">
        <aside
          className="mech-programmes-sidebar"
          aria-label="Department navigation"
        >
          <nav>
            {menuItems.map((item) => (
              <Link
                className={item.active ? "active" : ""}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <section className="mech-programmes-content">
          <h1>Programmes Offered</h1>

          <div className="programmes-table-wrapper">
            <table className="programmes-table">
              <thead>
                <tr>
                  <th>Sl. No.</th>
                  <th>Programmes Offered</th>
                </tr>
              </thead>
              <tbody>
                {programmes.map((prog, index) => (
                  <tr key={prog.name}>
                    <td>{index + 1}</td>
                    <td>
                      <strong>{prog.name}</strong>
                      <p className="programme-summary">{prog.description}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
