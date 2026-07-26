'use client'

import Link from 'next/link'
import './energy_research.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/energy' },
  { label: 'Vision & Mission', href: '/faculty-section/department/energy/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/energy/faculty' },
  { label: 'Programme Offered', href: '/faculty-section/department/energy/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/energy/labs' },
  { label: 'R&D Projects', href: '/faculty-section/department/energy/research-publications', active: true },
  { label: 'Contact', href: '/faculty-section/department/energy/contact' },
]

const projects = [
  {
    year: '2022-23',
    amount: 'Rs. 41.04 Lakhs',
    title: 'Scalable Small Scale Business Model For E-Waste Management Through 3Rs, Deep Learning Collection System And Market Chain.',
    agency: '-',
  },
  {
    year: '2012-2013',
    amount: '50 Lakhs',
    title: 'Capacity building of Various Institutions running UG & PG Courses in Renewable Energy.',
    agency: 'Ministry of New & Renewable Energy',
  },
  {
    year: '2011-2012',
    amount: '10.67 Lakh',
    title: 'Installation of Solar steam cooking system at Neelkanth Boys Hostal, NIT Hamirpur.',
    agency: 'Ministry of New & Renewable Energy',
  },
  {
    year: '2011-2012',
    amount: '95 Lakhs',
    title: 'Establishment of State Level Energy Park at NIT Hamirpur.',
    agency: 'Ministry of New & Renewable Energy',
  },
  {
    year: '2011-2012',
    amount: '30 Lakhs',
    title: 'UNDP/GEF Global Solar Water Heating Project: Performance Evaluation of Flat Plate Collector (FPC) and Evacuated Tube Collector (ETC) based Solar Water Heating System for cold regions.',
    agency: 'Ministry of New & Renewable Energy',
  },
]

export default function EnergyResearchPage() {
  return (
    <main className="energy-research-page">
      <div className="energy-research-shell">
        <aside className="energy-research-sidebar" aria-label="Department navigation">
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

        <section className="energy-research-content">
          <h1>R&amp;D Projects</h1>
          <p className="section-subtitle">Projects and Grants to the Centre</p>

          <div className="research-table-wrapper">
            <table className="research-table">
              <thead>
                <tr>
                  <th style={{ width: '100px' }}>Year</th>
                  <th style={{ width: '120px' }}>Amount</th>
                  <th>Project Title</th>
                  <th>Funding Agency</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((proj, index) => (
                  <tr key={index}>
                    <td>{proj.year}</td>
                    <td>{proj.amount}</td>
                    <td>{proj.title}</td>
                    <td>{proj.agency}</td>
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
