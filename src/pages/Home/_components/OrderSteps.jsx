import { Shirt, Ruler, Truck, CheckCircle, ArrowRight } from "lucide-react";
import { GiSewingMachine } from "react-icons/gi";
import { measurementMan, MobileTape } from "../../../assets/images";
import { IoAirplane } from "react-icons/io5";

const steps = [
  {
    id: 1,
    title: "Select Uniform",
    desc: "Choose your required IAF uniform or accessory from our wide collection.",
    icon: <Shirt size={52} />,
  },
  {
    id: 2,
    title: "Add Measurements",
    desc: "Enter body measurements using our guided and easy measurement system.",
    icon: <Ruler size={52} />,
  },
  {
    id: 3,
    title: "Expert Stitching",
    desc: "Our tailoring team verifies your measurements and stitches with precision.",
    icon: <GiSewingMachine size={58} />,
  },
  {
    id: 4,
    title: "Home Delivery",
    desc: "Your uniform is packed carefully and delivered safely to your doorstep.",
    icon: <Truck size={52} />,
  },
];

export default function OrderSteps() {
  return (
    <section className="w-full bg-[#f4f8ff] px-4 py-12 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold text-[#061735] sm:text-3xl lg:text-4xl">
            Order Your Uniform in 4 Simple Steps
          </h2>

          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-12 sm:w-20 bg-[#b89b3c]" />
            <IoAirplane className="text-[#8b762c]" />
            <span className="h-px w-12 sm:w-20 bg-[#b89b3c]" />
          </div>
        </div>

        {/* Steps */}
        <div className="relative mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-5 hidden border-t border-dashed border-[#9ba8bd] lg:block" />

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm lg:bg-transparent lg:shadow-none"
            >
              <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#061735] text-sm font-bold text-white">
                {step.id}
              </div>

              <div className="mt-6 text-[#061735]">{step.icon}</div>

              <h3 className="mt-4 text-base font-bold text-[#061735]">
                {step.title}
              </h3>

              <p className="mt-2 max-w-[230px] text-sm leading-relaxed text-gray-700">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Measurement Profile Card */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-[#061735]">
          <div className="grid items-center gap-8 px-5 py-8 sm:px-8 md:grid-cols-2 md:px-10 lg:grid-cols-[0.9fr_1.5fr] lg:px-12">
            
            {/* Left Image */}
            <div className="flex items-center justify-center">
              <img
                className="h-[280px] sm:h-[340px] md:h-[380px] lg:h-[420px] object-contain"
                src={MobileTape}
                alt="Measurement app mockup"
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col-reverse items-center gap-8 text-center text-white lg:flex-row lg:text-left">
              
              {/* Text */}
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                  Create Your Measurement Profile Once
                  <br className="hidden sm:block" />
                  Reorder <span className="text-[#d4a52f]">Anytime</span>
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base lg:mx-0">
                  Save your measurements securely and use them for future uniform
                  orders without measuring again.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Guided measurement form with images & videos",
                    "Multiple measurement profiles",
                    "Inch / cm support",
                    "Easy reorder system",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-left"
                    >
                      <CheckCircle
                        size={20}
                        className="mt-0.5 shrink-0 text-[#d4a52f]"
                      />
                      <p className="text-sm text-gray-200">{item}</p>
                    </div>
                  ))}
                </div>

                <button className="mx-auto mt-8 flex items-center gap-3 rounded-md bg-[#d4a52f] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#b98c20] lg:mx-0">
                  Create Measurement Profile
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Man Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  className="h-[220px] sm:h-[260px] md:h-[300px] lg:h-[360px] object-contain"
                  src={measurementMan}
                  alt="Measurement guide man"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}