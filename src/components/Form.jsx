/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Form = ({ getNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [archived, setArchiver] = useState(false);
  let today = new Date();
  let max = 50;
  const notify = () => toast.success("Note added successfully");

  const [id, setId] = useState(today.getMilliseconds());
  const [createdAt, setCreatedAt] = useState(Date.now());

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(today.getMilliseconds());

    if ((title !== "") & (body !== "")) {
      const remainingWords = max - body.length;
      if (remainingWords >= 0) {
        const newNote = {
          id,
          title,
          body,
          archived,
          createdAt,
        };
        getNote(newNote);
        setTitle("");
        setBody("");
        notify();
      }
    }
  };

  return (
    <>
      <div className="mt-10 w-2/3  flex justify-center items-center text-black">
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
            className="w-[450px] h-[300px] px-4 py-2 resize-none border-2 border-black"
            placeholder="write your note here..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <div className="flex justify-between items-center">
            <span className="text-black text-base font-medium">
              Remaining words: {max - body.length}
            </span>
            <button
              type="submit"
              className="bg-white py-2 px-4 shadow-[5px_7px_0_0_rgba(0,0,0,0.98)] hover:bg-gray-300 border-2 border-black"
            >
              Add note
            </button>
          </div>
        </form>
        <Toaster />
      </div>
    </>
  );
};

export default Form;
