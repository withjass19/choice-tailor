export default function MeasurementSettings() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-[#061735]">
        Customization & Measurement
      </h2>

      <div className="mt-6 space-y-5">
        <Toggle
          active
          label="Measurement Required"
          desc="Customer must select or create a measurement profile before ordering"
        />

        <Toggle
          label="Allow Standard Sizes"
          desc="Customer can choose standard sizes like S, M, L, XL"
        />

        <Toggle
          active
          label="Allow Custom Notes"
          desc="Customer can add special stitching or fitting instructions"
        />

        <Select label="Measurement Template">
          <option>Shirt & Trouser Measurements</option>
          <option>Coat Measurements</option>
          <option>Flying Overall Measurements</option>
          <option>Accessory Measurements</option>
        </Select>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#061735]">
            Required Measurement Fields
          </label>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Neck",
              "Shoulder",
              "Chest",
              "Sleeve Length",
              "Shirt Length",
              "Waist",
              "Hip",
              "Inseam",
            ].map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 rounded-lg border px-4 py-3 text-sm"
              >
                <input
                  type="checkbox"
                  defaultChecked
                  className="accent-[#b89b3c]"
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle({ label, desc, active }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border p-4">
      <div>
        <h4 className="text-sm font-semibold text-[#061735]">{label}</h4>
        <p className="mt-1 text-xs text-gray-500">{desc}</p>
      </div>

      <button
        className={`relative h-6 w-11 rounded-full ${
          active ? "bg-[#061735]" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white ${
            active ? "right-1" : "left-1"
          }`}
        />
      </button>
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