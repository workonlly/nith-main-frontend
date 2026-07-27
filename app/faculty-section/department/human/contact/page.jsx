'use client'

import Link from 'next/link'
import './human_contact.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/human' },
  { label: 'Vision & Mission', href: '/faculty-section/department/human/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/human/faculty' },
  { label: 'Staff', href: '/faculty-section/department/human/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/human/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/human/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/human/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/human/contact', active: true },
]

export default function HumanContactPage() {
  return (
    <main className="human-contact-page">
      <div className="human-contact-shell">
        <aside className="human-contact-sidebar" aria-label="Department navigation">
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

        <section className="human-contact-content">
          <div className="contact-card">
            <h1>Contact Information</h1>

            <address>
              <strong>Dr. Yogesh Gupta</strong>
              <span>Head of Department</span>
              <span>Humanities and Social Sciences</span>
              <span>National Institute of Technology Hamirpur</span>
              <span>Himachal Pradesh, Pin No. 177005, India.</span>
            </address>

            <div className="contact-details">
              <p>
                <strong>Phone No. :</strong> 01972- 254141
              </p>
              <p>
                <strong>HoD Email :</strong>{' '}
                <a href="mailto:head.hss@nith.ac.in">head.hss@nith.ac.in</a>
              </p>
              <p>
                <strong>Office Email :</strong>{' '}
                <a href="mailto:office.hss@nith.ac.in">office.hss@nith.ac.in</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
