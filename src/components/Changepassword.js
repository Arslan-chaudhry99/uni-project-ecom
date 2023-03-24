import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Changepassword = () => {
  const { id, token } = useParams();
  const [Reset, setReset] = useState({
    password: "",
    id: id,
    token: token,
  });

  const setInfor = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setReset({ ...Reset, [name]: value });
  };
  const signup_submit = async (event) => {
    event.preventDefault();
    const ids = toast.loading("Please wait...");
    const { password, id, token } = Reset;
    if (!password || !id || !token) {
      console.log(Reset);
      return toast.update(ids, {
        render: "Please enter password.",
        type: "Success",
        isLoading: false,
        autoClose: 4000,
        closeOnClick: true,
        draggable: true,
      });
    }
    let res = await axios.post("/changePassword", Reset);
    return await toast.update(ids, {
      render: res.data.message,
      type: res.status === 200 ? "success":"error",
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
      <div id="login-box3">
        <div class="left">
          <h3>Enter New Password</h3>
          <form method="post">
            <input
              type="text"
              name="password"
              placeholder="Enter New Password"
              onChange={setInfor}
            />
            <input type="submit" value="Reset Now" onClick={signup_submit} />
          </form>
        </div>
      </div>
    </>
  );
};
export default Changepassword;
