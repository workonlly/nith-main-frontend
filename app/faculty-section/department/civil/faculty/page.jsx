import Link from 'next/link'
import './civil_faculty.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/civil' },
  { label: 'Vision & Mission', href: '/faculty-section/department/civil/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/civil/faculty', active: true },
  { label: 'Staff', href: '/faculty-section/department/civil/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/civil/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/civil/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/civil/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/civil/contact' },
]

const facultyGroups = [
  {
    title: 'Professor',
    featured: true,
    members: [
      {
        slNo: '1',
        name: 'Prof. Ravi Kumar Sharma',
        designation: 'Professor',
        interests: 'Soil Dynamics',
        email: 'ravi@nith.ac.in',
      },
      {
        slNo: '2',
        name: 'Dr. Raman Parti',
        designation: 'Professor',
        interests: 'Transportation Engineering',
        email: 'ramanp@nith.ac.in',
      },
      {
        slNo: '3',
        name: 'Prof. R.K. Dutta',
        designation: 'Professor',
        interests: 'Geotechnical Engineering',
        email: 'rkd@nith.ac.in',
      },
    ],
  },
  {
    title: 'Associate Professor',
    members: [
      {
        slNo: '1',
        name: 'Dr. Pardeep Kumar',
        designation: 'Associate Professor',
        interests: 'Structural Engineering',
        email: 'pkumar@nith.ac.in',
      },
      {
        slNo: '2',
        name: 'Dr. Rajeshwar Singh Banshtu',
        designation: 'Associate Professor',
        interests: 'Engineering Geology/Natural Disasters',
        email: 'banshtu@nith.ac.in',
      },
      {
        slNo: '3',
        name: 'Dr. Surjit Singh Katoch',
        designation: 'Associate Professor',
        interests: 'Environmental Engineering',
        email: 'sskatoch@nith.ac.in',
      },
      {
        slNo: '4',
        name: 'Dr. Vijay Shankar',
        designation: 'Associate Professor',
        interests: 'Water Resource Engineering',
        email: 'vsdogra@nith.ac.in',
      },
      {
        slNo: '5',
        name: 'Dr. Vijay Kr. Bansal',
        designation: 'Associate Professor',
        interests: 'Construction Management',
        email: 'vkb@nith.ac.in',
      },
      {
        slNo: '6',
        name: 'Dr. Amrit Kumar Roy',
        designation: 'Associate Professor',
        interests: 'Wind Engineering / Structural Engineering',
        email: 'amritroy@nith.ac.in',
      },
      {
        slNo: '7',
        name: 'Dr. Umesh Kumar Pandey',
        designation: 'Associate Professor',
        interests: 'Structural dynamics, Dynamics of cracked concrete structures',
        email: 'ukp@nith.ac.in',
      },
      {
        slNo: '8',
        name: 'Dr. Chander Prakash',
        designation: 'Associate Professor',
        interests: 'Geo-Informatics',
        email: 'chandermanali@nith.ac.in',
      },
      {
        slNo: '9',
        name: 'Dr. Sunil Sharma',
        designation: 'Associate Professor',
        interests: 'Transportation Engineering',
        email: 'sunils@nith.ac.in',
      },
      {
        slNo: '10',
        name: 'Dr. Hemant Kumar Vinyak',
        designation: 'Associate Professor',
        interests: 'Earthquake Engineering',
        email: 'hkvced@nith.ac.in',
      },
    ],
  },
  {
    title: 'Assistant Professor Grade-I',
    members: [
      {
        slNo: '1',
        name: 'Dr. Dharmendra',
        designation: 'Assistant Professor Grade-I',
        interests: 'Environmental Engineering & Pollution Control',
        email: 'djha@nith.ac.in',
      },
      {
        slNo: '2',
        name: 'Dr. K.Nallasivam',
        designation: 'Assistant Professor Grade-I',
        interests: 'Structural Engineering [Structural Dynamics]',
        email: 'nallasivam@nith.ac.in',
      },
      {
        slNo: '3',
        name: 'Dr. Manendra Singh',
        designation: 'Assistant Professor Grade-I',
        interests: 'Geotechnical Engineering/Soil Dynamics',
        email: 'manendra@nith.ac.in',
      },
      {
        slNo: '4',
        name: 'Dr. Ray Singh Meena',
        designation: 'Assistant Professor Grade-I',
        interests: 'Water Resource Engineering',
        email: 'rsmeena@nith.ac.in',
      },
      {
        slNo: '5',
        name: 'Dr. Vimal Kumar',
        designation: 'Assistant Professor Grade-I',
        interests: 'Structural Engineering',
        email: 'vimalkumar@nith.ac.in',
      },
    ],
  },
  {
    title: 'Assistant Professor Grade-II',
    members: [
      {
        slNo: '1',
        name: 'Dr. Meghna Sharma',
        designation: 'Assistant Professor Grade-II',
        interests: 'Geotechnical Engineering',
        email: 'meghnas@nith.ac.in',
      },
      {
        slNo: '2',
        name: 'Dr. Aditi Chauhan',
        designation: 'Assistant Professor Grade-II',
        interests: '-',
        email: 'aditi@nith.ac.in',
      },
      {
        slNo: '3',
        name: 'Dr. Swaraj Chowdhury',
        designation: 'Assistant Professor Grade-II',
        interests: 'Geotechnical Engineering',
        email: 'swaraj@nith.ac.in',
      },
      {
        slNo: '4',
        name: 'Dr. Kirti Mahajan',
        designation: 'Assistant Professor Grade-II',
        interests: '-',
        email: 'kirtimahajan@nith.ac.in',
      },
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

        <a href="#" className="faculty-read-more">
          Read more
        </a>
      </div>

      <div className="faculty-info">
        <h3>{member.name}</h3>
        <p>{member.designation}</p>
      </div>
    </article>
  )
}

export default function CivilFacultyPage() {
  return (
    <main className="civil-faculty-page">
      <div className="civil-faculty-shell">
        <aside className="civil-faculty-sidebar" aria-label="Department navigation">
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

        <section className="civil-faculty-content">
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
