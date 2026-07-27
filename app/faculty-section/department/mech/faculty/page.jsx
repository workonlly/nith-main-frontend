"use client";

import Link from "next/link";
import "./mech_faculty.css";

const menuItems = [
  { label: "About Us", href: "/faculty-section/department/mech" },
  {
    label: "Vision & Mission",
    href: "/faculty-section/department/mech/vision-mission",
  },
  {
    label: "Faculty",
    href: "/faculty-section/department/mech/faculty",
    active: true,
  },
  { label: "Staff", href: "/faculty-section/department/mech/staff" },
  {
    label: "Programme Offered",
    href: "/faculty-section/department/mech/programme-offered",
  },
  { label: "Labs", href: "/faculty-section/department/mech/labs" },
  {
    label: "Research Publications",
    href: "/faculty-section/department/mech/research-publications",
  },
  { label: "Contact", href: "/faculty-section/department/mech/contact" },
];

const facultyGroups = [
  {
    title: "Professor",
    featured: true,
    members: [
      {
        slNo: "1",
        name: "Prof. Rakesh Sehgal",
        designation: "Professor",
        interests: "Machine Design (Tribology)",
        email: "rsehgal@nith.ac.in",
        link: "http://portfolio.nith.ac.in/faculty/rsehgal",
      },
      {
        slNo: "2",
        name: "Prof. Anoop Kumar",
        designation: "Professor",
        interests: "Heat Transfer, CFD, Energy",
        email: "anoop@nith.ac.in",
        link: "https://portfolios.nith.ac.in/index.php?/nith/dr-anoop-kumar661",
      },
    ],
  },
  {
    title: "Associate Professor",
    members: [
      {
        slNo: "1",
        name: "Dr. Rajesh Kumar Sharma",
        designation: "Associate Professor",
        interests: "Tribology",
        email: "rajesh@nith.ac.in",
        link: "https://portfolios.nith.ac.in/index.php?/nith/dr-rajesh-kumar-sharma-",
      },
      {
        slNo: "2",
        name: "Dr. Rajiv Kumar Sharma",
        designation: "Associate Professor",
        interests:
          "Industrial & Production Systems Engineering (Supply Chain, Operations & Quality Management)",
        email: "rksfme@nith.ac.in",
        link: "https://portfolios.nith.ac.in/index.php?/nith/dr-rajiv-kumar-sharma777",
      },
      {
        slNo: "3",
        name: "Dr. Somesh Sharma",
        designation: "Associate Professor",
        interests:
          "Production and Industrial Engineering, Computer Integrated Manufacturing, Operations and Quality Management",
        email: "somesh@nith.ac.in",
        link: "https://portfolios.nith.ac.in/index.php?/nith/dr-somesh-sharma131",
      },
      {
        slNo: "4",
        name: "Dr. P.K. Sood",
        designation: "Associate Professor",
        interests: "Production Engineering",
        email: "pks@nith.ac.in",
        link: "https://portfolio.nith.ac.in/faculty/dr-p-k-sood",
      },
      {
        slNo: "5",
        name: "Dr. Sant Ram Chauhan",
        designation: "Associate Professor",
        interests:
          "Composite Materials,Tribology,Manufacturing and Computer Integrated manufacturing",
        email: "srchauhan@nith.ac.in",
        link: "https://portfolios.nith.ac.in/index.php?/nith/dr-sant-ram-chauhan-",
      },
      {
        slNo: "6",
        name: "Dr. Prashant Kumar",
        designation: "Associate Professor",
        interests: "Thermal Engineering",
        email: "prashant@nith.ac.in",
        link: "https://portfolios.nith.ac.in/index.php?/nith/dr-prashant-kumar-dhiman750",
      },
      {
        slNo: "7",
        name: "Dr. Siddhartha Sharma",
        designation: "Associate Professor",
        interests: "Design, Materials Tribology, Friction & Wear, SAH,",
        email: "sidmech@nith.ac.in",
        link: "https://portfolios.nith.ac.in/index.php?/nith/dr-siddhartha-",
      },
      {
        slNo: "8",
        name: "Dr. Varun",
        designation: "Associate Professor",
        interests: "Renewable Energy, Heat Transfer, Turbomachines",
        email: "varun@nith.ac.in",
        link: "https://portfolios.nith.ac.in/index.php?/nith/dr-varun-goel-",
      },
      {
        slNo: "9",
        name: "Dr. Debasish Das",
        designation: "Associate Professor",
        interests: "Thermal Engineering",
        email: "debasish@nith.ac.in",
        link: "https://portfolios.nith.ac.in/index.php?/nith/dr-debasish-das-",
      },
      {
        slNo: "10",
        name: "Dr. Mohit Pant",
        designation: "Associate Professor",
        interests: "Computational Fracture Mechanics",
        email: "mohitfme@nith.ac.in",
        link: "https://portfolios.nith.ac.in/index.php?/nith/dr-mohit-pant-",
      },
    ],
  },
  {
    title: "Assistant Professor Grade-I",
    members: [
      {
        slNo: "1",
        name: "Dr. Deepak Sharma",
        designation: "Assistant Professor Grade-I",
        interests: "Thermal Engineering",
        email: "dsharma@nith.ac.in",
        link: "https://portfolios.nith.ac.in/index.php?/nith/dr-deepak-sharma-",
      },
      {
        slNo: "2",
        name: "Dr. Param Singh",
        designation: "Assistant Professor Grade-I",
        interests: "Manufacturing Engineering",
        email: "psingh@nith.ac.in",
        link: "https://portfolios.nith.ac.in/index.php?/nith/dr-param-singh",
      },
      {
        slNo: "3",
        name: "Dr. Ajoy Debbarma",
        designation: "Assistant Professor Grade-I",
        interests:
          "Thermal Engineering, Heat Transfer, Jet Impingement Cooling, Energy conversion system",
        email: "adebbarma@nith.ac.in",
        link: "https://portfolios.nith.ac.in/index.php?/nith/dr-ajoy-debbarma-",
      },
      {
        slNo: "4",
        name: "Dr. Akhilesh kumar Choudhary",
        designation: "Assistant Professor Grade-I",
        interests: "Condition Monitoring, Biofuel, Diesel Engine,",
        email: "akhilesh@nith.ac.in",
        link: "https://portfolios.nith.ac.in/index.php?/nith/dr-akhilesh-choudhary",
      },
      {
        slNo: "5",
        name: "Dr. Dilshad Ahmad Khan",
        designation: "Assistant Professor Grade-I",
        interests:
          "Advanced Machining, Nano-Finishing, Magneto-rheological Finishing, Additive Manufacturing (3D Printing, Rapid Prototyping), Industrial Automation",
        email: "dilshad@nith.ac.in",
        link: "https://portfolios.nith.ac.in/index.php?/nith/dr-dilshad-ahmad-khan-",
      },
      {
        slNo: "6",
        name: "Dr. Laxmikant Yadav",
        designation: "Assistant Professor Grade-I",
        interests:
          "Thermal Engineering, Refrigeration & Air Conditioning, Modeling of Desiccant Wheel & Desiccant Cooling",
        email: "laxmikant@nith.ac.in",
        link: "https://portfolios.nith.ac.in/index.php?/nith/dr-laxmikant-yadav",
      },
      {
        slNo: "7",
        name: "Dr. Anshul Sharma",
        designation: "Assistant Professor Grade-I",
        interests: "Mechanical Design",
        email: "anshulsharma@nith.ac.in",
        link: "https://portfolios.nith.ac.in/index.php?/nith/dr-anshul-sharma",
      },
    ],
  },
  {
    title: "Assistant Professor Grade-II",
    members: [
      {
        slNo: "1",
        name: "Dr. Niharika Gupta",
        designation: "Assistant Professor Grade-II",
        interests:
          "Tribology, Gears, Vibrations, Lubrication, Surface texturing, Numerical modelling, Condition monitoring",
        email: "niharikagupta@nith.ac.in",
        link: "https://portfolios.nith.ac.in/index.php?/nith/dr-niharika-gupta",
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

        {member.link && (
          <a
            href={member.link}
            className="faculty-read-more"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>
        )}
      </div>

      <div className="faculty-info">
        <h3>{member.name}</h3>
        <p>{member.designation}</p>
      </div>
    </article>
  );
}

export default function MechFacultyPage() {
  return (
    <main className="mech-faculty-page">
      <div className="mech-faculty-shell">
        <aside
          className="mech-faculty-sidebar"
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

        <section className="mech-faculty-content">
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
