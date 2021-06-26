import { useRef } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../actions";

const Search = () => {
  const userRef = useRef();
  const dispatch = useDispatch();
  return (
    <div className="Search">
      <div className="input-group mb-4 w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Find user by name"
          ref={userRef}
        />
        <button
          className="btn btn-primary ps-4 pe-4"
          onClick={() => dispatch(getUsers(userRef.current.value))}
        >
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Search;
