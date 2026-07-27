'use client'

import Link from 'next/link'
import { GraduationCap, Network } from 'lucide-react'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/manage', active: true },
  { label: 'Vision & Mission', href: '/faculty-section/department/manage/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/manage/faculty' },
  { label: 'Staff', href: '/faculty-section/department/manage/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/manage/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/manage/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/manage/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/manage/contact' },
]

const academicProgrammes = [
  {
    name: 'Master Programmes Offered',
    Icon: GraduationCap,
    details:
      'Master of Business Administration (MBA) programme focused on developing managerial thoughts and core skills.',
  },
  {
    name: 'Doctoral Programmes Offered',
    Icon: Network,
    details:
      'Ph.D. programme in Management Studies for cutting-edge research in business and management disciplines.',
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

export default function ManageDepartmentPage() {
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
          <h1 style={styles.pageTitle}>Management Studies</h1>

          {/* Department Banner / Image Placeholder */}
          <div style={styles.imagePlaceholder}>
            Department of Management Studies
          </div>

          {/* Description */}
          <p style={styles.descriptionText}>
            The Department of Management Studies aims to train and develop managerial thoughts beyond technical competence and making the young minds manage resources optimally so as to meet global market demands. The Department further focuses on developing managers with capability in applying management know-how to conventional and non-conventional problems of management. It implies a commitment to focus management knowledge, skills, and technologies for the betterment of society.
          </p>
          <p style={styles.descriptionText}>
            The diversity of the curricula offered through the Department provides the students with the foundation skills that can be used not only in the classroom, but to master challenges in globalized dynamic and competitive markets. This is done through a plethora of channels including lectures, talks, case studies, research projects, group discussion, workshops, seminars, etc.
          </p>
          <p style={styles.descriptionText}>
            Faculty members possess a blend of academic and professional experience which facilitates disseminating of knowledge to the students through both classroom sessions and independent student activities. The course structure is designed to impart knowledge of the core management concepts and techniques in the first year which are thereafter upgraded to advance knowledge and practicing skills in the area of specialization opted for by the student in the second year. Besides, the Department also offers doctoral programme and has the state-of-art infrastructure.
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
