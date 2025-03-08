

export const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    
  ];

  const backendSkills = ["Node.js", "Java", "Express.js", "MongoDB","Postgres", "MySQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
   
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Personal Details
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative and optimizing solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.E. in Information Science </strong> - MVJ College Of Engineering
                  (2021-2025)
                </li>
                <li>
                <strong> PUC </strong> - Kendriya Vidyalaya (2019-2021)
               </li>
               <li>
                <strong> SSLC </strong> - Kendriya Vidyalaya (2018-2019)
               </li>

              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼Certifications </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    The Complete 2024 Web Development Bootcamp | <em>Udemy.com</em>{" "}
                  </h4>
                  {/* <ul  className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                    Contributed to the development of full-stack web applications using JavaScript, Reactjs and Node.js. 
                    </li>
                    <li>
                    Assisted in database management using MySQL and MongoDB, optimizing queries for performance.
                    </li>

                  </ul> */}
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Certification for the Completion of MySQL and PHP training | <em>IIT Bombay</em> {" "}
                  </h4>
                  <ul  className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                    Score : 77.78%
                    </li>

                  </ul>
                  
                </div>
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Skill Enhancement Course- Cloud Computing | <em>VTU-Center for Online Education</em> {" "}
                  </h4>
                  <ul  className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                    Score : 82%
                    </li>

                  </ul>
                  
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Responsive Web Design | <em>Freecodecamp.org</em> {" "}
                  </h4>
                 
                  
                </div>

                
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
};
