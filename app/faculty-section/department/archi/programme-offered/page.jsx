"use client";

import ArchiLayout from "../ArchiLayout";
import "./archi_programmes.css";

const programmes = [
  {
    name: "Bachelor Programmes Offered",
    description:
      "Bachelor of Architecture (B. Arch) - A 5-year undergraduate course which includes semester training as per Council of Architecture norms.",
  },
  {
    name: "Master Programmes Offered",
    description:
      "Master of Architecture (M. Arch. in Sustainable Architecture) - A 2-year postgraduate course focusing on sustainable building designs, energy efficiency, and climate responsive architecture.",
  },
  {
    name: "Doctoral Programmes Offered",
    description:
      "Ph.D. in Architecture - Advanced doctoral research programme covering Sustainable Habitat, Urban & Rural Planning, Heritage Conservation, and Hill Architecture.",
  },
];

export default function ArchiProgrammesPage() {
  return (
    <ArchiLayout>
      <div>
        <h1 className="text-xl font-semibold">Programmes Offered</h1>

        <div className="overflow-x-auto mt-4">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600">
                <th style={{ width: "80px" }}>Sl. No.</th>
                <th>Programmes Offered</th>
              </tr>
            </thead>
            <tbody>
              {programmes.map((prog, index) => (
                <tr key={prog.name} className="border-t">
                  <td className="py-2 align-top">{index + 1}</td>
                  <td className="py-2 align-top">
                    <strong className="text-sm text-red-700">
                      {prog.name}
                    </strong>
                    <p className="mt-1 text-gray-600">{prog.description}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ArchiLayout>
  );
}
