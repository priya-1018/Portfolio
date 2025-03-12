import React from "react";

export default function WorkExperience() {
  return (
    <section
      id="work-experience"
      className="flex flex-col px-4 w-full min-w-screen md:w-[500px] sm:w-2/3 p-6 items-center justify-center"
    >
      {/* Work Experience Heading */}
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        Work Experience
      </h2>

      {/* Work Experience Block */}
      <div className="min-w-1 p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all bg-black-900 text-white mt-10">
        <div className="space-y-4 text-gray-300">
          <div>
            <h4 className="font-semibold">
              Full-stack Developer Intern at Varcons Technologies (Sept 2024 -
              Dec 2024)
            </h4>
            <ul className="list-disc list-inside text-black-300 space-y-2">
              <li>
                Contributed to the development of full-stack web applications
                using JavaScript, React.js, and Node.js.
              </li>
              <li>
                Assisted in database management using MySQL and MongoDB,
                optimizing queries for performance.
              </li>
              <li>
                Worked on API development and integration, improving
                functionality for client-side applications.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">
              Citizen Developer Intern at Intelliflow.ai (Nov 2023 - Jan 2024)
            </h4>
            <ul className="list-disc list-inside text-black-300 space-y-2">
              <li>
                Designed and implemented Asset Management System on the Low-code
                No-code platform.
              </li>
              <li>
                Used BPMN (Business Process Model Notation) for the flow design.
              </li>
              <li>
                {" "}
                Written minimal java conditions for the logics to fulfil the
                asset management flow conditions.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">
              Web Development Intern at Bharat Intern (Aug 2023 - Sept 2023)
            </h4>
            <ul className="list-disc list-inside text-black-300 space-y-2">
              <li>Designed and developed Netflix Clone.</li>
              <li>
                {" "}
                Used Javascript, HTML, CSS, Bootstrap for the responsive web
                design.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
