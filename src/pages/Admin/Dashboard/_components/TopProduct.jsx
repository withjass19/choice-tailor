import { ShirtModel, BeltModel } from "@/assets/images";

const products = [
  { name: "IAF Working Dress", image: ShirtModel, orders: 32 },
  { name: "IAF No. 3 Dress", image: ShirtModel, orders: 28 },
  { name: "IAF Flying Suit", image: ShirtModel, orders: 18 },
  { name: "Ceremonial Uniform", image: ShirtModel, orders: 15 },
  { name: "White Parade Belt", image: BeltModel, orders: 12 },
];

export default function TopProducts() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#061735]">
          Top Selling Products
        </h2>
        <button className="text-sm font-semibold text-blue-700">View All</button>
      </div>

      <div className="overflow-hidden rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-left text-xs uppercase text-gray-500">
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3 text-right">Orders</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item) => (
              <tr key={item.name} className="border-t">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-10 w-10 object-contain"
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right font-semibold">
                  {item.orders}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}