'use client'

import Link from 'next/link'
import './human_staff.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/human' },
  { label: 'Vision & Mission', href: '/faculty-section/department/human/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/human/faculty' },
  { label: 'Staff', href: '/faculty-section/department/human/staff', active: true },
  { label: 'Programme Offered', href: '/faculty-section/department/human/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/human/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/human/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/human/contact' },
]

const staffList = [
  {
    serial: '1',
    name: 'Mr. Ashok',
    designation: 'Sr. Technician',
    phone: '254152',
    email: 'ashokk@nith.ac.in',
  },
]

export default function HumanStaffPage() {
  return (
    <main className="human-staff-page">
      <div className="human-staff-shell">
        <aside className="human-staff-sidebar" aria-label="Department navigation">
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

        <section className="human-staff-content">
          <div className="staff-table-wrap">
            <table className="staff-table">
              <caption>Technical Staff</caption>
              <thead>
                <tr>
                  <th>Sl. No.</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Phone No.</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {staffList.map((member) => (
                  <tr key={member.serial}>
                    <td>{member.serial}</td>
                    <td>
                      <strong>{member.name}</strong>
                    </td>
                    <td>{member.designation}</td>
                    <td>{member.phone}</td>
                    <td>{member.email}</td>
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
