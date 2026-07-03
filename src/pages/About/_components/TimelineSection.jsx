import { CheckCircle } from "lucide-react";
import { IoAirplane } from "react-icons/io5";

const timeline = [
  {
    year: "2008",
    title: "The Beginning",
    description:
      "Choice Tailor started with a vision to provide premium quality tailoring services for Indian Air Force personnel.",
  },
  {
    year: "2012",
    title: "Trusted by Defence Personnel",
    description:
      "Expanded our customer base by delivering custom uniforms with precision, discipline and superior craftsmanship.",
  },
  {
    year: "2017",
    title: "Modern Tailoring Techniques",
    description:
      "Introduced improved stitching methods, premium fabrics and custom measurement services.",
  },
  {
    year: "2023",
    title: "Pan India Delivery",
    description:
      "Started delivering uniforms and accessories across India with secure packaging and reliable logistics.",
  },
  {
    year: "2026",
    title: "Choice Tailor Online",
    description:
      "Launched our digital platform with custom measurement profiles, online ordering, secure payments and order tracking.",
  },
];

export default function TimelineSection() {
  return (
    <section className="bg-[#f8fafc] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}

        <div className="text-center">
          <span className="inline-block rounded-full bg-[#f6efe1] px-4 py-2 text-sm font-semibold uppercase tracking-wide text-[#b89b3c]">
            Our Journey
          </span>

          <h2 className="mt-5 font-serif text-3xl font-bold text-[#061735] sm:text-4xl lg:text-5xl">
            Milestones That Define
            <br />
            <span className="text-[#b89b3c]">
              Choice Tailor
            </span>
          </h2>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#b89b3c]" />
            <IoAirplane className="text-[#8b762c]" />
            <span className="h-px w-16 bg-[#b89b3c]" />
          </div>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
            Every milestone reflects our dedication to quality,
            craftsmanship and our commitment to serving the
            Indian Air Force community.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mt-20">
          {/* Center Line */}

          <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-[#d4c18a] md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}

                <div className="md:w-1/2 md:px-10">
                  <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-xl">
                    <span className="inline-block rounded-full bg-[#061735] px-4 py-2 text-sm font-bold text-white">
                      {item.year}
                    </span>

                    <h3 className="mt-5 font-serif text-2xl font-bold text-[#061735]">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}

                <div className="absolute left-5 top-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-[#061735] text-[#d4a52f] shadow-lg md:left-1/2">
                  <CheckCircle size={18} />
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}