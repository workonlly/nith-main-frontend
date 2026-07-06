"use client";

import Link from "next/link";
import "./ee_faculty.css";

const menuItems = [
  { label: "About Us", href: "/faculty-section/department/ee" },
  {
    label: "Vision & Mission",
    href: "/faculty-section/department/ee/vision-mission",
  },
  {
    label: "Faculty",
    href: "/faculty-section/department/ee/faculty",
    active: true,
  },
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

const facultyGroups = [
  {
    title: "Professor",
    featured: true,
    members: [
      {
        slNo: "1",
        name: "Prof. H.M. Suryawanshi",
        designation: "Professor",
        interests: "Power Electronics & Drives and Power System",
        email: "director@nith.ac.in",
      },
      {
        slNo: "2",
        name: "Prof. Sushil Chauhan",
        designation: "Professor",
        interests: "AI Applications in Power System Analysis",
        email: "sushil@nith.ac.in",
      },
      {
        slNo: "3",
        name: "Prof. Ram Naresh Sharma",
        designation: "Professor",
        interests: "Power System Operation and Control",
        email: "rnaresh@nith.ac.in",
      },
      {
        slNo: "4",
        name: "Prof. Ashwani Chandel",
        designation: "Professor",
        interests: "Power System",
        email: "ashchandelin@nith.ac.in",
      },
    ],
  },
  {
    title: "Associate Professor",
    members: [
      {
        slNo: "1",
        name: "Dr. Ravinder Nath",
        designation: "Associate Professor",
        interests: "Signal Processing & Control",
        email: "nath@nith.ac.in",
      },
      {
        slNo: "2",
        name: "Dr. (Mrs.) Veena Sharma",
        designation: "Associate Professor",
        interests:
          "Instrumentation and Control Engineering , Power system operation and Control",
        email: "veena@nith.ac.in",
      },
      {
        slNo: "3",
        name: "Dr. Raj Kumar Jarial",
        designation: "Associate Professor",
        interests:
          "Power Electronics, Electrical Machines & Drives, Condition Monitoring, High Voltage Systems",
        email: "jarial@nith.ac.in",
      },
      {
        slNo: "4",
        name: "Dr. Bharat Bhushan Sharma",
        designation: "Associate Professor",
        interests: "Nonlinear Dynamics and Control",
        email: "bhushan@nith.ac.in",
      },
      {
        slNo: "5",
        name: "Dr. O. P. Rahi",
        designation: "Associate Professor",
        interests: "Power System, Hydro Power, Renewable Energy",
        email: "oprahi@nith.ac.in",
      },
      {
        slNo: "6",
        name: "Dr. Amit Kaul",
        designation: "Associate Professor",
        interests: "Signal Processing & Control",
        email: "amitkaul@nith.ac.in",
      },
    ],
  },
  {
    title: "Assistant Professor Grade-I",
    members: [
      {
        slNo: "1",
        name: "Dr. Himesh Handa",
        designation: "Assistant Professor Grade-I",
        interests: "Control Systems",
        email: "himeshhanda@nith.ac.in",
      },
      {
        slNo: "2",
        name: "Dr. Rajesh kumar",
        designation: "Assistant Professor Grade-I",
        interests: "Power System,Renewable Energy, Optimisation, Scheduling,",
        email: "rajesh_kumar@nith.ac.in",
      },
      {
        slNo: "3",
        name: "Dr. Bharti Bakshi Koul",
        designation: "Assistant Professor Grade-I",
        interests: "Power system",
        email: "bhartibakshi@nith.ac.in",
      },
      {
        slNo: "4",
        name: "Dr. Ram Niwash Mahia",
        designation: "Assistant Professor Grade-I",
        interests:
          "Networked Control Systems, Complex Networks, Power Networks and Multi-Agent Systems.",
        email: "ram@nith.ac.in",
      },
      {
        slNo: "5",
        name: "Dr. Chandrasekaran S",
        designation: "Assistant Professor Grade-I",
        interests:
          "Grid Synchronization Techniques, Cyber Security of power Electronic and Power Systems",
        email: "chandru@nith.ac.in",
      },
      {
        slNo: "6",
        name: "Dr. Vivek Sharma",
        designation: "Assistant Professor Grade-I",
        interests: "Instrumentation and Control Engineering",
        email: "vivek@nith.ac.in",
      },
      {
        slNo: "7",
        name: "Dr. Jiwanjot Singh",
        designation: "Assistant Professor Grade-I",
        interests:
          "Power Electronics, Power Quality and Renewable Energy Systems",
        email: "jiwanjot@nith.ac.in",
      },
    ],
  },
  {
    title: "Assistant Professor Grade-II",
    members: [
      {
        slNo: "1",
        name: "Dr. Supriya Jaiswal",
        designation: "Assistant Professor Grade-II",
        interests: "Power Quality (Power system)",
        email: "supriya@nith.ac.in",
      },
      {
        slNo: "2",
        name: "Dr. Pankaj Kumar Mishra",
        designation: "Assistant Professor Grade-II",
        interests:
          "Control System, Nonlinear Control, Mathematical Control Theory, Machine Learning",
        email: "pmishra@nith.ac.in",
      },
      {
        slNo: "3",
        name: "Dr. Sreeram TS",
        designation: "Assistant Professor Grade-II",
        interests: "Power System",
        email: "sreeram@nith.ac.in",
      },
      {
        slNo: "4",
        name: "Dr. Katam Nishanth",
        designation: "Assistant Professor Grade-II",
        interests: "Non-Thermal Plasma, AI and ML applications",
        email: "katam@nith.ac.in",
      },
      {
        slNo: "5",
        name: "Dr. Upasana Sarma",
        designation: "Assistant Professor Grade-II",
        interests: "Power System and Power Electronics",
        email: "upasana@nith.ac.in",
      },
    ],
  },
];

function FacultyCard({ member, featured = false }) {
  return (
    <article
      className={
        featured ? "faculty-card faculty-card-featured" : "faculty-card"
      }
    >
      <div className="faculty-photo" aria-hidden="true">
        {featured && <div className="faculty-photo-crop" />}
      </div>

      <div className="faculty-hover-panel">
        <p>
          <strong>Email</strong>
          <a href={`mailto:${member.email}`}>{member.email}</a>
        </p>

        <p>
          <strong>Domains</strong>
          <span>{member.interests}</span>
        </p>

        <a href="#" className="faculty-read-more">
          Read more
        </a>
      </div>

      <div className="faculty-info">
        <h3>{member.name}</h3>
        <p>{member.designation}</p>
      </div>
    </article>
  );
}

export default function EEFacultyPage() {
  return (
    <main className="ee-faculty-page">
      <div className="ee-faculty-shell">
        <aside
          className="ee-faculty-sidebar"
          aria-label="Department navigation"
        >
          <nav>
            {menuItems.map((item) => (
              <Link
                className={item.active ? "active" : ""}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <section className="ee-faculty-content">
          {facultyGroups.map((group) => (
            <section className="faculty-group" key={group.title}>
              <h1>{group.title}</h1>

              <div
                className={
                  group.featured ? "faculty-featured-grid" : "faculty-grid"
                }
              >
                {group.members.map((member) => (
                  <FacultyCard
                    featured={group.featured}
                    key={member.name}
                    member={member}
                  />
                ))}
              </div>
            </section>
          ))}
        </section>
      </div>
    </main>
  );
}
