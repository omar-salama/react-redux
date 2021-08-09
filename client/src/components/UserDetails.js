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
  return user && (
    <div className="UserDetails">
      <div className="card mt-3">
        <div className="card-body d-flex flex-column-reverse flex-md-row justify-content-evenly">
          <div className="align-self-center text-center text-md-start flex-md-fill m-2 m-md-5">
            <p className="card-title display-3">{user.name}</p>
            <p className="card-text display-6 mb-4">{user.email}</p>
            <EditForm info={user} />
            <button className="btn btn-danger ms-2" onClick={onDelete}>
              Delete
            </button>
          </div>
          <img
            className="rounded-1"
            src={`../uploads/${user.avatar}`}
            alt={user.name}
          />
        </div>
      </div>
    </div>
  );
};
export default UserDetails;
