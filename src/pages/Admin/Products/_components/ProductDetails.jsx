import { useFormContext } from "react-hook-form";

export default function ProductDetails() {
  const { register } = useFormContext();

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-[#061735]">Product Details</h2>

      <div className="mt-6 space-y-5">
        <Input
          label="Brand"
          placeholder="e.g. Choice Tailor"
          {...register("brand")}
        />

        <Input
          label="Fabric"
          placeholder="e.g. High Quality Polyester"
          {...register("fabric")}
        />

        <div className="grid gap-5 sm:grid-cols-3">
          <Input
            label="Color"
            placeholder="e.g. Sky Blue"
            {...register("color")}
          />

          <Select label="Size Type" {...register("sizeType")}>
            <option value="Numeric">Numeric (28, 30, 32...)</option>
            <option value="Alpha">S / M / L / XL</option>
            <option value="Custom">Custom Size</option>
          </Select>

          <Select label="Gender" {...register("gender")}>
            <option value="Unisex">Unisex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          <Select label="Season" {...register("season")}>
            <option value="All Season">All Season</option>
            <option value="Summer">Summer</option>
            <option value="Winter">Winter</option>
          </Select>

          <Select label="Fit" {...register("fit")}>
            <option value="Regular Fit">Regular Fit</option>
            <option value="Slim Fit">Slim Fit</option>
            <option value="Relaxed Fit">Relaxed Fit</option>
          </Select>

          <Input
            label="Weight"
            placeholder="e.g. 0.8 kg"
            {...register("productWeight")}
          />
        </div>

        <Input
          label="Care Instructions"
          placeholder="e.g. Dry clean recommended. Do not bleach."
          {...register("careInstructions")}
        />
      </div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#061735]">
        {label}
      </label>

      <input
        {...props}
        className="w-full rounded-lg border px-4 py-3 text-sm outline-none"
      />
    </div>
  );
}

function Select({ label, children, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#061735]">
        {label}
      </label>

      <select
        {...props}
        className="w-full rounded-lg border px-4 py-3 text-sm outline-none"
      >
        {children}
      </select>
    </div>
  );
}