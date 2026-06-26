import { IoAirplane, IoChevronBack, IoChevronForward } from "react-icons/io5";

const testimonials = [
  {
    id: 1,
    name: "Sqn Ldr Arvind Singh",
    text: "The measurement system is excellent. Uniform fits perfectly and the quality is top-notch.",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 2,
    name: "Flt Lt Neha Sharma",
    text: "Very professional service and on-time delivery. Highly recommended for all IAF personnel.",
    image: "https://i.pravatar.cc/100?img=47",
  },
  {
    id: 3,
    name: "Wg Cdr Rahul Verma",
    text: "Easy ordering, perfect stitching and great fabric quality. Will order again for sure.",
    image: "https://i.pravatar.cc/100?img=33",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold text-[#061735] md:text-3xl">
            Trusted by Uniformed Professionals
          </h2>

          <div className="mt-2 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#b89b3c]" />
            <IoAirplane className="text-[#8b762c]" />
            <span className="h-px w-16 bg-[#b89b3c]" />
          </div>
        </div>

        <div className="relative mt-6">
          {/* Arrows */}
          <button className="absolute left-0 top-1/2 hidden -translate-y-1/2 text-[#061735] md:block">
            <IoChevronBack size={24} />
          </button>

          <button className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-[#061735] md:block">
            <IoChevronForward size={24} />
          </button>

          {/* Cards */}
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-0 md:grid-cols-2 md:px-10 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="flex min-h-[130px] items-center justify-between gap-5 rounded-md border border-gray-200 bg-white px-6 py-5 shadow-sm"
              >
                <div>
                  <p className="text-sm tracking-widest text-[#d4a52f]">
                    ★★★★★
                  </p>

                  <p className="mt-3 max-w-[300px] text-sm leading-relaxed text-[#061735]">
                    “{item.text}”
                  </p>

                  <p className="mt-3 text-sm font-semibold text-[#061735]">
                    — {item.name}
                  </p>
                </div>

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 shrink-0 rounded-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}