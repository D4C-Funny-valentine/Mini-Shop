import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Detail from "./Detail";
import Search from "./Search";
import Footer from "../components/Footer";
import Error404 from "../components/Error404";

const MainSection = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainSection;
