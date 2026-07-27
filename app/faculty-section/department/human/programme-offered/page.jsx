'use client'

import Link from 'next/link'
import './human_programmes.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/human' },
  { label: 'Vision & Mission', href: '/faculty-section/department/human/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/human/faculty' },
  { label: 'Staff', href: '/faculty-section/department/human/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/human/programme-offered', active: true },
  { label: 'Labs', href: '/faculty-section/department/human/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/human/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/human/contact' },
]

const programmes = [
  {
    name: 'Bachelor Programmes Offered',
    description:
      'Foundational & interdisciplinary courses in Communication Skills, Engineering Economics, Dynamics of Behavioral Science, and Management for B.Tech. and B.Arch. students.',
  },
  {
    name: 'Doctoral Programmes Offered',
    description:
      'Ph.D. programmes in Economics, Applied Psychology, English Literature, Translation Studies, Applied Linguistics, and allied Social Sciences.',
  },
]

export default function HumanProgrammesPage() {
  return (
    <main className="human-programmes-page">
      <div className="human-programmes-shell">
        <aside className="human-programmes-sidebar" aria-label="Department navigation">
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

        <section className="human-programmes-content">
          <h1>Programmes Offered</h1>

          <div className="programmes-table-wrapper">
            <table className="programmes-table">
              <thead>
                <tr>
                  <th style={{ width: '80px' }}>Sl. No.</th>
                  <th>Programmes Offered</th>
                </tr>
              </thead>
              <tbody>
                {programmes.map((prog, index) => (
                  <tr key={prog.name}>
                    <td>{index + 1}</td>
                    <td>
                      <strong style={{ fontSize: '15px', color: '#8b0000' }}>{prog.name}</strong>
                      <p className="programme-summary">{prog.description}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}
