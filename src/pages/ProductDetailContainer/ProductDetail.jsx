import "./ProductDetail.css";
import Button from "../../components/Button/Button";

function ProductDetail({ image, title , price , description }) {
  return (
    <div className="container d-flex shadow p-3 mb-5 bg-body rounded">
      <div className="img">
        <img src={image} alt="imagen" />
      </div>
      <div className="c-detail d-flex flex-column align-items-center">
        <div className="c-content">
          <h2>
            {title} 
          </h2>
          <p>{description}</p>
          <h4>${price}</h4>
        </div>
        <div className="c-button m-auto ">
          <Button title="🛒" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

// category
// ,
// description
// ,id
// ,
// image
// ,
// price
// ,
// rating
// ,
// count,
// rate,
// title,
