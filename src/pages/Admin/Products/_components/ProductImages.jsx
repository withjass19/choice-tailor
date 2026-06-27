import { useRef } from "react";
import { X } from "lucide-react";
import { FiImage } from "react-icons/fi";

const MAX_IMAGES = 5;

export default function ProductImages({ images, setImages }) {
  const fileInputRef = useRef(null);

  const handleOpenFile = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const availableSlots = MAX_IMAGES - images.length;

    if (availableSlots <= 0) {
      alert("Maximum 5 images allowed.");
      return;
    }

    const validFiles = selectedFiles.slice(0, availableSlots);

    const imageObjects = validFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    console.log("Selected images:", validFiles);

    setImages((prev) => [...prev, ...imageObjects]);
    e.target.value = "";
  };

  const removeImage = (index) => {
    URL.revokeObjectURL(images[index].preview);
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-[#061735]">Product Images</h2>

      <p className="mt-1 text-sm text-gray-500">
        Upload high quality images of the product.
      </p>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/png,image/jpg,image/jpeg,image/webp"
        className="hidden"
        onChange={handleImageChange}
      />

      <div
        onClick={handleOpenFile}
        className="mt-5 flex h-44 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed bg-gray-50 text-center transition hover:bg-gray-100"
      >
        <FiImage size={42} className="text-gray-400" />

        <p className="mt-3 text-sm font-semibold text-[#061735]">
          Click to upload or drag and drop
        </p>

        <p className="mt-1 text-xs text-gray-500">
          PNG, JPG, WEBP up to 5MB
        </p>
      </div>

      <div className="mt-5 grid grid-cols-5 gap-4">
        {Array.from({ length: MAX_IMAGES }).map((_, index) => {
          const image = images[index];

          return (
            <div
              key={index}
              className="relative flex h-20 items-center justify-center rounded-lg border bg-gray-50"
            >
              {image ? (
                <>
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <img
                      src={image.preview}
                      alt={`Product ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute right-1 top-1 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white shadow"
                  >
                    <X size={14} />
                  </button>
                </>
              ) : (
                <>
                  <FiImage size={28} className="text-gray-400" />
                  <span className="absolute bottom-1 text-[10px] text-gray-400">
                    Image {index + 1}
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-xs text-gray-500">
        {images.length}/{MAX_IMAGES} images selected
      </p>
    </div>
  );
}