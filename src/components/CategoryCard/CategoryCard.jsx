export default function CategroyCard({ categroy, image, width, height }) {
  return (
    <div className="group relative flex h-[170px] w-full cursor-pointer flex-col items-center justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b89b3c] hover:shadow-xl">
      <div className="absolute inset-x-0 top-0 h-1 bg-[#061735] opacity-0 transition group-hover:opacity-100" />

      <div className="flex h-24 w-full items-center justify-center rounded-xl bg-gradient-to-b from-gray-50 to-white">
        <img
          src={image}
          alt={categroy}
          style={{
            width: width || "82px",
            height: height || "82px",
          }}
          className="object-contain transition duration-300 group-hover:scale-110"
        />
      </div>

      <div>
        <p className="line-clamp-1 text-sm font-bold text-[#061735] sm:text-base">
          {categroy}
        </p>

        <span className="mt-1 inline-block text-xs font-semibold text-[#b89b3c] opacity-0 transition group-hover:opacity-100">
          Explore →
        </span>
      </div>
    </div>
  );
}