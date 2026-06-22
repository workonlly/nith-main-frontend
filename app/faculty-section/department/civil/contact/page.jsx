import Link from 'next/link'
import './civil_contact.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/civil' },
  { label: 'Vision & Mission', href: '/faculty-section/department/civil/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/civil/faculty' },
  { label: 'Staff', href: '/faculty-section/department/civil/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/civil/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/civil/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/civil/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/civil/contact', active: true },
]

export default function CivilContactPage() {
  return (
    <main className="civil-contact-page">
      <div className="civil-contact-shell">
        <aside className="civil-contact-sidebar" aria-label="Department navigation">
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

        <section className="civil-contact-content">
          <div className="contact-card">
            <h1>Contact Information</h1>

            <address>
              <strong>Dr. Umesh Kumar Pandey</strong>
              <span>Head of Department</span>
              <span>Civil Engineering</span>
              <span>National Institute of Technology Hamirpur</span>
              <span>Himachal Pradesh, Pin No. 177005, India.</span>
            </address>

            <div className="contact-details">
              <p>
                <strong>Phone No.:</strong> 01972- 254300
              </p>
              <p>
                <strong>HoD Email:</strong> head.ce@nith.ac.in
              </p>
              <p>
                <strong>Office Email:</strong> office.ce@nith.ac.in
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
