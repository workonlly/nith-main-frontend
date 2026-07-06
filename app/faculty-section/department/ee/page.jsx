"use client";

import { GraduationCap, Microscope, Network } from "lucide-react";

const academicProgrammes = [
  {
    name: "B.Tech",
    Icon: GraduationCap,
    details: "Bachelor Programmes Offered: B.Tech in Electrical Engineering.",
  },
  {
    name: "M.Tech",
    Icon: Microscope,
    details:
      "Master Programmes Offered: M.Tech in Power System, M.Tech in Signal Processing & Control, M.Tech in Condition Monitoring of Electrical Apparatus.",
  },
  {
    name: "Ph.D",
    Icon: Network,
    details:
      "Doctoral Programmes Offered. Major Areas of Research: Power System deregulation, Voltage Stability, Power Quality, Power Transformer diagnostics, Hydrothermal Scheduling, Control Systems, Communication and Signal Processing etc.",
  },
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
    marginBottom: "16px",
    marginTop: "0",
  },

  imagePlaceholder: {
    width: "100%",
    height: "220px",
    backgroundColor: "#d0e0d0",
    borderRadius: "4px",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#666",
    fontSize: "14px",
  },

  descriptionText: {
    fontSize: "13px",
    lineHeight: "1.7",
    color: "#333",
    textAlign: "justify",
    marginBottom: "12px",
  },

  sectionTitle: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#1a1a1a",
    margin: "28px 0 16px 0",
  },

  programmeCard: {
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    padding: "28px 24px",
    backgroundColor: "#fff",
    minHeight: "260px",
  },

  programmeIcon: {
    width: "48px",
    height: "48px",
    marginBottom: "20px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff7f7",
    color: "#8b0000",
  },

  programmeName: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#8b0000",
    marginBottom: "12px",
    marginTop: "0",
  },

  programmeDetails: {
    fontSize: "14px",
    color: "#444",
    lineHeight: "1.75",
    margin: "0",
  },

  objectiveTitle: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#1a1a1a",
    margin: "28px 0 16px 0",
  },

  objectiveList: {
    paddingLeft: "20px",
    margin: "0",
  },

  objectiveItem: {
    fontSize: "13px",
    lineHeight: "1.7",
    color: "#333",
    textAlign: "justify",
    marginBottom: "8px",
  },
};

function App() {
  return (
    <div style={styles.pageWrapper}>
      {/* Left Sidebar */}
      <aside style={styles.sidebar}>
        <span style={styles.sidebarActiveItem}>About Us</span>

        <a
          href="/faculty-section/department/ee/vision-mission"
          style={styles.sidebarLink}
        >
          Vision &amp; Mission
        </a>

        <a
          href="/faculty-section/department/ee/faculty"
          style={styles.sidebarLink}
        >
          Faculty
        </a>

        <a
          href="/faculty-section/department/ee/staff"
          style={styles.sidebarLink}
        >
          Staff
        </a>

        <a
          href="/faculty-section/department/ee/programme-offered"
          style={styles.sidebarLink}
        >
          Programme Offered
        </a>

        <a
          href="/faculty-section/department/ee/labs"
          style={styles.sidebarLink}
        >
          Labs
        </a>

        <a
          href="/faculty-section/department/ee/research-publications"
          style={styles.sidebarLink}
        >
          Research Publications
        </a>

        <a
          href="/faculty-section/department/ee/contact"
          style={styles.sidebarLink}
        >
          Contact
        </a>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.contentBox}>
          <h1 style={styles.pageTitle}>Electrical Engineering</h1>

          {/* Image */}
          <div style={styles.imagePlaceholder}>
            Electrical Engineering Department
          </div>

          <p style={styles.descriptionText}>
            The Department of Electrical Engineering, established in the year
            1986, is one of the oldest Departments of National Institute of
            Technology Hamirpur. The Department has been imparting quality
            education at undergraduate and post-graduate level. The faculty
            members have been active in teaching and research activities. The
            course curriculum is being revised from time to time so as to keep
            students abreast with latest developments and emerging technologies.
          </p>
          <p style={styles.descriptionText}>
            Various departmental laboratories have been strengthened and
            modernized by procuring state of art equipment. The department is
            also equipped with latest experimental and computational facilities
            for taking up R&D and consultancy activities in different areas of
            Electrical Engineering. Alumni of the department are well placed in
            various reputed government / non-government administrative,
            academic, research, engineering organizations in the country. Many
            of them are well settled in various reputed organization in abroad.
            Department produces not only knowledgeable, skilled, trained
            employable engineers but also a good citizen having concern with
            society, environment and ethical issues.
          </p>

          {/* Objective */}
          <h2 style={styles.objectiveTitle}>Objective</h2>
          <ul style={styles.objectiveList}>
            <li style={styles.objectiveItem}>
              PEO1: Be successful in professional as well as entrepreneurial
              career by acquiring strong knowledge in the principles and
              practices of Electrical Engineering.
            </li>
            <li style={styles.objectiveItem}>
              PEO2: Be successful in analysing, designing or testing electrical
              systems, such as electrical power system, energy system,
              instrumentation and control system, electrical drive system etc.
            </li>
            <li style={styles.objectiveItem}>
              PEO3: Be a productive member of a team, assuming leadership roles
              in their career, demonstrate professionalism, ethical approach,
              effective communication and pursuing life- long learning.
            </li>
            <li style={styles.objectiveItem}>
              PSO1: Have competency and imaginative skills in electrical
              engineering domain to make them employable in the fields of
              design, manufacturing, and other allied technical services.
            </li>
            <li style={styles.objectiveItem}>
              PSO2: Have capability to excel in the field of research &
              development, advance studies, higher degree programmes in
              Electrical & other professionally allied fields.
            </li>
            <li style={styles.objectiveItem}>
              PSO3: Have leadership quality and skills to undertake innovation
              and entrepreneurship activities with high professional standards
              and moral ethics for the benefit of society.
            </li>
          </ul>

          {/* Academic Programmes */}
          <h2 style={styles.sectionTitle}>Academic Programmes</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
              width: "100%",
              marginBottom: "30px",
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
  );
}

export default App;
