import { IoCartOutline } from "react-icons/io5";

export default function ItemCard({ src, categroy }) {
  return (
    <div className="group flex h-[260px] w-full flex-col items-center justify-between rounded-xl border border-gray-200 bg-white p-4 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#b89b3c] hover:shadow-xl sm:h-[280px]">
      
      <div className="flex h-28 w-full items-center justify-center">
        <img
          src={src}
          alt={categroy}
          className="h-full max-w-[120px] object-contain"
        />
      </div>

      <div className="flex flex-col gap-1 text-sm">
        <p className="font-semibold text-[#061735]">{categroy}</p>
        <p className="text-gray-600">Working Dress</p>
        <p className="font-bold text-[#b89b3c]">₹1450</p>
      </div>

      <div className="flex w-full items-center gap-2 text-xs">
        <button className="flex-1 rounded-md border border-[#061735] px-3 py-2 font-medium text-[#061735] transition hover:bg-[#061735] hover:text-white">
          View Details
        </button>

        <button className="rounded-md border border-[#061735] p-2 text-[#061735] transition hover:bg-[#b89b3c] hover:border-[#b89b3c] hover:text-white">
          <IoCartOutline size={18} />
        </button>
      </div>
    </div>
  );
}