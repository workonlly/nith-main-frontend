'use client'

import Link from 'next/link'
import './energy_faculty.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/energy' },
  { label: 'Vision & Mission', href: '/faculty-section/department/energy/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/energy/faculty', active: true },
  { label: 'Programme Offered', href: '/faculty-section/department/energy/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/energy/labs' },
  { label: 'R&D Projects', href: '/faculty-section/department/energy/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/energy/contact' },
]

const coreFaculty = [
  {
    title: 'Associate Professor',
    members: [
      {
        slNo: 1,
        name: 'Dr. Mamta Awasthi',
        interests: 'Environment, Bioremediation, Biofuels, Bioenergy, Environmental Microbiology, Phycology',
        email: 'mamta@nith.ac.in',
        profileUrl: '#',
      },
    ],
  },
]

const jointFaculty = [
  {
    slNo: 1,
    name: 'Dr. Varun',
    department: 'Department of Mechanical Engineering',
    email: 'varun@nith.ac.in',
    profileUrl: '#',
  },
  {
    slNo: 2,
    name: 'Dr. Amrit Kumar Roy',
    department: 'Department of Civil Engineering',
    email: 'amritroy@nith.ac.in',
    profileUrl: '#',
  },
  {
    slNo: 3,
    name: 'Dr. Amit Arora',
    department: 'Department of Chemical Engineering',
    email: 'dr.amitarora@nith.ac.in',
    profileUrl: '#',
  },
  {
    slNo: 4,
    name: 'Dr. Venu Shree',
    department: 'Department of Architecture',
    email: 'venushree@nith.ac.in',
    profileUrl: '#',
  },
  {
    slNo: 5,
    name: 'Dr. Hammad Siddiqi',
    department: 'Department of Chemical Engineering',
    email: 'hammad@nith.ac.in',
    profileUrl: '#',
  },
  {
    slNo: 6,
    name: 'Dr. Mohit Kumar',
    department: 'Department of Computer Science and Engineering',
    email: 'mohit@nith.ac.in',
    profileUrl: '#',
  },
]

export default function EnergyFacultyPage() {
  return (
    <main className="energy-faculty-page">
      <div className="energy-faculty-shell">
        <aside className="energy-faculty-sidebar" aria-label="Department navigation">
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

        <section className="energy-faculty-content">
          {/* Core Faculty */}
          {coreFaculty.map((group) => (
            <section className="faculty-group" key={group.title}>
              <h1>{group.title}</h1>
              <table className="faculty-table">
                <thead>
                  <tr>
                    <th style={{ width: '60px' }}>Sl.No</th>
                    <th>Name</th>
                    <th>Area(s) of Interests</th>
                    <th>Email</th>
                    <th style={{ width: '80px' }}>Profile</th>
                  </tr>
                </thead>
                <tbody>
                  {group.members.map((member) => (
                    <tr key={member.name}>
                      <td>{member.slNo}</td>
                      <td><strong>{member.name}</strong></td>
                      <td>{member.interests}</td>
                      <td>
                        <a href={`mailto:${member.email}`} style={{ color: '#0056b3', textDecoration: 'none' }}>
                          {member.email}
                        </a>
                      </td>
                      <td>
                        <a href={member.profileUrl} className="profile-link">View</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          ))}

          {/* Joint Faculty */}
          <section className="faculty-group">
            <h1>Joint Faculty Members Appointed from Other Academic Departments</h1>
            <table className="faculty-table">
              <thead>
                <tr>
                  <th style={{ width: '60px' }}>Sl.No</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Email</th>
                  <th style={{ width: '80px' }}>Profile</th>
                </tr>
              </thead>
              <tbody>
                {jointFaculty.map((member) => (
                  <tr key={member.name}>
                    <td>{member.slNo}</td>
                    <td><strong>{member.name}</strong></td>
                    <td>{member.department}</td>
                    <td>
                      <a href={`mailto:${member.email}`} style={{ color: '#0056b3', textDecoration: 'none' }}>
                        {member.email}
                      </a>
                    </td>
                    <td>
                      <a href={member.profileUrl} className="profile-link">View</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </section>
      </div>
    </main>
  )
}
