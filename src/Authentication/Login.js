import React from "react";
import "./Login.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
const Login = () => {
  // acess cookies
  const auth = Cookies.get("userToken");
  // navigation
  const navigate = useNavigate();
  // login information
  const [userInfo, setuserInfo] = useState({ username: "", password: "" });
  // set login information
  let name;
  let value;
  const Set_UserInfo = (event) => {
    name = event.target.name;
    value = event.target.value;
    setuserInfo({ ...userInfo, [name]: value });
  };
  // login request
  const Login_Now = async (e) => {
    e.preventDefault();
    const id = toast.loading("Please wait...");
    const res = await axios.post("/admin", userInfo);
    console.log(res);
    if ((await res).status === 200) {
      toast.update(id, {
        render: res.data.message,
        type: "Success",
        isLoading: false,
        autoClose: 4000,
        closeOnClick: true,
        draggable: true,
      });
      return setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1000);
    }
    else {
      return toast.update(id, {
        render: res.data.message,
        type: "error",
        isLoading: false,
        autoClose: 4000,
        closeOnClick: true,
        draggable: true,
      });
    }
  };
  // go to main
  const gotoEditor = () => {
    navigate("/Editor");
  };
  const goToRecover = () => {
    navigate("/reset_password_now");
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
      {!auth ? (
        <>
          <div id="login-box1">
            <div class="left">
              <h1>Login Now!</h1>
              <form method="post">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={Set_UserInfo}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={Set_UserInfo}
                />
                <div className="forgotpass">
                  <a>
                    <strong onClick={goToRecover}>Recover Password</strong>
                  </a>
                </div>
                <input
                  type="submit"
                  name="signup_submit"
                  value="Login Now"
                  onClick={Login_Now}
                />
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
      ) : (
        <div className="alert alert-danger error_alert" role="alert">
          You are already login.{" "}
          <strong onClick={gotoEditor}>Click here!</strong>
        </div>
      )}
    </>
  );
};

export default Login;
