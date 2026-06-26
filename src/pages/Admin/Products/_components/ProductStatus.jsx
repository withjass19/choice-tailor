export default function ProductStatus() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-[#061735]">Product Status</h2>

      <div className="mt-6 space-y-5">
        <Select label="Status">
          <option>Active</option>
          <option>Draft</option>
          <option>Archived</option>
          <option>Out of Stock</option>
        </Select>

        <Toggle label="Featured Product" desc="Show this product in featured sections" />
        <Toggle label="Best Seller" desc="Mark this product as a best selling item" />
        <Toggle label="New Arrival" desc="Show new arrival badge on product card" />
        <Toggle label="Allow Backorders" desc="Customers can order even when stock is low" />
      </div>
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

function Toggle({ label, desc }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border p-4">
      <div>
        <h4 className="text-sm font-semibold text-[#061735]">{label}</h4>
        <p className="mt-1 text-xs text-gray-500">{desc}</p>
      </div>

      <button className="relative h-6 w-11 rounded-full bg-gray-300">
        <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white" />
      </button>
    </div>
  );
}