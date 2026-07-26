'use client'

import Link from 'next/link'
import './energy_programmes.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/energy' },
  { label: 'Vision & Mission', href: '/faculty-section/department/energy/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/energy/faculty' },
  { label: 'Programme Offered', href: '/faculty-section/department/energy/programme-offered', active: true },
  { label: 'Labs', href: '/faculty-section/department/energy/labs' },
  { label: 'R&D Projects', href: '/faculty-section/department/energy/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/energy/contact' },
]

const programmes = [
  {
    name: 'Master Programmes Offered',
    description:
      'M.Tech. in Energy Technology — A comprehensive postgraduate programme covering renewable energy systems, energy efficiency, solar technology, biofuels, and sustainable energy management.',
  },
  {
    name: 'Doctoral Programmes Offered',
    description:
      'Ph.D. in Energy & Environment — Doctoral research programmes focusing on clean energy, bioenergy, solar photovoltaics, environmental sustainability, fuel cells, hydrogen energy, and energy policy.',
  },
]

export default function EnergyProgrammesPage() {
  return (
    <main className="energy-programmes-page">
      <div className="energy-programmes-shell">
        <aside className="energy-programmes-sidebar" aria-label="Department navigation">
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

        <section className="energy-programmes-content">
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
