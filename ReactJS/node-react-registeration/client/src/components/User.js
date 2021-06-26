import { Link } from "react-router-dom";
const User = ({ user }) => {
  return (
    <div className="card mt-3">
      <div className="card-body d-flex justify-content-between">
        <h4 className="card-title align-self-center">{user.name}</h4>
        <Link to={`/user/${user._id}`} className=" w-25">
            <img
              className="rounded-circle w-100 img-thumbnail"
              src="https://via.placeholder.com/250"
              alt="user name"
            />
        </Link>
      </div>
    </div>
  );
};
export default User;
