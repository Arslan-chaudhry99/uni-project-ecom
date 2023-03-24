import React from "react";
import "./css/cart.css";
const Cart = () => {
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

      {/* <div className="container cartCheckoutSection" style={{marginBottom:"20px"}}>
        <div style={{float:"right",marginRight:"5%",display:"flex", alignItems:"center",flexDirection:"column"}} >
          <dir>
            <strong>Delivery Charges: </strong>100$
          </dir>
          <dir>
            <strong>Shipping Charges: </strong>100$
          </dir>
          <dir>
            <strong>Products Price: </strong>100$
          </dir>
          <dir>
            <strong>Total Price:</strong> 300$
          </dir>
          <button className="btn-warning">Check Out</button>
        </div>
      </div> */}
    </>
  );
};

export default Cart;
