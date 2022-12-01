import { useContext, useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Button from "../../components/Button/Button";
import ItemCount from "../../components/ItemCount/ItemCount";
import { CartContext } from '../../providers/cartProvider';
import "./ProductDetail.css";

function ProductDetail({ item }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null)
  const { addItem, restQuantity, isInCart, productList } = useContext(CartContext)

  useEffect(() => {
    setProduct(isInCart(item.id))
  }, [productList])
  

  return (
    <div className="container d-flex shadow p-3 mb-5 bg-body rounded">
      <div className="img">
        <img src={item.image} alt="imagen" />
      </div>
      <div className="c-detail d-flex flex-column align-items-center">
        <div className="c-content">
          <h2>
            {item.title} 
          </h2>
          <p>{item.description}</p>
          <h4>${item.price}</h4>
        </div>
        {product && <ItemCount product={product} restQuantity={restQuantity} addItem={addItem}/>}
        <div className="c-button m-auto " onClick={() => addItem({...item, id}, 1)}>
          <Button title="🛒" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
