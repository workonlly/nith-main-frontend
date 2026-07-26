"use client";

import Link from "next/link";
import "./mech_contact.css";

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
  },
  { label: "Labs", href: "/faculty-section/department/mech/labs" },
  {
    label: "Research Publications",
    href: "/faculty-section/department/mech/research-publications",
  },
  {
    label: "Contact",
    href: "/faculty-section/department/mech/contact",
    active: true,
  },
];

export default function MechContactPage() {
  return (
    <main className="mech-contact-page">
      <div className="mech-contact-shell">
        <aside
          className="mech-contact-sidebar"
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

        <section className="mech-contact-content">
          <div className="contact-card">
            <h1>Contact Information</h1>

            <address>
              <strong>Dr. Varun Kumar</strong>
              <span>Head of Department</span>
              <span>Mechanical Engineering</span>
              <span>National Institute of Technology Hamirpur</span>
              <span>Himachal Pradesh, Pin No. 177005, India.</span>
            </address>

            <div className="contact-details">
              <p>
                <strong>Phone No.:</strong> 01972 - 254700
              </p>
              <p>
                <strong>HoD Email:</strong> head.me@nith.ac.in
              </p>
              <p>
                <strong>Office Email:</strong> office.me@nith.ac.in
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
