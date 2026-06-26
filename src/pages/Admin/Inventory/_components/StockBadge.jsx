export default function StockBadge({ status }) {
  const styles = {
    "In Stock": "text-green-700",
    "Low Stock": "text-orange-600",
    "Out of Stock": "text-red-600",
  };

  return (
    <span className={`text-xs font-semibold ${styles[status] || "text-gray-600"}`}>
      {status}
    </span>
  );
}