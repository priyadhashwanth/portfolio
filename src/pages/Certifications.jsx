function Certifications() {
  const certifications = [
    {
      title: "Full Stack Development with AI",
      organization: "GUVI",
      duration: "December 2024 - May 2025",
      certificate:
        "https://drive.google.com/file/d/YOUR_CERTIFICATE_LINK/view",
    },
  ];
     return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <h1 className="text-5xl font-bold text-cyan-400 text-center mb-14">
        Certifications
      </h1>

      <div className="max-w-5xl mx-auto space-y-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-slate-900 p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_25px_#22d3ee] transition duration-300"
          >
            <h2 className="text-3xl font-bold mb-3">
              {cert.title}
            </h2>

            <p className="text-cyan-400 text-xl font-semibold mb-2">
              {cert.organization}
            </p>

            <p className="text-gray-300">
              Duration: {cert.duration}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-14">
        <a
          href="https://drive.google.com/drive/folders/18N0az3M3uvhIDQcSB8whxSxVKLbW2JhW"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-cyan-300 transition shadow-[0_0_20px_#22d3ee]"
        >
          View Certificates
        </a>
      </div>
    </section>
  );
}

export default Certifications;