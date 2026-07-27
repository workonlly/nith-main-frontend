"use client";

import { GraduationCap, Microscope, Network } from "lucide-react";

const academicProgrammes = [
  {
    name: "B.Tech",
    Icon: GraduationCap,
    details: "Bachelor Programmes Offered: B.Tech in Mechanical Engineering.",
  },
  {
    name: "M.Tech",
    Icon: Microscope,
    details:
      "Master Programmes Offered: M.Tech in Thermal Engineering, M.Tech in CAD CAM Engineering, M.Tech in Computational Methods and Experimental Techniques in Fluid Flow & Heat transfer.",
  },
  {
    name: "Ph.D",
    Icon: Network,
    details:
      "Doctoral Programmes Offered. Major Areas of Research: Design, Thermal, Production/Industrial, Solar Energy, Heat Transfer, Material Science, Quality and Reliability, Air pollution control, Tribology and Mechanism Design etc.",
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
          href="/faculty-section/department/mech/vision-mission"
          style={styles.sidebarLink}
        >
          Vision &amp; Mission
        </a>

        <a
          href="/faculty-section/department/mech/faculty"
          style={styles.sidebarLink}
        >
          Faculty
        </a>

        <a
          href="/faculty-section/department/mech/staff"
          style={styles.sidebarLink}
        >
          Staff
        </a>

        <a
          href="/faculty-section/department/mech/programme-offered"
          style={styles.sidebarLink}
        >
          Programme Offered
        </a>

        <a
          href="/faculty-section/department/mech/labs"
          style={styles.sidebarLink}
        >
          Labs
        </a>

        <a
          href="/faculty-section/department/mech/research-publications"
          style={styles.sidebarLink}
        >
          Research Publications
        </a>

        <a
          href="/faculty-section/department/mech/contact"
          style={styles.sidebarLink}
        >
          Contact
        </a>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.contentBox}>
          <h1 style={styles.pageTitle}>Mechanical Engineering</h1>

          {/* Image */}
          <div style={styles.imagePlaceholder}>
            Mechanical Engineering Department
          </div>

          <p style={styles.descriptionText}>
            The Department of Mechanical Engineering came into its existence
            right from the inception of the then Regional Engineering College
            Hamirpur (now National Institute of Technology Hamirpur) in the year
            1986 and served as catering department to other disciplines. The
            discipline of Mechanical Engineering started offering undergraduate
            programme leading to four year Bachelor of Technology (B.Tech)
            degree in Mechanical Engineering in the year 1994. The first batch
            was started with an intake of 30 students which has now been
            enhanced to 60 students by the Ministry of HRD, Government of India
            from the session 2006-2007 which has further been enhanced to 90
            students. Since its existence, 21 Batches of Undergraduate students
            with B.Tech Degree in Mechanical Engineering, 14 batches of
            Postgraduate programme i.e. M.Tech. (Thermal Engineering) and 7
            batches of M.Tech. (CAD CAM Engineering) have passed. Apart from
            this about 20 students have got their PhD in various areas of
            specialisation i.e. Thermal, Production, Materials and Design.
          </p>
          <p style={styles.descriptionText}>
            The department has a separate building housing the various
            laboratories viz : Strength of Materials, Theory of Machines,
            Dynamics of Machinery, Mechanical Measurements and Control, Heat
            Transfer, Refrigeration & Air Conditioning, Turbo Machines,
            Production, CAD/CAM, Metrology & Heat Engines, lecture rooms,
            seminar room, faculty chambers and office. The major advanced
            equipments available in these labs are: Computerized two stroke
            petrol engine test rig, Gas analyzer, Vibration exciter,
            Dynamometer, Four ball tester (computerized), Sound level meter,
            Hardness tester (Rockwell & Brinell), Impact tester, Sophisticated
            metrology equipment, FFT analyzer machine condition monitoring
            equipment, Journal bearing test rig, Refrigeration tutor, Air
            conditioning tutor, Ice plant tutor, Various hydraulic turbines
            (Kaplan, Francis, Pelton wheel) and pumps, Centrifugal blower & Heat
            transfer equipments, Universal Testing Machine (Computerized),
            Plasma cutting machine, Pollution checking equipments, Projection
            manometer, Flaw detector, Computerized vertical machining centre,
            Robot etc.
          </p>
          <p style={styles.descriptionText}>
            The computer lab of the department is well equipped having PCs of P
            III and P IV configuration, Printers, scanner facilities and
            engineering software's like - NISA FINITE ELEMENT, FLUENT, FLOW LAB
            and ANSYS ADVANCED MULTIPHYSICS for the use of students and the
            faculty as well for academic and research purposes. More software's
            for CAD/CAM are being procured. The department has started a
            Postgraduate programme leading to M. Tech. Degree with
            specialization in Computational Methods and Experimental Techniques
            in Fluid Flow & Heat transfer, admitting students from the session
            2005-2006 and offering a Ph.D programme in the areas of Design,
            Thermal, Production/Industrial. Research scholars have registered
            and are pursuing their Ph.D work. The department has also submitted
            proposals to start new PG programmes on CAD/CAM and MBA (Industrial
            Management). The department has seventeen faculty members fourteen
            of which hold Ph.D degrees. Rest of our faculty members possess M.
            Tech. Degrees and are pursuing their Ph.D. degrees. The faculty
            members are experienced having expertise in
            Design/Thermal/Industrial/Production and are engaged in research
            work in the areas of Solar Energy, Heat Transfer, Material Science,
            Quality and Reliability, Air pollution control, Tribology and
            Mechanism Design etc apart from teaching. The faculty members have
            got projects on MODROBS, TAT and R&D from various funding agencies
            like MHRD, DST, AICTE and TEQIP. A few more projects proposals have
            recently been submitted for consideration to these agencies. Our
            graduates are well placed through on-campus and off-campus placement
            and are holding responsible positions in different organizations
            viz. ITC, Godrej Consumers, Hero Motocorp., Maruti, Saint Gobain,
            Future First, Infosys, Wipro, DRDO, ISRO to name a few. Department
            of Mechanical Engineering is alive to the needs of coming times.
            Accordingly more facilities and expertise are being developed in the
            areas of Energy, Materials, Reliability, Robotics, CFD, CAD/CAM etc.
          </p>

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
