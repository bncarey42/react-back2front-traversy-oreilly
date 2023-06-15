import { useRef, useEffect, useState } from "react";

const USeRefExample2 = () => {
  const renders = useRef(1);
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);
  return (
    <div>
      <h1 className="text-3xl">Renders: {renders.current}</h1>
      <h2 className="text-2xl">Previous Name: {prevName.current}</h2>
      <label htmlFor="name" className="font-semibold">
        Name:
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        name="name"
        className="form-control mb-2 border-2 border-gray-500 rounded ml-1 py-2 px-3"
      />
    </div>
  );
};

export default USeRefExample2;
