'use client'

import Link from 'next/link'
import './human_faculty.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/human' },
  { label: 'Vision & Mission', href: '/faculty-section/department/human/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/human/faculty', active: true },
  { label: 'Staff', href: '/faculty-section/department/human/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/human/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/human/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/human/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/human/contact' },
]

const facultyGroups = [
  {
    title: 'Associate Professor',
    members: [
      {
        slNo: 1,
        name: 'Dr. Yogesh Gupta',
        interests: 'Economics',
        email: 'yogesh@nith.ac.in',
        profileUrl: '#',
      },
      {
        slNo: 2,
        name: 'Dr. Manoj Sharma',
        interests: 'Environmental Economics, Neuroeconomics, International Business, Transport Management, Rural Development, Entrepreneurship Development',
        email: 'manoj@nith.ac.in',
        profileUrl: '#',
      },
    ],
  },
  {
    title: 'Assistant Professor Grade-I',
    members: [
      {
        slNo: 1,
        name: 'Dr. Manoj Kumar Yadav',
        interests: 'English (Translation Studies)',
        email: 'manojk@nith.ac.in',
        profileUrl: '#',
      },
      {
        slNo: 2,
        name: 'Dr. Sunder Kala Negi',
        interests: 'Applied Psychology',
        email: 'sunderkala@nith.ac.in',
        profileUrl: '#',
      },
      {
        slNo: 3,
        name: 'Dr. Preeti Puri',
        interests: 'English: Literary Theory and Criticism, Deleuze and Guattarian Studies, Psychoanalysis and Popular Culture, American Literature, Comic Studies, Health Humanities',
        email: 'preetihss@nith.ac.in',
        profileUrl: '#',
      },
    ],
  },
  {
    title: 'Assistant Professor Grade-II',
    members: [
      {
        slNo: 1,
        name: 'Dr. Zareena J.M',
        interests: 'Artificial Intelligence in Language Learning, Gamification of Language learning, Consciousness-raising Tasks, Task-based Language Learning, Communicative Approach, Syllabus Design, Material Development, E-content Development, Teacher Training Programs, Testing and Assessments',
        email: 'zareena@nith.ac.in',
        profileUrl: '#',
      },
      {
        slNo: 2,
        name: 'Dr. Rinshu Dwivedi',
        interests: 'Economics',
        email: 'rinshu@nith.ac.in',
        profileUrl: '#',
      },
    ],
  },
]

export default function HumanFacultyPage() {
  return (
    <main className="human-faculty-page">
      <div className="human-faculty-shell">
        <aside className="human-faculty-sidebar" aria-label="Department navigation">
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

        <section className="human-faculty-content">
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
