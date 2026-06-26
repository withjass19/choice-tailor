import {
  Search,
  ChevronDown,
  Headphones,
//   ArrowRight,
} from "lucide-react";

import {
  ShirtModel,
  // ShirtModel,
  BeltModel,
  ShoesModel,
} from "@/assets/images";

const orders = [
  {
    id: "#CT1025",
    product: "IAF Working Dress",
    variant: "Sky Blue Shirt & Trouser",
    image: ShirtModel,
    date: "10 Jun 2024",
    time: "10:30 AM",
    amount: "₹4,250",
    status: "Stitching",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    id: "#CT0987",
    product: "IAF No. 3 Dress",
    variant: "Coat, Shirt, Trouser",
    image: ShirtModel,
    date: "28 May 2024",
    time: "02:15 PM",
    amount: "₹8,650",
    status: "Quality Check",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: "#CT0943",
    product: "IAF Flying Suit",
    variant: "Olive Green",
    image: ShirtModel,
    date: "15 May 2024",
    time: "11:20 AM",
    amount: "₹8,900",
    status: "Shipped",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "#CT0891",
    product: "IAF PT Shirt",
    variant: "Light Blue",
    image: ShirtModel,
    date: "02 May 2024",
    time: "09:45 AM",
    amount: "₹1,250",
    status: "Delivered",
    color: "bg-green-100 text-green-700",
  },
  {
    id: "#CT0850",
    product: "White Parade Belt",
    variant: "With Brass Buckle",
    image: BeltModel,
    date: "20 Apr 2024",
    time: "04:30 PM",
    amount: "₹850",
    status: "Delivered",
    color: "bg-green-100 text-green-700",
  },
  {
    id: "#CT0786",
    product: "Parade Shoes",
    variant: "Black Leather",
    image: ShoesModel,
    date: "05 Apr 2024",
    time: "10:10 AM",
    amount: "₹2,950",
    status: "Delivered",
    color: "bg-green-100 text-green-700",
  },
];

export default function Orders() {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-gray-500">
            Home / My Account / My Orders
          </p>

          <h1 className="mt-2 font-serif text-5xl font-bold text-[#061735]">
            My Orders
          </h1>

          <p className="mt-2 text-gray-600">
            Track and manage all your uniform orders in one place.
          </p>
        </div>

        <div className="rounded-xl bg-[#061735] p-5 text-white">
          <div className="flex items-center gap-3">
            <Headphones />
            <div>
              <h3 className="font-bold">Need Help?</h3>
              <p className="text-sm text-gray-300">
                Visit Help Center
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="mt-8 overflow-hidden rounded-xl border bg-white shadow-sm">
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-8 border-b px-6">
          <button className="border-b-2 border-[#b89b3c] py-4 text-sm font-semibold text-[#b89b3c]">
            All Orders (12)
          </button>

          <button className="py-4 text-sm font-semibold">
            Processing (3)
          </button>

          <button className="py-4 text-sm font-semibold">
            Stitching (2)
          </button>

          <button className="py-4 text-sm font-semibold">
            Shipped (4)
          </button>

          <button className="py-4 text-sm font-semibold">
            Delivered (3)
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 p-5 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative">
              <Search
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              />

              <input
                type="text"
                placeholder="Search by order ID..."
                className="w-full rounded-lg border px-4 py-3 pr-12 lg:w-[350px]"
              />
            </div>

            <button className="flex items-center gap-2 rounded-lg border px-4 py-3">
              All Time
              <ChevronDown size={18} />
            </button>
          </div>

          <button className="flex items-center gap-2 rounded-lg border px-4 py-3">
            Newest First
            <ChevronDown size={18} />
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="border-y bg-gray-50 text-left text-sm">
                <th className="p-4">ORDER</th>
                <th className="p-4">PRODUCT</th>
                <th className="p-4">DATE</th>
                <th className="p-4">AMOUNT</th>
                <th className="p-4">STATUS</th>
                <th className="p-4">ACTION</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">
                    <h4 className="font-bold">{order.id}</h4>
                    <p className="text-sm text-gray-500">
                      1 Item
                    </p>
                  </td>

                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={order.image}
                        alt=""
                        className="h-16 w-16 object-contain"
                      />

                      <div>
                        <h4 className="font-bold">
                          {order.product}
                        </h4>

                        <p className="text-sm text-gray-500">
                          {order.variant}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4">
                    <p>{order.date}</p>
                    <p className="text-sm text-gray-500">
                      {order.time}
                    </p>
                  </td>

                  <td className="p-4">
                    <p className="font-bold">
                      {order.amount}
                    </p>
                    <p className="text-sm text-gray-500">
                      Paid
                    </p>
                  </td>

                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${order.color}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <button className="rounded-lg border border-[#061735] px-4 py-2 text-sm font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-5">
          <p className="text-sm text-gray-500">
            Showing 1 to 6 of 12 orders
          </p>

          <div className="flex gap-2">
            <button className="h-10 w-10 rounded border">
              1
            </button>

            <button className="h-10 w-10 rounded bg-[#061735] text-white">
              2
            </button>

            <button className="h-10 w-10 rounded border">
              3
            </button>
          </div>
        </div>
      </div>
    </>
  );
}