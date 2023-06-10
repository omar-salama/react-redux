import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteUser, getUserById, clearDetails } from "../actions";
import { IRootState } from "../store";

import Spinner from "./Spinner";
import EditForm from "./EditForm";
import { IUser } from "../types";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector<IRootState, IUser | undefined>((state) => state.users.details);

  useEffect(() => {
    id && dispatch(getUserById(id));
    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, id]);

  const onDelete = async () => {
    const ans = window.confirm("Are you sure?");
    if (ans && id) {
      (await dispatch(deleteUser(id)));
      navigate("/", { replace: true });
    }
  };

  if (!user) return <Spinner />;
  return (
    user && (
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
    )
  );
};
export default UserDetails;
