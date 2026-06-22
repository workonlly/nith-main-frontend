import Link from 'next/link'
import './civil_programmes.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/civil' },
  { label: 'Vision & Mission', href: '/faculty-section/department/civil/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/civil/faculty' },
  { label: 'Staff', href: '/faculty-section/department/civil/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/civil/programme-offered', active: true },
  { label: 'Labs', href: '/faculty-section/department/civil/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/civil/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/civil/contact' },
]

const programmes = [
  {
    name: 'Bachelor Programmes Offered',
    description: 'Four-year undergraduate programme (B.Tech) covering core and elective courses in structural, transportation, environmental, geotechnical, and water resources engineering.',
  },
  {
    name: 'Master Programmes Offered',
    description: 'Two-year postgraduate programme (M.Tech) focused on advanced research and specialized study in areas such as Structural Engineering, Geotechnical Engineering, Environmental Engineering, and Transportation Engineering.',
  },
  {
    name: 'Doctoral Programmes Offered',
    description: 'Research-intensive doctoral programme (Ph.D) emphasizing original contributions in frontier areas of civil engineering including earthquake engineering, hydrology, and geo-technology.',
  },
]

export default function CivilProgrammesPage() {
  return (
    <main className="civil-programmes-page">
      <div className="civil-programmes-shell">
        <aside className="civil-programmes-sidebar" aria-label="Department navigation">
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

        <section className="civil-programmes-content">
          <h1>Programmes Offered</h1>

          <div className="programmes-table-wrapper">
            <table className="programmes-table">
              <thead>
                <tr>
                  <th>Sl. No.</th>
                  <th>Programmes Offered</th>
                </tr>
              </thead>
              <tbody>
                {programmes.map((prog, index) => (
                  <tr key={prog.name}>
                    <td>{index + 1}</td>
                    <td>
                      <strong>{prog.name}</strong>
                      <p className="programme-summary">{prog.description}</p>
                    </td>
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
