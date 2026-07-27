'use client'

import Link from 'next/link'
import './human_research.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/human' },
  { label: 'Vision & Mission', href: '/faculty-section/department/human/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/human/faculty' },
  { label: 'Staff', href: '/faculty-section/department/human/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/human/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/human/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/human/research-publications', active: true },
  { label: 'Contact', href: '/faculty-section/department/human/contact' },
]

const publications = [
  {
    year: '2023',
    authors: 'Yogesh Gupta, et al.',
    title: 'Economic Analysis and Policy Implications in Developing Markets',
    journal: 'Journal of Economic Studies',
    indexing: 'SSCI / Scopus',
  },
  {
    year: '2023',
    authors: 'Manoj Sharma, et al.',
    title: 'Neuroeconomics and Consumer Decision-Making: An Interdisciplinary Approach',
    journal: 'Journal of Behavioral and Experimental Economics',
    indexing: 'SSCI / Scopus',
  },
  {
    year: '2022',
    authors: 'Zareena J.M, et al.',
    title: 'Gamification in Language Learning: Engagement and Efficacy in Higher Education',
    journal: 'Computer Assisted Language Learning',
    indexing: 'SSCI / Scopus',
  },
]

export default function HumanResearchPage() {
  return (
    <main className="human-research-page">
      <div className="human-research-shell">
        <aside className="human-research-sidebar" aria-label="Department navigation">
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

        <section className="human-research-content">
          <h1>Research Publications</h1>

          <div className="research-table-wrapper">
            <table className="research-table">
              <thead>
                <tr>
                  <th style={{ width: '70px' }}>Year</th>
                  <th>Author(s)</th>
                  <th>Title &amp; Vol. No.</th>
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
