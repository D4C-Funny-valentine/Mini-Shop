import { Header } from "@mantine/core";

const MenubarHeader = ({ menubarTitle, productNumbers }) => {
  return (
    <Header className="border-b flex justify-between mx-2 bg-white sticky top-12 py-2 z-10">
      <h3 className="text-3xl font-semibold">{menubarTitle}</h3>
      <h4 className="text-xl font-semibold">{productNumbers}</h4>
    </Header>
  );
};

export default MenubarHeader;
