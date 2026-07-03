import { AirCraft, ShirtModel } from "@/assets/images";
import { ShieldCheck, Scissors, Ruler, Award } from "lucide-react";

export default function OurStory() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}

        <div>
          <span className="inline-block rounded-full bg-[#f6efe1] px-4 py-2 text-sm font-semibold uppercase tracking-wide text-[#b89b3c]">
            Our Story
          </span>

          <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-[#061735] lg:text-5xl">
            Born from Passion.
            <br />

            <span className="text-[#b89b3c]">
              Built on Trust.
            </span>
          </h2>

          <p className="mt-8 leading-8 text-gray-600">
            Choice Tailor was established with a single mission —
            to provide perfectly tailored uniforms for the brave
            personnel of the Indian Air Force. Every stitch we make
            reflects discipline, precision and respect for those
            who dedicate their lives to protecting our nation.
          </p>

          <p className="mt-6 leading-8 text-gray-600">
            From a small tailoring workshop to serving customers
            across India, our journey has been driven by
            craftsmanship, quality fabrics, modern tailoring
            techniques and a commitment to delivering uniforms that
            inspire confidence and pride.
          </p>

          {/* Features */}

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Feature
              icon={<Scissors size={22} />}
              title="Expert Tailoring"
            />

            <Feature
              icon={<ShieldCheck size={22} />}
              title="Military Precision"
            />

            <Feature
              icon={<Ruler size={22} />}
              title="Custom Measurement"
            />

            <Feature
              icon={<Award size={22} />}
              title="Premium Quality"
            />
          </div>
        </div>

        {/* Right */}

        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src={AirCraft}
              alt="Choice Tailor"
              className="h-[520px] w-full object-cover"
            />
          </div>

          {/* Floating Card */}

          <div className="absolute -bottom-8 -left-6 rounded-2xl bg-white p-6 shadow-2xl">
            <img
              src={ShirtModel}
              alt=""
              className="mx-auto h-24 object-contain"
            />

            <h3 className="mt-4 text-center font-bold text-[#061735]">
              Premium Uniforms
            </h3>

            <p className="mt-1 text-center text-sm text-gray-500">
              Designed for Discipline & Excellence
            </p>
          </div>

          {/* Experience Card */}

          <div className="absolute -right-5 top-8 rounded-2xl bg-[#061735] p-6 text-center text-white shadow-xl">
            <h2 className="text-4xl font-bold text-[#d4a52f]">
              18+
            </h2>

            <p className="mt-2 text-sm">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border p-4 transition hover:border-[#b89b3c] hover:shadow-md">
      <div className="rounded-full bg-[#f6efe1] p-3 text-[#b89b3c]">
        {icon}
      </div>

      <h3 className="font-semibold text-[#061735]">
        {title}
      </h3>
    </div>
  );
}