import { Pencil, MoreVertical } from "lucide-react";
import StockBadge from "./StockBadge";
import CategoryBadge from "./CategoryBadge";

export default function ItemRow({ item }) {
  return (
    <tr className="border-b last:border-b-0">
      <td className="px-5 py-4">
        <div className="flex items-center gap-4">
          <img
            src={item.image}
            alt={item.name}
            className="h-14 w-14 rounded-md object-contain"
          />

          <div>
            <p className="font-semibold text-[#061735]">{item.name}</p>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </div>
        </div>
      </td>

      <td className="px-5 py-4 font-semibold">{item.sku}</td>

      <td className="px-5 py-4">
        <CategoryBadge category={item.category} />
      </td>

      <td className="px-5 py-4">{item.supplier}</td>

      <td className="px-5 py-4">
        <p className="font-semibold text-[#061735]">{item.stock}</p>
        <StockBadge status={item.status} />
      </td>

      <td className="px-5 py-4 font-semibold">{item.unitCost}</td>

      <td className="px-5 py-4 font-semibold">{item.totalValue}</td>

      <td className="px-5 py-4">
        <p>{item.date}</p>
        <p className="text-xs text-gray-500">{item.time}</p>
      </td>

      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <button className="rounded-lg border p-2 hover:bg-gray-50">
            <Pencil size={17} />
          </button>

          <button>
            <MoreVertical size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}