import { IoAirplane, IoCheckmarkSharp } from "react-icons/io5";
import {
  FaUserTie,
  FaRegThumbsUp,
  FaTruck,
  FaClipboardCheck,
} from "react-icons/fa";
import { GiSewingMachine } from "react-icons/gi";
import { MdVerified, MdLocalShipping } from "react-icons/md";

const reasons = [
  {
    title: "IAF Uniform Expertise",
    desc: "Years of experience in tailoring IAF uniforms with accuracy and dedication.",
    icon: <FaUserTie />,
  },
  {
    title: "Perfect Fit Promise",
    desc: "Custom measurements ensure comfort, confidence and the perfect fit.",
    icon: <FaRegThumbsUp />,
  },
  {
    title: "Fast & Reliable Delivery",
    desc: "Timely delivery across India with secure and premium packaging.",
    icon: <FaTruck />,
  },
  {
    title: "Easy Reorder",
    desc: "Save measurement once and reorder your uniform with just a click.",
    icon: <FaClipboardCheck />,
  },
];

const orderSteps = [
  { title: "Order Placed", icon: <FaClipboardCheck /> },
  { title: "Measurement Verified", icon: <MdVerified /> },
  { title: "Stitching", icon: <GiSewingMachine /> },
  { title: "Quality Check", icon: <FaClipboardCheck /> },
  { title: "Shipped", icon: <MdLocalShipping /> },
  { title: "Delivered", icon: <IoCheckmarkSharp /> },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-white">
      {/* Why Choose */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold text-[#061735] md:text-3xl">
            Why Choose Choice Tailor?
          </h2>

          <div className="mt-2 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#b89b3c]" />
            <IoAirplane className="text-[#8b762c]" />
            <span className="h-px w-16 bg-[#b89b3c]" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-[#b89b3c] hover:shadow-md"
            >
              <div className="text-4xl text-[#8b762c]">{item.icon}</div>

              <div>
                <h3 className="text-sm font-bold text-[#061735]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Track Order */}
      <div className="relative overflow-hidden bg-[#061735]">
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[280px_1fr]">
            
            {/* Left Content */}
            <div className="text-center text-white lg:text-left">
              <h2 className="font-serif text-2xl font-bold leading-tight md:text-3xl">
                Track Every Step
                <br />
                of Your Order
              </h2>

              <p className="mt-4 text-sm text-gray-300">
                We keep you updated at every stage of your uniform journey.
              </p>

              <button className="mt-6 rounded-md bg-[#b89b3c] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#9f8632]">
                Track Your Order →
              </button>
            </div>

            {/* Timeline */}
            <div className="flex items-center justify-center">
              <div className="relative w-full">
                
                {/* Center Line */}
                <div className="absolute left-0 right-0 top-7 hidden lg:block">
                  <div className="h-[2px] w-full bg-[#b89b3c]/60" />
                </div>

                {/* Timeline Items */}
                <div className="grid grid-cols-2 place-items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
                  {orderSteps.map((step) => (
                    <div
                      key={step.title}
                      className="relative flex flex-col items-center text-center"
                    >
                      <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#061735] bg-[#8b762c] text-xl text-white">
                        {step.icon}
                      </div>

                      <h3 className="mt-4 max-w-[95px] text-xs font-semibold leading-relaxed text-white">
                        {step.title}
                      </h3>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}