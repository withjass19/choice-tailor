import { IoCartOutline } from "react-icons/io5";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

export default function ItemCard({ id, src, categroy, price, subCategory }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (event) => {
    event.stopPropagation();

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
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="group pb-2 relative flex h-[265px] w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b89b3c] hover:shadow-xl"
    >
      <div className="absolute left-3 top-3 z-10 rounded-full bg-[#f6efe1] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#b08018]">
        {subCategory || "Premium"}
      </div>

      <button
        type="button"
        onClick={handleAddToCart}
        className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#061735] shadow-md transition hover:bg-[#b89b3c] hover:text-white"
      >
        <IoCartOutline size={19} />
      </button>

      <div className="flex h-28 items-center justify-center bg-gradient-to-b from-gray-50 to-white p-4">
        <img
          src={src}
          alt={categroy}
          className="h-full max-w-[100px] object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-2 text-center">
        <div>
          <h3 className="line-clamp-2 font-serif text-lg font-bold text-[#061735]">
            {categroy}
          </h3>

          <p className="text-xs text-gray-500">
            {subCategory || "Choice Tailor Collection"}
          </p>

          <p className="text-lg font-bold text-[#b89b3c]">
            ₹{Number(price || 0).toLocaleString("en-IN")}
          </p>
        </div>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            navigate(`/product/${id}`);
          }}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#061735] px-3 py-2 text-sm font-semibold text-[#061735] transition hover:bg-[#061735] hover:text-white"
        >
          <Eye size={15} />
          View Details
        </button>
      </div>
    </div>
  );
}