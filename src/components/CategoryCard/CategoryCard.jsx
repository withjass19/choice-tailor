export default function CategroyCard({ categroy, image, width, height }) {
  return (
    <div className="group flex h-full min-h-[180px] w-full flex-col items-center justify-between gap-3 rounded-xl border border-gray-900/10 bg-white p-4 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#b89b3c] hover:shadow-xl">
      
      <div className="flex h-24 w-full items-center justify-center">
        <img
          src={image}
          alt={categroy}
          style={{
            width: width || "90px",
            height: height || "90px",
          }}
          className="object-contain"
        />
      </div>

      <p className="text-sm font-semibold text-[#061735] sm:text-base">
        {categroy}
      </p>

      <button className="text-xs font-medium text-[#b89b3c] transition hover:text-[#8b762c] sm:text-sm">
        Explore
      </button>
    </div>
  );
}