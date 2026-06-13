function Languages() {
  const languages = [
    "English",
    "Tamil",
    "Kannada"
    
  ];

  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <h1 className="text-5xl font-bold text-cyan-400 text-center mb-16">
        Languages Known
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {languages.map((language, index) => (
          <div
            key={index}
            className="bg-slate-900 p-8 rounded-2xl text-center border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_20px_#22d3ee] hover:scale-105 transition duration-300"
          >
            <h2 className="text-2xl font-semibold">
              {language}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Languages;