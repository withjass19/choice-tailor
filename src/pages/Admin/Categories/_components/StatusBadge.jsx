export default function StatusBadge({ status }) {
  return (
    <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
      {status}
    </span>
  );
}
