import { Link } from "react-router-dom";

interface UserItemProps {
  login: string;
  avatar_url: string;
}

const UserItem = ({ login, avatar_url }: UserItemProps) => {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div className="avatar">
          <div className="rounded-full shadow w-14 h-14">
            <img src={avatar_url} alt="Profile Image" />
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`/user/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
