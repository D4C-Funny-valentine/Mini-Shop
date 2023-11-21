import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Rating = ({ rating }) => {
  return (
    <div className="flex space-x-2 items-center">
      {rating.rate > 3.5 ? (
        <BsStarFill size={20} color="yellow" />
      ) : (
        <BsStarHalf size={20} color="yellow" />
      )}
      <h6 className="font-semibold">{rating.rate}</h6>
      <h6 className="text-sm text-gray-700">Reviews({rating.review})</h6>
    </div>
  );
};

export default Rating;
