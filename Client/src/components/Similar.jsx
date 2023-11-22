import { Loader } from "@mantine/core";
import useFetch from "../hook/useFetch";
import "./components.css";
import { Link } from "react-router-dom";

const Similar = ({ category }) => {
  const { products } = useFetch();

  const similarProducts = products?.filter((item) =>
    item.category.includes(category[0])
  );

  if (similarProducts === undefined) {
    return (
      <div className="flex justify-center items-center">
        <Loader size={"md"} />
      </div>
    );
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="">
      <div className="flex mb-3 justify-center md:justify-start lg:justify-start">
        <div className="px-3 py-2 rounded-full shadow flex space-x-2 items-center">
          <h5 className="text-lg font-semibold">Similar Products</h5>
          <span className="font-semibold text-lg text-blue-600">
            {similarProducts?.length}
          </span>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center md:justify-start lg:justify-start flex-wrap gap-4 md:gap-6 lg:gap-8 overflow-scroll md:h-[67vh] lg:h-[70vh] scroll-hide">
          {similarProducts?.map((item) => (
            <div
              className="rounded-xl shadow-md md:overflow-hidden lg:overflow-hidden"
              key={item._id}
            >
              <Link to={`/detail/${item._id}`} onClick={scrollToTop}>
                <img
                  src={item.backdrop_image}
                  alt=""
                  className="object-contain max-w-[240px]"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Similar;
