import {
  ShoppingBag,
  Ruler,
  Truck,
  Heart,
} from "lucide-react";

const actions = [
  {
    title: "Order Uniform",
    icon: <ShoppingBag />,
  },
  {
    title: "Create Measurement",
    icon: <Ruler />,
  },
  {
    title: "Track Order",
    icon: <Truck />,
  },
  {
    title: "Wishlist",
    icon: <Heart />,
  },
];

export default function QuickActions() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

      {actions.map((item)=>(
        <button
          key={item.title}
          className="bg-white border rounded-xl p-5 flex items-center gap-4 hover:border-[#b89b3c]"
        >
          {item.icon}
          <span>{item.title}</span>
        </button>
      ))}

    </div>
  );
}