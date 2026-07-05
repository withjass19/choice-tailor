import { cn } from "@/lib/utils";

const STATUS_STYLES = {
  active: "bg-green-100 text-green-700",
  verified: "bg-green-100 text-green-700",
  paid: "bg-green-100 text-green-700",
  shipped: "bg-green-100 text-green-700",
  delivered: "bg-green-100 text-green-700",
  confirmed: "bg-blue-100 text-blue-700",
  pending: "bg-orange-100 text-orange-700",
  cutting: "bg-orange-100 text-orange-700",
  stitching: "bg-orange-100 text-orange-700",
  "out of stock": "bg-red-100 text-red-700",
  failed: "bg-red-100 text-red-700",
  refunded: "bg-red-100 text-red-700",
  cancelled: "bg-red-100 text-red-700",
  inactive: "bg-red-100 text-red-700",
  hidden: "bg-red-100 text-red-700",
  archived: "bg-yellow-100 text-yellow-700",
  draft: "bg-gray-100 text-gray-700",
  blocked: "bg-gray-100 text-gray-700",
  default: "bg-gray-100 text-gray-700",
};

export default function StatusBadge({
  children,
  status,
  type,
  className,
  ...props
}) {
  const rawValue = status ?? type ?? children ?? "";
  const value = String(rawValue).trim();
  const normalized = value.toLowerCase();
  const tone = STATUS_STYLES[normalized] || STATUS_STYLES.default;

  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-xs font-semibold",
        tone,
        className
      )}
      {...props}
    >
      {(children ?? value) || "-"}
    </span>
  );
}
