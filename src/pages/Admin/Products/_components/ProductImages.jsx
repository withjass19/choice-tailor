import { Image, X } from "lucide-react";

export default function ProductImages() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-[#061735]">Product Images</h2>
      <p className="mt-1 text-sm text-gray-500">
        Upload high quality images of the product.
      </p>

      <div className="mt-5 flex h-44 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed bg-gray-50 text-center">
        <Image size={42} className="text-gray-400" />
        <p className="mt-3 text-sm font-semibold text-[#061735]">
          Click to upload or drag and drop
        </p>
        <p className="mt-1 text-xs text-gray-500">PNG, JPG, WEBP up to 5MB</p>
      </div>

      <div className="mt-5 grid grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="relative flex h-20 items-center justify-center rounded-lg border bg-gray-50"
          >
            <Image size={28} className="text-gray-400" />

            <button className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-400 text-white">
              <X size={13} />
            </button>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-gray-500">
        You can upload up to 8 images
      </p>
    </div>
  );
}