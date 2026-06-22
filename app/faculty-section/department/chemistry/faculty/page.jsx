'use client'

import Link from 'next/link'
import './chemistry_faculty.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/chemistry' },
  { label: 'Vision & Mission', href: '/faculty-section/department/chemistry/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/chemistry/faculty', active: true },
  { label: 'Staff', href: '/faculty-section/department/chemistry/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/chemistry/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/chemistry/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/chemistry/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/chemistry/contact' },
]

const facultyGroups = [
  {
    title: 'Associate Professor',
    members: [
      { slNo: '1', name: 'Dr. Pamita Awasthi', designation: 'Associate Professor', interests: 'Chemistry', email: 'pamita@nith.ac.in', link: 'https://portfolios.nith.ac.in/index.php?/nith/dr-pamita-awasthi145' },
      { slNo: '2', name: 'Dr. Bharti Gaur', designation: 'Associate Professor', interests: 'Chemistry', email: 'bhartigaur@nith.ac.in', link: 'https://portfolios.nith.ac.in/index.php?/nith/dr-bharti-gaur-' },
      { slNo: '3', name: 'Dr. Kalyan Sundar Ghosh', designation: 'Associate Professor', interests: 'Bioorganic and Biophysical Chemistry', email: 'kalyan@nith.ac.in', link: 'https://portfolios.nith.ac.in/index.php?/nith/dr-kalyan-sundar-ghosh-' },
    ],
  },
  {
    title: 'Assistant Professor Grade-I',
    members: [
      { slNo: '1', name: 'Dr. Raj Kaushal', designation: 'Assistant Professor Grade-I', interests: 'Inorganic Chemistry', email: 'rajkaushal@nith.ac.in', link: 'https://portfolios.nith.ac.in/index.php?/nith/dr-raj-kaushal-' },
      { slNo: '2', name: 'Dr. Jai Prakash', designation: 'Assistant Professor Grade-I', interests: 'Materials Chemistry and Physics, Functional nanomaterials for energy and environmental applications', email: 'jaip@nith.ac.in', link: 'https://portfolios.nith.ac.in/index.php?/nith/dr-jai-prakash-' },
    ],
  },
  {
    title: 'Assistant Professor Grade-II',
    members: [
      { slNo: '1', name: 'Dr. Jagannath Kuchlyan', designation: 'Assistant Professor Grade-II', interests: 'Photochemistry and Photophysics', email: 'jagannath@nith.ac.in', link: 'https://portfolios.nith.ac.in/index.php?/nith/dr-jagannath-kuchlyan' },
    ],
  },
]

function FacultyCard({ member, featured = false }) {
  return (
    <article className={featured ? 'faculty-card faculty-card-featured' : 'faculty-card'}>
      <div className="faculty-photo" aria-hidden="true">
        {featured && <div className="faculty-photo-crop" />}
      </div>

      <div className="faculty-hover-panel">
        <p>
          <strong>Email</strong>
          <a href={`mailto:${member.email}`}>{member.email}</a>
        </p>

        <p>
          <strong>Domains</strong>
          <span>{member.interests}</span>
        </p>

        {member.link && (
          <a href={member.link} className="faculty-read-more" target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        )}
      </div>

      <div className="faculty-info">
        <h3>{member.name}</h3>
        <p>{member.designation}</p>
      </div>
    </article>
  )
}

export default function ChemistryFacultyPage() {
  return (
    <main className="chemistry-faculty-page">
      <div className="chemistry-faculty-shell">
        <aside className="chemistry-faculty-sidebar" aria-label="Department navigation">
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

        <section className="chemistry-faculty-content">
          {facultyGroups.map((group) => (
            <section className="faculty-group" key={group.title}>
              <h1>{group.title}</h1>

              <div className={group.featured ? 'faculty-featured-grid' : 'faculty-grid'}>
                {group.members.map((member) => (
                  <FacultyCard
                    featured={group.featured}
                    key={member.name}
                    member={member}
                  />
                ))}
              </div>
            </section>
          ))}
        </section>
      </div>
    </main>
  )
}