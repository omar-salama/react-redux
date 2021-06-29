import { Link } from "react-router-dom";
const User = ({ user }) => {
  return (
    <div className="card mb-3">
      <div className="card-body d-flex justify-content-between">
        <h4 className="card-title align-self-center">{user.name}</h4>
        <Link to={`/user/${user._id}`} className="w-25 h-25">
            <img
              className="rounded-circle img-thumbnail"
              src={`uploads/${user.avatar}`}
              alt="user name"
            />
        </Link>
      </div>
    </div>
  );
};
export default User;
