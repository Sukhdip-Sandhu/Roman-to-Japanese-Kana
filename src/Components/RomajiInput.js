const RomajiInput = ({ handleOnChange }) => {
  return (
    <div>
      <div className="">
        <textarea
          className="w-full text-lg text-gray-900 font-bold rounded-md shadow-lg resize-none py-2 px-4 sm:h-56 h-44"
          autoFocus
          name="Roman"
          placeholder="Roman"
          cols="1"
          rows="1"
          onChange={handleOnChange}
        ></textarea>
      </div>
    </div>
  );
};

export default RomajiInput;
