import {
  Search,
  Filter,
  Download,
  Plus,
  ChevronDown,
  MoreVertical,
  Package,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Box,
  Pencil,
  Grid3X3,
  List,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

import {
  ShirtModel,
  BeltModel,
  ShoesModel,
  CapModel,
  BadgeModel,
  namePlate,
} from "@/assets/images";
import { useNavigate } from "react-router-dom";

const stats = [
  {
    title: "Total Products",
    value: "128",
    change: "12.5%",
    trend: "up",
    icon: Package,
    bg: "bg-gray-100",
    color: "text-[#061735]",
  },
  {
    title: "Active Products",
    value: "112",
    change: "10.3%",
    trend: "up",
    icon: CheckCircle,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "Out of Stock",
    value: "6",
    change: "14.3%",
    trend: "down",
    icon: XCircle,
    bg: "bg-red-100",
    color: "text-red-600",
  },
  {
    title: "Low Stock",
    value: "10",
    change: "9.1%",
    trend: "down",
    icon: AlertTriangle,
    bg: "bg-orange-100",
    color: "text-orange-600",
  },
  {
    title: "Draft Products",
    value: "8",
    change: "3.2%",
    trend: "up",
    icon: Box,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
];

const products = [
  {
    name: "IAF Working Dress",
    desc: "Sky Blue Shirt & Trouser",
    sku: "CT-P-1001",
    category: "IAF Uniforms",
    price: "₹4,250",
    stock: 45,
    stockStatus: "In Stock",
    measurement: true,
    status: "Active",
    date: "10 Jun, 2024",
    image: ShirtModel,
  },
  {
    name: "IAF No. 3 Dress",
    desc: "Coat, Shirt, Trouser",
    sku: "CT-P-1002",
    category: "IAF Uniforms",
    price: "₹8,650",
    stock: 18,
    stockStatus: "Low Stock",
    measurement: true,
    status: "Active",
    date: "09 Jun, 2024",
    image: ShirtModel,
  },
  {
    name: "IAF Flying Suit",
    desc: "Olive Green",
    sku: "CT-P-1003",
    category: "IAF Uniforms",
    price: "₹8,900",
    stock: 22,
    stockStatus: "In Stock",
    measurement: true,
    status: "Active",
    date: "08 Jun, 2024",
    image: ShirtModel,
  },
  {
    name: "Ceremonial Uniform",
    desc: "Coat, Shirt, Trouser",
    sku: "CT-P-1004",
    category: "IAF Uniforms",
    price: "₹12,500",
    stock: 12,
    stockStatus: "Low Stock",
    measurement: true,
    status: "Active",
    date: "08 Jun, 2024",
    image: ShirtModel,
  },
  {
    name: "White Parade Belt",
    desc: "With Brass Buckle",
    sku: "CT-P-2001",
    category: "Accessories",
    price: "₹850",
    stock: 65,
    stockStatus: "In Stock",
    measurement: false,
    status: "Active",
    date: "07 Jun, 2024",
    image: BeltModel,
  },
  {
    name: "IAF Peaked Cap",
    desc: "With Badge",
    sku: "CT-P-2002",
    category: "Accessories",
    price: "₹1,250",
    stock: 8,
    stockStatus: "Low Stock",
    measurement: false,
    status: "Active",
    date: "06 Jun, 2024",
    image: CapModel,
  },
  {
    name: "Parade Shoes",
    desc: "Black Leather",
    sku: "CT-P-2003",
    category: "Accessories",
    price: "₹2,950",
    stock: 0,
    stockStatus: "Out of Stock",
    measurement: false,
    status: "Out of Stock",
    date: "06 Jun, 2024",
    image: ShoesModel,
  },
  {
    name: "IAF Badges Set",
    desc: "Metal Badges",
    sku: "CT-P-2004",
    category: "Accessories",
    price: "₹650",
    stock: 30,
    stockStatus: "In Stock",
    measurement: false,
    status: "Active",
    date: "05 Jun, 2024",
    image: BadgeModel,
  },
  {
    name: "Name Plate",
    desc: "Metal Name Plate",
    sku: "CT-P-2005",
    category: "Accessories",
    price: "₹350",
    stock: 100,
    stockStatus: "In Stock",
    measurement: false,
    status: "Active",
    date: "05 Jun, 2024",
    image: namePlate,
  },
  {
    name: "Black Socks",
    desc: "Comfort Fit",
    sku: "CT-P-2006",
    category: "Accessories",
    price: "₹150",
    stock: 40,
    stockStatus: "In Stock",
    measurement: false,
    status: "Active",
    date: "04 Jun, 2024",
    image: ShoesModel,
  },
];

export default function AdminProducts() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-gray-500">Dashboard › Products</p>

          <h1 className="mt-3 text-3xl font-bold text-[#061735]">
            Products
          </h1>

          <p className="mt-1 text-sm text-gray-600">
            Manage all products in your store.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-lg border bg-white px-5 py-3 text-sm font-semibold">
            <Download size={17} />
            Export Products
          </button>

          <button onClick={() => navigate("/admin/products/add-new-product")} className="flex items-center gap-2 rounded-lg bg-[#061735] px-5 py-3 text-sm font-semibold text-white">
            <Plus size={17} />
            Add Product
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map((item) => {
          const Icon = item.icon;
          const isUp = item.trend === "up";

          return (
            <div
              key={item.title}
              className="rounded-xl border bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg ${item.bg} ${item.color}`}
                >
                  <Icon size={24} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#061735]">
                    {item.title}
                  </p>
                  <h3 className="mt-1 font-serif text-3xl font-bold text-[#061735]">
                    {item.value}
                  </h3>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-1 text-sm">
                {isUp ? (
                  <ArrowUp size={16} className="text-green-600" />
                ) : (
                  <ArrowDown size={16} className="text-red-600" />
                )}

                <span className={isUp ? "text-green-600" : "text-red-600"}>
                  {item.change}
                </span>
                <span className="text-gray-500">from last 30 days</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="grid gap-4 lg:grid-cols-[1.4fr_0.7fr_0.7fr_0.9fr_0.8fr_auto_auto]">
        <div className="relative">
          <Search
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#061735]"
          />
          <input
            placeholder="Search by product name, SKU, category..."
            className="w-full rounded-lg border bg-white px-4 py-3 pr-11 text-sm outline-none"
          />
        </div>

        <SelectBox label="All Categories" />
        <SelectBox label="All Status" />
        <SelectBox label="Measurement Required" />
        <SelectBox label="All Stock Status" />

        <button className="flex items-center justify-center gap-2 rounded-lg border bg-white px-5 py-3 text-sm font-semibold">
          <Filter size={17} />
          Filter
        </button>

        <div className="flex overflow-hidden rounded-lg border bg-white">
          <button className="px-3">
            <Grid3X3 size={18} />
          </button>
          <button className="bg-[#061735] px-3 text-white">
            <List size={18} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px] text-sm">
            <thead>
              <tr className="border-b bg-gray-50 text-left text-xs uppercase text-[#061735]">
                <th className="px-5 py-4">Product</th>
                <th className="px-5 py-4">SKU</th>
                <th className="px-5 py-4">Category</th>
                <th className="px-5 py-4">Price</th>
                <th className="px-5 py-4">Stock</th>
                <th className="px-5 py-4">Measurement Required</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Created On</th>
                <th className="px-5 py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((item) => (
                <tr key={item.sku} className="border-b last:border-b-0">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-14 w-14 object-contain"
                      />

                      <div>
                        <p className="font-semibold text-[#061735]">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 font-semibold">{item.sku}</td>
                  <td className="px-5 py-4">{item.category}</td>
                  <td className="px-5 py-4 font-semibold">{item.price}</td>

                  <td className="px-5 py-4">
                    <p className="font-semibold">{item.stock}</p>
                    <p
                      className={`text-xs ${
                        item.stockStatus === "In Stock"
                          ? "text-green-600"
                          : item.stockStatus === "Low Stock"
                          ? "text-orange-600"
                          : "text-red-600"
                      }`}
                    >
                      {item.stockStatus}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    {item.measurement ? (
                      <span className="inline-flex items-center gap-2 text-green-700">
                        <CheckCircle size={16} /> Yes
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-gray-500">
                        <XCircle size={16} /> No
                      </span>
                    )}
                  </td>

                  <td className="px-5 py-4">
                    <StatusBadge type={item.status}>{item.status}</StatusBadge>
                  </td>

                  <td className="px-5 py-4">{item.date}</td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <button className="rounded-lg border p-2">
                        <Pencil size={17} />
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
            Showing 1 to 10 of 128 products
          </p>

          <div className="flex items-center gap-2">
            <button className="rounded-lg border px-4 py-2 text-sm">
              10 per page
              <ChevronDown size={14} className="ml-2 inline" />
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

            <button className="h-9 w-9 rounded-lg border">...</button>
            <button className="h-9 w-9 rounded-lg border">13</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SelectBox({ label }) {
  return (
    <button className="flex items-center justify-between rounded-lg border bg-white px-4 py-3 text-sm">
      {label}
      <ChevronDown size={16} />
    </button>
  );
}

function StatusBadge({ children, type }) {
  const styles = {
    Active: "bg-green-100 text-green-700",
    "Out of Stock": "bg-red-100 text-red-700",
    Draft: "bg-gray-100 text-gray-700",
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