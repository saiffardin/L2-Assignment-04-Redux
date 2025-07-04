import { Menu as MenuAntD } from "antd";
import { BookOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { PATHS } from "@/constants/paths";
import { Link, useLocation } from "react-router";

interface Props {
  mode?: "horizontal" | "inline" | "vertical";
}

const Menu = ({ mode = "horizontal" }: Props) => {
  const location = useLocation();

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
    <MenuAntD
      mode={mode}
      selectedKeys={[location.pathname]}
      items={menuItems}
      className="border-none bg-transparent"
    />
  );
};

export default Menu;
