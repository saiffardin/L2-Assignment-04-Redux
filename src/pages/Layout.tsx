import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 bg-slate-700 text-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
