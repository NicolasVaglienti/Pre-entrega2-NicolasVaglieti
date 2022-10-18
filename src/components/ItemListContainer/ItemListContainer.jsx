import { useEffect, useState } from "react";
import Item from "../Item/Item";
import FlexWrapper from "../Flexwrapper/Flexwrapper";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState([]);

  const { id } = useParams();

  const getProducts = async () => {
    setIsloading(true);
    const url = id
      ? `https://fakestoreapi.com/products/category/${id}`
      : `https://fakestoreapi.com/products`;
    try {
      const response = await fetch(url);
      const products = await response.json();
      setData(products);
      setIsloading(false);
    } catch (e) {
      console.log(e);
      setIsloading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <FlexWrapper>
          {data.map((product) => (
            <Item {...product} />
          ))}
        </FlexWrapper>
      )}
    </div>
  );
}

export default ItemListContainer;
