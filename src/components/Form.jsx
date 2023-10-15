const Form = () => {
  return (
    <div className="mt-8 w-2/3  flex justify-center items-center text-black">
      <form action="" className="flex flex-col space-y-6">
        <input
          type="text"
          placeholder="add title"
          className="w-[450px] px-4 py-2 border-2 border-black"
        />
        <textarea
          name="body"
          id=""
          className="w-[450px] h-[180px] px-4 py-2 resize-none border-2 border-black"
          placeholder="write your note here..."
        ></textarea>
        <button
          type="submit"
          className="bg-white py-2 px-4 shadow-[7px_7px_0_0_rgba(0,0,0,0.98)] hover:bg-gray-300 border-2 border-black"
        >
          Add note
        </button>
      </form>
    </div>
  );
};

export default Form;
