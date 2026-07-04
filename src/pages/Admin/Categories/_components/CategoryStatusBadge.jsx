export default function CategoryStatusBadge({ status }) {
  const styles = {
    Active: "bg-green-100 text-green-700",
    Hidden: "bg-red-100 text-red-700",
    Archived: "bg-yellow-100 text-yellow-700",
    Draft: "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}