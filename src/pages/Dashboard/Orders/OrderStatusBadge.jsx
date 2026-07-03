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

export default function OrderStatusBadge({ status }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        statusStyles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status?.replaceAll("_", " ") || "pending"}
    </span>
  );
}