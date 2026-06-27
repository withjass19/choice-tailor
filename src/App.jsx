import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";
import ProductDetails from "./pages/Product/ProductDetails/ProductDetails";
import MeasurementGuide from "./pages/MeasurementGuide/MeasurementGuide";
import LoginPage from "./pages/Login/Login";
import Registeration from "./pages/Registration/Registration";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import MeasurementProfiles from "./pages/Dashboard/MeasurementProfile/MeasurementProfile";
import Orders from "./pages/Dashboard/_components/Orders";
import Addresses from "./pages/Dashboard/_components/Addresses";
import ProfileSettings from "./pages/Dashboard/_components/ProfileSettings";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/Admin/Dashboard/Dashboard";
import AdminOrders from "./pages/Admin/Orders/Orders";
import AdminMeasurements from "./pages/Admin/Measurments/Measurments";
import AdminProducts from "./pages/Admin/Products/Products";
import CreateProduct from "./pages/Admin/Products/CreateProduct";
import Customers from "./pages/Admin/Customers/Customers";
import Categories from "./pages/Admin/Categories/Categories";
import Inventory from "./pages/Admin/Inventory/Inventory";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";
// import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={
          <MainLayout />
        }>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact/>} /> */}
        
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/track-order" element={<TrackOrder />} /> */}
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/measurement-guide" element={<MeasurementGuide />} />
        {/* <Route path="/dashboard" element={<Dashboard/>}/> */}

        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
          }>
          <Route index element={<Dashboard />} />
          <Route path="measurements" element={<MeasurementProfiles />} />
          <Route path="orders" element={<Orders />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="profile" element={<ProfileSettings />} />
        </Route>
      </Route>

      <Route path="/admin" element={
        <AdminRoute>
          <AdminLayout />
        </AdminRoute>
        }>
        <Route index element={<AdminDashboard />} />

        <Route path="orders" element={<AdminOrders/>} />

        <Route path="measurements" element={<AdminMeasurements/>} />

        <Route path="products" >
          <Route index element={<AdminProducts />}/>
          <Route path="add-new-product" element={<CreateProduct/>} />
        </Route>

        <Route path="customers" element={<Customers />} />

        <Route path="categories" element={<Categories />} />

        <Route path="inventory" element={<Inventory />} />

        {/* <Route path="reports" element={<Reports />} /> */}

        {/* <Route path="settings" element={<Settings />} /> */}
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<Registeration />} />
    </Routes>
  );
}
