const Navbar = () => {
  return (
    <>
      <div className="w-2/3  flex justify-between p-4">
        <div className="flex flex-row space-x-10 items-end justify-center ">
          <a href="/" className="hover:text-gray-300">
            <h1 className="text-xl font-semibold cursor-pointer">Home</h1>
          </a>
        </div>
        <div className="flex justify-center items-end">
          <input
            type="text"
            placeholder="Search here..."
            className="px-3 py-2 w-[260px] border-2 border-black text-black"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
