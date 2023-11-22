import { Drawer } from "@mantine/core";
import OrderMenu from "./OrderMenu";
import FavoriteMenu from "./FavoriteMenu";

const Menubar = ({ opened, close, whichMenuOpen }) => {
  return (
    <Drawer
      opened={opened}
      onClose={close}
      overlayProps={{ opacity: 0.6, blur: 3 }}
      position="right"
      title={"Choose Products"}
      closeButtonProps={{ size: "md", color: "dark" }}
      size={"lg"}
    >
      {whichMenuOpen === "order" ? <OrderMenu /> : <FavoriteMenu />}
    </Drawer>
  );
};

export default Menubar;
