import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import TopBar from "@/components/TopBar/TopBar";

export default function MainLayout() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
