import Lottie from "lottie-react";
import FavoriteAnimation from "../animation/FavoriteEmpty.json";
import MenubarHeader from "./MenubarHeader";
import { useSelector } from "react-redux";
import FavoriteCard from "./FavoriteCard";

const FavoriteMenu = () => {
  const { favoriteProducts } = useSelector((state) => state.favorite);

  return (
    <>
      <MenubarHeader
        menubarTitle={"My favorite"}
        productNumbers={favoriteProducts.length}
      />
      <div className="mt-2 mx-2 overflow-scroll">
        {favoriteProducts.length === 0 ? (
          <div className="flex flex-col">
            <div className="">
              <Lottie animationData={FavoriteAnimation} loop={true} />
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex flex-col gap-y-2 mb-3">
              {favoriteProducts.map((item) => (
                <FavoriteCard key={item._id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FavoriteMenu;
