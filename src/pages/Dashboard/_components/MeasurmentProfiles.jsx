export default function MeasurementProfiles() {
  return (
    <div className="bg-white rounded-xl border p-5">

      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-serif font-bold">
          My Measurement Profiles
        </h2>

        <button className="bg-[#061735] text-white px-4 py-2 rounded-lg">
          Create New Profile
        </button>
      </div>

      <div className="mt-5 space-y-4">

        {[1,2,3].map((item)=>(
          <div
            key={item}
            className="border rounded-xl p-4 flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">
                Summer Uniform
              </h3>

              <p className="text-sm text-gray-500">
                Chest 40 | Waist 34
              </p>
            </div>

            <button className="border px-4 py-2 rounded-lg">
              Use for Order
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}