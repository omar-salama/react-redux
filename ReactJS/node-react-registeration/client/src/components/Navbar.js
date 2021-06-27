import { useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { showModal } from "../actions";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                exact
                to="/"
                className="nav-link"
              >
                Home
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <Link
              className="btn btn-primary"
              onClick={() => {
                dispatch(showModal());
              }}
            >
              Register
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
