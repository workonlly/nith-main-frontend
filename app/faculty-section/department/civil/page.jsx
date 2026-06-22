'use client'

import {
  BookOpen,
  GraduationCap,
  Microscope,
  Network,
} from 'lucide-react'

const academicProgrammes = [
  {
    name: 'B.Tech',
    Icon: GraduationCap,
    details:
      'Four-year undergraduate programme providing foundational knowledge in structural, transportation, environmental, geotechnical, and water resources engineering with hands-on lab experience.',
  },
  {
    name: 'M.Tech',
    Icon: Microscope,
    details:
      'Postgraduate programme offering advanced specialization in areas such as Structural Engineering, Geotechnical Engineering, Environmental Engineering, and Transportation Engineering.',
  },
  {
    name: 'Ph.D',
    Icon: Network,
    details:
      'Advanced doctoral research programs in structural engineering, earthquake engineering, environmental engineering, hydrology, geo-technology, and emerging areas of civil engineering.',
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

  objectiveTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#1a1a1a',
    margin: '28px 0 16px 0',
  },

  objectiveList: {
    paddingLeft: '20px',
    margin: '0',
  },

  objectiveItem: {
    fontSize: '13px',
    lineHeight: '1.7',
    color: '#333',
    textAlign: 'justify',
    marginBottom: '8px',
  },
}

function App() {
  return (
    <div style={styles.pageWrapper}>

      {/* Left Sidebar */}
      <aside style={styles.sidebar}>
        <span style={styles.sidebarActiveItem}>About Us</span>

        <a href="/faculty-section/department/civil/vision-mission" style={styles.sidebarLink}>
          Vision &amp; Mission
        </a>

        <a href="/faculty-section/department/civil/faculty" style={styles.sidebarLink}>
          Faculty
        </a>

        <a href="/faculty-section/department/civil/staff" style={styles.sidebarLink}>
          Staff
        </a>

        <a href="/faculty-section/department/civil/programme-offered" style={styles.sidebarLink}>
          Programme Offered
        </a>

        <a href="/faculty-section/department/civil/labs" style={styles.sidebarLink}>
          Labs
        </a>

        <a href="/faculty-section/department/civil/research-publications" style={styles.sidebarLink}>
          Research Publications
        </a>

        <a href="/faculty-section/department/civil/contact" style={styles.sidebarLink}>
          Contact
        </a>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.contentBox}>

          <h1 style={styles.pageTitle}>
            Civil Engineering
          </h1>

          {/* Image */}
          <div style={styles.imagePlaceholder}>
            Civil Engineering Department
          </div>

          {/* CE Description */}
          <p style={styles.descriptionText}>
            National Institute of Technology, Hamirpur was established in the year 1986 and the Civil Engineering Department is part of the institute since its inception. Civil Engineering is considered to be the most versatile branch among all the engineering branches. It is the branch with lot of diversity right from structural to transportation engineering, environmental to hydrology to hydraulics engineering, geology to geo-technology to earthquake engineering; Civil Engineering can be considered as a single largest branch among all the engineering branches.
          </p>
          <p style={styles.descriptionText}>
            Being one of the primary Engineering Departments of the Institute, the Department of Civil Engineering offers B. Tech., M. Tech. and Ph.D. degrees programmes, accredited by National Board of Accreditation for five years since January 2008 and has been imparting quality education to its students.
          </p>

          {/* Objective */}
          <h2 style={styles.objectiveTitle}>
            Objective
          </h2>
          <ul style={styles.objectiveList}>
            <li style={styles.objectiveItem}>
              To provide quality education and training to our graduates to cope up with international standards.
            </li>
            <li style={styles.objectiveItem}>
              To conduct regular continuing education and community development programmes.
            </li>
            <li style={styles.objectiveItem}>
              To provide extension and consultancy services to Government, private, public and industrial sectors.
            </li>
            <li style={styles.objectiveItem}>
              To excel in Industrial Research and consultancy with appropriate national and International linkages and to maintain highest standards in the field of Civil Engineering.
            </li>
            <li style={styles.objectiveItem}>
              To be the best-rated departments in India and world in terms of teaching and quality, research contributions, high-end consultancy and academic leadership.
            </li>
          </ul>

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
