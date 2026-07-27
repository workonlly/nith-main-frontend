'use client'

import Link from 'next/link'
import './manage_research.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/manage' },
  { label: 'Vision & Mission', href: '/faculty-section/department/manage/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/manage/faculty' },
  { label: 'Staff', href: '/faculty-section/department/manage/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/manage/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/manage/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/manage/research-publications', active: true },
  { label: 'Contact', href: '/faculty-section/department/manage/contact' },
]

const publications = [
  {
    year: '2023',
    authors: 'Mohd. Adil, et al.',
    title: 'High Impact Factor Research in Marketing Management & Consumer Behavior',
    journal: 'Journal of Retailing and Consumer Services',
    indexing: 'SSCI / Scopus',
  },
  {
    year: '2023',
    authors: 'Vivek Tiwari, et al.',
    title: 'Strategic Human Resource Management and Organizational Sustainability',
    journal: 'International Journal of Human Resource Management',
    indexing: 'SSCI / Scopus',
  },
]

export default function ManageResearchPage() {
  return (
    <main className="manage-research-page">
      <div className="manage-research-shell">
        <aside className="manage-research-sidebar" aria-label="Department navigation">
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

        <section className="manage-research-content">
          <h1>Research Publications</h1>

          <div className="research-table-wrapper">
            <table className="research-table">
              <thead>
                <tr>
                  <th style={{ width: '70px' }}>Year</th>
                  <th>Author(s)</th>
                  <th>Title & Vol. No.</th>
                  <th>Journal Name</th>
                  <th>Indexing</th>
                </tr>
              </thead>
              <tbody>
                {publications.map((pub, index) => (
                  <tr key={index}>
                    <td>{pub.year}</td>
                    <td>{pub.authors}</td>
                    <td>{pub.title}</td>
                    <td>{pub.journal}</td>
                    <td>{pub.indexing}</td>
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
