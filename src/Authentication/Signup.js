import React from "react";
import "./Signup.css";
import { increment } from "../Action";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Authnav from "../components/Authnav";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Signup = () => {
  // main state

  const [signup, setsignup] = useState({
    username: "",
    email: "",
    password: "",
    conformPassword: "",
  });
  let name;
  let value;
  const Setupsignup = (e) => {
    name = e.target.name;
    value = e.target.value;
    setsignup({ ...signup, [name]: value });
  };
  const signUpUser = async (e) => {
    e.preventDefault();
    const id = toast.loading("Please wait...");
    const { username, email, password, conformPassword } = signup;
    if (!username || !email || !password || !conformPassword) {
      return toast.update(id, {
        render: "Please fill out each and every field",
        type: "error",
        isLoading: false,
        autoClose: 4000,
        closeOnClick: true,
        draggable: true,
      });
    } else if (password !== conformPassword) {
      return toast.update(id, {
        render: "Conform password not the same.",
        type: "error",
        isLoading: false,
        autoClose: 4000,
        closeOnClick: true,
        draggable: true,
      });
    } else {
      try {
        const res = await axios.post("/signup", signup);

        return await toast.update(id, {
          render: res.data.message,
          type: res.status === 201 ? "Success" : "error",
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
          draggable: true,
        });
      } catch (error) { }
    }
  };
  const dispatch = useDispatch();
  const incrementResult = useSelector((state) => state.IncrementData);
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

      <div id="login-box">
        <div class="left">
          <h1>Add New User</h1>
          <div className="userImages">
            <img src="./img/Arslanch.png" alt="" />
          </div>
          <form method="post">
            <input
              type="text"
              name="username"
              onChange={Setupsignup}
              placeholder="Username"
            />
            <input
              type="text"
              name="email"
              onChange={Setupsignup}
              placeholder="E-mail"
            />
            <input
              type="password"
              name="password"
              onChange={Setupsignup}
              placeholder="Password"
            />
            <input
              type="password"
              name="conformPassword"
              onChange={Setupsignup}
              placeholder="Retype password"
            />
            <input type="submit" onClick={signUpUser} value="Add now!" />
          </form>
          <div class="or">OR</div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button class="social-signin facebook">
              <i class="fa fa-facebook"></i>
            </button>
            <button class="social-signin twitter">
              <i class="fa fa-twitter"></i>
            </button>
            <button class="social-signin google">
              <i class="fa fa-google"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
