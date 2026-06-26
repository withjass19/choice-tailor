const process = [
  "Measure",
  "Stitch",
  "Quality Check",
  "Deliver",
];

export default function ProcessSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-serif font-bold">
          From Measurement to Perfection
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          {process.map((item, index) => (
            <div
              key={item}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#061735] text-white flex items-center justify-center mx-auto">
                {index + 1}
              </div>

              <h3 className="mt-4 font-bold">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}