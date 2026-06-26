export default function PricingStock() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-[#061735]">Pricing & Stock</h2>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Input label="Price (₹) *" placeholder="e.g. 4250" />
        <Input label="Compare Price (₹)" placeholder="e.g. 5000" hint="MRP or original price" />
        <Input label="Cost Price (₹)" placeholder="e.g. 2500" hint="For internal use only" />
        <Input label="Stock Quantity *" placeholder="e.g. 25" hint="Total available stock" />
        <Input label="Low Stock Alert" placeholder="e.g. 5" hint="Alert when stock is below this" />

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#061735]">
            Track Inventory
          </label>

          <div className="flex items-center gap-3 pt-3">
            <button className="relative h-6 w-11 rounded-full bg-[#061735]">
              <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white" />
            </button>
            <span className="text-sm font-medium">Yes</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({ label, placeholder, hint }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#061735]">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full rounded-lg border px-4 py-3 text-sm outline-none"
      />
      {hint && <p className="mt-1 text-xs text-gray-500">{hint}</p>}
    </div>
  );
}