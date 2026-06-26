import {
  Shield,
  Users,
  Award,
  Shirt,
} from "lucide-react";

const stats = [
  {
    icon: <Shield />,
    number: "10+",
    text: "Years of Experience",
  },
  {
    icon: <Users />,
    number: "25,000+",
    text: "Uniforms Delivered",
  },
  {
    icon: <Shirt />,
    number: "100%",
    text: "Custom Fit",
  },
  {
    icon: <Award />,
    number: "Premium",
    text: "Quality Materials",
  },
];

export default function StatsSection() {
  return (
    <section className="px-6">
      <div className="mx-auto max-w-7xl bg-[#061735] rounded-xl p-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div
              key={item.number}
              className="text-center text-white"
            >
              <div className="text-[#d4a52f] flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold mt-3">
                {item.number}
              </h3>

              <p className="text-gray-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}