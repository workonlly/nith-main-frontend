import Link from 'next/link'
import './civil_staff.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/civil' },
  { label: 'Vision & Mission', href: '/faculty-section/department/civil/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/civil/faculty' },
  { label: 'Staff', href: '/faculty-section/department/civil/staff', active: true },
  { label: 'Programme Offered', href: '/faculty-section/department/civil/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/civil/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/civil/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/civil/contact' },
]

const officeStaff = [
  {
    serial: '1',
    name: 'Mrs. Sangeeta Kumari',
    designation: 'Stenographer SG-I',
    phone: '-',
    email: '--',
  },
  {
    serial: '2',
    name: 'Sh. Anil Kumar',
    designation: 'OA SG-I',
    phone: '254301',
    email: '-',
  },
]

const technicalStaff = [
  {
    serial: '1',
    name: 'Sh. Naresh Kumar',
    designation: 'Technician',
    phone: '254305',
    email: '-',
  },
  {
    serial: '2',
    name: 'Sh. Sahil Thakur',
    designation: 'Technician',
    phone: '--',
    email: '--',
  },
  {
    serial: '3',
    name: 'Sh. Anand',
    designation: 'Technician',
    phone: '--',
    email: '--',
  },
]

function StaffRows({ rows }) {
  return rows.map((member) => (
    <tr key={`${member.serial}-${member.name}`}>
      <td>{member.serial}</td>
      <td>{member.name}</td>
      <td>{member.designation}</td>
      <td>{member.phone}</td>
      <td>{member.email}</td>
    </tr>
  ))
}

export default function CivilStaffPage() {
  return (
    <main className="civil-staff-page">
      <div className="civil-staff-shell">
        <aside className="civil-staff-sidebar" aria-label="Department navigation">
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

        <section className="civil-staff-content">
          <div className="staff-table-wrap">
            <table className="staff-table">
              <caption>Office Staff</caption>
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
                <StaffRows rows={officeStaff} />

                <tr className="staff-section-row">
                  <td colSpan="5">Technical Staff</td>
                </tr>

                <StaffRows rows={technicalStaff} />
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}
