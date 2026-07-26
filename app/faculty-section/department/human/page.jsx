'use client'

import Link from 'next/link'
import { GraduationCap, Network } from 'lucide-react'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/human', active: true },
  { label: 'Vision & Mission', href: '/faculty-section/department/human/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/human/faculty' },
  { label: 'Staff', href: '/faculty-section/department/human/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/human/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/human/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/human/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/human/contact' },
]

const academicProgrammes = [
  {
    name: 'Bachelor Programmes Offered',
    Icon: GraduationCap,
    details:
      'Foundational & interdisciplinary courses in Communication Skills, Engineering Economics, Dynamics of Behavioral Science, and Management for B.Tech. and B.Arch. students.',
  },
  {
    name: 'Doctoral Programmes Offered',
    Icon: Network,
    details:
      'Advanced doctoral research programmes (Ph.D.) in Economics, Psychology, English Literature, Translation Studies, Applied Linguistics, and allied Social Sciences.',
  },
]

const styles = {
  pageWrapper: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    backgroundColor: '#f5f5f5',
  },
  sidebar: {
    width: '200px',
    minWidth: '200px',
    backgroundColor: '#fff',
    borderRight: '1px solid #ddd',
    paddingTop: '0',
  },
  sidebarActiveItem: {
    backgroundColor: '#8b0000',
    color: '#fff',
    padding: '10px 16px',
    fontWeight: '600',
    fontSize: '14px',
    display: 'block',
  },
  sidebarLink: {
    display: 'block',
    padding: '8px 16px',
    fontSize: '14px',
    color: '#c0392b',
    textDecoration: 'none',
    borderBottom: '1px solid #f0f0f0',
  },
  mainContent: {
    flex: 1,
    padding: '24px 32px',
    backgroundColor: '#f5f5f5',
  },
  contentBox: {
    backgroundColor: '#fff',
    padding: '24px',
    borderRadius: '4px',
    border: '1px solid #e0e0e0',
  },
  pageTitle: {
    fontSize: '20px',
    fontWeight: '400',
    textAlign: 'center',
    color: '#333',
    marginBottom: '16px',
    marginTop: '0',
  },
  imagePlaceholder: {
    width: '100%',
    height: '220px',
    backgroundColor: '#d0e0d0',
    borderRadius: '4px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666',
    fontSize: '14px',
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: '13px',
    lineHeight: '1.7',
    color: '#333',
    textAlign: 'justify',
    marginBottom: '12px',
  },
  sectionTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#1a1a1a',
    margin: '28px 0 16px 0',
  },
  programmeCard: {
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    padding: '28px 24px',
    backgroundColor: '#fff',
    minHeight: '220px',
  },
  programmeIcon: {
    width: '48px',
    height: '48px',
    marginBottom: '20px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff7f7',
    color: '#8b0000',
  },
  programmeName: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#8b0000',
    marginBottom: '12px',
    marginTop: '0',
  },
  programmeDetails: {
    fontSize: '14px',
    color: '#444',
    lineHeight: '1.75',
    margin: '0',
  },
}

export default function HumanDepartmentPage() {
  return (
    <div style={styles.pageWrapper}>
      {/* Left Sidebar */}
      <aside style={styles.sidebar}>
        {menuItems.map((item) =>
          item.active ? (
            <span key={item.label} style={styles.sidebarActiveItem}>
              {item.label}
            </span>
          ) : (
            <Link key={item.label} href={item.href} style={styles.sidebarLink}>
              {item.label}
            </Link>
          )
        )}
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.contentBox}>
          <h1 style={styles.pageTitle}>Humanities and Social Sciences</h1>

          {/* Department Banner Placeholder */}
          <div style={styles.imagePlaceholder}>
            Department of Humanities and Social Sciences
          </div>

          {/* Description */}
          <p style={styles.descriptionText}>
            The department of Humanities and Social Sciences has an interdisciplinary orientation and expertise in diversified fields of Communication Skills, Engineering Economics, Dynamics of Behavioral Science and Management in order to cater the needs of B.Tech./B.Arc. students of the institute of national importance.
          </p>
          <p style={styles.descriptionText}>
            The diversity of the curricula offered through the department provides the students with a foundational base of skills that can be used not only in the classroom, but to master challenges in globalized dynamic and competitive markets. This is done through a plethora of channels including lectures, talks, case studies, research projects, group discussion, FGD, workshops, seminars etc.
          </p>
          <p style={styles.descriptionText}>
            Faculty members possess a blend of academic and professional experience which facilitates disseminating of knowledge to the students through both classroom sessions and independent student activities.
          </p>

          {/* Academic Programmes */}
          <h2 style={styles.sectionTitle}>Academic Programmes</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
              width: '100%',
              marginBottom: '30px',
            }}
          >
            {academicProgrammes.map((programme) => (
              <div key={programme.name} style={styles.programmeCard}>
                <span style={styles.programmeIcon}>
                  <programme.Icon size={24} strokeWidth={1.8} />
                </span>
                <h3 style={styles.programmeName}>{programme.name}</h3>
                <p style={styles.programmeDetails}>{programme.details}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
