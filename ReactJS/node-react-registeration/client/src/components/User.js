import { Link } from "react-router-dom";
const User = ({ user }) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.email}</p>
        {/* <Link className="w-25" to={`/users/${user.id}`}>
                    <img className="w-100 rounded-circle"
                        src={`/images/${user.image}`} alt={user.name} />
                </Link> */}
      </div>
    </div>
  );
};
export default User;
