import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../actions";
const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list)
  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])
  console.log(users)
    return (
      <div className="mt-4">
        UsersList
      </div>
    );
  }
  
  export default UsersList;
  