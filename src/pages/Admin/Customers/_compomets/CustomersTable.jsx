import { Eye, MoreVertical, MapPin, Phone } from "lucide-react";

const customers = [
  {
    initials: "JS",
    name: "Jaspreet Singh",
    email: "jaspreet.singh@gmail.com",
    phone: "98765 43210",
    location: "Bareilly, UP",
    orders: 12,
    profiles: 3,
    spent: "₹45,250",
    type: "Regular",
    status: "Active",
    joined: "10 Jun, 2024",
    color: "bg-[#061735]",
  },
  {
    initials: "AM",
    name: "Arjun Mehta",
    email: "arjun.mehta@gmail.com",
    phone: "98765 12345",
    location: "Delhi, DL",
    orders: 8,
    profiles: 2,
    spent: "₹28,600",
    type: "Regular",
    status: "Active",
    joined: "09 Jun, 2024",
    color: "bg-purple-700",
  },
  {
    initials: "RC",
    name: "Rohit Chauhan",
    email: "rohit.chauhan@gmail.com",
    phone: "98765 67890",
    location: "Lucknow, UP",
    orders: 5,
    profiles: 1,
    spent: "₹18,450",
    type: "New",
    status: "Active",
    joined: "08 Jun, 2024",
    color: "bg-green-700",
  },
  {
    initials: "VR",
    name: "Vikram Rawat",
    email: "vikram.rawat@gmail.com",
    phone: "98765 11223",
    location: "Dehradun, UK",
    orders: 9,
    profiles: 2,
    spent: "₹32,750",
    type: "Regular",
    status: "Active",
    joined: "08 Jun, 2024",
    color: "bg-orange-500",
  },
  {
    initials: "MK",
    name: "Manoj Kumar",
    email: "manoj.kumar@gmail.com",
    phone: "98765 44556",
    location: "Kanpur, UP",
    orders: 3,
    profiles: 1,
    spent: "₹9,850",
    type: "New",
    status: "Active",
    joined: "07 Jun, 2024",
    color: "bg-teal-600",
  },
  {
    initials: "SY",
    name: "Sandeep Yadav",
    email: "sandeep.yadav@gmail.com",
    phone: "98765 77889",
    location: "Agra, UP",
    orders: 7,
    profiles: 2,
    spent: "₹24,300",
    type: "Regular",
    status: "Inactive",
    joined: "06 Jun, 2024",
    color: "bg-rose-500",
  },
  {
    initials: "AV",
    name: "Amit Verma",
    email: "amit.verma@gmail.com",
    phone: "98765 33445",
    location: "Ghaziabad, UP",
    orders: 4,
    profiles: 1,
    spent: "₹12,900",
    type: "New",
    status: "Active",
    joined: "05 Jun, 2024",
    color: "bg-blue-600",
  },
  {
    initials: "DS",
    name: "Deepak Singh",
    email: "deepak.singh@gmail.com",
    phone: "98765 66778",
    location: "Patna, BR",
    orders: 6,
    profiles: 2,
    spent: "₹21,850",
    type: "Regular",
    status: "Active",
    joined: "04 Jun, 2024",
    color: "bg-amber-800",
  },
];

export default function CustomersTable() {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1150px] text-sm">
          <thead>
            <tr className="border-b bg-gray-50 text-left text-xs uppercase text-[#061735]">
              <th className="px-5 py-4">Customer</th>
              <th className="px-5 py-4">Contact</th>
              <th className="px-5 py-4">Location</th>
              <th className="px-5 py-4">Orders</th>
              <th className="px-5 py-4">Profiles</th>
              <th className="px-5 py-4">Total Spent</th>
              <th className="px-5 py-4">Customer Type</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Joined On</th>
              <th className="px-5 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((item) => (
              <tr key={item.email} className="border-b last:border-b-0">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white ${item.color}`}
                    >
                      {item.initials}
                    </div>

                    <div>
                      <p className="font-semibold text-[#061735]">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.email}</p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4">
                  <p className="flex items-center gap-2 text-[#061735]">
                    <Phone size={14} />
                    {item.phone}
                  </p>
                </td>

                <td className="px-5 py-4">
                  <p className="flex items-start gap-2 text-[#061735]">
                    <MapPin size={14} className="mt-0.5" />
                    <span>
                      {item.location}
                      <br />
                      <span className="text-gray-500">India</span>
                    </span>
                  </p>
                </td>

                <td className="px-5 py-4">
                  <p className="font-semibold">{item.orders}</p>
                  <button className="text-xs font-semibold text-blue-700">
                    View Orders
                  </button>
                </td>

                <td className="px-5 py-4">
                  <p className="font-semibold">{item.profiles}</p>
                  <button className="text-xs font-semibold text-blue-700">
                    View Profiles
                  </button>
                </td>

                <td className="px-5 py-4 font-bold">{item.spent}</td>

                <td className="px-5 py-4">
                  <TypeBadge type={item.type}>{item.type}</TypeBadge>
                </td>

                <td className="px-5 py-4">
                  <StatusBadge status={item.status}>{item.status}</StatusBadge>
                </td>

                <td className="px-5 py-4">{item.joined}</td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <button className="rounded-lg border p-2">
                      <Eye size={17} />
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
    </div>
  );
}

function TypeBadge({ children, type }) {
  const styles = {
    Regular: "bg-blue-100 text-blue-700",
    New: "bg-purple-100 text-purple-700",
    VIP: "bg-yellow-100 text-yellow-700",
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

function StatusBadge({ children, status }) {
  const styles = {
    Active: "bg-green-100 text-green-700",
    Inactive: "bg-red-100 text-red-700",
    Blocked: "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {children}
    </span>
  );
}