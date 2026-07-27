"use client";

import ArchiLayout from "../ArchiLayout";

export default function ArchiVisionMissionPage() {
  return (
    <ArchiLayout>
      <div className="max-w-3xl">
        <header className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Vision & Mission
          </h1>
          <p className="mt-2 text-gray-600">
            Our purpose is to educate architects who combine technical rigor
            with contextual, sustainable design thinking.
          </p>
        </header>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Vision</h2>
          <p className="mt-3 text-gray-700 leading-7">
            The Vision of the department is to be a leading department in the
            region providing the highest quality of education and developing
            responsible, professional architects capable of creating a better
            world through distinctive and effective architectural solutions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Mission</h2>
          <div className="mt-3 p-4 bg-red-50 border-l-4 border-red-600 rounded-md">
            <p className="text-gray-800 font-medium">
              Architecture responds to social, cultural, economic and
              environmental forces. Our educational mission blends technical
              skill with critical thinking to prepare students for meaningful
              practice and research.
            </p>

            <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
              <li>
                Educate individuals in the art and science of architecture to
                assume creative and leadership roles in practice and research.
              </li>
              <li>
                Instil commitment to the health, safety and welfare of building
                users and improve quality of life.
              </li>
              <li>
                Foster critical understanding of artistic, cultural,
                technological and environmental forces shaping the built
                environment.
              </li>
              <li>
                Equip students to participate actively in the intellectual
                discourse of the discipline.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Goals</h2>
          <p className="mt-3 text-gray-700 leading-7">
            The curriculum is designed to achieve the following goals:
          </p>
          <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
            <li>
              Provide academic consultation services that connect students and
              faculty with professional practice.
            </li>
            <li>
              Create channels for architectural communication locally,
              regionally, and internationally.
            </li>
          </ul>
        </section>
      </div>
    </ArchiLayout>
  );
}
