"use client";

import ArchiLayout from "../ArchiLayout";
import "./archi_research.css";

const publications = [
  {
    year: "2023",
    authors: "Minakshi Jain, et al.",
    title:
      "Sustainable Hill Architecture and Vernacular Settlement Patterns in the Western Himalayas",
    journal: "Journal of Architectural and Planning Research",
    indexing: "SCI / Scopus",
  },
  {
    year: "2023",
    authors: "Bhanu M. Marwaha, et al.",
    title:
      "ICT Integration in Built Environment and Energy Efficient Housing Design",
    journal: "International Journal of Sustainable Built Environment",
    indexing: "Scopus",
  },
  {
    year: "2022",
    authors: "Ashwani Kumar, Inderpal Singh, et al.",
    title:
      "Traditional Building Regulations and Climate Responsive Architecture in Mountainous Regions",
    journal: "Renewable and Sustainable Energy Reviews",
    indexing: "SCI",
  },
];

export default function ArchiResearchPage() {
  return (
    <ArchiLayout>
      <div>
        <h1 className="text-xl font-semibold">Research Publications</h1>

        <div className="overflow-x-auto mt-4">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600">
                <th style={{ width: "70px" }}>Year</th>
                <th>Author(s)</th>
                <th>Title & Vol. No.</th>
                <th>Journal Name</th>
                <th>Indexing</th>
              </tr>
            </thead>
            <tbody>
              {publications.map((pub, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 align-top">{pub.year}</td>
                  <td className="py-2 align-top">{pub.authors}</td>
                  <td className="py-2 align-top">{pub.title}</td>
                  <td className="py-2 align-top">{pub.journal}</td>
                  <td className="py-2 align-top">{pub.indexing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ArchiLayout>
  );
}
