import { AirCraft } from "@/assets/images";
import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTASection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#061735] shadow-2xl">
        <div className="grid lg:grid-cols-2">
          {/* Left Image */}

          <div
            className="relative min-h-[320px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${AirCraft})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#061735]/30 via-transparent to-[#061735]/70" />
          </div>

          {/* Right Content */}

          <div className="flex flex-col justify-center p-8 text-white sm:p-12 lg:p-16">
            <span className="inline-block w-fit rounded-full bg-[#b89b3c]/20 px-4 py-2 text-sm font-semibold text-[#d4a52f]">
              CHOICE TAILOR
            </span>

            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Proud to Serve
              <br />
              <span className="text-[#d4a52f]">
                The Guardians of Our Sky
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-gray-300 leading-8">
              We don't simply stitch uniforms—we craft confidence,
              discipline and precision. Every uniform is tailored to
              meet Indian Air Force standards with exceptional quality,
              perfect fit and timely delivery.
            </p>

            {/* Features */}

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                Premium Fabric
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                Custom Measurement
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                Pan India Delivery
              </span>
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/shop"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#b89b3c] px-7 py-3 font-semibold transition hover:bg-[#a8872d]"
              >
                Shop Uniforms
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-lg border border-white px-7 py-3 font-semibold transition hover:bg-white hover:text-[#061735]"
              >
                <PhoneCall size={18} />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}