import { Eye } from "lucide-react";

export default function OrderRow({
  order,
  onViewDetails,
}) {
  const item = order.order_items?.[0];

  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-700",
    confirmed: "bg-blue-100 text-blue-700",
    cutting: "bg-orange-100 text-orange-700",
    stitching: "bg-yellow-100 text-yellow-700",
    quality_check: "bg-purple-100 text-purple-700",
    packed: "bg-indigo-100 text-indigo-700",
    shipped: "bg-blue-100 text-blue-700",
    out_for_delivery: "bg-cyan-100 text-cyan-700",
    delivered: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
  };

  return (
    <tr className="border-b transition hover:bg-gray-50">
      {/* Order */}

      <td className="p-4">
        <h4 className="font-bold text-[#061735]">
          {order.order_number}
        </h4>

        <p className="text-sm text-gray-500">
          {order.order_items?.length || 0} Item
        </p>
      </td>

      {/* Product */}

      <td className="p-4">
        <div className="flex items-center gap-4">
          <img
            src={item?.image}
            alt={item?.product_name}
            className="h-16 w-16 rounded-lg object-contain"
          />

          <div>
            <h4 className="font-semibold">
              {item?.product_name}
            </h4>

            <p className="text-sm text-gray-500">
              {item?.category}
            </p>
          </div>
        </div>
      </td>

      {/* Date */}

      <td className="p-4">
        <p>
          {new Date(order.created_at).toLocaleDateString(
            "en-IN",
            {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }
          )}
        </p>

        <p className="text-sm text-gray-500">
          {new Date(order.created_at).toLocaleTimeString(
            "en-IN",
            {
              hour: "2-digit",
              minute: "2-digit",
            }
          )}
        </p>
      </td>

      {/* Amount */}

      <td className="p-4">
        <p className="font-bold text-[#061735]">
          ₹
          {Number(order.total_amount).toLocaleString(
            "en-IN"
          )}
        </p>

        <p className="text-sm capitalize text-gray-500">
          {order.payment_status}
        </p>
      </td>

      {/* Status */}

      <td className="p-4">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            statusStyles[order.order_status] ||
            "bg-gray-100 text-gray-700"
          }`}
        >
          {order.order_status.replaceAll("_", " ")}
        </span>
      </td>

      {/* Action */}

      <td className="p-4">
        <button
          onClick={() => onViewDetails(order)}
          className="flex items-center gap-2 rounded-lg border border-[#061735] px-4 py-2 text-sm font-medium transition hover:bg-[#061735] hover:text-white"
        >
          <Eye size={16} />
          View Details
        </button>
      </td>
    </tr>
  );
}