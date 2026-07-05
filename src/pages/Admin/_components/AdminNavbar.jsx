import { Bell, Search } from "lucide-react";

export default function AdminNavbar() {
  return (
    <div className="sticky top-0 z-20 border-b bg-white/95 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-[400px]">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" />

          <input
            placeholder="Search orders, customers, products..."
            className="w-full rounded-lg border py-2 pl-10 pr-4 text-sm"
          />
        </div>

        <div className="flex items-center justify-between gap-4 md:justify-end">
          <Bell className="shrink-0" />

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#061735] text-sm font-semibold text-white">
              A
            </div>

            <span className="text-sm font-semibold">Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
}