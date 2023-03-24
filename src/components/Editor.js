import React from "react";
import "./css/Aditor.css";
import { useState } from "react";
import axios from "axios";
import Authnav from "./Authnav";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Editor = () => {
  const [PostData, setPostData] = useState({
    ProductName: "",
    images: "",
    description: "",
    price: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = toast.loading("Please wait...");
    const formData = new FormData();

    formData.append("ProductName", PostData.ProductName);
    formData.append("description", PostData.description);
    formData.append("price", PostData.price);
    for (let i = 0; i < PostData.images.length; i++) {
      formData.append("images", PostData.images[i]);
    }
    axios
      .post("/createPost", formData)
      .then((res) => {
        console.log(res);
        return toast.update(id, {
          render: res.data.message,
          type: "success",
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
          draggable: true,
        });
      })
      .catch((err) => {
        return toast.update(id, {
          render: "Refresh and try again",
          type: "error",
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
          draggable: true,
        });
      });
  };

  const handleChange = (e) => {
    setPostData({ ...PostData, [e.target.name]: e.target.value });
  };
  const actuallPhotos = [];
  for (const iterator of PostData.images) {
    actuallPhotos.push(iterator.name);
  }

  const handlePhoto = (e) => {
    setPostData({ ...PostData, images: e.target.files });
  };
  let name;
  let value;
  const handleChangeFilter = (e) => {
    name = e.target.name;
    value = e.target.value;
    setPostData({ ...PostData, [name]: value });
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
      <div className="col-md-12" style={{ marginBottom: "100px" }}>
        <div id="product-tab">
          <form onSubmit={handleSubmit} encType="multipart/form-data">



            <input
              type="text"
              placeholder="Product Name"
              className="inputsDatas"
              name="ProductName"
              value={PostData.ProductName}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Description"
              className="inputsDatas"
              name="YoutubeLink"
              value={PostData.description}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Price"
              className="inputsDatas"
              name="YoutubeLink"
              value={PostData.price}
              onChange={handleChange}
            />

            {/* there we will upload files soon inshallah */}

            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              name="images"
              onChange={handlePhoto}
              multiple
            />
            <div className="displayingItems">
              {actuallPhotos.map((data) => {
                return (
                  <>
                    <div className="actualItemsDetails">{data}</div>
                  </>
                );
              })}
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Editor;
