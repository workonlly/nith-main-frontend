"use client";

import ArchiLayout from "../ArchiLayout";
import "./archi_labs.css";

const laboratories = [
  "Computer Aided Design (CAD) & GIS Laboratory",
  "Building Science & Climatology Lab",
  "Model Making & Carpentry Workshop",
  "Surveying & Levelling Lab",
  "Material Testing & Construction Technology Lab",
  "Heritage Documentation & Conservation Lab",
];

export default function ArchiLabsPage() {
  return (
    <ArchiLayout>
      <div>
        <h1 className="text-xl font-semibold">List of Laboratories</h1>

        <div className="overflow-x-auto mt-4">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600">
                <th style={{ width: "80px" }}>Sl. No.</th>
                <th>Laboratory / Facility Name</th>
              </tr>
            </thead>
            <tbody>
              {laboratories.map((lab, index) => (
                <tr key={lab} className="border-t">
                  <td className="py-2 align-top">{index + 1}</td>
                  <td className="py-2 align-top font-medium">{lab}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ArchiLayout>
  );
}
