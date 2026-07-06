'use client'

import {
  GraduationCap,
  Microscope,
  Network,
} from 'lucide-react'

const academicProgrammes = [
  {
    name: 'B.Tech',
    Icon: GraduationCap,
    details:
      'Bachelor Programmes Offered: Teaching UG courses floated by various engineering departments.',
  },
  {
    name: 'M.Tech / M.Sc',
    Icon: Microscope,
    details:
      'Master Programmes Offered: M.Tech program in Chemical Technology (with Chemical Engineering), M.Sc. Program in Chemistry.',
  },
  {
    name: 'Ph.D',
    Icon: Network,
    details:
      'Doctoral Programmes Offered: Ph.D. degree in diverse areas of chemistry.',
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
    minHeight: '260px',
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
    fontSize: '20px',
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

function App() {
  return (
    <div style={styles.pageWrapper}>

      {/* Left Sidebar */}
      <aside style={styles.sidebar}>
        <span style={styles.sidebarActiveItem}>About Us</span>

        <a href="/faculty-section/department/chemistry/vision-mission" style={styles.sidebarLink}>
          Vision &amp; Mission
        </a>

        <a href="/faculty-section/department/chemistry/faculty" style={styles.sidebarLink}>
          Faculty
        </a>

        <a href="/faculty-section/department/chemistry/staff" style={styles.sidebarLink}>
          Staff
        </a>

        <a href="/faculty-section/department/chemistry/programme-offered" style={styles.sidebarLink}>
          Programme Offered
        </a>

        <a href="/faculty-section/department/chemistry/labs" style={styles.sidebarLink}>
          Labs
        </a>

        <a href="/faculty-section/department/chemistry/research-publications" style={styles.sidebarLink}>
          Research Publications
        </a>

        <a href="/faculty-section/department/chemistry/contact" style={styles.sidebarLink}>
          Contact
        </a>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.contentBox}>

          <h1 style={styles.pageTitle}>
            Department of Chemistry
          </h1>

          {/* Image */}
          <div style={styles.imagePlaceholder}>
            Chemistry Department Image
          </div>

          <p style={styles.descriptionText}>
            The Department of Chemistry came into existence as an independent department in August 2009. In addition to teaching UG and PG courses floated by various engineering departments, the department also offers Ph.D. degree in diverse areas of chemistry.
          </p>
          <p style={styles.descriptionText}>
            The department is currently offering M. Tech. program in Chemical Technology in association with Chemical Engineering department from the academic session 2016-17 with an intake of 15 students from both science and engineering backgrounds. The department has also started M.Sc. Program in Chemistry from the session 2017-18 with an initial intake of 20 students.
          </p>
          <p style={styles.descriptionText}>
            In the coming years, we plan for the extension and up gradation of the PG programs in terms of intake capacity as well as its curriculum based on current industrial requirements and needs. Further, the department also looks forward for active industrial participation in course structuring and training.
          </p>

          {/* Academic Programmes */}
          <h2 style={styles.sectionTitle}>
            Academic Programmes
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
              width: '100%',
              marginBottom: '30px',
            }}
          >
            {academicProgrammes.map((programme) => (
              <div
                key={programme.name}
                style={styles.programmeCard}
              >
                <span style={styles.programmeIcon}>
                  <programme.Icon size={24} strokeWidth={1.8} />
                </span>

                <h3 style={styles.programmeName}>
                  {programme.name}
                </h3>

                <p style={styles.programmeDetails}>
                  {programme.details}
                </p>
              </div>
            ))}
          </div>

        </div>
      </main>

    </div>
  )
}

export default App