import {
  ShieldCheck,
  Ruler,
  Scissors,
  Truck,
  BadgeCheck,
  CreditCard,
} from "lucide-react";
import { IoAirplane } from "react-icons/io5";

const reasons = [
  {
    title: "IAF Focused Uniforms",
    description:
      "Specialized tailoring for Indian Air Force uniforms and accessories with disciplined finishing.",
    icon: <ShieldCheck size={30} />,
  },
  {
    title: "Custom Measurements",
    description:
      "Customers can save measurement profiles and reuse them for future orders.",
    icon: <Ruler size={30} />,
  },
  {
    title: "Expert Stitching",
    description:
      "Uniforms are stitched by skilled tailors with attention to fit, comfort and durability.",
    icon: <Scissors size={30} />,
  },
  {
    title: "Pan India Delivery",
    description:
      "Secure doorstep delivery for uniforms and accessories across India.",
    icon: <Truck size={30} />,
  },
  {
    title: "Premium Quality",
    description:
      "Carefully selected fabrics, badges, belts, caps and uniform accessories.",
    icon: <BadgeCheck size={30} />,
  },
  {
    title: "Secure Payments",
    description:
      "Safe checkout experience with online payment support and order tracking.",
    icon: <CreditCard size={30} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f8fafc] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#f6efe1] px-4 py-2 text-sm font-semibold uppercase tracking-wide text-[#b89b3c]">
            Why Choose Us
          </span>

          <h2 className="mt-5 font-serif text-3xl font-bold text-[#061735] sm:text-4xl lg:text-5xl">
            Precision, Quality
            <br />
            <span className="text-[#b89b3c]">And Trusted Service</span>
          </h2>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#b89b3c]" />
            <IoAirplane className="text-[#8b762c]" />
            <span className="h-px w-16 bg-[#b89b3c]" />
          </div>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
            Choice Tailor combines traditional craftsmanship with modern
            ecommerce convenience to deliver premium uniforms with confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#b89b3c] hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f6efe1] text-[#b89b3c] transition group-hover:bg-[#061735] group-hover:text-[#d4a52f]">
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