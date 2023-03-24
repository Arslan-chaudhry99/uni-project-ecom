import React from "react";
import { useState } from "react";
import axios from "axios";
import Authnav from "./Authnav";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Resetpassword = () => {
  const [Reset, setReset] = useState({
    Old: "",
    New: "",
    ReNew: "",
    username: "",
  });
  const setInfor = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setReset({ ...Reset, [name]: value });
  };
  const signup_submit = async (event) => {
    event.preventDefault();
    const id = toast.loading("Please wait...");
    const { New, ReNew, Old, username } = Reset;
    if (New !== ReNew) {
      return toast.update(id, {
        render: "Password and confirm password does not match",
        type: "error",
        isLoading: false,
        autoClose: 4000,
        closeOnClick: true,
        draggable: true,
      });
    }

    let res = await axios.post("/ResetPassword", { New, Old, username });

    return await toast.update(id, {
      render: res.data.message,
      type: res.status === 200 ? "success" : "error",
      isLoading: false,
      autoClose: 4000,
      closeOnClick: true,
      draggable: true,
    });
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        limit={1}
      />
      <Authnav />

      <div id="login-box1">
        <div class="left">
          <h1>Reset Password</h1>
          <form method="post">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={setInfor}
            />
            <input
              type="text"
              name="Old"
              placeholder="Old Password"
              onChange={setInfor}
            />

            <input
              type="text"
              name="New"
              placeholder="New Password"
              onChange={setInfor}
            />
            <input
              type="text"
              name="ReNew"
              placeholder="Retype Password"
              onChange={setInfor}
            />
            <input type="submit" onClick={signup_submit} value="Reset Now!" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Resetpassword;
