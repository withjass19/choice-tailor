import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

export default function ItemCard({ id, src, categroy, price, subCategory }) {
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      product_name: categroy,
      category: subCategory,
      price,
      images: [src],
    });

    toast.success("Added to cart");
  };

  return (
    <div className="group flex h-full min-h-[260px] w-full flex-col items-center justify-between rounded-xl border border-gray-200 bg-white p-4 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#b89b3c] hover:shadow-xl sm:h-[280px]">
      {/* Image */}
      <div className="flex h-28 w-full items-center justify-center">
        <img
          src={src}
          alt={categroy}
          className="h-full w-full max-w-[120px] object-contain"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-1 text-sm">
        <p className="font-semibold text-[#061735]">{categroy}</p>

        <p className="text-gray-600">{subCategory}</p>

        <p className="font-bold text-[#b89b3c]">
          ₹{Number(price).toLocaleString("en-IN")}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex w-full flex-col items-center gap-2 text-xs sm:flex-row">
        <button
          type="button"
          onClick={() => navigate(`/product/${id}`)}
          className="w-full flex-1 rounded-md border border-[#061735] px-3 py-2 font-medium text-[#061735] transition hover:bg-[#061735] hover:text-white sm:w-auto"
        >
          View Details
        </button>

        <button
          type="button"
          onClick={handleAddToCart}
          className="rounded-md border border-[#061735] p-2 text-[#061735] transition hover:border-[#b89b3c] hover:bg-[#b89b3c] hover:text-white"
        >
          <IoCartOutline size={18} />
        </button>
      </div>
    </div>
  );
}
