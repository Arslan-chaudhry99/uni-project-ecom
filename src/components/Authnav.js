import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";
const Authnav = () => {
  const navigate = useNavigate();
  const logout = async () => {
    let res = await axios.post("/logout");
    if ((await res.status) === 200) {
      navigate("/");
    }
  };
  return (
    <>
      <ul className="nav" style={{ display: "flex", flexWrap: "wrap" }}>
        <li className="nav-item">
          <NavLink to="/Editor">
            <a className="nav-link active">Create Post</a>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Resetpassword">
            <a className="nav-link active">Reset Password</a>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup">
            <a className="nav-link active">Add User</a>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/">
            <a className="nav-link active">Home</a>
          </NavLink>
        </li>
        <li className="nav-item" onClick={logout}>
          <a className="nav-link active">
            <span>Logout</span>
            <i class="fa fa-sign-out" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Authnav;
