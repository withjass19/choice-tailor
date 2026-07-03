import {
  Shield,
  Users,
  Award,
  Shirt,
} from "lucide-react";
import { IoAirplane } from "react-icons/io5";

const stats = [
  {
    icon: <Shield size={30} />,
    number: "18+",
    text: "Years of Experience",
  },
  {
    icon: <Users size={30} />,
    number: "25,000+",
    text: "Uniforms Delivered",
  },
  {
    icon: <Shirt size={30} />,
    number: "5,000+",
    text: "Satisfied Customers",
  },
  {
    icon: <Award size={30} />,
    number: "100%",
    text: "Premium Quality",
  },
];

export default function StatsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#061735] shadow-2xl">
        {/* Heading */}

        <div className="border-b border-white/10 px-8 py-12 text-center">
          <span className="inline-block rounded-full bg-[#b89b3c]/20 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-[#d4a52f]">
            Our Achievements
          </span>

          <h2 className="mt-5 font-serif text-3xl font-bold text-white sm:text-4xl">
            Numbers That Reflect
            <br />
            <span className="text-[#d4a52f]">
              Trust & Excellence
            </span>
          </h2>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#b89b3c]" />
            <IoAirplane className="text-[#d4a52f]" />
            <span className="h-px w-16 bg-[#b89b3c]" />
          </div>
        </div>

        {/* Stats */}

        <div className="grid divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.number}
              className="group p-10 text-center transition duration-300 hover:bg-white/5"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#b89b3c]/15 text-[#d4a52f] transition duration-300 group-hover:scale-110 group-hover:bg-[#b89b3c] group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="mt-6 text-5xl font-bold text-white">
                {item.number}
              </h3>

              <p className="mt-3 text-sm tracking-wide text-gray-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}