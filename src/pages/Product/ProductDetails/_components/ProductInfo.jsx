import {
  Heart,
  Minus,
  Plus,
  ShoppingCart,
} from "lucide-react";

export default function ProductInfo() {
  return (
    <div>
      <span className="bg-[#f4ebd4] text-[#b89b3c] px-3 py-1 rounded">
        IAF UNIFORMS
      </span>

      <h1 className="mt-4 text-5xl font-serif font-bold">
        IAF Working Shirt
        <br />
        (Half Sleeve)
      </h1>

      <div className="mt-6 flex gap-8">
        <span>✓ Custom Fit</span>
        <span>✓ Made to Order</span>
      </div>

      <h2 className="mt-6 text-5xl font-bold">
        ₹1,450
      </h2>

      <p className="text-sm text-gray-500">
        Inclusive of all taxes
      </p>

      {/* Size Option */}

      <h3 className="mt-8 font-bold">
        Select Size Option
      </h3>

      <div className="grid grid-cols-2 gap-4 mt-3">
        <button className="bg-[#061735] text-white p-4 rounded-lg">
          Custom Measurement
        </button>

        <button className="border p-4 rounded-lg">
          Standard Size
        </button>
      </div>

      {/* Quantity */}

      <div className="mt-8 flex items-center gap-4">
        <button className="border p-2">
          <Minus />
        </button>

        <span>1</span>

        <button className="border p-2">
          <Plus />
        </button>
      </div>

      {/* Buttons */}

      <div className="mt-8 grid grid-cols-2 gap-4">
        <button className="bg-[#b89b3c] text-white py-4 rounded-lg flex justify-center gap-2">
          <ShoppingCart />
          Add to Cart
        </button>

        <button className="border py-4 rounded-lg flex justify-center gap-2">
          <Heart />
          Save for Later
        </button>
      </div>
    </div>
  );
}