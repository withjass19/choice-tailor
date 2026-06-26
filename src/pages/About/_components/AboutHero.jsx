import { bgHero, ShirtModel } from "@/assets/images";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#061735]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${bgHero})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#061735] via-[#061735]/90 to-[#061735]/30" />

      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 px-6 py-20 items-center">
        <div className="text-white">
          <p className="text-[#d4a52f] uppercase font-semibold">
            About Us
          </p>

          <h1 className="mt-3 text-5xl font-serif font-bold leading-tight">
            Tailored with Precision.
            <br />
            <span className="text-[#d4a52f]">
              Committed to Our Forces.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-gray-300 leading-relaxed">
            Choice Tailor is dedicated to delivering premium quality uniforms
            and accessories for the Indian Air Force. With years of expertise, modern craftsmanship and a deep respect for service. we ensure every uniform reflects pride, discipline and perfection.
          </p>

          <button className="mt-8 bg-[#b89b3c] px-6 py-3 rounded-md">
            Our Story →
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src={ShirtModel}
            alt=""
            className="h-[450px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}