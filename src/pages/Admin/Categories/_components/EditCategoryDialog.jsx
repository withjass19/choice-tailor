import { useEffect, useState } from "react";
import { Image as ImageIcon, Upload, X } from "lucide-react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { supabase } from "@/lib/supabase";

const initialForm = {
  name: "",
  slug: "",
  description: "",
  image: "",
  parent_category_id: "",
  display_order: 0,
  featured: false,
  show_on_homepage: true,
  status: "Active",
  seo_title: "",
  seo_description: "",
};

const IMAGEKIT_UPLOAD_URL = "https://upload.imagekit.io/api/v1/files/upload";

export default function EditCategoryDialog({
  open,
  setOpen,
  category,
  categories = [],
  refreshCategories,
}) {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!category) return;

    setForm({
      name: category.name || "",
      slug: category.slug || "",
      description: category.description || "",
      image: category.image || "",
      parent_category_id: category.parent_category_id || "",
      display_order: category.display_order || 0,
      featured: category.featured || false,
      show_on_homepage: category.show_on_homepage ?? true,
      status: category.status || "Active",
      seo_title: category.seo_title || "",
      seo_description: category.seo_description || "",
    });

    setPreview(category.image || "");
    setSelectedImage(null);
  }, [category]);

  const getImageKitAuth = async () => {
    const res = await fetch("/api/imagekit-auth");

    if (!res.ok) {
      throw new Error("ImageKit authentication failed.");
    }

    return res.json();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image should be less than 2MB.");
      return;
    }

    setSelectedImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const uploadImageToImageKit = async () => {
    if (!selectedImage) {
      toast.error("Please choose an image first.");
      return;
    }

    try {
      setUploading(true);

      const auth = await getImageKitAuth();

      const formData = new FormData();
      formData.append("file", selectedImage);
      formData.append("fileName", `category-${Date.now()}-${selectedImage.name}`);
      formData.append("folder", "/choice-tailor/categories");
      formData.append("publicKey", import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY);
      formData.append("signature", auth.signature);
      formData.append("expire", auth.expire);
      formData.append("token", auth.token);

      const uploadRes = await fetch(IMAGEKIT_UPLOAD_URL, {
        method: "POST",
        body: formData,
      });

      const uploaded = await uploadRes.json();

      if (!uploadRes.ok) {
        throw new Error(uploaded?.message || "Image upload failed.");
      }

      setForm((prev) => ({
        ...prev,
        image: uploaded.url,
      }));

      setPreview(uploaded.url);
      setSelectedImage(null);

      toast.success("Image uploaded successfully.");
    } catch (error) {
      console.error("ImageKit upload failed:", error);
      toast.error(error.message || "Image upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setPreview("");
    setForm((prev) => ({
      ...prev,
      image: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category) return;

    if (!form.name.trim()) {
      toast.error("Category name is required.");
      return;
    }

    if (!form.slug.trim()) {
      toast.error("Slug is required.");
      return;
    }

    if (selectedImage && !form.image) {
      toast.error("Please upload selected image first.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        name: form.name.trim(),
        slug: form.slug.trim(),
        description: form.description.trim() || null,
        image: form.image || null,
        parent_category_id: form.parent_category_id || null,
        display_order: Number(form.display_order || 0),
        featured: form.featured,
        show_on_homepage: form.show_on_homepage,
        status: form.status,
        seo_title: form.seo_title.trim() || null,
        seo_description: form.seo_description.trim() || null,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from("categories")
        .update(payload)
        .eq("id", category.id);

      if (error) throw error;

      toast.success("Category updated successfully.");
      refreshCategories();
      setOpen(false);
    } catch (error) {
      console.error("Edit category failed:", error);
      toast.error(error.message || "Failed to update category.");
    } finally {
      setLoading(false);
    }
  };

  const parentOptions = categories.filter((item) => item.id !== category?.id);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#061735]">
            Edit Category
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              label="Category Name *"
              name="name"
              value={form.name}
              onChange={handleChange}
            />

            <Input
              label="Slug *"
              name="slug"
              value={form.slug}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#061735]">
              Description
            </label>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              className="w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#061735]">
              Category Image
            </label>

            <div className="rounded-xl border border-dashed bg-gray-50 p-4">
              {preview ? (
                <div className="relative mx-auto h-40 w-40 rounded-xl border bg-white p-3">
                  <img
                    src={preview}
                    alt="Category Preview"
                    className="h-full w-full object-contain"
                  />

                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute -right-2 -top-2 rounded-full bg-red-600 p-1 text-white"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center text-gray-500">
                  <ImageIcon size={42} />
                  <p className="mt-2 text-sm">No image selected</p>
                </div>
              )}

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border bg-white px-5 py-2 text-sm font-semibold text-[#061735]">
                  <ImageIcon size={17} />
                  Choose Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="hidden"
                  />
                </label>

                <button
                  type="button"
                  onClick={uploadImageToImageKit}
                  disabled={!selectedImage || uploading}
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#061735] px-5 py-2 text-sm font-semibold text-white disabled:opacity-60"
                >
                  <Upload size={17} />
                  {uploading ? "Uploading..." : "Upload Image"}
                </button>
              </div>

              {form.image && (
                <p className="mt-3 text-center text-xs font-medium text-green-700">
                  Image uploaded and ready to save.
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#061735]">
                Parent Category
              </label>

              <select
                name="parent_category_id"
                value={form.parent_category_id}
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-3 text-sm outline-none"
              >
                <option value="">No Parent</option>

                {parentOptions.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <Input
              label="Display Order"
              type="number"
              name="display_order"
              value={form.display_order}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#061735]">
                Status
              </label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-3 text-sm outline-none"
              >
                <option value="Active">Active</option>
                <option value="Hidden">Hidden</option>
                <option value="Archived">Archived</option>
              </select>
            </div>

            <Input
              label="SEO Title"
              name="seo_title"
              value={form.seo_title}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#061735]">
              SEO Description
            </label>

            <textarea
              name="seo_description"
              value={form.seo_description}
              onChange={handleChange}
              rows={2}
              className="w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-5">
            <Checkbox
              label="Featured Category"
              name="featured"
              checked={form.featured}
              onChange={handleChange}
            />

            <Checkbox
              label="Show on Homepage"
              name="show_on_homepage"
              checked={form.show_on_homepage}
              onChange={handleChange}
            />
          </div>

          <DialogFooter>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg border px-6 py-2"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading || uploading}
              className="rounded-lg bg-[#061735] px-6 py-2 font-semibold text-white disabled:opacity-60"
            >
              {loading ? "Updating..." : "Update Category"}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Input({ label, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#061735]">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border px-4 py-3 text-sm outline-none"
      />
    </div>
  );
}

function Checkbox({ label, name, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 text-sm font-medium text-[#061735]">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="accent-[#b89b3c]"
      />
      {label}
    </label>
  );
}