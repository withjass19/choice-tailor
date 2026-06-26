import {
  Search,
  Filter,
  Download,
  Plus,
  MoreVertical,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Package,
  Ruler,
  CheckCircle,
  Scissors,
  BadgeCheck,
  Truck,
  XCircle,
} from "lucide-react";

import {
  ShirtModel,
  BeltModel,
  ShoesModel,
  CapModel,
  BadgeModel,
} from "@/assets/images";

const summary = [
  { title: "All Orders", value: 125, icon: Package, color: "text-orange-600" },
  { title: "New", value: 12, icon: Package, color: "text-green-600" },
  { title: "Measurement Pending", value: 8, icon: Ruler, color: "text-blue-600" },
  { title: "Measurement Verified", value: 15, icon: CheckCircle, color: "text-green-600" },
  { title: "In Production", value: 28, icon: Scissors, color: "text-red-500" },
  { title: "Quality Check", value: 10, icon: BadgeCheck, color: "text-purple-600" },
  { title: "Shipped", value: 24, icon: Truck, color: "text-green-600" },
  { title: "Delivered", value: 22, icon: CheckCircle, color: "text-teal-600" },
  { title: "Cancelled", value: 6, icon: XCircle, color: "text-red-600" },
];

const orders = [
  {
    id: "#CT1025",
    initials: "JS",
    customer: "Jaspreet Singh",
    phone: "98765 43210",
    product: "IAF Working Dress",
    desc: "Sky Blue Shirt & Trouser",
    items: "1 Item",
    image: ShirtModel,
    measurement: "Verified",
    profile: "Summer Uniform",
    status: "In Production",
    subStatus: "Stitching",
    payment: "Paid",
    method: "Online",
    amount: "₹4,250",
    date: "10 Jun, 2024",
    time: "10:30 AM",
  },
  {
    id: "#CT1024",
    initials: "AM",
    customer: "Arjun Mehta",
    phone: "98765 12345",
    product: "IAF No. 3 Dress",
    desc: "Coat, Shirt, Trouser",
    items: "2 Items",
    image: ShirtModel,
    measurement: "Pending",
    profile: "Winter Uniform",
    status: "Measurement Pending",
    subStatus: "Awaiting Approval",
    payment: "Paid",
    method: "Online",
    amount: "₹8,650",
    date: "09 Jun, 2024",
    time: "02:15 PM",
  },
  {
    id: "#CT1023",
    initials: "RC",
    customer: "Rohit Chauhan",
    phone: "98765 67890",
    product: "IAF Flying Suit",
    desc: "Olive Green",
    items: "1 Item",
    image: ShirtModel,
    measurement: "Verified",
    profile: "Flying Suit",
    status: "In Production",
    subStatus: "Cutting",
    payment: "Paid",
    method: "COD",
    amount: "₹8,900",
    date: "08 Jun, 2024",
    time: "11:20 AM",
  },
  {
    id: "#CT1022",
    initials: "VR",
    customer: "Vikram Rawat",
    phone: "98765 11223",
    product: "Ceremonial Uniform",
    desc: "Coat, Shirt, Trouser",
    items: "3 Items",
    image: ShirtModel,
    measurement: "Pending",
    profile: "Ceremonial",
    status: "Measurement Verified",
    subStatus: "Ready for Production",
    payment: "Paid",
    method: "Online",
    amount: "₹12,500",
    date: "08 Jun, 2024",
    time: "09:45 AM",
  },
  {
    id: "#CT1021",
    initials: "MK",
    customer: "Manoj Kumar",
    phone: "98765 44556",
    product: "White Parade Belt",
    desc: "With Brass Buckle",
    items: "1 Item",
    image: BeltModel,
    measurement: "Verified",
    profile: "Default",
    status: "Quality Check",
    subStatus: "Checking",
    payment: "Paid",
    method: "Online",
    amount: "₹850",
    date: "07 Jun, 2024",
    time: "04:30 PM",
  },
  {
    id: "#CT1020",
    initials: "SY",
    customer: "Sandeep Yadav",
    phone: "98765 77889",
    product: "Parade Shoes",
    desc: "Black Leather",
    items: "1 Item",
    image: ShoesModel,
    measurement: "N/A",
    profile: "No Measurement",
    status: "Shipped",
    subStatus: "Out for Delivery",
    payment: "Paid",
    method: "Online",
    amount: "₹2,950",
    date: "06 Jun, 2024",
    time: "03:10 PM",
  },
  {
    id: "#CT1019",
    initials: "AV",
    customer: "Amit Verma",
    phone: "98766 33445",
    product: "IAF Peaked Cap",
    desc: "With Badge",
    items: "1 Item",
    image: CapModel,
    measurement: "Verified",
    profile: "Default",
    status: "Delivered",
    subStatus: "Delivered",
    payment: "Paid",
    method: "COD",
    amount: "₹1,250",
    date: "05 Jun, 2024",
    time: "12:00 PM",
  },
  {
    id: "#CT1018",
    initials: "DS",
    customer: "Deepak Singh",
    phone: "98765 66778",
    product: "IAF Badges Set",
    desc: "Metal Badges",
    items: "2 Items",
    image: BadgeModel,
    measurement: "N/A",
    profile: "No Measurement",
    status: "Cancelled",
    subStatus: "Cancelled by Admin",
    payment: "Refunded",
    method: "Online",
    amount: "₹650",
    date: "04 Jun, 2024",
    time: "11:35 AM",
  },
];

export default function AdminOrders() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-gray-500">Dashboard › Orders</p>

          <h1 className="mt-3 text-3xl font-bold text-[#061735]">
            Orders
          </h1>

          <p className="mt-1 text-sm text-gray-600">
            Manage and track all customer orders.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-lg border bg-white px-5 py-3 text-sm font-semibold">
            <Download size={17} />
            Export Orders
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-[#061735] px-5 py-3 text-sm font-semibold text-white">
            <Plus size={17} />
            Add Order
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="overflow-hidden rounded-xl border bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9">
          {summary.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`border-r p-4 last:border-r-0 ${
                  index === 0 ? "bg-[#fbf4ea]" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} className={item.color} />

                  <div>
                    <p className="text-xs font-semibold text-[#061735]">
                      {item.title}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-[#061735]">
                      {item.value}
                    </h3>
                  </div>
                </div>

                {index === 0 && (
                  <div className="mt-3 h-[2px] w-full bg-[#b89b3c]" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Table Card */}
      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        {/* Filters */}
        <div className="grid gap-4 border-b p-4 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr_auto]">
          <div className="relative">
            <Search
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#061735]"
            />
            <input
              placeholder="Search by Order ID, Customer, Phone..."
              className="w-full rounded-lg border px-4 py-3 pr-11 text-sm outline-none"
            />
          </div>

          <SelectBox label="All Status" />
          <SelectBox label="All Products" />
          <SelectBox label="All Payment Status" />

          <button className="flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm">
            <Calendar size={17} />
            10 Jun, 2024 - 10 Jul, 2024
            <ChevronDown size={16} />
          </button>

          <button className="flex items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold">
            <Filter size={17} />
            Filter
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1250px] text-sm">
            <thead>
              <tr className="border-b bg-gray-50 text-left text-xs uppercase text-[#061735]">
                <th className="px-5 py-4">Order ID</th>
                <th className="px-5 py-4">Customer</th>
                <th className="px-5 py-4">Product</th>
                <th className="px-5 py-4">Measurement</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Payment</th>
                <th className="px-5 py-4">Amount</th>
                <th className="px-5 py-4">Date</th>
                <th className="px-5 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b last:border-b-0">
                  <td className="px-5 py-4 font-bold">{order.id}</td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#061735] text-xs font-bold text-white">
                        {order.initials}
                      </div>

                      <div>
                        <p className="font-semibold text-[#061735]">
                          {order.customer}
                        </p>
                        <p className="text-xs text-gray-500">{order.phone}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={order.image}
                        alt={order.product}
                        className="h-14 w-14 object-contain"
                      />

                      <div>
                        <p className="font-semibold text-[#061735]">
                          {order.product}
                        </p>
                        <p className="text-xs text-gray-500">{order.desc}</p>
                        <p className="text-xs text-gray-500">{order.items}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <StatusBadge type={order.measurement}>
                      {order.measurement}
                    </StatusBadge>
                    <p className="mt-1 text-xs text-gray-500">
                      Profile: {order.profile}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <StatusBadge type={order.status}>{order.status}</StatusBadge>
                    <p className="mt-1 text-xs text-gray-500">
                      {order.subStatus}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <StatusBadge type={order.payment}>{order.payment}</StatusBadge>
                    <p className="mt-1 text-xs text-gray-500">
                      {order.method}
                    </p>
                  </td>

                  <td className="px-5 py-4 font-bold">{order.amount}</td>

                  <td className="px-5 py-4">
                    <p>{order.date}</p>
                    <p className="text-xs text-gray-500">{order.time}</p>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <button className="rounded-lg border px-4 py-2 text-sm font-semibold">
                        View Details
                      </button>
                      <button>
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">
            Showing 1 to 10 of 125 orders
          </p>

          <div className="flex items-center gap-3">
            <button className="rounded-lg border px-4 py-2 text-sm">
              10 per page
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg border">
              <ChevronLeft size={16} />
            </button>

            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`h-9 w-9 rounded-lg border text-sm ${
                  page === 1 ? "bg-[#061735] text-white" : "bg-white"
                }`}
              >
                {page}
              </button>
            ))}

            <button className="flex h-9 w-9 items-center justify-center rounded-lg border">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SelectBox({ label }) {
  return (
    <button className="flex items-center justify-between rounded-lg border px-4 py-3 text-sm">
      {label}
      <ChevronDown size={16} />
    </button>
  );
}

function StatusBadge({ children, type }) {
  const styles = {
    Verified: "bg-green-100 text-green-700",
    Pending: "bg-orange-100 text-orange-700",
    "N/A": "bg-gray-100 text-gray-600",
    "In Production": "bg-orange-100 text-orange-700",
    "Measurement Pending": "bg-purple-100 text-purple-700",
    "Measurement Verified": "bg-blue-100 text-blue-700",
    "Quality Check": "bg-purple-100 text-purple-700",
    Shipped: "bg-green-100 text-green-700",
    Delivered: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
    Paid: "bg-green-100 text-green-700",
    Refunded: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        styles[type] || "bg-gray-100 text-gray-700"
      }`}
    >
      {children}
    </span>
  );
}