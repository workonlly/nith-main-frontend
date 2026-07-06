"use client";

import Link from "next/link";
import "./ee_labs.css";

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
  },
  { label: "Labs", href: "/faculty-section/department/ee/labs", active: true },
  {
    label: "Research Publications",
    href: "/faculty-section/department/ee/research-publications",
  },
  { label: "Contact", href: "/faculty-section/department/ee/contact" },
];

const laboratories = [
  "Basic Electrical Engineering Lab",
  "Circuit Theory Lab",
  "Electrical Machines Lab",
  "Electrical Measurement and Instrumentation Lab",
  "Power System Lab",
  "Control Engineering Lab",
  "Advanced Control Engineering Lab",
  "Power Electronics Lab",
  "High Voltage Engineering Lab",
  "Signal Processing and Biomedical Instrumentation Lab",
  "Microprocessor/Microcontroller Architecture & Interfacing Lab",
  "Transformer Diagnostics Lab",
  "Simulation Lab",
  "Transducer and Signal Conditioning Lab",
  "Electrical Workshop Lab",
];

export default function EELabsPage() {
  return (
    <main className="ee-labs-page">
      <div className="ee-labs-shell">
        <aside className="ee-labs-sidebar" aria-label="Department navigation">
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

        <section className="ee-labs-content">
          <h1>Department of Electrical Engineering List of Laboratories</h1>

          <table className="labs-table">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Laboratory Name</th>
              </tr>
            </thead>
            <tbody>
              {laboratories.map((lab, index) => (
                <tr key={lab}>
                  <td>{index + 1}</td>
                  <td>{lab}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
