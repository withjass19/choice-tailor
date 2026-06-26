import { ShirtModel } from "@/assets/images";

export default function ProductGallery() {
  return (
    <div className="flex gap-4">

      {/* Thumbnails */}
      <div className="hidden md:flex flex-col gap-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="w-20 h-20 border rounded-lg p-2 cursor-pointer"
          >
            <img
              src={ShirtModel}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 border rounded-xl bg-gray-50 p-8">
        <img
          src={ShirtModel}
          alt=""
          className="w-full h-[600px] object-contain"
        />
      </div>
    </div>
  );
}