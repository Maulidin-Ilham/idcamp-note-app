const Navbar = () => {
  return (
    <>
      <div className="w-2/3  flex justify-between p-4 ">
        <div className="flex flex-row space-x-10 items-end justify-center ">
          <h1 className="text-xl font-semibold cursor-pointer ">Logo</h1>
          <h1 className="text-xl font-semibold cursor-pointer">Archieve</h1>
        </div>
        <div className="flex justify-center items-center">
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
