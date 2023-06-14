import RepoItem from "./RepoItem";

interface RepoListProps {
  repos: object[];
}

const RepoList = ({ repos }: RepoListProps) => {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my4-font-bold card-title">Top Repositories</h2>
        {repos.map((repo: object, idx: number) => {
          return <RepoItem key={idx} repo={repo} />;
        })}
      </div>
    </div>
  );
};

export default RepoList;
