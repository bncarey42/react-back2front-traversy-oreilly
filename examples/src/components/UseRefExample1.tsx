import { useRef } from "react";

const UseRefExample1 = () => {
  const inputRef = useRef();
  const paraRef = useRef();

  const formSubmit = (e) => {
    e.preventDefault();
    inputRef.current.style.backgroundColor = "red";
    paraRef.current.innerText = inputRef.current.value;
    inputRef.current.value = "red";
  };
  return (
    <div>
      <h1 className="text-3xl">Use Ref</h1>
      <form onSubmit={formSubmit}>
        <label htmlFor="name">Name</label>
        <input
          ref={inputRef}
          onFocus={() => {
            inputRef.current.style.backgroundColor = null;
          }}
          className="form-control mb-2 border-2 border-gray-500 rounded ml-1 py-2 px-3"
          type="text"
          id="name"
        />
        <button
          type="submit"
          className="rounded bg-cyan-900 hover:bg-cyan-950 hover:shadow-lg text-white ml-1 py-2 px-3"
        >
          Submit
        </button>
      </form>
      <p
        ref={paraRef}
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        hellow
      </p>
    </div>
  );
};

export default UseRefExample1;
