import { useEffect, useMemo, useRef, useState } from "react";

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  //   const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  }, []);

  const handleclick = () => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="w-25 form-control mb-2 border-2 border-gray-500 rounded ml-1 py-2 px-3"
      />
      <h2 className="my-3 text-2xl">
        The square root of {number} is {sqrt}
      </h2>
      <button
        type="button"
        className="rounded bg-cyan-900 hover:bg-cyan-950 hover:shadow-lg text-white ml-1 py-2 px-3"
        onClick={handleclick}
      >
        ReRender
      </button>
      <h3 className="text-xl">{renders.current}</h3>
    </div>
  );
};

function getSqrt(num: number) {
  for (let i = 0; i < 10000; i++) {
    console.log(i);
  }
  console.warn("Expensive Function called");
  return Math.sqrt(num);
}

export default UseMemoExample;
