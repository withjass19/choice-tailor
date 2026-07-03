import { bgHero, ShirtModel } from "@/assets/images";
import { ShieldCheck, Ruler, Truck } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#061735]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: `url(${bgHero})`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#061735] via-[#061735]/95 to-[#061735]/40" />

      {/* Decorative Circle */}
      <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#b89b3c]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
        {/* Left */}

        <div className="text-white">
          {/* Breadcrumb */}

          <p className="text-sm text-gray-300">
            Home
            <span className="mx-2">/</span>
            About Us
          </p>

          <span className="mt-6 inline-block rounded-full bg-[#b89b3c]/20 px-4 py-2 text-sm font-semibold tracking-wide text-[#d4a52f]">
            CHOICE TAILOR
          </span>

          <h1 className="mt-6 font-serif text-5xl font-bold leading-tight lg:text-6xl">
            Tailored with Precision.
            <br />

            <span className="text-[#d4a52f]">
              Committed to Our Forces.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
            Choice Tailor specializes in premium Indian Air Force uniforms,
            custom tailoring, and military accessories. Every stitch reflects
            discipline, precision, and the pride of serving those who serve our
            nation.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="rounded-lg bg-[#b89b3c] px-7 py-3 font-semibold text-white transition hover:bg-[#a8872d]"
            >
              Shop Uniforms →
            </Link>

            <Link
              to="/measurement-guide"
              className="rounded-lg border border-white px-7 py-3 font-semibold transition hover:bg-white hover:text-[#061735]"
            >
              Measurement Guide
            </Link>
          </div>

          {/* Trust */}

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#d4a52f]" />

              <div>
                <p className="font-semibold">IAF Standards</p>

                <p className="text-xs text-gray-400">
                  Military Precision
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Ruler className="text-[#d4a52f]" />

              <div>
                <p className="font-semibold">Custom Fit</p>

                <p className="text-xs text-gray-400">
                  Tailored Measurements
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Truck className="text-[#d4a52f]" />

              <div>
                <p className="font-semibold">Pan India</p>

                <p className="text-xs text-gray-400">
                  Fast Delivery
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="relative flex justify-center">
          <div className="absolute h-[430px] w-[430px] rounded-full bg-[#b89b3c]/10 blur-3xl" />

          <img
            src={ShirtModel}
            alt="Choice Tailor Uniform"
            className="relative h-[500px] object-contain drop-shadow-2xl transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}