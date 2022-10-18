import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Spinner from "../../components/Spinner/Spinner";

const ProductDetailContainer = () => {
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState([]);
  const { id } = useParams();

  const getProduct = async () => {
    setIsloading(true);
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await response.json();
      setData(product);
      setIsloading(false);
    } catch (e) {
      console.log(e);
      setIsloading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {isLoading ? (
          <Spinner />
      ) : (
        <ProductDetail {...data} />
      )}
    </>
  );
};

export default ProductDetailContainer;
