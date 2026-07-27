'use client'

import Link from 'next/link'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/energy' },
  { label: 'Vision & Mission', href: '/faculty-section/department/energy/vision-mission', active: true },
  { label: 'Faculty', href: '/faculty-section/department/energy/faculty' },
  { label: 'Programme Offered', href: '/faculty-section/department/energy/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/energy/labs' },
  { label: 'R&D Projects', href: '/faculty-section/department/energy/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/energy/contact' },
]

const missionPoints = [
  'To provide multidisciplinary education, research & development solutions with a focus on clean energy sources.',
  'To identify energy, environmental concerns & policy issues to provide local and global solutions towards sustainability.',
  'To promote energy education, environmental awareness, entrepreneurship development, and National & International collaboration for technology transfer.',
  'To provide high-quality trained professionals for the Institutions/ Industry in the country and worldwide.',
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
  },
}

export default function EnergyVisionMissionPage() {
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
          <h1 style={styles.pageTitle}>Vision &amp; Mission</h1>

          <h2 style={styles.sectionTitle}>Vision</h2>
          <p style={styles.descriptionText}>
            To achieve excellence in research, technology, and human resource development in the area of sustainable energy.
          </p>

          <h2 style={styles.sectionTitle}>Mission</h2>
          <ul style={{ paddingLeft: '20px', margin: '0' }}>
            {missionPoints.map((point, idx) => (
              <li key={idx} style={styles.listItem}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}
