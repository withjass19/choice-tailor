export default function CategoryBadge({ category }) {
  const styles = {
    Caps: "bg-purple-100 text-purple-700",
    Belts: "bg-blue-100 text-blue-700",
    Badges: "bg-green-100 text-green-700",
    Shoes: "bg-orange-100 text-orange-700",
    "Name Plates": "bg-rose-100 text-rose-700",
    Others: "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        styles[category] || "bg-gray-100 text-gray-700"
      }`}
    >
      {category}
    </span>
  );
}