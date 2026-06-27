import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import TopBar from "@/components/TopBar/TopBar";
import NavBar from "@/components/NavBar/NavBar";

export default function MainLayout() {
  return (
    <>
      <TopBar />
      <NavBar/>
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
