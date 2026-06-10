function Projects() {
  const projects = [
    {
      title: "Hostel Management System",
      description:
        "A full-stack MERN application for managing hostel students, rooms, bills, payments, complaints, and notifications with role-based access.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
      ],
      demo: "https://marvelous-jalebi-27c0d6.netlify.app/",
      frontend: "https://github.com/priyadhashwanth/hostel-frontend.git",
      backend: "https://github.com/priyadhashwanth/hostel-backend.git",
    },

    {
      title: "Notes App",
      description:
        "A responsive notes management application that allows users to create, edit, delete, and organize notes efficiently.",
      tech: ["React", "JavaScript", "tailwind"],
      demo: "https://ephemeral-crostata-f23c06.netlify.app/",
      frontend: "https://github.com/priyadhashwanth/notesapp-project.git",
      backend: "",
    },

    {
      title: "Smart Expense Tracker",
      description:
        "An expense tracking application to monitor income and expenses with reports and analytics.",
      tech: [
        "React",
        "Javascript",
        "Tailwind",
        
      ],
      demo: "https://aquamarine-cucurucho-b55093.netlify.app/",
      frontend: "https://github.com/priyadhashwanth/tracker-project.git",
      backend: "",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 text-white py-20 px-6"
    >
      <h1 className="text-5xl font-bold text-cyan-400 text-center mb-14">
        Projects
      </h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              bg-slate-900
              rounded-2xl
              p-8
              border border-cyan-500/20
              hover:border-cyan-400
              hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]
              transition-all duration-300
            "
          >
            <h2 className="text-3xl font-bold mb-4">
              {project.title}
            </h2>

            <p className="text-gray-300 leading-7 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="
                    px-4 py-2
                    rounded-full
                    bg-cyan-500/10
                    border border-cyan-500/20
                    text-cyan-400
                    text-sm
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="
                  bg-cyan-500
                  hover:bg-cyan-600
                  px-5 py-3
                  rounded-full
                  font-semibold
                  transition
                "
              >
                Live Demo
              </a>

              <a
                href={project.frontend}
                target="_blank"
                rel="noreferrer"
                className="
                  bg-slate-700
                  hover:bg-slate-600
                  px-5 py-3
                  rounded-full
                  font-semibold
                  transition
                "
              >
                Frontend Code
              </a>

              {project.backend && (
                <a
                  href={project.backend}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    bg-slate-700
                    hover:bg-slate-600
                    px-5 py-3
                    rounded-full
                    font-semibold
                    transition
                  "
                >
                  Backend Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;