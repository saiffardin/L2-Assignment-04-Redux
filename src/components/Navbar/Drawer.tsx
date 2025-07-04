import { useState } from "react";
import { Drawer as DrawerAntD } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Menu from "./Menu";

const Drawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuOutlined
        style={{
          fontSize: 32,
        }}
        onClick={showDrawer}
        className="hover:bg-gray-200 p-2 rounded-md"
      />

      <DrawerAntD
        title="Library Management System"
        placement={"right"}
        onClose={onClose}
        open={open}
      >
        <Menu mode="vertical" />
      </DrawerAntD>
    </>
  );
};

export default Drawer;
