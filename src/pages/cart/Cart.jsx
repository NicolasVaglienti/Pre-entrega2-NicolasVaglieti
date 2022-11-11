import React, { useContext } from "react";
import { CartContext } from "../../providers/cartProvider";
import FlexWrapper from "../../components/Flexwrapper/Flexwrapper";
import UserForm from '../../components/UserForm/UserForm'


export default function Cart() {
  const { productList, removeItem, restQuantity, addItem, getTotalPrice } = useContext(CartContext);

  return (
    <div>
      <>
        <FlexWrapper>
          {productList.map((product) => (
            <div className="card m-2">
              <div className="img">
                <img src={product.image} alt="imagen" />
              </div>
              <h4>{product.name}</h4>
              <h4>${product.price} x unidad</h4>
              <h4>Cantidad: {product.quantity}</h4>
              <div style={{display:"flex", width:"150px", justifyContent:"space-evenly"}}>
                <h4 onClick={() => restQuantity(product)}><i class="bi bi-dash-circle"></i></h4>
                <h4 onClick={() => addItem(product)}><i class="bi bi-plus-circle"></i></h4>
              </div>
              <h4>Precio Total: ${product.quantity * product.price}</h4>

              <button onClick={() => removeItem(product)}>Borrar item</button>
            </div>
          ))}

          {/* <button onClick={() => clearCart()}>Borrar Carrito</button> */}

          <UserForm cart={productList} getTotalPrice={getTotalPrice} />
        </FlexWrapper>
      </>
    </div>
  );
}
