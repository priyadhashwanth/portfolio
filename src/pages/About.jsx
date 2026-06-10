import profile from "../assets/profile.jpg";

function About() {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <h1 className="text-5xl font-bold text-cyan-400 text-center mb-16">
        About Me
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Image */}
        <div>
          <img
            src={profile}
            alt="Profile"
            className="w-80 rounded-3xl border-2 border-cyan-400 shadow-[0_0_30px_#22d3ee]"
          />
        </div>

        {/* Content */}
        <div className="bg-slate-900 p-8 rounded-3xl shadow-lg max-w-xl">
          <p className="text-lg leading-8 text-gray-300">
            Hi, I'm <span className="text-cyan-400 font-semibold">
              Priyadharshini
            </span>, a passionate MERN Stack Developer specializing in
            building responsive and user-friendly web applications.
          </p>

          <p className="text-lg leading-8 text-gray-300 mt-6">
            I have experience with React.js, Node.js, Express.js,
            MongoDB, JavaScript, HTML, CSS and Tailwind CSS.
          </p>

          <p className="text-lg leading-8 text-gray-300 mt-6">
            I enjoy solving problems, developing full-stack applications,
            and continuously learning new technologies.
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full font-semibold"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;