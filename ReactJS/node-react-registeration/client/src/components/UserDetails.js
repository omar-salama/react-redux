import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteUser, getUserById, clearDetails } from "../actions";
import Spinner from "./Spinner";
import EditForm from "./EditForm";
const UserDetails = (props) => {
  const _id = props.match.params.id;
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.users.details;
  });
  useEffect(() => {
    dispatch(getUserById(_id));
    dispatch(clearDetails());
  }, [dispatch, _id]);

  const onDelete = () => {
    const ans = window.confirm("Are you sure?");
    if (ans) {
      dispatch(deleteUser(_id));
      props.history.replace("/");
    }
  };

  if (!user) return <Spinner />;
  return (
    <div className="card mt-3">
      <div className="card-body d-flex flex-column-reverse flex-md-row justify-content-evenly">
        <div className="align-self-center text-center text-md-start flex-md-fill m-2 m-md-5">
          <h1 className="card-title">{user.name}</h1>
          <p className="card-text lead">{user.email}</p>
          <EditForm info={user} />
          <button className="btn btn-danger ms-1" onClick={onDelete}>
            Delete
          </button>
        </div>
        <img
          className="rounded-1"
          src="https://via.placeholder.com/250"
          alt="user name"
        />
      </div>
    </div>
  );
};
export default UserDetails;
