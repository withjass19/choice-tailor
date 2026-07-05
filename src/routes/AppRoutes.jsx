import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import AdminLayout from "@/layouts/AdminLayout";
import ProtectedRoute from "@/routes/ProtectedRoute";
import AdminRoute from "@/routes/AdminRoute";

const Home = lazy(() => import("@/pages/Home/Home"));
const Shop = lazy(() => import("@/pages/Shop/Shop"));
const About = lazy(() => import("@/pages/About/About"));
const ProductDetails = lazy(() => import("@/pages/Product/ProductDetails/ProductDetails"));
const MeasurementGuide = lazy(() => import("@/pages/MeasurementGuide/MeasurementGuide"));
const LoginPage = lazy(() => import("@/pages/Login/Login"));
const Registeration = lazy(() => import("@/pages/Registration/Registration"));
const Dashboard = lazy(() => import("@/pages/Dashboard/Dashboard"));
const DashboardLayout = lazy(() => import("@/pages/Dashboard/DashboardLayout"));
const ProfileSettings = lazy(() => import("@/pages/Dashboard/_components/ProfileSettings"));
const AdminDashboard = lazy(() => import("@/pages/Admin/Dashboard/Dashboard"));
const AdminOrders = lazy(() => import("@/pages/Admin/Orders/Orders"));
const AdminMeasurements = lazy(() => import("@/pages/Admin/Measurments/Measurments"));
const AdminProducts = lazy(() => import("@/pages/Admin/Products/Products"));
const CreateProduct = lazy(() => import("@/pages/Admin/Products/CreateProduct"));
const Customers = lazy(() => import("@/pages/Admin/Customers/Customers"));
const Categories = lazy(() => import("@/pages/Admin/Categories/Categories"));
const Contact = lazy(() => import("@/pages/Contact/Contact"));
const EditProduct = lazy(() => import("@/pages/Admin/Products/EditProduct"));
const ViewProduct = lazy(() => import("@/pages/Admin/Products/ViewProduct"));
const Addresses = lazy(() => import("@/pages/Dashboard/Addresses/Addresses"));
const MeasurementProfiles = lazy(() => import("@/pages/Dashboard/MeasurementProfiles/MeasurementProfiles"));
const Orders = lazy(() => import("@/pages/Dashboard/Orders/Orders"));

export default function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/measurement-guide" element={<MeasurementGuide />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="measurements" element={<MeasurementProfiles />} />
            <Route path="orders" element={<Orders />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="profile" element={<ProfileSettings />} />
          </Route>
        </Route>

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="measurements" element={<AdminMeasurements />} />

          <Route path="products">
            <Route index element={<AdminProducts />} />
            <Route path="add-new-product" element={<CreateProduct />} />
            <Route path=":id/edit" element={<EditProduct />} />
            <Route path=":id/view" element={<ViewProduct />} />
          </Route>

          <Route path="customers" element={<Customers />} />
          <Route path="categories" element={<Categories />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<Registeration />} />
      </Routes>
    </Suspense>
  );
}
