import React from "react";
import "./css/cart.css"
const Fav = () => {
  return (
    <>
      <div className="container marginIncontainer">
        <div className=" cartContainers">
          <div className="cartImage">
            <img src="./img/product07.png" alt="" style={{ width: "100px" }} />
          </div>
          <div>Samsun S208</div>
          <div className="incrementDataCart">
            <div className="decrementCart btn-info">-</div>
            <div className="cartQuantityValue btn-info">100</div>
            <div className="incrementDataValue btn-info">+</div>
          </div>
          <div className="removeCartList btn-danger ">*</div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Fav;
