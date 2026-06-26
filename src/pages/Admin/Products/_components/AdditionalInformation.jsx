export default function AdditionalInformation() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-[#061735]">
        Additional Information
      </h2>

      <div className="mt-6 space-y-5">
        <Input
          label="Product Tags"
          placeholder="e.g. iaf, uniform, working dress"
          hint="Separate tags with commas"
        />

        <Input
          label="Meta Title"
          placeholder="e.g. IAF Working Dress - Choice Tailor"
        />

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#061735]">
            Meta Description
          </label>
          <textarea
            rows={4}
            maxLength={160}
            placeholder="Write SEO meta description..."
            className="w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none"
          />
          <p className="mt-1 text-right text-xs text-gray-500">0/160</p>
        </div>

        <Input label="Slug" placeholder="iaf-working-dress" />

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#061735]">
            Internal Notes
          </label>
          <textarea
            rows={4}
            placeholder="Internal notes for admin team..."
            className="w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none"
          />
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