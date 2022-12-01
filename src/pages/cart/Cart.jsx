import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../providers/cartProvider";
import FlexWrapper from "../../components/Flexwrapper/Flexwrapper";
import UserForm from '../../components/UserForm/UserForm'
import ItemCount from '../../components/ItemCount/ItemCount'


export default function Cart() {
  const navigate = useNavigate();
  const { productList, removeItem, restQuantity, addItem, getTotalPrice, clearCart, totalCount } = useContext(CartContext);

  if(!totalCount) {
    return (
      <FlexWrapper>
        <button onClick={() => navigate('/')}>Volver al inicio</button>
      </FlexWrapper>
)
  }

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
              <ItemCount product={product} restQuantity={restQuantity} addItem={addItem}/>
              <button onClick={() => removeItem(product)}>Borrar item</button>
            </div>
          ))}

          <button onClick={() => clearCart()}>Borrar Carrito</button>

          <UserForm cart={productList} getTotalPrice={getTotalPrice} />
        </FlexWrapper>
      </>
    </div>
  );
}
