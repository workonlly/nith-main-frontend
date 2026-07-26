'use client'

import Link from 'next/link'
import './energy_contact.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/energy' },
  { label: 'Vision & Mission', href: '/faculty-section/department/energy/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/energy/faculty' },
  { label: 'Programme Offered', href: '/faculty-section/department/energy/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/energy/labs' },
  { label: 'R&D Projects', href: '/faculty-section/department/energy/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/energy/contact', active: true },
]

export default function EnergyContactPage() {
  return (
    <main className="energy-contact-page">
      <div className="energy-contact-shell">
        <aside className="energy-contact-sidebar" aria-label="Department navigation">
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

        <section className="energy-contact-content">
          <div className="contact-card">
            <h1>Contact Information</h1>

            <address>
              <strong>Dr. Mamta Awasthi</strong>
              <span>Head of Department</span>
              <span>Centre for Energy Studies</span>
              <span>National Institute of Technology Hamirpur</span>
              <span>Himachal Pradesh, Pin No. 177005, India.</span>
            </address>

            <div className="contact-details">
              <p>
                <strong>Phone No. :</strong> +91-1972-254749
              </p>
              <p>
                <strong>HoD Email :</strong>{' '}
                <a href="mailto:head.ces@nith.ac.in">head.ces@nith.ac.in</a>
              </p>
              <p>
                <strong>Office Email :</strong>{' '}
                <a href="mailto:office.ces@nith.ac.in">office.ces@nith.ac.in</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
