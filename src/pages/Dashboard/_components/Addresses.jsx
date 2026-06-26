import {
  Plus,
  Home,
  Building2,
  MapPin,
  Phone,
  User,
  Pencil,
  Trash2,
  CheckCircle,
  MoreVertical,
  Truck,
  ShieldCheck,
  Clock,
} from "lucide-react";

const addresses = [
  {
    id: 1,
    type: "Home",
    name: "Jaspreet Singh",
    phone: "+91 98765 43210",
    address: "House No. 24, Air Force Station Road",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110001",
    landmark: "Near Main Gate",
    isDefault: true,
    icon: <Home size={22} />,
  },
  {
    id: 2,
    type: "Work",
    name: "Jaspreet Singh",
    phone: "+91 98765 43210",
    address: "Block B, Air Force Camp",
    city: "Chandigarh",
    state: "Punjab",
    pincode: "160003",
    landmark: "Near Admin Office",
    isDefault: false,
    icon: <Building2 size={22} />,
  },
];

const benefits = [
  {
    title: "Fast Delivery",
    desc: "Quick uniform delivery across India",
    icon: <Truck />,
  },
  {
    title: "Secure Address",
    desc: "Your address details stay protected",
    icon: <ShieldCheck />,
  },
  {
    title: "Easy Reorder",
    desc: "Use saved address for future orders",
    icon: <Clock />,
  },
];

export default function Addresses() {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm text-gray-500">
            Home / My Account / Addresses
          </p>

          <h1 className="mt-2 font-serif text-4xl font-bold text-[#061735] lg:text-5xl">
            Saved Addresses
          </h1>

          <p className="mt-2 text-gray-600">
            Manage your delivery addresses for faster checkout.
          </p>
        </div>

        <button className="flex w-fit items-center gap-2 rounded-md bg-[#061735] px-6 py-3 text-sm font-bold text-white">
          <Plus size={18} />
          Add New Address
        </button>
      </div>

      {/* Address Cards */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {addresses.map((item) => (
          <AddressCard key={item.id} item={item} />
        ))}
      </div>

      {/* Delivery Note */}
      <div className="mt-8 rounded-xl border bg-[#f4f8ff] p-6 shadow-sm">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#061735] text-[#d4a52f]">
              <MapPin size={28} />
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-[#061735]">
                Delivery available across India
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Add multiple addresses and choose the right delivery location
                while placing your uniform order.
              </p>
            </div>
          </div>

          <button className="rounded-md border border-[#b89b3c] px-6 py-3 text-sm font-bold text-[#b08018]">
            Check Delivery Area
          </button>
        </div>
      </div>

      {/* Benefits */}
      <div className="mt-8 grid gap-4 rounded-xl border bg-white p-6 shadow-sm md:grid-cols-3">
        {benefits.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4 md:border-r md:last:border-r-0"
          >
            <div className="text-[#b89b3c]">{item.icon}</div>

            <div>
              <h3 className="font-bold text-[#061735]">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function AddressCard({ item }) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f6efe1] text-[#b08018]">
            {item.icon}
          </div>

          <div>
            <div className="flex items-center gap-3">
              <h3 className="font-serif text-2xl font-bold text-[#061735]">
                {item.type}
              </h3>

              {item.isDefault && (
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  Default
                </span>
              )}
            </div>

            <p className="mt-1 text-sm text-gray-500">Delivery Address</p>
          </div>
        </div>

        <button>
          <MoreVertical size={20} />
        </button>
      </div>

      <div className="mt-6 space-y-4 text-sm text-[#061735]">
        <p className="flex gap-3">
          <User size={18} className="shrink-0 text-[#b89b3c]" />
          <span className="font-semibold">{item.name}</span>
        </p>

        <p className="flex gap-3">
          <Phone size={18} className="shrink-0 text-[#b89b3c]" />
          <span>{item.phone}</span>
        </p>

        <p className="flex gap-3 leading-relaxed">
          <MapPin size={18} className="mt-0.5 shrink-0 text-[#b89b3c]" />
          <span>
            {item.address}, {item.city}, {item.state} - {item.pincode}
            <br />
            <span className="text-gray-500">Landmark: {item.landmark}</span>
          </span>
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button className="flex flex-1 items-center justify-center gap-2 rounded-md border border-[#b89b3c] px-4 py-2.5 text-sm font-bold text-[#b08018]">
          <Pencil size={16} />
          Edit
        </button>

        {!item.isDefault && (
          <button className="flex flex-1 items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-bold text-[#061735]">
            <CheckCircle size={16} />
            Set Default
          </button>
        )}

        <button className="flex flex-1 items-center justify-center gap-2 rounded-md border border-red-300 px-4 py-2.5 text-sm font-bold text-red-600">
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
}