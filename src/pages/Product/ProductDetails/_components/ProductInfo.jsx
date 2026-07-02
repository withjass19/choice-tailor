import { useState } from "react";
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <span className="rounded bg-[#f4ebd4] px-3 py-1 text-[#b89b3c]">
        {product?.category || "PRODUCT"}
      </span>

      <h1 className="mt-4 font-serif text-5xl font-bold">
        {product?.product_name}
      </h1>

      <div className="mt-6 flex gap-8">
        <span>✓ {product?.measurement_required ? "Custom Fit" : "Standard Size"}</span>
        <span>✓ {product?.allow_custom_notes ? "Made to Order" : "Ready Product"}</span>
      </div>

      <h2 className="mt-6 text-5xl font-bold">
        ₹{Number(product?.price || 0).toLocaleString("en-IN")}
      </h2>

      <p className="text-sm text-gray-500">Inclusive of all taxes</p>

      <h3 className="mt-8 font-bold">Select Size Option</h3>

      <div className="mt-3 grid grid-cols-2 gap-4">
        {product?.measurement_required && (
          <button className="rounded-lg bg-[#061735] p-4 text-white">
            Custom Measurement
          </button>
        )}

        <button className="rounded-lg border p-4">Standard Size</button>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          className="border p-2"
        >
          <Minus />
        </button>

        <span>{quantity}</span>

        <button
          type="button"
          onClick={() => setQuantity((prev) => prev + 1)}
          className="border p-2"
        >
          <Plus />
        </button>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <button className="flex justify-center gap-2 rounded-lg bg-[#b89b3c] py-4 text-white">
          <ShoppingCart />
          Add to Cart
        </button>

        <button className="flex justify-center gap-2 rounded-lg border py-4">
          <Heart />
          Save for Later
        </button>
      </div>
    </div>
  );
}