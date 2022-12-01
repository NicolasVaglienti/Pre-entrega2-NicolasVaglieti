import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Spinner from "../../components/Spinner/Spinner";
import { getProduct } from '../../services/firebase'

const ProductDetailContainer = () => {
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState([]);
  const { id } = useParams();

  const findProduct = async () => {
    setIsloading(true);
    try {
      const response = await getProduct(id);
      setData(response);
      setIsloading(false);
    } catch (e) {
      setIsloading(false);
    }
  };

  useEffect(() => {
    findProduct();
  }, []);

  return (
    <>
      {isLoading ? (
          <Spinner />
      ) : (
          <ProductDetail item={data} />
      )}
    </>
  );
};

export default ProductDetailContainer;
