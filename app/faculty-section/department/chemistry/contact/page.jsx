'use client'

import Link from 'next/link'
import './chemistry_contact.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/chemistry' },
  { label: 'Vision & Mission', href: '/faculty-section/department/chemistry/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/chemistry/faculty' },
  { label: 'Staff', href: '/faculty-section/department/chemistry/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/chemistry/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/chemistry/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/chemistry/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/chemistry/contact', active: true },
]

export default function ChemistryContactPage() {
  return (
    <main className="chemistry-contact-page">
      <div className="chemistry-contact-shell">
        <aside className="chemistry-contact-sidebar" aria-label="Department navigation">
          <nav>
            {menuItems.map((item) => (
              <Link
                className={item.active ? 'active' : ''}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <section className="chemistry-contact-content">
          <div className="contact-card">
            <h1>Contact Information</h1>

            <address>
              <strong>Dr. Bharti Gaur</strong>
              <span>Head of Department</span>
              <span>Chemistry</span>
              <span>National Institute of Technology Hamirpur</span>
              <span>Himachal Pradesh, Pin No. 177005, India.</span>
            </address>

            <div className="contact-details">
              <p>
                <strong>Phone No.:</strong> 01972 - 254102
              </p>
              <p>
                <strong>HoD Email:</strong> head.chy@nith.ac.in
              </p>
              <p>
                <strong>Office Email:</strong> office.chy@nith.ac.in
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}