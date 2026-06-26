export default function DashboardBanner() {
  return (
    <div className="rounded-xl overflow-hidden bg-[#061735]">
      <div className="flex items-center justify-between px-8 py-8">

        <div className="text-white">
          <h2 className="text-3xl font-serif font-bold">
            Ready for your next uniform?
          </h2>

          <p className="mt-2 text-gray-300">
            Use your saved measurement profiles.
          </p>
        </div>

        <div className="flex gap-4">
          <button className="bg-[#b89b3c] text-white px-6 py-3 rounded-lg">
            Order Uniform
          </button>

          <button className="border border-white text-white px-6 py-3 rounded-lg">
            Create Measurement
          </button>
        </div>

      </div>
    </div>
  );
}