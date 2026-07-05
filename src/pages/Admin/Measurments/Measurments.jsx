import {
  Search,
  Filter,
  Download,
  Plus,
  Calendar,
  ChevronDown,
  MoreVertical,
  ClipboardCheck,
  CheckCircle,
  Clock,
  ShieldAlert,
  Star,
  UserRound,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

const stats = [
  {
    title: "Total Profiles",
    value: "256",
    change: "18.6%",
    trend: "up",
    icon: ClipboardCheck,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    title: "Pending Review",
    value: "12",
    change: "7.3%",
    trend: "down",
    icon: Clock,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "Approved",
    value: "210",
    change: "21.4%",
    trend: "up",
    icon: CheckCircle,
    bg: "bg-orange-100",
    color: "text-orange-600",
  },
  {
    title: "Requested Update",
    value: "8",
    change: "3.1%",
    trend: "down",
    icon: ShieldAlert,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "Rejected",
    value: "4",
    change: "1.2%",
    trend: "down",
    icon: Star,
    bg: "bg-red-100",
    color: "text-red-600",
  },
  {
    title: "Used in Orders",
    value: "186",
    change: "20.7%",
    trend: "up",
    icon: UserRound,
    bg: "bg-cyan-100",
    color: "text-cyan-600",
  },
];

const measurements = [
  {
    id: "PF1023",
    initials: "JS",
    customer: "Jaspreet Singh",
    phone: "98765 43210",
    profile: "Summer Uniform",
    tag: "Default",
    uniform: "IAF Working Dress",
    type: "Shirt & Trouser",
    summary: ["Chest: 40\"", "Waist: 34\"", "Height: 175 cm", "Shoulder: 18\"", "Hip: 40\"", "Weight: 70 kg"],
    status: "Approved",
    created: "10 Jun, 2024",
    time: "10:15 AM",
    order: "#CT1025",
    orderDate: "10 Jun, 2024",
    action: "View",
  },
  {
    id: "PF1022",
    initials: "AM",
    customer: "Arjun Mehta",
    phone: "98765 12345",
    profile: "Winter Uniform",
    tag: "Default",
    uniform: "IAF No. 3 Dress",
    type: "Coat, Shirt, Trouser",
    summary: ["Chest: 42\"", "Waist: 36\"", "Height: 178 cm", "Shoulder: 19\"", "Hip: 41\"", "Weight: 72 kg"],
    status: "Pending Review",
    created: "09 Jun, 2024",
    time: "02:00 PM",
    order: "-",
    orderDate: "",
    action: "Review",
  },
  {
    id: "PF1021",
    initials: "RC",
    customer: "Rohit Chauhan",
    phone: "98765 67890",
    profile: "Flying Suit Profile",
    tag: "Default",
    uniform: "IAF Flying Suit",
    type: "",
    summary: ["Chest: 41\"", "Waist: 35\"", "Height: 174 cm", "Shoulder: 18.5\"", "Hip: 39.5\"", "Weight: 68 kg"],
    status: "Approved",
    created: "08 Jun, 2024",
    time: "11:30 AM",
    order: "#CT1023",
    orderDate: "08 Jun, 2024",
    action: "View",
  },
  {
    id: "PF1020",
    initials: "VR",
    customer: "Vikram Rawat",
    phone: "98765 11223",
    profile: "Ceremonial Profile",
    tag: "v1",
    uniform: "Ceremonial Uniform",
    type: "Coat, Shirt, Trouser",
    summary: ["Chest: 43\"", "Waist: 37\"", "Height: 180 cm", "Shoulder: 19.5\"", "Hip: 42\"", "Weight: 75 kg"],
    status: "Requested Update",
    created: "08 Jun, 2024",
    time: "10:45 AM",
    order: "#CT1022",
    orderDate: "08 Jun, 2024",
    action: "View",
  },
  {
    id: "PF1019",
    initials: "MK",
    customer: "Manoj Kumar",
    phone: "98765 44556",
    profile: "Default Profile",
    tag: "",
    uniform: "White Parade Belt",
    type: "Accessory",
    summary: ["Waist: 34\"", "Length: 110 cm", "-", "-", "-", "-"],
    status: "Approved",
    created: "07 Jun, 2024",
    time: "04:20 PM",
    order: "#CT1021",
    orderDate: "07 Jun, 2024",
    action: "View",
  },
  {
    id: "PF1018",
    initials: "SY",
    customer: "Sandeep Yadav",
    phone: "98765 77889",
    profile: "Summer Uniform",
    tag: "v2",
    uniform: "IAF Working Dress",
    type: "Shirt & Trouser",
    summary: ["Chest: 39\"", "Waist: 33\"", "Height: 173 cm", "Shoulder: 17.5\"", "Hip: 38.5\"", "Weight: 66 kg"],
    status: "Pending Review",
    created: "06 Jun, 2024",
    time: "03:40 PM",
    order: "-",
    orderDate: "",
    action: "Review",
  },
  {
    id: "PF1017",
    initials: "AV",
    customer: "Amit Verma",
    phone: "98766 33445",
    profile: "Winter Uniform",
    tag: "Default",
    uniform: "IAF No. 3 Dress",
    type: "Coat, Shirt, Trouser",
    summary: ["Chest: 44\"", "Waist: 38\"", "Height: 177 cm", "Shoulder: 19\"", "Hip: 42\"", "Weight: 74 kg"],
    status: "Approved",
    created: "05 Jun, 2024",
    time: "12:10 PM",
    order: "#CT1019",
    orderDate: "05 Jun, 2024",
    action: "View",
  },
  {
    id: "PF1016",
    initials: "DS",
    customer: "Deepak Singh",
    phone: "98765 66778",
    profile: "Flying Suit Profile",
    tag: "",
    uniform: "IAF Flying Suit",
    type: "",
    summary: ["Chest: 42\"", "Waist: 36\"", "Height: 176 cm", "Shoulder: 18.5\"", "Hip: 41\"", "Weight: 71 kg"],
    status: "Rejected",
    created: "04 Jun, 2024",
    time: "11:25 AM",
    order: "-",
    orderDate: "",
    action: "View",
  },
];

export default function AdminMeasurements() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-gray-500">Dashboard › Measurements</p>
          <h1 className="mt-3 text-3xl font-bold text-[#061735]">Measurements</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage and review all customer measurement profiles.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <button className="flex items-center gap-2 rounded-lg border bg-white px-5 py-3 text-sm font-semibold">
            <Download size={17} />
            Export Measurements
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-[#061735] px-5 py-3 text-sm font-semibold text-white">
            <Plus size={17} />
            Add Measurement
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {stats.map((item) => {
          const Icon = item.icon;
          const isUp = item.trend === "up";

          return (
            <div key={item.title} className="rounded-xl border bg-white p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${item.bg} ${item.color}`}>
                  <Icon size={24} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#061735]">{item.title}</p>
                  <h3 className="mt-1 font-serif text-3xl font-bold text-[#061735]">{item.value}</h3>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-1 text-sm">
                {isUp ? (
                  <ArrowUp size={16} className="text-green-600" />
                ) : (
                  <ArrowDown size={16} className="text-red-600" />
                )}
                <span className={isUp ? "text-green-600" : "text-red-600"}>{item.change}</span>
                <span className="text-gray-500">from last 30 days</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[1.5fr_0.7fr_0.7fr_0.7fr_1.1fr_auto]">
        <div className="relative">
          <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#061735]" />
          <input
            placeholder="Search by customer name, profile name, phone..."
            className="w-full rounded-lg border bg-white px-4 py-3 pr-11 text-sm outline-none"
          />
        </div>

        <SelectBox label="All Status" />
        <SelectBox label="All Uniform Types" />
        <SelectBox label="All Gender" />

        <button className="flex items-center justify-center gap-2 rounded-lg border bg-white px-4 py-3 text-sm">
          <Calendar size={17} />
          10 Jun, 2024 - 10 Jul, 2024
          <ChevronDown size={16} />
        </button>

        <button className="flex items-center justify-center gap-2 rounded-lg border bg-white px-5 py-3 text-sm font-semibold md:col-span-2 xl:col-span-1">
          <Filter size={17} />
          Filter
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1250px] text-sm">
            <thead>
              <tr className="border-b bg-gray-50 text-left text-xs uppercase text-[#061735]">
                <th className="px-5 py-4">Profile ID</th>
                <th className="px-5 py-4">Customer</th>
                <th className="px-5 py-4">Profile Name</th>
                <th className="px-5 py-4">Uniform Type</th>
                <th className="px-5 py-4">Measurements Summary</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Created On</th>
                <th className="px-5 py-4">Used In Order</th>
                <th className="px-5 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {measurements.map((item) => (
                <tr key={item.id} className="border-b last:border-b-0">
                  <td className="px-5 py-4 font-bold">{item.id}</td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#061735] text-xs font-bold text-white">
                        {item.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-[#061735]">{item.customer}</p>
                        <p className="text-xs text-gray-500">{item.phone}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <p className="font-semibold text-[#061735]">{item.profile}</p>
                    {item.tag && (
                      <span className="mt-1 inline-flex rounded bg-gray-100 px-2 py-0.5 text-[11px] text-gray-600">
                        {item.tag}
                      </span>
                    )}
                  </td>

                  <td className="px-5 py-4">
                    <p className="font-semibold text-[#061735]">{item.uniform}</p>
                    {item.type && <p className="text-xs text-gray-500">({item.type})</p>}
                  </td>

                  <td className="px-5 py-4">
                    <div className="grid grid-cols-3 gap-x-5 gap-y-2 text-xs text-[#061735]">
                      {item.summary.map((value, index) => (
                        <span key={index}>{value}</span>
                      ))}
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <StatusBadge type={item.status}>{item.status}</StatusBadge>
                  </td>

                  <td className="px-5 py-4">
                    <p>{item.created}</p>
                    <p className="text-xs text-gray-500">{item.time}</p>
                  </td>

                  <td className="px-5 py-4">
                    <p className="font-bold text-[#061735]">{item.order}</p>
                    {item.orderDate && <p className="text-xs text-gray-500">({item.orderDate})</p>}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <button className="rounded-lg border px-4 py-2 text-sm font-semibold">
                        {item.action}
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

        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">Showing 1 to 10 of 256 profiles</p>

          <div className="flex items-center gap-2">
            <button className="rounded-lg border px-4 py-2 text-sm">10 per page</button>
            <button className="h-9 w-9 rounded-lg border">‹</button>
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
            <button className="h-9 w-9 rounded-lg border">26</button>
            <button className="h-9 w-9 rounded-lg border">›</button>
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
    Approved: "bg-green-100 text-green-700",
    "Pending Review": "bg-orange-100 text-orange-700",
    "Requested Update": "bg-blue-100 text-blue-700",
    Rejected: "bg-red-100 text-red-700",
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