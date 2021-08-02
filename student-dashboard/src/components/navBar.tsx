import { Link } from "react-router-dom";
import useDynamicLabel from "../hooks/useDynamicLabel";
import Style from "../styles/components.module.css";

const NavBar = () => {
  const { pageLabel, changePageLabel } = useDynamicLabel();
  return (
    <header>
      <nav className={Style["nav-bar"]}>
        <label className={Style["nav-text"]}>{pageLabel}</label>
        <ul>
          <li>
            <Link
              onClick={() => changePageLabel("Home")}
              className={Style["nav-links"]}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => changePageLabel("Dashboard")}
              className={Style["nav-links"]}
              to="/dashboard"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              onClick={() => changePageLabel("Management")}
              className={Style["nav-links"]}
              to="/management"
            >
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
