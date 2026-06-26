import {
  Bell,
  Search,
} from "lucide-react";

export default function AdminNavbar() {
  return (
    <div className="bg-white border-b px-8 py-4">
      <div className="flex items-center justify-between">

        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-3"
          />

          <input
            placeholder="Search orders, customers, products..."
            className="w-[400px] rounded-lg border py-2 pl-10 pr-4"
          />
        </div>

        <div className="flex items-center gap-5">

          <Bell />

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#061735] text-white">
              A
            </div>

            <span className="font-semibold">
              Admin
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}