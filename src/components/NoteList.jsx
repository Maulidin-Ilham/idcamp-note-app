/* eslint-disable no-unused-vars */

import { showFormattedDate } from "../utils";

/* eslint-disable react/prop-types */
const NoteList = ({ note, handleDelete, handleArchive, search }) => {
  const filteredNotes = note.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {filteredNotes.length > 0 ? (
        filteredNotes.map((item) => (
          <div
            className="h-[410px] w-[310px] break-words bg-white mt-10 g-white py-2 px-4 shadow-[5px_7px_0_0_rgba(0,0,0,0.98)] flex flex-col justify-between "
            key={item.id}
          >
            <div className="">
              <h1 className=" text-xl font-bold capitalize">{item.title}</h1>
              <h1 className=" mt-2 text-sm text-gray-700">
                {showFormattedDate(item.createdAt)}
              </h1>
              <h1 className=" mt-4 text-lg  ">{item.body}</h1>
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
        ))
      ) : (
        <h1 className="mt-8 text-white text-lg">Tidak ada hasil</h1>
      )}
    </>
  );
};

export default NoteList;
