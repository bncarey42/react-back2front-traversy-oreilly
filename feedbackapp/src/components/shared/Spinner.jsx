import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyItems: "center",
      }}
    >
      <FaSpinner className="fa-spin" />
      <p style={{ marginLeft: "1rem" }}>LOADING ...</p>
    </div>
  );
};

export default Spinner;
