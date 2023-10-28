/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Result from "../components/Result";
import NoNote from "../components/NoNote";
import ArchivedNote from "../components/ArchivedNote";
import toast from "react-hot-toast";

const Home = () => {
  const [note, setNote] = useState([]);
  const [archivedNote, setArchivedNote] = useState([]);
  const [search, setSearch] = useState("");
  const delete_notify = () => toast.success("Note deleted successfully");
  const getNote = (newNote) => {
    setNote([newNote, ...note]);
  };

  const handleDelete = (id) => {
    const updatedNote = note.filter((item) => item.id !== id);
    if (updatedNote) {
      delete_notify();
    }
    setNote(updatedNote);
  };

  const handleArchive = (id) => {
    const noteToArchive = note.find((item) => item.id === id);

    // Remove the note from active notes
    const updatedNote = note.filter((item) => item.id !== id);
    setNote(updatedNote);

    // Add the note to archived notes
    setArchivedNote([noteToArchive, ...archivedNote]);
  };

  const handleUnarchive = (id) => {
    const noteToUnarchive = archivedNote.find((item) => item.id === id);

    const updatedArchivedNotes = archivedNote.filter((item) => item.id !== id);
    setArchivedNote(updatedArchivedNotes);

    setNote([noteToUnarchive, ...note]);
  };

  const getSearch = (query) => {
    setSearch(query);
    console.log(search);
  };

  return (
    <div className="text-white bg-gray-500 min-h-screen">
      <div className="w-full flex flex-col  items-center">
        <Navbar getSearch={getSearch} />

        <Form getNote={getNote} />
        <h1 className="text-white  w-full text-center text-xl mt-12 font-semibold">
          Active Note
        </h1>
        {note.length > 0 ? (
          <Result
            search={search}
            note={note}
            handleDelete={handleDelete}
            handleArchive={handleArchive}
          />
        ) : (
          <NoNote />
        )}
        <h1 className="text-white text-center text-xl mt-12 font-semibold">
          Archive
        </h1>
        {archivedNote.length > 0 ? (
          <ArchivedNote
            archive={archivedNote}
            handleUnarchive={handleUnarchive}
          />
        ) : (
          <NoNote />
        )}
      </div>
    </div>
  );
};

export default Home;
