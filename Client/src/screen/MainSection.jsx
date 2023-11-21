import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Detail from "./Detail";
import Search from "./Search";
import Menubar from "../components/Menubar";
import Footer from "../components/Footer";
import { useDisclosure } from "@mantine/hooks";
import Error404 from "../components/Error404";
import { useState } from "react";

const MainSection = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [whichMenuOpen, setWhichMenuOpen] = useState('order');

  return (
    <div className="">
      <Navbar
        open={open}
        whichMenuOpen={whichMenuOpen}
        setWhichMenuOpen={setWhichMenuOpen}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Menubar opened={opened} close={close} whichMenuOpen={whichMenuOpen} />
      <Footer />
    </div>
  );
};

export default MainSection;
