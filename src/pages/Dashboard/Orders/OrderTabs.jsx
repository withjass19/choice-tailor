export default function OrderTabs({
  activeStatus,
  setActiveStatus,
  statusCounts,
}) {
  const tabs = [
    { label: "All Orders", value: "all", count: statusCounts.all },
    { label: "Processing", value: "pending", count: statusCounts.pending },
    { label: "Stitching", value: "stitching", count: statusCounts.stitching },
    { label: "Shipped", value: "shipped", count: statusCounts.shipped },
    { label: "Delivered", value: "delivered", count: statusCounts.delivered },
  ];

  return (
    <div className="flex flex-wrap gap-8 border-b px-6">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => setActiveStatus(tab.value)}
          className={`py-4 text-sm font-semibold ${
            activeStatus === tab.value
              ? "border-b-2 border-[#b89b3c] text-[#b89b3c]"
              : "text-[#061735]"
          }`}
        >
          {tab.label} ({tab.count || 0})
        </button>
      ))}
    </div>
  );
}