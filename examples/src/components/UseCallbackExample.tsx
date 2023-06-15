import React, { useState, useCallback } from "react";

const UseCallbackExample = () => {
  const [tasks, setTasks] = useState([]);
  const addTasks = useCallback(() => {
    setTasks((prevState) => [...prevState, "SomeTask"]);
  }, [setTasks]);

  return (
    <div>
      <Button addTasks={addTasks} />
      <ul>
        {tasks.map((task, i) => {
          return <li key={i}> {task}</li>;
        })}
      </ul>
    </div>
  );
};

interface BtnProp {
  addTasks: () => void;
}
const Button = React.memo(({ addTasks }: BtnProp) => {
  console.log("button Rendered");
  return (
    <div>
      <button
        type="button"
        className="rounded bg-cyan-900 hover:bg-cyan-950 hover:shadow-lg text-white ml-1 py-2 px-3"
        onClick={addTasks}
      >
        Add Task
      </button>
    </div>
  );
});

export default UseCallbackExample;
