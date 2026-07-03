import {
  Target,
  Gem,
  Handshake,
  ShieldCheck,
} from "lucide-react";
import { IoAirplane } from "react-icons/io5";

const values = [
  {
    title: "Precision",
    icon: <Target size={30} />,
    description:
      "Every measurement and stitch is executed with exceptional accuracy to ensure the perfect fit.",
  },
  {
    title: "Premium Quality",
    icon: <Gem size={30} />,
    description:
      "We use carefully selected fabrics and accessories that meet high standards of durability and comfort.",
  },
  {
    title: "Commitment",
    icon: <Handshake size={30} />,
    description:
      "Our dedication to timely delivery and customer satisfaction drives everything we do.",
  },
  {
    title: "Respect",
    icon: <ShieldCheck size={30} />,
    description:
      "We proudly serve the Indian Air Force community with integrity, discipline and respect.",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="text-center">
          <span className="inline-block rounded-full bg-[#f6efe1] px-4 py-2 text-sm font-semibold uppercase tracking-wide text-[#b89b3c]">
            Our Core Values
          </span>

          <h2 className="mt-5 font-serif text-3xl font-bold text-[#061735] sm:text-4xl lg:text-5xl">
            Principles That Guide
            <br />
            <span className="text-[#b89b3c]">
              Every Uniform We Create
            </span>
          </h2>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#b89b3c]" />
            <IoAirplane className="text-[#8b762c]" />
            <span className="h-px w-16 bg-[#b89b3c]" />
          </div>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
            Our values define who we are and influence every decision,
            from selecting premium fabrics to delivering perfectly
            tailored uniforms with pride.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#b89b3c] hover:shadow-2xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f6efe1] text-[#b89b3c] transition duration-300 group-hover:bg-[#061735] group-hover:text-[#d4a52f]">
                {item.icon}
              </div>

              <h3 className="mt-6 font-serif text-2xl font-bold text-[#061735]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}