'use client'

import Link from 'next/link'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/chemistry' },
  { label: 'Vision & Mission', href: '/faculty-section/department/chemistry/vision-mission', active: true },
  { label: 'Faculty', href: '/faculty-section/department/chemistry/faculty' },
  { label: 'Staff', href: '/faculty-section/department/chemistry/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/chemistry/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/chemistry/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/chemistry/research-publications' },
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

  coreValuesTable: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '16px',
    fontSize: '13px',
  },

  coreValuesTh: {
    border: '1px solid #ddd',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    textAlign: 'left',
    fontWeight: '600',
  },

  coreValuesTd: {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
  }
}

export default function ChemistryVisionMissionPage() {
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

          <h2 style={styles.sectionTitle}>Vision</h2>
          <ul style={{ paddingLeft: '20px', margin: '0' }}>
            <li style={styles.listItem}>
              The department of chemistry envisages to be recognized as a department of par excellence in higher learning, mentorship of students, research in chemistry and service to the society.
            </li>
          </ul>

          <h2 style={styles.sectionTitle}>Mission</h2>
          <ul style={{ paddingLeft: '20px', margin: '0' }}>
            <li style={styles.listItem}>
              Provide distinctive and relevant education in chemical sciences at the undergraduate, postgraduate and research levels.
            </li>
            <li style={styles.listItem}>
              Produce skillful, inventive and confident scholars for careers in academia, government and industry.
            </li>
          </ul>

          <h2 style={styles.sectionTitle}>CORE VALUES</h2>
          <p style={styles.descriptionText}>
            Vision and Mission of department of chemistry are reflected in a set of core values, which define the character of our department:
          </p>

          <table style={styles.coreValuesTable}>
            <tbody>
              <tr>
                <td style={styles.coreValuesTh}>Integrity and Values</td>
                <td style={styles.coreValuesTd}>Striving to build an understanding of moral and ethical values among undergraduate and postgraduate students</td>
              </tr>
              <tr>
                <td style={styles.coreValuesTh}>Effective Learning/Teaching Strategies</td>
                <td style={styles.coreValuesTd}>A work and learning environment where faculty and students choose to work together in a cooperative manner</td>
              </tr>
              <tr>
                <td style={styles.coreValuesTh}>Creativity and Innovation</td>
                <td style={styles.coreValuesTd}>Creativity in generating new ideas in chemical sciences and their implementation</td>
              </tr>
              <tr>
                <td style={styles.coreValuesTh}>Independence of Thought and Academic Freedom</td>
                <td style={styles.coreValuesTd}>The faculty, staff and students to have freedom to work and express their thoughts to create an academic environment, which promotes intellectual and professional development</td>
              </tr>
              <tr>
                <td style={styles.coreValuesTh}>Accountability</td>
                <td style={styles.coreValuesTd}>Accountability for policies, procedures and actions undertaken by faculty, students and staff in the department</td>
              </tr>
              <tr>
                <td style={styles.coreValuesTh}>Service to society</td>
                <td style={styles.coreValuesTd}>To educate the society and to create awareness about health and environmental issues via academic conferences/seminars and workshops</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}