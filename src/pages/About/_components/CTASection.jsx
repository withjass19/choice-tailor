import { AirCraft } from "@/assets/images";

export default function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="flex max-w-7xl mx-auto rounded-xl bg-[#061735] text-white">
        <div className="w-[35%] bg-[#80C3FA] rounded-l-xl" style={{backgroundImage: `url(${AirCraft})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            {/* aksl */}
        </div>
        <div className="p-10">
          <h2 className="text-4xl font-serif font-bold">
            Proud to Serve the Guardians of Our Sky
          </h2>

          <p className="mt-4 text-gray-300">
            We don’t just stitch uniforms. We stitch pride, discipline and
            the spirit of the Indian Air Force.
          </p>

          <button className="mt-6 bg-[#b89b3c] px-6 py-3 rounded-md">
            Shop Uniforms →
          </button>
        </div>
      </div>
    </section>
  );
}
