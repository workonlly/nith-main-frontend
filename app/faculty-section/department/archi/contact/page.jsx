"use client";

import ArchiLayout from "../ArchiLayout";
import "./archi_contact.css";

export default function ArchiContactPage() {
  return (
    <ArchiLayout>
      <div className="max-w-2xl">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h1 className="text-xl font-semibold">Contact Information</h1>

          <address className="not-italic mt-4 space-y-1">
            <div className="font-medium">Dr. Ashwani Kumar</div>
            <div>Head of Department</div>
            <div>Architecture</div>
            <div>National Institute of Technology Hamirpur</div>
            <div>Himachal Pradesh, Pin No. 177005, India.</div>
          </address>

          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <p>
              <strong>Phone No. :</strong> 01972- 254900
            </p>
            <p>
              <strong>HoD Email :</strong>{" "}
              <a
                href="mailto:head.arch@nith.ac.in"
                className="text-blue-600 hover:underline"
              >
                head.arch@nith.ac.in
              </a>
            </p>
            <p>
              <strong>Office Email :</strong>{" "}
              <a
                href="mailto:office.arch@nith.ac.in"
                className="text-blue-600 hover:underline"
              >
                office.arch@nith.ac.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </ArchiLayout>
  );
}
