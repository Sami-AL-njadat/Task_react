import { Outlet, NavLink } from "react-router-dom";
import "./style.css"
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" activeClassName="active">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Registrition
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
