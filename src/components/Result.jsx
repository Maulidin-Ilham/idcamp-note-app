/* eslint-disable react/prop-types */
const Result = ({ note, handleDelete, handleArchive }) => {
  // eslint-disable-next-line no-unused-vars

  return (
    <>
      <div className="w-10/12  mt-10 flex flex-row justify-evenly flex-wrap mb-8 ps-6 text-black">
        {note.map((item) => (
          <div
            className="h-[300px] w-[280px] bg-white mt-10 g-white py-2 px-4 shadow-[5px_7px_0_0_rgba(0,0,0,0.98)] flex flex-col justify-between "
            key={item.id}
          >
            <div>
              <h1 className=" text-xl font-bold capitalize">{item.title}</h1>
              <h1 className=" mt-2 text-sm text-gray-700">{item.createdAt}</h1>
              <h1 className=" mt-4 text-lg">{item.body}</h1>
            </div>
            <div className="flex flex-row justify-between  space-x-4">
              <button className=" w-full" onClick={() => handleDelete(item.id)}>
                <h1 className="text-lg text-red-500 hover:text-red-800 font-bold">
                  Delete
                </h1>
              </button>
              <button className="w-full" onClick={() => handleArchive(item.id)}>
                <h1 className="text-lg text-green-500 hover:text-green-800 font-bold">
                  Archive
                </h1>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Result;
