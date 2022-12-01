import { useEffect, useState } from "react";
import Item from "../Item/Item";
import FlexWrapper from "../Flexwrapper/Flexwrapper";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import { getData, findProductByCategory } from '../../services/firebase'

function ItemListContainer(props) {
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState([]);

  const { id } = useParams();

  const getProducts = async () => {
    setIsloading(true);
    try {
      let products;
      if(id) {
        products = await findProductByCategory(id)
      } else {
        products = await getData()
      }
      setData(products);
      setIsloading(false);
    } catch (e) {
      setIsloading(false);
    }
  };
  useEffect(() => {getProducts()}, [id]);

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
