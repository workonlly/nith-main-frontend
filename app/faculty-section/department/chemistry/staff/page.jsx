"use client";

import Link from "next/link";
import "./chemistry_staff.css";

const menuItems = [
  { label: "About Us", href: "/faculty-section/department/chemistry" },
  {
    label: "Vision & Mission",
    href: "/faculty-section/department/chemistry/vision-mission",
  },
  { label: "Faculty", href: "/faculty-section/department/chemistry/faculty" },
  {
    label: "Staff",
    href: "/faculty-section/department/chemistry/staff",
    active: true,
  },
  {
    label: "Programme Offered",
    href: "/faculty-section/department/chemistry/programme-offered",
  },
  { label: "Labs", href: "/faculty-section/department/chemistry/labs" },
  {
    label: "Research Publications",
    href: "/faculty-section/department/chemistry/research-publications",
  },
  { label: "Contact", href: "/faculty-section/department/chemistry/contact" },
];

const officeTechnicalStaff = [
  {
    serial: "1",
    name: "Sh. Arun Kumar",
    designation: "Technician",
    phone: "-",
    email: "--",
  },
];

function StaffRows({ rows }) {
  return rows.map((member) => (
    <tr key={`${member.serial}-${member.name}`}>
      <td>{member.serial}</td>
      <td>{member.name}</td>
      <td>{member.designation}</td>
      <td>{member.phone}</td>
      <td>{member.email}</td>
    </tr>
  ));
}

export default function ChemistryStaffPage() {
  return (
    <main className="chemistry-staff-page">
      <div className="chemistry-staff-shell">
        <aside
          className="chemistry-staff-sidebar"
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

        <section className="chemistry-staff-content">
          <div className="staff-table-wrap">
            <table className="staff-table">
              <caption>Office / Technical Staff</caption>
              <thead>
                <tr>
                  <th>Sl. No.</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Phone No.</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <StaffRows rows={officeTechnicalStaff} />
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
