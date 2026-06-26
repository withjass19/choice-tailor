export default function ProductDetails() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-[#061735]">Product Details</h2>

      <div className="mt-6 space-y-5">
        <Input label="Brand" placeholder="e.g. Choice Tailor" />
        <Input label="Fabric" placeholder="e.g. High Quality Polyester" />

        <div className="grid gap-5 sm:grid-cols-3">
          <Input label="Color" placeholder="e.g. Sky Blue" />

          <Select label="Size Type">
            <option>Numeric (28, 30, 32...)</option>
            <option>S / M / L / XL</option>
            <option>Custom Size</option>
          </Select>

          <Select label="Gender">
            <option>Unisex</option>
            <option>Male</option>
            <option>Female</option>
          </Select>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          <Select label="Season">
            <option>All Season</option>
            <option>Summer</option>
            <option>Winter</option>
          </Select>

          <Select label="Fit">
            <option>Regular Fit</option>
            <option>Slim Fit</option>
            <option>Relaxed Fit</option>
          </Select>

          <Input label="Weight" placeholder="e.g. 0.8 kg" />
        </div>

        <Input
          label="Care Instructions"
          placeholder="e.g. Dry clean recommended. Do not bleach."
        />
      </div>
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#061735]">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full rounded-lg border px-4 py-3 text-sm outline-none"
      />
    </div>
  );
}

function Select({ label, children }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#061735]">
        {label}
      </label>
      <select className="w-full rounded-lg border px-4 py-3 text-sm outline-none">
        {children}
      </select>
    </div>
  );
}