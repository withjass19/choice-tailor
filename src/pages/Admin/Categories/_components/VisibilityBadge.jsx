import { Eye, EyeOff } from "lucide-react";

export default function VisibilityBadge({ visible }) {
  if (visible === "Visible") {
    return (
      <span className="flex w-fit items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
        <Eye size={14} />
        Visible
      </span>
    );
  }

  return (
    <span className="flex w-fit items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-xs text-red-600">
      <EyeOff size={14} />
      Hidden
    </span>
  );
}
