import { PATHS } from "@/constants/paths";
import { BookOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();

  console.log("path:", location.pathname);

  const menuItems = [
    {
      key: PATHS.HOME,
      icon: <BookOutlined />,
      label: <Link to={PATHS.HOME}>All Books</Link>,
    },
    {
      key: `/${PATHS.BORROWED_BOOK_SUMMARY}`,
      icon: <UnorderedListOutlined />,
      label: <Link to={PATHS.BORROWED_BOOK_SUMMARY}>Borrow Summary</Link>,
    },
  ];

  return (
    <nav className="container flex justify-between mx-auto items-center px-4 sm:px-6 lg:px-8 h-16 bg-white shadow-sm border-b ">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold text-gray-900">
          Library Management System
        </Link>
      </div>

      <Menu
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={menuItems}
        className="border-none bg-transparent"
      />
    </nav>
  );
};

export default Navbar;
