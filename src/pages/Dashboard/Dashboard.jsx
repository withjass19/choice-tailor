import DashboardBanner from "./_components/DashboardBanner";
import StatsCards from "./_components/StatsCards";
// import MeasurementProfiles from "./_components/MeasurmentProfiles";
import MeasurementProfiles from "./MeasurementProfiles/MeasurementProfiles";
// import RecentOrders from "./_components/RecentOrders";
import RecentOrders from "./Orders/Orders";
import QuickActions from "./_components/QuickActions";

export default function Dashboard() {
  return (
    <>
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500">
        Home / My Account / Dashboard
      </p>

      <h1 className="mt-3 text-4xl lg:text-5xl font-serif font-bold text-[#061735]">
        My Account
      </h1>

      <p className="mt-2 text-gray-600">
        Manage your orders, measurements and profile
      </p>

      <div className="mt-8 space-y-6">
        <DashboardBanner />

        <StatsCards />

        <div className="grid gap-6 xl:grid-cols-2">
          <MeasurementProfiles />
          <RecentOrders />
        </div>

        <QuickActions />
      </div>
    </>
  );
}