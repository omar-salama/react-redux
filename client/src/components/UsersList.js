import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../actions";
import User from "./User";
import Spinner from "./Spinner";
const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (!users) return <Spinner />;

  if (users.length === 0)
    return <h3 className="text-center">No Users Found</h3>;
    
  return (
    <div className="mt-4">
      {users.map((user) => {
        return <User user={user} key={user._id} />;
      })}
    </div>
  );
};

export default UsersList;
