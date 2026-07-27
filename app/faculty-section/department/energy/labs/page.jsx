'use client'

import Link from 'next/link'
import './energy_labs.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/energy' },
  { label: 'Vision & Mission', href: '/faculty-section/department/energy/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/energy/faculty' },
  { label: 'Programme Offered', href: '/faculty-section/department/energy/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/energy/labs', active: true },
  { label: 'R&D Projects', href: '/faculty-section/department/energy/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/energy/contact' },
]

const laboratories = [
  'Biofuel Laboratory',
  'Solar Thermal Lab',
  'Computational Lab',
  'Energy-Research Lab',
  'Solar Photovoltaic Lab',
  'Microbial Culture Lab',
]

export default function EnergyLabsPage() {
  return (
    <main className="energy-labs-page">
      <div className="energy-labs-shell">
        <aside className="energy-labs-sidebar" aria-label="Department navigation">
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

        <section className="energy-labs-content">
          <h1>List of Laboratories</h1>

          <table className="labs-table">
            <thead>
              <tr>
                <th style={{ width: '80px' }}>Sl. No.</th>
                <th>Laboratory Name</th>
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
