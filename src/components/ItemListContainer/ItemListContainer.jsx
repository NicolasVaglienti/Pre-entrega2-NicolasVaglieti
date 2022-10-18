import { useEffect, useState } from "react";
import Item from "../Item/Item";
import FlexWrapper from "../Flexwrapper/Flexwrapper";
import Spinner from "../Spinner/Spinner";

function ItemListContainer(props) {
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    setIsloading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
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
  }, []);

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
