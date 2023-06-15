import useFetch from "../hooks/useFetch";

function CustomHookExample() {
  const { data, loading, err } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );
  console.log(data, loading, err);
  return loading ? (
    <h3 className="text-xl">Loading...</h3>
  ) : (
    <div>
      {data.map((post, i) => (
        <h3 key={i}>post.title</h3>
      ))}
    </div>
  );
}

export default CustomHookExample;
