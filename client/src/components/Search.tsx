import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../actions";

const Search = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState<string | undefined>(undefined);
  return (
    <div className="Search">
      <div className="row justify-content-center">
        <div className="col-9 col-md-7">
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Find user by name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  dispatch(getUsers(userName));
                }
              }}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button
              className="btn btn-primary ps-4 pe-4"
              onClick={() => dispatch(getUsers(userName))}
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
