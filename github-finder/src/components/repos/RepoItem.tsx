import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

interface RepoItemProp {
  repo: object;
}

const RepoItem = ({ repo }: RepoItemProp) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;
  return (
    <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url} target="_blank" rel="noreferrer">
            <FaLink className="inline mr-1" />
            {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div>
          <div className="mr-2 badge badge-lg badge-info">
            {" "}
            <FaEye className="mr-2" />
            {watchers_count}
          </div>
          <div className="mr-2 badge badge-lg badge-success">
            {" "}
            <FaStar className="mr-2" />
            {stargazers_count}
          </div>
          <div className="mr-2 badge badge-lg badge-error">
            {" "}
            <FaInfo className="mr-2" />
            {open_issues}
          </div>
          <div className="mr-2 badge badge-lg badge-warn">
            {" "}
            <FaUtensils className="mr-2" />
            {forks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
