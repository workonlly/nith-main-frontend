"use client";

import ArchiLayout from "../ArchiLayout";
import "./archi_staff.css";

const officeStaff = [
  {
    serial: "1",
    name: "Sh. Ashok Kumar",
    designation: "Jr. Assistant",
    phone: "254901",
    email: "ashokg@nith.ac.in",
  },
];

const technicalStaff = [
  {
    serial: "1",
    name: "Smt. Reeta Singh",
    designation: "Sr. Technician",
    phone: "254905",
    email: "-",
  },
  {
    serial: "2",
    name: "Sh. Sukhdev Singh",
    designation: "Technician SG-II",
    phone: "254904",
    email: "-",
  },
  {
    serial: "3",
    name: "Sh. Ajay Gupta",
    designation: "Tech. Gr.-II",
    phone: "254903",
    email: "-",
  },
  {
    serial: "4",
    name: "Mr. Vikas Vashishat",
    designation: "Technician",
    phone: "254901",
    email: "-",
  },
];

export default function ArchiStaffPage() {
  return (
    <ArchiLayout>
      <div className="space-y-8">
        <section className="staff-section">
          <h1 className="text-xl font-semibold">Office Staff</h1>

          <div className="overflow-x-auto mt-3">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-600">
                  <th style={{ width: "70px" }}>Sl. No.</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Phone No.</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {officeStaff.map((member) => (
                  <tr key={member.serial} className="border-t">
                    <td className="py-2 align-top">{member.serial}</td>
                    <td className="py-2 align-top font-medium">
                      {member.name}
                    </td>
                    <td className="py-2 align-top">{member.designation}</td>
                    <td className="py-2 align-top">{member.phone}</td>
                    <td className="py-2 align-top">
                      {member.email !== "-" ? (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-blue-600 hover:underline"
                        >
                          {member.email}
                        </a>
                      ) : (
                        "-"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="staff-section">
          <h1 className="text-xl font-semibold">Technical Staff</h1>

          <div className="overflow-x-auto mt-3">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-600">
                  <th style={{ width: "70px" }}>Sl. No.</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Phone No.</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {technicalStaff.map((member) => (
                  <tr key={member.serial} className="border-t">
                    <td className="py-2 align-top">{member.serial}</td>
                    <td className="py-2 align-top font-medium">
                      {member.name}
                    </td>
                    <td className="py-2 align-top">{member.designation}</td>
                    <td className="py-2 align-top">{member.phone}</td>
                    <td className="py-2 align-top">{member.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </ArchiLayout>
  );
}
