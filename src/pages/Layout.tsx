import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="bg-gray-100">
      <div className="container min-h-screen flex flex-col mx-auto">
        <Navbar />

        <main className="flex-1 ">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
