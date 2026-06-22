'use client'

import Link from 'next/link'
import './mech_labs.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/mech' },
  { label: 'Vision & Mission', href: '/faculty-section/department/mech/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/mech/faculty' },
  { label: 'Staff', href: '/faculty-section/department/mech/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/mech/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/mech/labs', active: true },
  { label: 'Research Publications', href: '/faculty-section/department/mech/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/mech/contact' },
]

const laboratories = [
  'Strength of Materials',
  'Theory of Machines',
  'Dynamics of Machinery',
  'Mechanical Measurements and Control',
  'Heat Transfer',
  'Refrigeration & Air Conditioning',
  'Turbo Machines',
  'Production',
  'CAD/CAM',
  'Metrology & Heat Engines',
  'Computer Lab',
]

export default function MechLabsPage() {
  return (
    <main className="mech-labs-page">
      <div className="mech-labs-shell">
        <aside className="mech-labs-sidebar" aria-label="Department navigation">
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

        <section className="mech-labs-content">
          <h1>Department of Mechanical Engineering List of Laboratories</h1>

          <table className="labs-table">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Laboratory Name</th>
              </tr>
            </thead>
            <tbody>
              {laboratories.map((lab, index) => (
                <tr key={lab}>
                  <td>{index + 1}</td>
                  <td>{lab}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  )
}