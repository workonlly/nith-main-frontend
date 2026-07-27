'use client'

import Link from 'next/link'
import './manage_staff.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/manage' },
  { label: 'Vision & Mission', href: '/faculty-section/department/manage/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/manage/faculty' },
  { label: 'Staff', href: '/faculty-section/department/manage/staff', active: true },
  { label: 'Programme Offered', href: '/faculty-section/department/manage/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/manage/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/manage/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/manage/contact' },
]

const staffList = [
  {
    serial: '1',
    name: 'Sh. Jitendra Prasad',
    designation: 'Sr. Technician',
    phone: '-',
    email: '-',
  },
]

export default function ManageStaffPage() {
  return (
    <main className="manage-staff-page">
      <div className="manage-staff-shell">
        <aside className="manage-staff-sidebar" aria-label="Department navigation">
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

        <section className="manage-staff-content">
          <div className="staff-table-wrap">
            <table className="staff-table">
              <caption>Office Staff / Technical Staff</caption>
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
