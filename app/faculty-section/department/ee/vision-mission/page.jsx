"use client";

import Link from "next/link";

const menuItems = [
  { label: "About Us", href: "/faculty-section/department/ee" },
  {
    label: "Vision & Mission",
    href: "/faculty-section/department/ee/vision-mission",
    active: true,
  },
  { label: "Faculty", href: "/faculty-section/department/ee/faculty" },
  { label: "Staff", href: "/faculty-section/department/ee/staff" },
  {
    label: "Programme Offered",
    href: "/faculty-section/department/ee/programme-offered",
  },
  { label: "Labs", href: "/faculty-section/department/ee/labs" },
  {
    label: "Research Publications",
    href: "/faculty-section/department/ee/research-publications",
  },
  { label: "Contact", href: "/faculty-section/department/ee/contact" },
];

const styles = {
  pageWrapper: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "sans-serif",
    backgroundColor: "#f5f5f5",
  },

  sidebar: {
    width: "200px",
    minWidth: "200px",
    backgroundColor: "#fff",
    borderRight: "1px solid #ddd",
    paddingTop: "0",
  },

  sidebarActiveItem: {
    backgroundColor: "#8b0000",
    color: "#fff",
    padding: "10px 16px",
    fontWeight: "600",
    fontSize: "14px",
    display: "block",
  },

  sidebarLink: {
    display: "block",
    padding: "8px 16px",
    fontSize: "14px",
    color: "#c0392b",
    textDecoration: "none",
    borderBottom: "1px solid #f0f0f0",
  },

  mainContent: {
    flex: 1,
    padding: "24px 32px",
    backgroundColor: "#f5f5f5",
  },

  contentBox: {
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "4px",
    border: "1px solid #e0e0e0",
  },

  pageTitle: {
    fontSize: "20px",
    fontWeight: "400",
    textAlign: "center",
    color: "#333",
    marginBottom: "24px",
    marginTop: "0",
  },

  sectionTitle: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#1a1a1a",
    margin: "28px 0 16px 0",
  },

  descriptionText: {
    fontSize: "13px",
    lineHeight: "1.7",
    color: "#333",
    textAlign: "justify",
    marginBottom: "12px",
  },

  listItem: {
    fontSize: "13px",
    lineHeight: "1.7",
    color: "#333",
    textAlign: "justify",
    marginBottom: "8px",
    marginLeft: "20px",
  },
};

export default function EEVisionMissionPage() {
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
          ),
        )}
      </aside>

      <main style={styles.mainContent}>
        <div style={styles.contentBox}>
          <h1 style={styles.pageTitle}>Vision & Mission</h1>

          <h2 style={styles.sectionTitle}>Vision</h2>
          <p style={styles.descriptionText}>
            The vision of the Department of Electrical Engineering is to provide
            excellent technical education in the field of Electrical Engineering
            and to produce proficient engineers, professionals and researchers
            with ethical values and attitude towards continuous learning.
          </p>

          <h2 style={styles.sectionTitle}>Mission</h2>
          <p style={styles.descriptionText}>
            The mission of the Department of Electrical Engineering is envisaged
            in the following statements:
          </p>
          <ul style={{ paddingLeft: "20px", margin: "0" }}>
            <li style={styles.listItem}>
              To provide students with a supportive environment that facilitates
              in imparting quality and value-based education in the area of
              Electrical Engineering and to apply engineering principles to
              solve real world problems.
            </li>
            <li style={styles.listItem}>
              To prepare students to contribute in professional career and
              social services with high ethical values and with life-long
              learning approach and be successful as they move into occupation,
              research and advanced studies.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
