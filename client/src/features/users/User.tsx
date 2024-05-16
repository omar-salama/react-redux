import { Link } from "react-router-dom";
import { IUser } from "../../types";

const User = ({ user }: { user: IUser }) => {
  return (
    <div className="User">
      <Link to={`/user/${user._id}`}>
        <div className="card mb-4 ps-3 ">
          <div className="card-body d-flex justify-content-between">
            <p className="card-title display-5 align-self-center">
              {user.name}
            </p>
            <div>
              <img
                className="img-thumbnail"
                src={`uploads/${user.avatar}`}
                alt={user.name}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default User;
