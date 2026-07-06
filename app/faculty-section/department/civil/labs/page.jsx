import Link from 'next/link'
import './civil_labs.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/civil' },
  { label: 'Vision & Mission', href: '/faculty-section/department/civil/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/civil/faculty' },
  { label: 'Staff', href: '/faculty-section/department/civil/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/civil/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/civil/labs', active: true },
  { label: 'Research Publications', href: '/faculty-section/department/civil/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/civil/contact' },
]

const laboratories = [
  'Structural Engineering Lab',
  'Concrete Technology Lab',
  'Soil Mechanics Lab',
  'Fluid Mechanics Lab',
  'Hydraulics Lab',
  'Environmental Engineering Lab',
  'Transportation Engineering Lab',
  'Surveying Lab',
  'Engineering Geology Lab',
  'Computer Aided Design Lab',
  'Material Testing Lab',
  'Geotechnical Engineering Lab',
  'Water Resources Engineering Lab',
]

export default function CivilLabsPage() {
  return (
    <main className="civil-labs-page">
      <div className="civil-labs-shell">
        <aside className="civil-labs-sidebar" aria-label="Department navigation">
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

        <section className="civil-labs-content">
          <h1>Department of Civil Engineering List of Laboratories</h1>

          <table className="labs-table">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Laboratory Name</th>
              </tr>
            </thead>
            <tbody>
              {laboratories.map((lab, index) => (
                <tr key={lab}>
                  <td>{index + 1}</td>
                  <td>{lab}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  )
}
