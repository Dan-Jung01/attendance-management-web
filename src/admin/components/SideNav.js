import { useAuthContext } from "providers/AuthProvider";
import React from "react";
import { NavLink } from "react-router-dom";
import "../css/sideNav.css";

const SideNav = () => {
  const { logout } = useAuthContext();
  return (
    <div>
      <div className="side-container">
        <div className="menu">
          <NavLink to={"/"} className="link" style={({ isActive }) => ({ color: isActive ? "organge" : null })}>
            <div>Current Status</div>
          </NavLink>

          <NavLink
            to={"/admin-work"}
            className="link"
            style={({ isActive }) => ({ color: isActive ? "organge" : null })}
          >
            <div>Work History</div>
          </NavLink>

          <NavLink
            to={"/admin-leave"}
            className="link"
            style={({ isActive }) => ({ color: isActive ? "organge" : null })}
          >
            <div>Leave History</div>
          </NavLink>

          <NavLink
            to={"/admin-users"}
            className="link"
            style={({ isActive }) => ({ color: isActive ? "organge" : null })}
          >
            <div>User Management</div>
          </NavLink>

          <NavLink
            to={"/admin-register"}
            className="link"
            style={({ isActive }) => ({ color: isActive ? "organge" : null })}
          >
            <div>Add User</div>
          </NavLink>
          <NavLink to={"/admin-register"} className="link">
            <div onClick={() => logout(() => console.log("Logged out succesfully"))}>Logout</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
