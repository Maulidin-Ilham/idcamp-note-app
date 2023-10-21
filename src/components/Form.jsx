/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

const Form = ({ getNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      title,
      body,
    };

    getNote(newNote);

    setTitle("");
    setBody("");
  };

  return (
    <div className="mt-8 w-2/3  flex justify-center items-center text-black">
      <form
        action=""
        className="flex flex-col space-y-6 "
        onSubmit={handleSubmit}
      >
        <input
          name="title"
          type="text"
          placeholder="add title"
          className="w-[450px] px-4 py-2 border-2 border-black font-"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="body"
          id=""
          className="w-[450px] h-[180px] px-4 py-2 resize-none border-2 border-black"
          placeholder="write your note here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-white py-2 px-4 shadow-[5px_7px_0_0_rgba(0,0,0,0.98)] hover:bg-gray-300 border-2 border-black"
        >
          Add note
        </button>
      </form>
    </div>
  );
};

export default Form;
