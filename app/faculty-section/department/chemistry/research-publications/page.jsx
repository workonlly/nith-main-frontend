'use client'

import Link from 'next/link'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/chemistry' },
  { label: 'Vision & Mission', href: '/faculty-section/department/chemistry/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/chemistry/faculty' },
  { label: 'Staff', href: '/faculty-section/department/chemistry/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/chemistry/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/chemistry/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/chemistry/research-publications', active: true },
  { label: 'Contact', href: '/faculty-section/department/chemistry/contact' },
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
    marginBottom: '24px',
    marginTop: '0',
  },

  descriptionText: {
    fontSize: '14px',
    lineHeight: '1.7',
    color: '#333',
    textAlign: 'justify',
  },
}

export default function ChemistryResearchPublicationsPage() {
  return (
    <div style={styles.pageWrapper}>
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

      <main style={styles.mainContent}>
        <div style={styles.contentBox}>
          <h1 style={styles.pageTitle}>Research Publications</h1>

          <p style={styles.descriptionText}>
            Details regarding the research publications of the Department of Chemistry are currently being updated. Please check back later or visit the individual faculty profiles for their specific publications.
          </p>
        </div>
      </main>
    </div>
  )
}