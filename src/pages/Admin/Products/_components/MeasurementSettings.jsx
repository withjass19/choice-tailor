import { useFormContext } from "react-hook-form";

const fields = [
  "Neck",
  "Shoulder",
  "Chest",
  "Sleeve Length",
  "Shirt Length",
  "Waist",
  "Hip",
  "Inseam",
];

export default function MeasurementSettings() {
  const { register, watch, setValue } = useFormContext();

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-[#061735]">
        Customization & Measurement
      </h2>

      <div className="mt-6 space-y-5">
        <Toggle
          name="measurementRequired"
          label="Measurement Required"
          desc="Customer must select or create a measurement profile before ordering"
          watch={watch}
          setValue={setValue}
        />

        <Toggle
          name="allowStandardSizes"
          label="Allow Standard Sizes"
          desc="Customer can choose standard sizes like S, M, L, XL"
          watch={watch}
          setValue={setValue}
        />

        <Toggle
          name="allowCustomNotes"
          label="Allow Custom Notes"
          desc="Customer can add special stitching or fitting instructions"
          watch={watch}
          setValue={setValue}
        />

        <Select label="Measurement Template" {...register("measurementTemplate")}>
          <option value="Shirt & Trouser Measurements">Shirt & Trouser Measurements</option>
          <option value="Coat Measurements">Coat Measurements</option>
          <option value="Flying Overall Measurements">Flying Overall Measurements</option>
          <option value="Accessory Measurements">Accessory Measurements</option>
        </Select>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#061735]">
            Required Measurement Fields
          </label>

          <div className="grid gap-3 sm:grid-cols-2">
            {fields.map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 rounded-lg border px-4 py-3 text-sm"
              >
                <input
                  type="checkbox"
                  value={item}
                  className="accent-[#b89b3c]"
                  {...register("measurementFields")}
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

function Toggle({ name, label, desc, watch, setValue }) {
  const value = watch(name);

  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border p-4">
      <div>
        <h4 className="text-sm font-semibold text-[#061735]">{label}</h4>
        <p className="mt-1 text-xs text-gray-500">{desc}</p>
      </div>

      <button
        type="button"
        onClick={() => setValue(name, !value)}
        className={`relative h-6 w-11 rounded-full ${
          value ? "bg-[#061735]" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white ${
            value ? "right-1" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}

function Select({ label, children, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#061735]">
        {label}
      </label>
      <select {...props} className="w-full rounded-lg border px-4 py-3 text-sm outline-none">
        {children}
      </select>
    </div>
  );
}