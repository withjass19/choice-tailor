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
        <h1 className="text-4xl font-bold text-[#061735]">
          Welcome back, Admin 👋
        </h1>

        <p className="text-gray-600">
          Here's what's happening today.
        </p>
      </div>

      <StatsCards/>

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <OrdersOverview/>
        <ProductionOverview/>
      </div>

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <RecentOrders/>
        <TopProducts/>
      </div>

      <StockAlerts/>
    </div>
  );
}