import {
  ShieldCheck,
  Shirt,
  Ruler,
  Truck,
  Package,
  Award,
} from "lucide-react";

const helpItems = [
  {
    title: "Custom Uniforms",
    desc: "Expert guidance for perfectly tailored uniforms.",
    icon: <Shirt size={28} />,
  },
  {
    title: "Measurement Help",
    desc: "Need help taking measurements? We'll guide you.",
    icon: <Ruler size={28} />,
  },
  {
    title: "Stitching Quality",
    desc: "Premium stitching with strict quality inspection.",
    icon: <Award size={28} />,
  },
  {
    title: "Orders & Delivery",
    desc: "Track your orders and delivery status anytime.",
    icon: <Truck size={28} />,
  },
  {
    title: "Returns",
    desc: "Support for eligible returns and exchanges.",
    icon: <Package size={28} />,
  },
  {
    title: "General Support",
    desc: "We're always available to answer your questions.",
    icon: <ShieldCheck size={28} />,
  },
];

export default function HelpSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="font-semibold uppercase tracking-wider text-[#b89b3c]">
          Customer Support
        </p>

        <h2 className="mt-3 font-serif text-4xl font-bold text-[#061735]">
          We're Here To Help
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-gray-600">
          Whether it's measurements, stitching, delivery,
          returns or product information,
          our team is always ready to assist you.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {helpItems.map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#b89b3c] hover:shadow-xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#061735] text-[#d4a52f] transition group-hover:scale-110">
              {item.icon}
            </div>

            <h3 className="mt-6 text-xl font-bold text-[#061735]">
              {item.title}
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}