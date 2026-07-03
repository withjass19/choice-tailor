import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { bgHero, ShirtModel, CapModel } from "@/assets/images";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#061735]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${bgHero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#061735] via-[#061735]/90 to-[#061735]/30" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-20">
        <div className="text-white">
          <p className="text-sm font-bold uppercase tracking-wide text-[#d4a52f]">
            Contact Us
          </p>

          <div className="mt-2 h-px w-24 bg-[#d4a52f]" />

          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            We’re Here
            <br />
            <span className="text-[#d4a52f]">To Serve You</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-gray-200">
            Have a question, need assistance, or want a custom uniform? Our
            team is ready to help you.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <HeroPoint icon={<Phone size={22} />} text="Talk to our experts" />
            <HeroPoint icon={<FaWhatsapp size={22} />} text="Get quick support" />
            <HeroPoint icon={<Mail size={22} />} text="Write to us anytime" />
          </div>
        </div>

        <div className="hidden items-end justify-center lg:flex">
          <div className="relative flex items-end gap-4">
            <img src={CapModel} alt="IAF cap" className="h-36 object-contain" />
            <img src={ShirtModel} alt="IAF uniform" className="h-[420px] object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroPoint({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4a52f] text-[#d4a52f]">
        {icon}
      </span>
      <p className="text-sm font-semibold">{text}</p>
    </div>
  );
}