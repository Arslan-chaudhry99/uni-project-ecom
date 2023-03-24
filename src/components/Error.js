import React from "react";
import img from "./images/error.png";
const Error = () => {
  return (
    <>
    <div style={{width:"100%",height:"100vh" ,display:"flex" , justifyContent:"center",alignItems:"center"
}}>
      <img src={img} alt="img" />
      </div>
    </>
  );
};

export default Error;
