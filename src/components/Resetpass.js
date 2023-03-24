import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Resetpass = () => {
  const [Reset, setReset] = useState({
    email: "",
  });
  const setInfor = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setReset({ ...Reset, [name]: value });
  };
  const signup_submit = async (event) => {
    event.preventDefault();
    const id = toast.loading("Please wait...");
    const { email } = Reset;
    if (!email) {
      return toast.update(id, {
        render: "Please Enter the email.",
        type: "error",
        isLoading: false,
        autoClose: 4000,
        closeOnClick: true,
        draggable: true,
      });
    }
    let res = await axios.post("/sendpasswordlink", Reset);
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
      <div id="login-box2">
        <div class="left">
          <h1>Reset Password</h1>
          <form method="post">
            <input
              type="text"
              name="email"
              placeholder="Example@gmail.com"
              onChange={setInfor}
            />
            <input type="submit" onClick={signup_submit} value="Send" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Resetpass;
