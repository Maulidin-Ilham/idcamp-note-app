import NoteList from "./NoteList";

/* eslint-disable react/prop-types */
const Result = ({ note, handleDelete, handleArchive }) => {
  // eslint-disable-next-line no-unused-vars

  return (
    <>
      <div className="w-10/12 mt-3 flex flex-row justify-evenly flex-wrap mb-8 ps-6 text-black">
        <NoteList
          note={note}
          handleArchive={handleArchive}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default Result;
