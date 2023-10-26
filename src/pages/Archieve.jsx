import Navbar from "../components/Navbar";

const Archieve = () => {
  return (
    <div className="text-white bg-gray-500 min-h-screen">
      <div className="w-full flex flex-col  items-center">
        <Navbar />
        <div className="w-10/12  mt-10 flex flex-row justify-evenly flex-wrap mb-8 ps-6 text-black">
          <h1 className="text-white text-xl">Tidak ada arsip</h1>
        </div>
      </div>
    </div>
  );
};

export default Archieve;
