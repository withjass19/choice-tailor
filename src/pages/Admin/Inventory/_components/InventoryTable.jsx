import {
  CapModel,
  BeltModel,
  BadgeModel,
  ShoesModel,
  namePlate,
} from "@/assets/images";
import ItemRow from "./ItemRow";

const items = [
  {
    name: "IAF Peaked Cap",
    desc: "With Badge",
    sku: "INV-CAP-001",
    category: "Caps",
    supplier: "Uniform Supplies Co.",
    stock: 28,
    status: "In Stock",
    unitCost: "₹350.00",
    totalValue: "₹9,800.00",
    date: "10 Jun, 2024",
    time: "11:20 AM",
    image: CapModel,
  },
  {
    name: "IAF Blue Beret",
    desc: "Wool Blend",
    sku: "INV-CAP-002",
    category: "Caps",
    supplier: "Defense Wear India",
    stock: 12,
    status: "Low Stock",
    unitCost: "₹280.00",
    totalValue: "₹3,360.00",
    date: "09 Jun, 2024",
    time: "04:15 PM",
    image: CapModel,
  },
  {
    name: "Parade Belt",
    desc: "With Brass Buckle",
    sku: "INV-BELT-001",
    category: "Belts",
    supplier: "Shivam Textiles",
    stock: 35,
    status: "In Stock",
    unitCost: "₹220.00",
    totalValue: "₹7,700.00",
    date: "10 Jun, 2024",
    time: "09:30 AM",
    image: BeltModel,
  },
  {
    name: "Leather Duty Belt",
    desc: "Black Leather",
    sku: "INV-BELT-002",
    category: "Belts",
    supplier: "Leather Craft India",
    stock: 8,
    status: "Low Stock",
    unitCost: "₹450.00",
    totalValue: "₹3,600.00",
    date: "08 Jun, 2024",
    time: "02:45 PM",
    image: BeltModel,
  },
  {
    name: "IAF Wings Badge",
    desc: "Metal",
    sku: "INV-BADGE-001",
    category: "Badges",
    supplier: "Excel Badges",
    stock: 50,
    status: "In Stock",
    unitCost: "₹95.00",
    totalValue: "₹4,750.00",
    date: "10 Jun, 2024",
    time: "10:10 AM",
    image: BadgeModel,
  },
  {
    name: "Rank Stars (Set of 2)",
    desc: "Metal",
    sku: "INV-BADGE-002",
    category: "Badges",
    supplier: "Excel Badges",
    stock: 0,
    status: "Out of Stock",
    unitCost: "₹60.00",
    totalValue: "₹0.00",
    date: "07 Jun, 2024",
    time: "01:20 PM",
    image: BadgeModel,
  },
  {
    name: "Parade Shoes",
    desc: "High Shine",
    sku: "INV-SHOE-001",
    category: "Shoes",
    supplier: "Foot Gear India",
    stock: 15,
    status: "Low Stock",
    unitCost: "₹1,250.00",
    totalValue: "₹18,750.00",
    date: "09 Jun, 2024",
    time: "05:50 PM",
    image: ShoesModel,
  },
  {
    name: "Tactical Boots",
    desc: "Black",
    sku: "INV-SHOE-002",
    category: "Shoes",
    supplier: "Foot Gear India",
    stock: 20,
    status: "In Stock",
    unitCost: "₹1,650.00",
    totalValue: "₹33,000.00",
    date: "10 Jun, 2024",
    time: "12:05 PM",
    image: ShoesModel,
  },
  {
    name: "Metal Name Plate",
    desc: "With Pin",
    sku: "INV-PLATE-001",
    category: "Name Plates",
    supplier: "Name Plates India",
    stock: 5,
    status: "Low Stock",
    unitCost: "₹120.00",
    totalValue: "₹600.00",
    date: "08 Jun, 2024",
    time: "11:15 AM",
    image: namePlate,
  },
  {
    name: "Black Socks",
    desc: "Cotton Blend",
    sku: "INV-OTH-001",
    category: "Others",
    supplier: "Comfort Wear",
    stock: 0,
    status: "Out of Stock",
    unitCost: "₹45.00",
    totalValue: "₹0.00",
    date: "07 Jun, 2024",
    time: "03:40 PM",
    image: ShoesModel,
  },
];

export default function InventoryTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1100px] text-sm">
        <thead>
          <tr className="border-b bg-gray-50 text-left text-xs uppercase text-[#061735]">
            <th className="px-5 py-4">Item</th>
            <th className="px-5 py-4">SKU</th>
            <th className="px-5 py-4">Category</th>
            <th className="px-5 py-4">Supplier</th>
            <th className="px-5 py-4">Stock</th>
            <th className="px-5 py-4">Unit Cost</th>
            <th className="px-5 py-4">Total Value</th>
            <th className="px-5 py-4">Last Updated</th>
            <th className="px-5 py-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <ItemRow key={item.sku} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}