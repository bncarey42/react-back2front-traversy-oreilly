import useLocalStorage from "../hooks/useLocalStorage";

const CustomHookExample2 = () => {
  const [task, setTask] = useLocalStorage("task", null);
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskObj = {
      task,
      completed: false,
      data: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObj]);
  };
  return (
    <div>
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="task" className="font-semibold">
            Task
          </label>
          <input
            className="form-control mb-2 border-2 border-gray-500 rounded ml-1 py-2 px-3"
            type="text"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="rounded bg-cyan-900 hover:bg-cyan-950 hover:shadow-lg text-white ml-1 py-2 px-3"
        >
          Submit
        </button>
      </form>
      <ul>
        {tasks.map((tsk, i) => (
          <li key={i}>{tsk.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default CustomHookExample2;
