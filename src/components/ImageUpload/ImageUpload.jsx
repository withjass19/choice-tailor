import { useState } from "react";
import { upload } from "@imagekit/react";

export default function ImageUpload() {
  const [imageUrl, setImageUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const authenticator = async () => {
    const res = await fetch("/api/imagekit-auth");

    if (!res.ok) {
      throw new Error("ImageKit auth failed");
    }

    return await res.json();
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setLoading(true);

      const auth = await authenticator();

      const result = await upload({
        file,
        fileName: file.name,
        publicKey: import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY,
        signature: auth.signature,
        expire: auth.expire,
        token: auth.token,
        folder: "/choice-tailor/products",
        useUniqueFileName: true,
        onProgress: (event) => {
          setProgress(Math.round((event.loaded / event.total) * 100));
        },
      });

      setImageUrl(result.url);
      console.log("Uploaded:", result);
    } catch (error) {
      console.error(error);
      alert("Image upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <input type="file" accept="image/*" onChange={handleUpload} />

      {loading && <p>Uploading... {progress}%</p>}

      {imageUrl && (
        <div>
          <img
            src={imageUrl}
            alt="Uploaded"
            className="h-40 w-40 rounded-lg object-cover"
          />
          <p className="text-sm break-all">{imageUrl}</p>
        </div>
      )}
    </div>
  );
}