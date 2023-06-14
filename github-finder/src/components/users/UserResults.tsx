import { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

const UserResults = () => {
  const { users, loading } = useContext(GithubContext);

  return loading ? (
    <h3>
      <Spinner />
    </h3>
  ) : (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user) => (
        <UserItem
          key={user.id}
          login={user.login}
          avatar_url={user.avatar_url}
        />
      ))}
    </div>
  );
};

export default UserResults;
