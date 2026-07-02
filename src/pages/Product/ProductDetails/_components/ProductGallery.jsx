import { useState } from "react";
import { ShirtModel } from "@/assets/images";

export default function ProductGallery({ product }) {
  const images = product?.images?.length ? product.images : [ShirtModel];
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex gap-4">
      <div className="hidden flex-col gap-4 md:flex">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveImage(image)}
            className={`h-20 w-20 cursor-pointer rounded-lg border p-2 ${
              activeImage === image ? "border-[#b89b3c]" : ""
            }`}
          >
            <img src={image} alt="" className="h-full w-full object-contain" />
          </button>
        ))}
      </div>

      <div className="flex-1 rounded-xl border bg-gray-50 p-8">
        <img
          src={activeImage}
          alt={product?.product_name || "Product"}
          className="h-[600px] w-full object-contain"
        />
      </div>
    </div>
  );
}