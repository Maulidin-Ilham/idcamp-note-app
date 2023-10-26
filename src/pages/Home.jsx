/* eslint-disable no-unused-vars */
import { useState } from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Result from "../components/Result";
import NoNote from "../components/NoNote";

const Home = () => {
  const [note, setNote] = useState([]);

  const getNote = (newNote) => {
    setNote([newNote, ...note]);
  };

  const handleDelete = (id) => {
    const updatedNote = note.filter((item) => item.id !== id);
    setNote(updatedNote);
  };

  return (
    <div className="text-white bg-gray-500 min-h-screen">
      <div className="w-full flex flex-col  items-center">
        <Navbar />
        <Form getNote={getNote} />
        {note.length > 0 ? (
          <Result note={note} handleDelete={handleDelete} />
        ) : (
          <NoNote />
        )}
      </div>
    </div>
  );
};

export default Home;
