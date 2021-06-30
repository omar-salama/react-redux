import { useRef } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../actions";

const Search = () => {
  const userRef = useRef();
  const dispatch = useDispatch();
  return (
    <div className="Search">
      <div className="row justify-content-center">
        <div className="col-9 col-md-7">
          <div className="input-group">
            <input
              type="search"
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
      </div>
    </div>
  );
};

export default Search;
