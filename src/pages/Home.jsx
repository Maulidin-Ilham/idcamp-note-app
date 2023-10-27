/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Result from "../components/Result";
import NoNote from "../components/NoNote";
import ArchivedNote from "../components/ArchivedNote";

const Home = () => {
  const [note, setNote] = useState([]);
  const [archivedNote, setArchivedNote] = useState([]);

  const getNote = (newNote) => {
    setNote([newNote, ...note]);
  };

  const handleDelete = (id) => {
    const updatedNote = note.filter((item) => item.id !== id);
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

  return (
    <div className="text-white bg-gray-500 min-h-screen">
      <div className="w-full flex flex-col  items-center">
        <Navbar />
        <Form getNote={getNote} />
        <h1 className="text-white text-center text-xl mt-12 font-semibold">
          Catatan Aktif
        </h1>
        {note.length > 0 ? (
          <Result
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
