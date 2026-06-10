import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";
function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center text-center px-6">

      {/* Profile Image */}
      <div className="mb-8">
        <img
          src={profile}
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-cyan-400 shadow-[0_0_30px_#22d3ee]"
        />
      </div>

      {/* Name */}
      <h1 className="text-6xl font-bold mb-4">
        Hi, I'm{" "}
        <span className="text-cyan-400">
          Priyadharshini
        </span>
      </h1>

      {/* Role */}
      <h2 className="text-3xl text-gray-300 mb-8">
        Full Stack Developer | MERN
      </h2>

      {/* Buttons */}
      <div className="flex gap-6">
        <a
          href={resume}
          className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-full font-semibold"
        >
          Download Resume
        </a>

        <a
          href="https://github.com/priyadhashwanth"
          target="_blank"
          rel="noreferrer"
          className="border border-cyan-400 px-8 py-3 rounded-full hover:bg-cyan-500"
        >
          GitHub
        </a>
      </div>

    </section>
  );
}

export default Hero;