import Link from 'next/link'
import './civil_research.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/civil' },
  { label: 'Vision & Mission', href: '/faculty-section/department/civil/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/civil/faculty' },
  { label: 'Staff', href: '/faculty-section/department/civil/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/civil/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/civil/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/civil/research-publications', active: true },
  { label: 'Contact', href: '/faculty-section/department/civil/contact' },
]

const publications = [
  {
    year: '2008',
    authors: 'R.K. Dutta, V.N. Khatri, T. Venkataraman',
    title: 'Comparison of predicted and observed behaviour of a geosynthetic reinforced embankment over soft clay',
    journal: 'Journal of Geotechnical and Geoenvironmental Engineering, ASCE',
    indexing: 'SCIE',
  },
  {
    year: '2010',
    authors: 'Ravi Kumar Sharma, Braja M. Das',
    title: 'Dynamic response of machine foundation on improved soil',
    journal: 'Geomechanics and Geoengineering: An International Journal',
    indexing: 'Scopus',
  },
  {
    year: '2012',
    authors: 'Surjit Singh Katoch, R.K. Sharma',
    title: 'Assessment of water quality and suitability of waste water of Baddi industrial area for irrigation',
    journal: 'International Journal of Environmental Sciences',
    indexing: 'Scopus',
  },
  {
    year: '2015',
    authors: 'Vijay Kr. Bansal, Mahesh Pal',
    title: 'Construction schedule review using GIS tools and visualization',
    journal: 'International Journal of Construction Management',
    indexing: 'SCIE',
  },
  {
    year: '2018',
    authors: 'Amrit Kumar Roy, A.K. Sharma',
    title: 'Wind pressure measurement on a pyramidal roof of a square plan low rise building',
    journal: 'Journal of Wind Engineering and Industrial Aerodynamics',
    indexing: 'SCI',
  },
]

export default function CivilResearchPage() {
  return (
    <main className="civil-research-page">
      <div className="civil-research-shell">
        <aside className="civil-research-sidebar" aria-label="Department navigation">
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

        <section className="civil-research-content">
          <h1>Research Publications</h1>

          <div className="research-table-wrapper">
            <table className="research-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Author(s)</th>
                  <th>Title & Vol. No.</th>
                  <th>Journal Name</th>
                  <th>
                    Indexing (SCI) Web of<br />Science/Scopus
                  </th>
                </tr>
              </thead>
              <tbody>
                {publications.map((pub, index) => (
                  <tr key={index}>
                    <td>{pub.year}</td>
                    <td>{pub.authors}</td>
                    <td>{pub.title}</td>
                    <td>{pub.journal}</td>
                    <td>{pub.indexing}</td>
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
