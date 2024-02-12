import { Outlet, NavLink } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
