"use client";

import ArchiLayout from "../ArchiLayout";
import "./archi_faculty.css";

const facultyGroups = [
  {
    title: "Professor",
    members: [
      {
        slNo: 1,
        name: "Prof. Minakshi Jain (HAG)",
        interests:
          "Landscape Architecture, Sustainable Development and Hill Architecture",
        email: "minakshi@nith.ac.in",
        profileUrl: "#",
      },
      {
        slNo: 2,
        name: "Prof. Bhanu M. Marwaha",
        interests: "Housing, ICT & Built Environment, Drawing & Graphics",
        email: "bhanu@nith.ac.in",
        profileUrl: "#",
      },
    ],
  },
  {
    title: "Associate Professor",
    members: [
      {
        slNo: 1,
        name: "Dr. Inderpal Singh",
        interests:
          "Sustainable Architecture, Urban, Regional & Eco – Tourism Planning",
        email: "ipsingh@nith.ac.in",
        profileUrl: "#",
      },
      {
        slNo: 2,
        name: "Dr. Vandna Sharma",
        interests:
          "Vernacular & Hill Architecture; Sustainable Building Materials; Thermal Comfort; Visual Place Quality; Urban & Rural Planning",
        email: "vandna@nith.ac.in",
        profileUrl: "#",
      },
      {
        slNo: 3,
        name: "Dr. Aniket Sharma",
        interests:
          "Energy Efficient Architecture; Solar Passive & Green Building Design; Thermal Comfort; Urban & Disaster Resilience; Urban & Rural Planning",
        email: "aniket@nith.ac.in",
        profileUrl: "#",
      },
      {
        slNo: 4,
        name: "Dr. Puneet Sharma",
        interests: "Urban Design, Resilience",
        email: "architect.puneet@nith.ac.in",
        profileUrl: "#",
      },
      {
        slNo: 5,
        name: "Dr. Ashwani Kumar",
        interests:
          "Building Regulations, Development in Hill Regions, Vernacular & Traditional Architecture",
        email: "ashwanik@nith.ac.in",
        profileUrl: "#",
      },
    ],
  },
  {
    title: "Assistant Professor Grade-I",
    members: [
      {
        slNo: 1,
        name: "Dr. Amanjeet Kaur",
        interests:
          "Heritage,conservation, built environment, vernacular houses, hill architecture",
        email: "amanjeet@nith.ac.in",
        profileUrl: "#",
      },
      {
        slNo: 2,
        name: "Dr. Venu Shree",
        interests:
          "Intelligent Building Systems, Indoor Environment and Sustainable Design",
        email: "venushree@nith.ac.in",
        profileUrl: "#",
      },
      {
        slNo: 3,
        name: "Dr. Sandeep Sharma",
        interests:
          "Climate Responsive Architecture, Sustainable Habitat and Green Infrastructure.",
        email: "sandeep@nith.ac.in",
        profileUrl: "#",
      },
      {
        slNo: 4,
        name: "Dr. Neetu Kapoor",
        interests: "Architectural Design, Hill Architecture, GIS",
        email: "neetu@nith.ac.in",
        profileUrl: "#",
      },
      {
        slNo: 5,
        name: "Dr. Rashmi Kumari",
        interests:
          "Urban Planning and Regional Dynamics and Sustainable Built Environmental",
        email: "rashmi@nith.ac.in",
        profileUrl: "#",
      },
    ],
  },
  {
    title: "Assistant Professor Grade-II",
    members: [
      {
        slNo: 1,
        name: "Dr. Swechcha Roy",
        interests: "-",
        email: "sroy@nith.ac.in",
        profileUrl: "#",
      },
      {
        slNo: 2,
        name: "Dr. Sourovee Dutta",
        interests: "Urban Design and Planning",
        email: "sourovee@nith.ac.in",
        profileUrl: "#",
      },
    ],
  },
];

export default function ArchiFacultyPage() {
  return (
    <ArchiLayout>
      <div className="space-y-8">
        {facultyGroups.map((group) => (
          <section className="faculty-group" key={group.title}>
            <h2 className="text-lg font-semibold">{group.title}</h2>

            <div className="overflow-x-auto mt-3">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-600">
                    <th style={{ width: "60px" }}>Sl.No</th>
                    <th>Name</th>
                    <th>Area(s) of Interests</th>
                    <th>Email</th>
                    <th style={{ width: "80px" }}>Profile</th>
                  </tr>
                </thead>
                <tbody>
                  {group.members.map((member) => (
                    <tr key={member.name} className="border-t">
                      <td className="py-2 align-top">{member.slNo}</td>
                      <td className="py-2 align-top font-medium">
                        {member.name}
                      </td>
                      <td className="py-2 align-top">{member.interests}</td>
                      <td className="py-2 align-top">
                        <a
                          href={`mailto:${member.email}`}
                          className="text-blue-600 hover:underline"
                        >
                          {member.email}
                        </a>
                      </td>
                      <td className="py-2 align-top">
                        <a
                          href={member.profileUrl}
                          className="text-sm text-blue-600 hover:underline"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </ArchiLayout>
  );
}
