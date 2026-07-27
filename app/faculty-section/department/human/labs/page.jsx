'use client'

import Link from 'next/link'
import './human_labs.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/human' },
  { label: 'Vision & Mission', href: '/faculty-section/department/human/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/human/faculty' },
  { label: 'Staff', href: '/faculty-section/department/human/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/human/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/human/labs', active: true },
  { label: 'Research Publications', href: '/faculty-section/department/human/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/human/contact' },
]

const laboratories = [
  'Communication Skills & Language Lab',
  'Behavioral Science & Psychology Lab',
  'Research & Doctoral Lab',
]

export default function HumanLabsPage() {
  return (
    <main className="human-labs-page">
      <div className="human-labs-shell">
        <aside className="human-labs-sidebar" aria-label="Department navigation">
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

        <section className="human-labs-content">
          <h1>List of Laboratories</h1>

          <table className="labs-table">
            <thead>
              <tr>
                <th style={{ width: '80px' }}>Sl. No.</th>
                <th>Laboratory / Facility Name</th>
              </tr>
            </thead>
            <tbody>
              {laboratories.map((lab, index) => (
                <tr key={lab}>
                  <td>{index + 1}</td>
                  <td>
                    <strong>{lab}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  )
}
