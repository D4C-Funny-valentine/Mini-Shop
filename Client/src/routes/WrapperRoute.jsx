import { Route, Routes } from "react-router-dom";
import Error404 from "../components/Error404";
import MainSection from "../screen/MainSection";

const WrapperRoute = () => {
  console.log("rerender the wrapper");
  return (
    <div className="font-mono flex flex-col h-screen">
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default WrapperRoute;