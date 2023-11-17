import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
const Navigation = () => {
  return (
    <>
      <nav className="flex gap-10">
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#ffffff" : "#3470FF",
            backgroundColor: isActive ? "#3470FF" : "",
            boxShadow: isActive ? "0px 4px 4px 0px rgba(0,0,0,0.75)" : "",
          })}
          to="/"
          className={css.nav_link}>
          Home
        </NavLink>

        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#ffffff" : "#3470FF",
            backgroundColor: isActive ? "#3470FF" : "",
            boxShadow: isActive ? "0px 4px 4px 0px rgba(0,0,0,0.75)" : "",
          })}
          to="/catalog"
          className={css.nav_link}>
          Catalog
        </NavLink>

        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#ffffff" : "#3470FF",
            backgroundColor: isActive ? "#3470FF" : "",
            boxShadow: isActive ? "0px 4px 4px 0px rgba(0,0,0,0.75)" : "",
          })}
          to="/favorite"
          className={css.nav_link}>
          Favorite
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
