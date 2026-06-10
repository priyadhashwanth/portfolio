import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <h1 className="text-5xl font-bold text-cyan-400 text-center mb-16">
        Contact Me
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Left Side */}
        <div className="space-y-6">

          <div className="bg-slate-900 p-6 rounded-2xl flex items-center gap-5">
            <FaPhoneAlt className="text-cyan-400 text-4xl" />
            <div>
              <h3 className="text-2xl font-bold">Phone</h3>
              <p className="text-gray-300">+91 8123128331</p>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl flex items-center gap-5">
            <FaEnvelope className="text-cyan-400 text-4xl" />
            <div>
              <h3 className="text-2xl font-bold">Email</h3>
              <p className="text-gray-300">
                priyadharshini8030@gmail.com
              </p>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl flex items-center gap-5">
            <FaLinkedin className="text-cyan-400 text-4xl" />
            <div>
              <h3 className="text-2xl font-bold">LinkedIn</h3>
              <p className="text-gray-300">
                https://www.linkedin.com/in/priyadharshini8030/
              </p>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl flex items-center gap-5">
            <FaGithub className="text-cyan-400 text-4xl" />
            <div>
              <h3 className="text-2xl font-bold">GitHub</h3>
              <p className="text-gray-300">
                https://github.com/priyadhashwanth
              </p>
            </div>
          </div>

        </div>

        {/* Right Side Form */}
        <div className="bg-slate-900 p-8 rounded-3xl border border-cyan-400 shadow-[0_0_25px_#22d3ee]">

          <h2 className="text-4xl font-bold mb-8">
            Send Message
          </h2>

          <form className="space-y-5">

            <div>
              <label className="block mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-slate-800 p-3 rounded-lg outline-none border border-slate-700 focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-800 p-3 rounded-lg outline-none border border-slate-700 focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block mb-2">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full bg-slate-800 p-3 rounded-lg outline-none border border-slate-700 focus:border-cyan-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-400 text-black font-semibold py-3 rounded-full hover:bg-cyan-300 transition shadow-[0_0_20px_#22d3ee]"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;