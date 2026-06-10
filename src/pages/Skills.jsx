import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJava,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiJsonwebtokens,
  SiNetlify,
  SiRender,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
  const skills = [
    // Frontend
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    

    // Backend
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiPostman />, name: "REST APIs" },
    { icon: <SiJsonwebtokens />, name: "JWT Auth" },

    // Database
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },

    // Programming Languages
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },

    // Tools & Platforms
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <VscVscode />, name: "VS Code" },
    { icon: <SiNetlify />, name: "Netlify" },
    { icon: <SiRender />, name: "Render" },
  ];

  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <h1 className="text-5xl font-bold text-cyan-400 text-center mb-14">
        Technical Skills
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-2xl p-8 text-center
            border border-cyan-500/20
            hover:shadow-[0_0_25px_#22d3ee]
            hover:-translate-y-2
            transition-all duration-300"
          >
            <div className="text-5xl text-cyan-400 mb-4 flex justify-center">
              {skill.icon}
            </div>

            <h3 className="text-lg font-semibold">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;