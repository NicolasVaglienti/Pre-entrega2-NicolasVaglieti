import React from "react";

const ItemCount = ({ product, restQuantity, addItem }) => {
  const totalPrice = () => product.quantity * product.price;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          width: "150px",
          justifyContent: "space-evenly",
        }}
      >
        <h4 onClick={() => restQuantity(product)}>
          <i class="bi bi-dash-circle"></i>
        </h4>
        <h4>{product.quantity}</h4>
        <h4 onClick={() => addItem(product)}>
          <i class="bi bi-plus-circle"></i>
        </h4>
      </div>
      <h4>Precio Total: ${totalPrice().toFixed(2)}</h4>
    </div>
  );
};

export default ItemCount;
