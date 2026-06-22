'use client'

import Link from 'next/link'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/mech' },
  { label: 'Vision & Mission', href: '/faculty-section/department/mech/vision-mission', active: true },
  { label: 'Faculty', href: '/faculty-section/department/mech/faculty' },
  { label: 'Staff', href: '/faculty-section/department/mech/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/mech/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/mech/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/mech/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/mech/contact' },
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

  sectionTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#1a1a1a',
    margin: '28px 0 16px 0',
  },

  descriptionText: {
    fontSize: '13px',
    lineHeight: '1.7',
    color: '#333',
    textAlign: 'justify',
    marginBottom: '12px',
  },

  listItem: {
    fontSize: '13px',
    lineHeight: '1.7',
    color: '#333',
    textAlign: 'justify',
    marginBottom: '8px',
    marginLeft: '20px',
  },
}

export default function MechVisionMissionPage() {
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
          <h1 style={styles.pageTitle}>Vision & Mission</h1>

          <h2 style={styles.sectionTitle}>Our Vision</h2>
          <ul style={{ paddingLeft: '20px', margin: '0' }}>
            <li style={styles.listItem}>
              To build a vibrant multicultural learning environment founded on value based academic principles, where in all involved shall contribute effectively, efficiently and responsibly to the nation and global community.
            </li>
          </ul>

          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <ul style={{ paddingLeft: '20px', margin: '0' }}>
            <li style={styles.listItem}>
              To achieve academic excellence in engineering, technology, architecture and science by imparting quality and value based education. To inspire our students to become responsible citizens and competent professionals with high ethical values. To meet the expectations of technical human resource at national and international level.
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}