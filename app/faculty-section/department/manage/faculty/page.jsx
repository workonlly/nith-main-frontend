'use client'

import Link from 'next/link'
import './manage_faculty.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/manage' },
  { label: 'Vision & Mission', href: '/faculty-section/department/manage/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/manage/faculty', active: true },
  { label: 'Staff', href: '/faculty-section/department/manage/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/manage/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/manage/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/manage/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/manage/contact' },
]

const facultyGroups = [
  {
    title: 'Associate Professor',
    members: [
      {
        slNo: 1,
        name: 'Dr. Mohd. Adil',
        designation: 'Associate Professor',
        interests: 'Marketing Management',
        email: 'adil.dms@nith.ac.in',
        profileUrl: '#',
      },
      {
        slNo: 2,
        name: 'Dr. Vivek Tiwari',
        designation: 'Associate Professor & HoD',
        interests: 'Human Resource Management',
        email: 'vivek.dms@nith.ac.in',
        profileUrl: '#',
      },
    ],
  },
  {
    title: 'Assistant Professor Grade-I',
    members: [
      {
        slNo: 1,
        name: 'Dr. Sachin Kumar',
        designation: 'Assistant Professor Grade-I',
        interests: 'Marketing',
        email: 'sachin@nith.ac.in',
        profileUrl: '#',
      },
      {
        slNo: 2,
        name: 'Dr. Neeraj Dhiman',
        designation: 'Assistant Professor Grade-I',
        interests: 'Human Resource Management',
        email: 'neerajdhiman@nith.ac.in',
        profileUrl: '#',
      },
      {
        slNo: 3,
        name: 'Dr. Shampy Kamboj',
        designation: 'Assistant Professor Grade-I',
        interests: 'Marketing Management',
        email: 'shampy@nith.ac.in',
        profileUrl: '#',
      },
      {
        slNo: 4,
        name: 'Dr. Richa Joshi',
        designation: 'Assistant Professor Grade-I',
        interests: 'Marketing',
        email: 'richajoshi@nith.ac.in',
        profileUrl: '#',
      },
    ],
  },
]

export default function ManageFacultyPage() {
  return (
    <main className="manage-faculty-page">
      <div className="manage-faculty-shell">
        <aside className="manage-faculty-sidebar" aria-label="Department navigation">
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

        <section className="manage-faculty-content">
          {facultyGroups.map((group) => (
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
                      <td>
                        <strong>{member.name}</strong>
                      </td>
                      <td>{member.interests}</td>
                      <td>
                        <a href={`mailto:${member.email}`} style={{ color: '#0056b3', textDecoration: 'none' }}>
                          {member.email}
                        </a>
                      </td>
                      <td>
                        <a href={member.profileUrl} className="profile-link">
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          ))}
        </section>
      </div>
    </main>
  )
}
