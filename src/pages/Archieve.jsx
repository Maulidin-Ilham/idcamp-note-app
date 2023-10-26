import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

const Archieve = () => {
  const location = useLocation();

  const { archivedNote } = location.state || { archivedNote: [] };

  return (
    <div className="text-white bg-gray-500 min-h-screen">
      <div className="w-full flex flex-col  items-center">
        <Navbar />

        <div className="w-10/12  mt-10 flex flex-row justify-evenly flex-wrap mb-8 ps-6 text-black">
          {archivedNote.map((item) => (
            <div
              key={item.id}
              className="h-[300px] w-[280px] bg-white mt-10 g-white py-2 px-4 shadow-[5px_7px_0_0_rgba(0,0,0,0.98)] flex flex-col justify-between "
            >
              <div>
                <h1 className=" text-xl font-bold capitalize">{item.title}</h1>
                <h1 className=" mt-2 text-sm text-gray-700">
                  {item.createdAt}
                </h1>
                <h1 className=" mt-4 text-lg">{item.body}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Archieve;
{
  /* <h1 className="text-white text-xl">Tidak ada arsip</h1>; */
}
