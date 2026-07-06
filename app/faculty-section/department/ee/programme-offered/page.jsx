"use client";

import Link from "next/link";
import "./ee_programmes.css";

const menuItems = [
  { label: "About Us", href: "/faculty-section/department/ee" },
  {
    label: "Vision & Mission",
    href: "/faculty-section/department/ee/vision-mission",
  },
  { label: "Faculty", href: "/faculty-section/department/ee/faculty" },
  { label: "Staff", href: "/faculty-section/department/ee/staff" },
  {
    label: "Programme Offered",
    href: "/faculty-section/department/ee/programme-offered",
    active: true,
  },
  { label: "Labs", href: "/faculty-section/department/ee/labs" },
  {
    label: "Research Publications",
    href: "/faculty-section/department/ee/research-publications",
  },
  { label: "Contact", href: "/faculty-section/department/ee/contact" },
];

const programmes = [
  {
    name: "Bachelor Programmes Offered",
    description: "B.Tech in Electrical Engineering.",
  },
  {
    name: "Master Programmes Offered",
    description:
      "M.Tech in Power System, M.Tech in Signal Processing & Control, M.Tech in Condition Monitoring of Electrical Apparatus.",
  },
  {
    name: "Doctoral Programmes Offered",
    description:
      "Major Areas of Research: Power System deregulation, Voltage Stability, Power Quality, Power Transformer diagnostics, Hydrothermal Scheduling, Control Systems, Communication and Signal Processing etc.",
  },
];

export default function EEProgrammesPage() {
  return (
    <main className="ee-programmes-page">
      <div className="ee-programmes-shell">
        <aside
          className="ee-programmes-sidebar"
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

        <section className="ee-programmes-content">
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
