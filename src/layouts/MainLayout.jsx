import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import TopBar from "@/components/TopBar/TopBar";


export default function MainLayout() {
  return (
    <>
      <TopBar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
