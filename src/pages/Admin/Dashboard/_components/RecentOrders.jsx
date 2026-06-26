import { ShirtModel, BeltModel } from "@/assets/images";

const orders = [
  {
    id: "#CT1025",
    customer: "Jaspreet Singh",
    product: "IAF Working Dress",
    image: ShirtModel,
    status: "Stitching",
    amount: "₹4,250",
    date: "10 Jun, 2024",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: "#CT1024",
    customer: "Arjun Mehta",
    product: "IAF No. 3 Dress",
    image: ShirtModel,
    status: "Quality Check",
    amount: "₹8,650",
    date: "09 Jun, 2024",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: "#CT1023",
    customer: "Rohit Chauhan",
    product: "IAF Flying Suit",
    image: ShirtModel,
    status: "Measurement Verified",
    amount: "₹8,900",
    date: "08 Jun, 2024",
    color: "bg-green-100 text-green-700",
  },
  {
    id: "#CT1022",
    customer: "Vikram Rawat",
    product: "Ceremonial Uniform",
    image: ShirtModel,
    status: "Pending Measurement",
    amount: "₹12,500",
    date: "08 Jun, 2024",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    id: "#CT1021",
    customer: "Manoj Kumar",
    product: "White Parade Belt",
    image: BeltModel,
    status: "Shipped",
    amount: "₹850",
    date: "07 Jun, 2024",
    color: "bg-blue-100 text-blue-700",
  },
];

export default function RecentOrders() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#061735]">Recent Orders</h2>
        <button className="text-sm font-semibold text-blue-700">
          View All Orders
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[750px] text-sm">
          <thead>
            <tr className="border-y bg-gray-50 text-left text-xs uppercase text-gray-500">
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-4 font-bold">{item.id}</td>
                <td className="px-4 py-4">{item.customer}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.product}
                      className="h-10 w-10 object-contain"
                    />
                    <span className="font-semibold">{item.product}</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${item.color}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-4 font-semibold">{item.amount}</td>
                <td className="px-4 py-4 text-gray-600">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="mx-auto mt-5 block text-sm font-semibold text-blue-700">
        View All Orders →
      </button>
    </div>
  );
}