import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
  return (
    <div className="flex justify-center text-lg">
      <FaSpinner className="animate-spin"></FaSpinner>
      <p className="ml-3"> Loading ...</p>
    </div>
  );
};

export default Spinner;
