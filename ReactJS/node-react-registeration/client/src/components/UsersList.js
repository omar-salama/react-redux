import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../actions";
import User from "./User";
import Spinner from "./Spinner";
const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  if (!users) {
    return <Spinner />;
  }
  return (
    <div className="mt-4">
      {users.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </div>
  );
};

export default UsersList;
