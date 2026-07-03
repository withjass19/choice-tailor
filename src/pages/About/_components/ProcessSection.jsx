import {
  Ruler,
  Scissors,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { IoAirplane } from "react-icons/io5";

const process = [
  {
    title: "Take Measurements",
    description:
      "Create your measurement profile or choose a standard size for the perfect fit.",
    icon: <Ruler size={30} />,
  },
  {
    title: "Expert Stitching",
    description:
      "Our experienced tailors stitch every uniform with military precision.",
    icon: <Scissors size={30} />,
  },
  {
    title: "Quality Inspection",
    description:
      "Every uniform undergoes strict quality checks before dispatch.",
    icon: <ShieldCheck size={30} />,
  },
  {
    title: "Fast Delivery",
    description:
      "Your order is securely packed and delivered anywhere across India.",
    icon: <Truck size={30} />,
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#f8fafc] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="text-center">
          <span className="inline-block rounded-full bg-[#f6efe1] px-4 py-2 text-sm font-semibold uppercase tracking-wide text-[#b89b3c]">
            Our Process
          </span>

          <h2 className="mt-5 font-serif text-3xl font-bold text-[#061735] sm:text-4xl lg:text-5xl">
            From Measurement
            <br />
            <span className="text-[#b89b3c]">
              To Perfect Delivery
            </span>
          </h2>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#b89b3c]" />
            <IoAirplane className="text-[#8b762c]" />
            <span className="h-px w-16 bg-[#b89b3c]" />
          </div>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
            Every Choice Tailor uniform follows a carefully designed
            process to ensure premium quality, perfect fitting and
            timely delivery.
          </p>
        </div>

        {/* Process */}

        <div className="relative mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Timeline Line */}

          <div className="absolute left-0 right-0 top-10 hidden h-1 bg-[#e7d7a2] lg:block" />

          {process.map((item, index) => (
            <div
              key={item.title}
              className="relative text-center"
            >
              {/* Circle */}

              <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#061735] text-[#d4a52f] shadow-lg transition duration-300 hover:scale-110">
                {item.icon}
              </div>

              {/* Step */}

              <span className="mt-6 inline-block rounded-full bg-[#f6efe1] px-3 py-1 text-xs font-bold text-[#b89b3c]">
                STEP {index + 1}
              </span>

              {/* Title */}

              <h3 className="mt-4 text-xl font-bold text-[#061735]">
                {item.title}
              </h3>

              {/* Description */}

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}