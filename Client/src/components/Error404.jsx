import Lottie from "lottie-react";
import ErrorAnimation from "../animation/404Animation.json";

const Error404 = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-[40%] object-contain">
        <Lottie animationData={ErrorAnimation} loop={true} />
      </div>
      <p className="text-lg font-semibold text-red-600">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
    </div>
  );
};

export default Error404;
