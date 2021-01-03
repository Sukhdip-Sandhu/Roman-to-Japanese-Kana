const CopyToClipBoardButton = (props) => {
  return (
    <button
      className="w-full py-1 mt-2 sm:mt-4 font-light shadow rounded-full 
      border-2 border-blue-600 text-white bg-blue-600
      hover:shadow-lg
      focus:outline-none active:bg-blue-700 active:border-blue-700
      "
      // className="focus:outline-none focus:border-blue-600 hover:bg-blue-600 hover:text-white transition duration-500 ease-out"

      // className="font-light shadow w-full border-blue-600 border-2 rounded-full py-1 mt-2 sm:mt-4 focus:outline-none focus:border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-500 ease-out"
      onClick={props.handleOnClick}
    >
      Copy to clipboard
    </button>
  );
};

export default CopyToClipBoardButton;
