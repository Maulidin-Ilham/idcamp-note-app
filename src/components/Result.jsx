/* eslint-disable react/prop-types */
const Result = ({ note }) => {
  return (
    <>
      <div className="w-10/12  mt-20 flex flex-row justify-evenly flex-wrap mb-8 ps-6 text-black">
        {note.map((item, index) => (
          <div
            className="h-[300px] w-[280px] bg-white mt-4 g-white py-2 px-4 shadow-[5px_7px_0_0_rgba(0,0,0,0.98)] flex flex-col justify-between"
            key={index}
          >
            <div>
              <h1 className="text-center text-xl font-bold">{item.title}</h1>
              <h1 className="text-lg mt-4">{item.body}</h1>
            </div>
            <div className="flex flex-row justify-between  space-x-4">
              <button className="hover:bg-gray-300 w-full">
                <h1 className="text-lg">Delete</h1>
              </button>
              <button className="hover:bg-gray-300 w-full">
                <h1 className="text-lg">Archive</h1>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Result;
