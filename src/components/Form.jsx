const Form = () => {
  return (
    <div className="mt-8">
      <form action="" className="flex space-x-6 justify-center">
        <input
          type="text"
          placeholder="Add notes"
          className="w-2/3 px-4 py-2   text-black bg-gray-100 border-black border-[3px]"
        />
        <button
          type="submit"
          className="text-black bg-white border-black border-[3px] px-4 hover:bg-gray-200"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
