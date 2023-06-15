import { useEffect, useRef, useState } from "react";

const ToDo = () => {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});

  const isMounted = useRef(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setTodo(data);
            setLoading(false);
          }
        }, 10000);
      });
    //Runs when component is unmounted
    return () => {
      isMounted.current = false;
    };
  }, []);
  return loading ? (
    <h3 className="text-xl">LOADING ...</h3>
  ) : (
    <h1 className="text-4xl">{todo.title}</h1>
  );
};

export default ToDo;
