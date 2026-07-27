'use client'

import Link from 'next/link'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/manage' },
  { label: 'Vision & Mission', href: '/faculty-section/department/manage/vision-mission', active: true },
  { label: 'Faculty', href: '/faculty-section/department/manage/faculty' },
  { label: 'Staff', href: '/faculty-section/department/manage/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/manage/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/manage/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/manage/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/manage/contact' },
]

const coreValues = [
  {
    val1: 'Integrity and Values',
    desc1: 'Academic freedom and excellence',
  },
  {
    val1: 'Integrity and professionalism',
    desc1: 'Endeavor to excel in management, cognitive/applied science and research with independent and innovative thoughts',
  },
  {
    val1: 'Creativity and innovation',
    desc1: 'Promotion of innovative ideas and creative thinking',
  },
  {
    val1: 'Social Responsibility',
    desc1: 'Commitment to provide the manpower for the betterment of the society and commitment towards society',
  },
  {
    val1: 'Transparency and good governance',
    desc1: 'Transparency on all decision making process and use of best practices in administration',
  },
  {
    val1: 'Diversity and inclusiveness',
    desc1: 'Involvement of all and diversity of ideas to achieve excellence in the diversified field',
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
    width: '40%',
  },
  coreValuesTd: {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
  },
}

export default function VisionMissionPage() {
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
          <p style={styles.descriptionText}>
            “The vision of the department is to prepare ethical leaders, to polish the skill of students and make the best of their potential, so that they are not only committed to their business, but make their contribution in the nation building through flexible, value based education driven by high impact factor research”.
          </p>

          <h2 style={styles.sectionTitle}>Mission</h2>
          <ul style={{ paddingLeft: '20px', margin: '0' }}>
            <li style={styles.listItem}>
              To create quality Human Capital for the industries, who can lead ethically and contribute for sustainable development of the society.
            </li>
            <li style={styles.listItem}>
              To achieve excellence in management education, research and training through innovation and strong conviction.
            </li>
            <li style={styles.listItem}>
              To develop inquisitive and cognitive mindset of students to have better outlook towards both professional and personal life.
            </li>
          </ul>

          <h2 style={styles.sectionTitle}>CORE VALUES</h2>
          <p style={styles.descriptionText}>
            We strive to achieve our vision and mission by adhering the following core values:
          </p>

          <table style={styles.coreValuesTable}>
            <tbody>
              {coreValues.map((item, idx) => (
                <tr key={idx}>
                  <td style={styles.coreValuesTh}>{item.val1}</td>
                  <td style={styles.coreValuesTd}>{item.desc1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
