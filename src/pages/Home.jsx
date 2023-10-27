/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Result from "../components/Result";
import NoNote from "../components/NoNote";

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
    console.log(`id ${id} dimasukkan ke archive`);
  };

  return (
    <div className="text-white bg-gray-500 min-h-screen">
      <div className="w-full flex flex-col  items-center">
        <Navbar />
        <Form getNote={getNote} />
        {note.length > 0 ? (
          <Result
            note={note}
            handleDelete={handleDelete}
            handleArchive={handleArchive}
          />
        ) : (
          <NoNote />
        )}
      </div>
    </div>
  );
};

export default Home;
