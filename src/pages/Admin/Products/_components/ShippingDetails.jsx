export default function ShippingDetails() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-[#061735]">
        Shipping & Other Details
      </h2>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <Input label="Product Weight" placeholder="e.g. 0.8 kg" />
        <Input label="Package Length" placeholder="e.g. 40 cm" />
        <Input label="Package Width" placeholder="e.g. 30 cm" />
        <Input label="Package Height" placeholder="e.g. 8 cm" />

        <Select label="Shipping Class">
          <option>Standard Shipping</option>
          <option>Express Shipping</option>
          <option>Heavy Item Shipping</option>
        </Select>

        <Input label="Delivery Time" placeholder="e.g. 5-7 working days" />

        <Select label="Return Policy">
          <option>7 Days Return</option>
          <option>10 Days Return</option>
          <option>No Return</option>
        </Select>

        <Input label="Warranty" placeholder="e.g. 30 days stitching warranty" />
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-semibold text-[#061735]">
          Shipping Notes
        </label>
        <textarea
          rows={4}
          placeholder="Add shipping related notes..."
          className="w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none"
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