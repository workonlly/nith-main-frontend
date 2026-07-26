"use client";

import Link from "next/link";
import "./chemistry_labs.css";

const menuItems = [
  { label: "About Us", href: "/faculty-section/department/chemistry" },
  {
    label: "Vision & Mission",
    href: "/faculty-section/department/chemistry/vision-mission",
  },
  { label: "Faculty", href: "/faculty-section/department/chemistry/faculty" },
  { label: "Staff", href: "/faculty-section/department/chemistry/staff" },
  {
    label: "Programme Offered",
    href: "/faculty-section/department/chemistry/programme-offered",
  },
  {
    label: "Labs",
    href: "/faculty-section/department/chemistry/labs",
    active: true,
  },
  {
    label: "Research Publications",
    href: "/faculty-section/department/chemistry/research-publications",
  },
  { label: "Contact", href: "/faculty-section/department/chemistry/contact" },
];

const laboratories = ["PG Lab", "UG Lab 1", "UG Lab 2", "Research Lab"];

export default function ChemistryLabsPage() {
  return (
    <main className="chemistry-labs-page">
      <div className="chemistry-labs-shell">
        <aside
          className="chemistry-labs-sidebar"
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

        <section className="chemistry-labs-content">
          <h1>Department of Chemistry List of Laboratories</h1>

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
