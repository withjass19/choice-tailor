import OrdersOverview from "./_components/OrdersOverview";
import ProductionOverview from "./_components/ProductionOverview";
import RecentOrders from "./_components/RecentOrders";
import StatsCards from "./_components/StatsCards";
import StockAlerts from "./_components/StockAlerts";
import TopProducts from "./_components/TopProduct";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#061735] sm:text-4xl">
          Welcome back, Admin 👋
        </h1>

        <p className="text-sm text-gray-600 sm:text-base">
          Here's what's happening today.
        </p>
      </div>

      <StatsCards/>

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <OrdersOverview/>
        <ProductionOverview/>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <RecentOrders/>
        <TopProducts/>
      </div>

      <StockAlerts/>
    </div>
  );
}