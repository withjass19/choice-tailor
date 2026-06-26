export default function RecentOrders() {
  return (
    <div className="bg-white rounded-xl border p-5">

      <h2 className="text-3xl font-serif font-bold">
        Recent Orders
      </h2>

      <div className="mt-5 space-y-4">

        {[1,2,3].map((item)=>(
          <div
            key={item}
            className="border rounded-xl p-4"
          >
            <div className="flex justify-between">

              <div>
                <h3 className="font-bold">
                  Order #CT1025
                </h3>

                <p className="text-sm text-gray-500">
                  IAF Working Dress
                </p>
              </div>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                Stitching
              </span>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}