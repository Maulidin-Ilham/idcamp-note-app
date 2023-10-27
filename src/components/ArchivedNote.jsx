import ArchivedList from "./ArchivedList";

/* eslint-disable react/prop-types */
const ArchivedNote = ({ archive, handleUnarchive }) => {
  return (
    <>
      <div className="w-10/12 mt-3 flex flex-row justify-evenly flex-wrap mb-8 ps-6 text-black">
        <ArchivedList archive={archive} handleUnarchive={handleUnarchive} />
      </div>
    </>
  );
};

export default ArchivedNote;
