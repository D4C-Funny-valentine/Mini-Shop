import Rating from "./Rating";

const CardDescription = ({ item }) => {
  return (
    <>
      <div className=" mx-3 my-4">
        <h6 className="line-clamp-1 text-xl font-semibold mb-2">
          {item.title}
        </h6>
        <p className="line-clamp-2 text-base text-gray-700 font-light tracking-wide">
          {item.description}
        </p>
      </div>
      <div className="mx-3 py-3 flex justify-between">
        <h5 className="font-semibold">$ {item.price}</h5>
        <Rating rating={item.rating} />
      </div>
    </>
  );
};

export default CardDescription;
