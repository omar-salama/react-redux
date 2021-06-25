import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link activeClassName="active" exact to="/" className="nav-link">Home</Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                  <Link activeClassName="active" to="/register" className="btn btn-primary">Register</Link>
              </ul>
            </div>
          </nav>
        </div>
    );
  }

  export default Navbar;