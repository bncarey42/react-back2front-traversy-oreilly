import { useState } from "react";
import ToDo from "./ToDo";

const UseRefExample3 = () => {
  const [showToDo, setShowToDo] = useState(true);
  return (
    <>
      {" "}
      <div>{showToDo && <ToDo />}</div>
      <button
        type="submit"
        className="rounded bg-cyan-900 hover:bg-cyan-950 hover:shadow-lg text-white ml-1 py-2 px-3"
        onClick={() => {
          setShowToDo(!showToDo);
        }}
      >
        Toggle ToDo
      </button>
    </>
  );
};

export default UseRefExample3;
