"use client";

import Link from "next/link";
import "./ee_staff.css";

const menuItems = [
  { label: "About Us", href: "/faculty-section/department/ee" },
  {
    label: "Vision & Mission",
    href: "/faculty-section/department/ee/vision-mission",
  },
  { label: "Faculty", href: "/faculty-section/department/ee/faculty" },
  {
    label: "Staff",
    href: "/faculty-section/department/ee/staff",
    active: true,
  },
  {
    label: "Programme Offered",
    href: "/faculty-section/department/ee/programme-offered",
  },
  { label: "Labs", href: "/faculty-section/department/ee/labs" },
  {
    label: "Research Publications",
    href: "/faculty-section/department/ee/research-publications",
  },
  { label: "Contact", href: "/faculty-section/department/ee/contact" },
];

const officeStaff = [
  {
    serial: "1",
    name: "Sh. Raman Thakur",
    designation: "Asstt. SG-II",
    phone: "254501",
    email: "raman@nith.ac.in",
  },
];

const technicalStaff = [
  {
    serial: "1",
    name: "Sh. Rajesh Sharma",
    designation: "Sr. Technician",
    phone: "-",
    email: "-",
  },
  {
    serial: "2",
    name: "Sh. Chet Ram Rana",
    designation: "Technician SG-II",
    phone: "254508",
    email: "chetram68@nith.ac.in",
  },
  {
    serial: "3",
    name: "Sh. Vikas Agrahari",
    designation: "Technician",
    phone: "-",
    email: "-",
  },
  {
    serial: "4",
    name: "Sh. Shubham Tomar",
    designation: "Technician",
    phone: "-",
    email: "-",
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

export default function EEStaffPage() {
  return (
    <main className="ee-staff-page">
      <div className="ee-staff-shell">
        <aside className="ee-staff-sidebar" aria-label="Department navigation">
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

        <section className="ee-staff-content">
          <div className="staff-table-wrap">
            <table className="staff-table">
              <caption>Office Staff</caption>
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
                <StaffRows rows={officeStaff} />

                <tr className="staff-section-row">
                  <td colSpan="5">Technical Staff</td>
                </tr>

                <StaffRows rows={technicalStaff} />
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
