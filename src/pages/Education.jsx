function Education() {
  const education = [
    {
      degree: "B.E. Computer Science and Engineering",
      college: "Kingston engineering college",
      year: "2017 - 2021",
    },
    {
      degree: "Higher Secondary  (HSC)",
      college: "Krishnaswamy higher secondary school",
      year: "2015 - 2017",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      college: "Krishnaswamy higher secondary school",
      year: "2014 - 2015",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <h1 className="text-5xl font-bold text-cyan-400 text-center mb-16">
        Education
      </h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900 p-8 rounded-2xl
            border border-cyan-500/20
            hover:shadow-[0_0_20px_#22d3ee]
            transition duration-300"
          >
            <h2 className="text-3xl font-bold mb-3">
              {item.degree}
            </h2>

            <p className="text-xl text-gray-300 mb-3">
              {item.college}
            </p>

            <p className="text-cyan-400 font-semibold">
              {item.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;