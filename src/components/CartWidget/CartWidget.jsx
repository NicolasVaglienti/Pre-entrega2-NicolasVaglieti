import React, { useContext } from "react";
import { CartContext } from "../../providers/cartProvider";
import "./CartWidget.css";

function CartWidget() {
  const { totalCount } = useContext(CartContext);
  return (
    <div style={{ display: "flex" }}>
      <i className="bi bi-cart2"></i>
      <div
        style={{
          color: "white",
          background: "red",
          borderRadius: "50px",
          padding: "1px",
          width: "20px",
          height: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {totalCount}
      </div>
    </div>
  );
}

export default CartWidget;
