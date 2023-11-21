import useFetch from "../hook/useFetch";
import Loader from "../components/Loader";
import Card from "../components/Card";
import Toast from "../components/Toast";

const Home = () => {
  const { products } = useFetch();

  if (products === null) {
    return <Loader />;
  } else
    return (
      <div className="mt-16 pt-20 pb-16">
        <div className="flex flex-wrap justify-center gap-10 container mx-auto">
          {products?.map((item) => (
            <Card {...item} key={item._id} />
          ))}
        </div>
        <Toast/>
      </div>
    );
};

export default Home;
