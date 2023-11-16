import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="w-[1200px] px-8 mx-auto my-0">
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "rgb(79, 70, 229)" : "white",
          })}
          to="/"
          className="text-sm font-semibold leading-6 text-gray-900">
          Home
        </NavLink>

        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "rgb(79, 70, 229)" : "white",
          })}
          to="/catalog"
          className="text-sm font-semibold leading-6 text-gray-900">
          Catalog
        </NavLink>

        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "rgb(79, 70, 229)" : "white",
          })}
          to="/favorite"
          className="text-sm font-semibold leading-6 text-gray-900">
          Favorite
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
