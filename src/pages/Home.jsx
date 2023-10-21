/* eslint-disable no-unused-vars */
import { useState } from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Result from "../components/Result";

const Home = () => {
  const [note, setNote] = useState([]);

  const getNote = (newNote) => {
    setNote([...note, newNote]);
  };

  return (
    <div className="text-white bg-gray-500 min-h-screen">
      <div className="w-full flex flex-col  items-center">
        <Navbar />
        <Form getNote={getNote} />
        {note.length > 0 ? <Result note={note} /> : null}
      </div>
    </div>
  );
};

export default Home;
