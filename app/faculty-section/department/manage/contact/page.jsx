'use client'

import Link from 'next/link'
import './manage_contact.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/manage' },
  { label: 'Vision & Mission', href: '/faculty-section/department/manage/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/manage/faculty' },
  { label: 'Staff', href: '/faculty-section/department/manage/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/manage/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/manage/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/manage/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/manage/contact', active: true },
]

export default function ManageContactPage() {
  return (
    <main className="manage-contact-page">
      <div className="manage-contact-shell">
        <aside className="manage-contact-sidebar" aria-label="Department navigation">
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

        <section className="manage-contact-content">
          <div className="contact-card">
            <h1>Contact Information</h1>

            <address>
              <strong>Dr. Vivek Tiwari</strong>
              <span>Head of Department</span>
              <span>Management Studies</span>
              <span>National Institute of Technology Hamirpur</span>
              <span>Himachal Pradesh, Pin No. 177005, India.</span>
            </address>

            <div className="contact-details">
              <p>
                <strong>Phone No. :</strong> 01972- 254150
              </p>
              <p>
                <strong>HoD Email :</strong>{' '}
                <a href="mailto:head.doms@nith.ac.in">head.doms@nith.ac.in</a>
              </p>
              <p>
                <strong>Office Email :</strong>{' '}
                <a href="mailto:office.doms@nith.ac.in">office.doms@nith.ac.in</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
