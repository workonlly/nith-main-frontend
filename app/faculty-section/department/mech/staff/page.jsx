"use client";

import Link from "next/link";
import "./mech_staff.css";

const menuItems = [
  { label: "About Us", href: "/faculty-section/department/mech" },
  {
    label: "Vision & Mission",
    href: "/faculty-section/department/mech/vision-mission",
  },
  { label: "Faculty", href: "/faculty-section/department/mech/faculty" },
  {
    label: "Staff",
    href: "/faculty-section/department/mech/staff",
    active: true,
  },
  {
    label: "Programme Offered",
    href: "/faculty-section/department/mech/programme-offered",
  },
  { label: "Labs", href: "/faculty-section/department/mech/labs" },
  {
    label: "Research Publications",
    href: "/faculty-section/department/mech/research-publications",
  },
  { label: "Contact", href: "/faculty-section/department/mech/contact" },
];

const officeStaff = [
  { serial: "-", name: "No data", designation: "-", phone: "-", email: "-" },
];

const technicalStaff = [
  {
    serial: "1",
    name: "Sh. Dev Raj Thakur",
    designation: "Technical Assistant SG-II",
    phone: "254705",
    email: "-",
  },
  {
    serial: "2",
    name: "Sh. Partap Chand Dhiman",
    designation: "Technical Assistant (SG-I)",
    phone: "254704",
    email: "partapchand@nith.ac.in",
  },
  {
    serial: "3",
    name: "Sh. Surinder Gautam",
    designation: "Technician (SG-II)",
    phone: "254706",
    email: "skgautam@nith.ac.in",
  },
  {
    serial: "4",
    name: "Sh. Sumeet Raman",
    designation: "Senior Technician",
    phone: "-",
    email: "-",
  },
  {
    serial: "5",
    name: "Aditya Mukherjee",
    designation: "Senior Technician",
    phone: "-",
    email: "adityam@nith.ac.in",
  },
  {
    serial: "6",
    name: "Dhananjay",
    designation: "Technician",
    phone: "-",
    email: "dhananjayk@nith.ac.in",
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

export default function MechStaffPage() {
  return (
    <main className="mech-staff-page">
      <div className="mech-staff-shell">
        <aside
          className="mech-staff-sidebar"
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

        <section className="mech-staff-content">
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
