import { useEffect, useState } from "react";
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

export default function EditCategoryDialog({
  open,
  setOpen,
  category,
  categories = [],
  refreshCategories,
}) {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

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
  }, [category]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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

    try {
      setLoading(true);

      const payload = {
        name: form.name.trim(),
        slug: form.slug.trim(),
        description: form.description.trim() || null,
        image: form.image.trim() || null,
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

          <Input
            label="Image URL"
            name="image"
            value={form.image}
            onChange={handleChange}
          />

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
              disabled={loading}
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