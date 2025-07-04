import Drawer from "./Drawer";
import Menu from "./Menu";

const Navbar = () => {
  return (
    // px-4 sm:px-6 lg:px-8 shadow-sm border-b
    <nav className="flex justify-between items-center h-16 ">
      <div className="md:hidden">
        <Drawer />
      </div>

      <div className="hidden md:flex items-center text-xl font-bold text-gray-900 cursor-default">
        Library Management System
      </div>

      <div className="invisible md:visible">
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
