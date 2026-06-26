import {
  Target,
  Gem,
  Handshake,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    title: "Precision",
    icon: <Target />,
  },
  {
    title: "Quality",
    icon: <Gem />,
  },
  {
    title: "Commitment",
    icon: <Handshake />,
  },
  {
    title: "Respect",
    icon: <ShieldCheck />,
  },
];

export default function ValuesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-serif font-bold">
          Our Values
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {values.map((item) => (
            <div
              key={item.title}
              className="text-center"
            >
              <div className="flex justify-center text-[#d4a52f]">
                {item.icon}
              </div>

              <h3 className="mt-4 font-bold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}