import useFetch from "../hook/useFetch";
import Loader from "../components/Loader";
import Card from "../components/Card";
import Toast from "../components/Toast";
import PhoneSizeHeader from "../components/PhoneSizeHeader";

const Home = () => {
  const { products } = useFetch();

  if (products === null) {
    return <Loader />;
  } else
    return (
      <div className="mt-16 pb-5 pt-0 sm:pb-5 sm:pt-0 md:py-16 lg:py-16 relative">
        <PhoneSizeHeader />
        <div className="flex flex-wrap justify-center gap-10 container mx-auto">
          {products?.map((item) => (
            <Card {...item} key={item._id} />
          ))}
        </div>
        <Toast />
      </div>
    );
};

export default Home;
