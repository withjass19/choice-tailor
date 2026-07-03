import { Award, Scissors, Ruler, ShieldCheck } from "lucide-react";
import { IoAirplane } from "react-icons/io5";

const team = [
  {
    name: "Master Tailoring Team",
    role: "Uniform Stitching Experts",
    desc: "Specialized in precise uniform cutting, fitting and finishing.",
    icon: <Scissors size={30} />,
  },
  {
    name: "Measurement Specialists",
    role: "Custom Fit Experts",
    desc: "Focused on accurate body measurements for perfect uniform fit.",
    icon: <Ruler size={30} />,
  },
  {
    name: "Quality Inspection Team",
    role: "Final Check & Finishing",
    desc: "Every product is checked for stitching, fabric and finishing quality.",
    icon: <ShieldCheck size={30} />,
  },
  {
    name: "Service Support Team",
    role: "Customer Assistance",
    desc: "Helping customers with orders, measurements and delivery updates.",
    icon: <Award size={30} />,
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#f6efe1] px-4 py-2 text-sm font-semibold uppercase tracking-wide text-[#b89b3c]">
            Our Team
          </span>

          <h2 className="mt-5 font-serif text-3xl font-bold text-[#061735] sm:text-4xl lg:text-5xl">
            Skilled Hands Behind
            <br />
            <span className="text-[#b89b3c]">Every Perfect Uniform</span>
          </h2>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#b89b3c]" />
            <IoAirplane className="text-[#8b762c]" />
            <span className="h-px w-16 bg-[#b89b3c]" />
          </div>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
            Choice Tailor is powered by experienced tailors, measurement experts
            and quality specialists committed to precision, discipline and
            premium craftsmanship.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((item) => (
            <div
              key={item.name}
              className="group rounded-2xl border bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#b89b3c] hover:shadow-xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f6efe1] text-[#b89b3c] transition group-hover:bg-[#061735] group-hover:text-[#d4a52f]">
                {item.icon}
              </div>

              <h3 className="mt-6 font-serif text-xl font-bold text-[#061735]">
                {item.name}
              </h3>

              <p className="mt-2 text-sm font-semibold text-[#b89b3c]">
                {item.role}
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}