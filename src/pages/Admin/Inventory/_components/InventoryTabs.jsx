const tabs = ["All Items", "Caps", "Belts", "Badges", "Shoes", "Name Plates", "Others"];

export default function InventoryTabs() {
  return (
    <div className="flex overflow-x-auto border-b px-6">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`shrink-0 px-6 py-4 text-sm font-semibold ${
            index === 0
              ? "border-b-2 border-[#b89b3c] text-[#b08018]"
              : "text-[#061735]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}