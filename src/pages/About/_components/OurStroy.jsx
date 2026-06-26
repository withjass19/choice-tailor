export default function OurStory() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 px-6 items-center">

        <div>
          <p className="text-[#d4a52f] font-semibold uppercase">
            Our Story
          </p>

          <h2 className="text-5xl font-serif font-bold mt-3">
            Born from Passion.
            <br />
            <span className="text-[#d4a52f]">
              Built on Trust.
            </span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Choice Tailor began with a simple mission – to provide perfectly
            fitted, high-quality uniforms to the brave men and women of the Indian Air Force.
          </p>
          <p className="mt-6 text-gray-600 leading-relaxed">
            From a humble beginning to becoming a trusted name across India, our journey has been defined by dedication, craftsmanship and the belief that those who serve the nation deserve nnothing but the best.
          </p>
        </div>

        <div className="h-[450px] rounded-xl bg-gray-200" />
      </div>
    </section>
  );
}