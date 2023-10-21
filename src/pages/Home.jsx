import Form from "../components/Form";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="text-white bg-gray-500 min-h-screen">
      <div className="w-full flex flex-col  items-center">
        <Navbar />
        <Form />
      </div>
    </div>
  );
};

export default Home;
