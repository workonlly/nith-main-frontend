'use client'

import Link from 'next/link'
import { Zap, GraduationCap } from 'lucide-react'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/energy', active: true },
  { label: 'Vision & Mission', href: '/faculty-section/department/energy/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/energy/faculty' },
  { label: 'Programme Offered', href: '/faculty-section/department/energy/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/energy/labs' },
  { label: 'R&D Projects', href: '/faculty-section/department/energy/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/energy/contact' },
]

const academicProgrammes = [
  {
    name: 'Master Programmes Offered',
    Icon: GraduationCap,
    details:
      'M.Tech. in Energy Technology — a comprehensive postgraduate programme equipping students with advanced knowledge in renewable energy, energy efficiency, and sustainable systems.',
  },
  {
    name: 'Doctoral Programmes Offered',
    Icon: Zap,
    details:
      'Ph.D. in Energy & Environment — doctoral research programmes focusing on clean energy, biofuels, solar technology, environmental sustainability, and energy policy.',
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
    backgroundColor: '#d0e8d0',
    borderRadius: '4px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666',
    fontSize: '14px',
    fontWeight: '600',
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
    minHeight: '220px',
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
    fontSize: '18px',
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

export default function EnergyDepartmentPage() {
  return (
    <div style={styles.pageWrapper}>
      {/* Left Sidebar */}
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

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.contentBox}>
          <h1 style={styles.pageTitle}>Centre for Energy Studies</h1>

          {/* Department Banner Placeholder */}
          <div style={styles.imagePlaceholder}>
            Centre for Energy Studies — NIT Hamirpur
          </div>

          {/* Description */}
          <p style={styles.descriptionText}>
            Welcome to the Centre for Energy Studies! Established in June 2009, as the Centre for Energy &amp; Environment, at the esteemed National Institute of Technology, Hamirpur. Our mission is to address critical energy and environmental issues.
          </p>
          <p style={styles.descriptionText}>
            We are dedicated to advancing knowledge and expertise in the field of energy and environment and sustainability through our comprehensive postgraduate programs in M. Tech. (Energy Technology) and Ph.D. in Energy &amp; Environment since July 2010.
          </p>
          <p style={styles.descriptionText}>
            At the Centre, we not only focus on imparting quality education but also actively engage in cutting-edge research and development activities. Our dedicated team of researchers and experts collaboratively work towards finding innovative solutions to energy-related challenges and their impact on the environment. By promoting energy efficiency and advocating for the adoption of alternate and renewable energy sources like solar, wind, hydro, biofuels, bioenergy, fuel cells, hydrogen energy, and more, we strive to find the sustainable solutions for overgrowing environment and energy problems with minimizing our ecological footprint.
          </p>
          <p style={styles.descriptionText}>
            In addition to our academic programs, we also conduct specialized training sessions and workshops in priority areas of energy and its nexus with the environment. Our aim is to enhance knowledge dissemination, foster industry-academia collaboration, and equip professionals with the necessary skills to tackle the current demand in the field of energy and environment.
          </p>
          <p style={styles.descriptionText}>
            As a leading center of excellence in energy studies, we are committed to making a meaningful impact by addressing the energy challenges of today and shaping a sustainable future. Join us on this exciting journey as we explore, innovate, and contribute towards a greener and more sustainable world.
          </p>

          {/* Academic Programmes */}
          <h2 style={styles.sectionTitle}>Academic Programmes</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
              width: '100%',
              marginBottom: '30px',
            }}
          >
            {academicProgrammes.map((programme) => (
              <div key={programme.name} style={styles.programmeCard}>
                <span style={styles.programmeIcon}>
                  <programme.Icon size={24} strokeWidth={1.8} />
                </span>
                <h3 style={styles.programmeName}>{programme.name}</h3>
                <p style={styles.programmeDetails}>{programme.details}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
