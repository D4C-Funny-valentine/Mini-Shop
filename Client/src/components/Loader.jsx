import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <Oval
        height="45"
        width="45"
        radius="9"
        color="blue"
        ariaLabel="loading"
        wrapperStyle
        strokeWidth={3}
        secondaryColor="lightblue"
      />
    </div>
  );
};

export default Loader;
