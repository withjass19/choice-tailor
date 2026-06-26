import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ChevronDown } from "lucide-react";

const data = [
  { date: "10 Jun", total: 18, completed: 10 },
  { date: "14 Jun", total: 24, completed: 14 },
  { date: "17 Jun", total: 16, completed: 8 },
  { date: "21 Jun", total: 29, completed: 18 },
  { date: "24 Jun", total: 19, completed: 11 },
  { date: "28 Jun", total: 34, completed: 20 },
  { date: "01 Jul", total: 27, completed: 15 },
  { date: "05 Jul", total: 17, completed: 9 },
  { date: "08 Jul", total: 16, completed: 7 },
  { date: "10 Jul", total: 18, completed: 12 },
];

export default function OrdersOverview() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#061735]">Orders Overview</h2>

        <button className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm">
          10 Jun, 2024 - 10 Jul, 2024
          <ChevronDown size={16} />
        </button>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#061735"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="completed"
              stroke="#c89227"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex justify-center gap-8 text-sm">
        <span className="flex items-center gap-2">
          <span className="h-1 w-6 bg-[#061735]" />
          Total Orders
        </span>
        <span className="flex items-center gap-2">
          <span className="h-1 w-6 bg-[#c89227]" />
          Completed Orders
        </span>
      </div>
    </div>
  );
}