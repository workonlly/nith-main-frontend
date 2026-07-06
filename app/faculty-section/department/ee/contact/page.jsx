"use client";

import Link from "next/link";
import "./ee_contact.css";

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
  { label: "Labs", href: "/faculty-section/department/ee/labs" },
  {
    label: "Research Publications",
    href: "/faculty-section/department/ee/research-publications",
  },
  {
    label: "Contact",
    href: "/faculty-section/department/ee/contact",
    active: true,
  },
];

export default function EEContactPage() {
  return (
    <main className="ee-contact-page">
      <div className="ee-contact-shell">
        <aside
          className="ee-contact-sidebar"
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

        <section className="ee-contact-content">
          <div className="contact-card">
            <h1>Contact Information</h1>

            <address>
              <strong>Dr. Om Prakash Rahi</strong>
              <span>Head of Department</span>
              <span>Electrical Engineering</span>
              <span>National Institute of Technology Hamirpur</span>
              <span>Himachal Pradesh, Pin No. 177005, India.</span>
            </address>

            <div className="contact-details">
              <p>
                <strong>Phone No.:</strong> 01972- 254500
              </p>
              <p>
                <strong>HoD Email:</strong> head.ee@nith.ac.in
              </p>
              <p>
                <strong>Office Email:</strong> office.ee@nith.ac.in
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
