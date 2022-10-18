import "./Item.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Item({ category, id, image, price, title }) {
  return (
    <div className="card shadow mb-5 bg-body rounded">
      <div className="card-img">
        <img src={image} alt="imagen" />
      </div>
      <div className="card-detail d-flex row">
        <div className="card-content col-6">
          <h2>
            {title} - {category}
          </h2>
          <h4>${price}</h4>
        </div>
        <div className="card-button m-auto col-6">
          <Link to={`/product/${id}`}>
            <Button title="Detalles" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
