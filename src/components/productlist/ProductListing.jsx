import React, { useEffect } from "react";
import ProductComponent from "../productcomponent/ProductComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SetProducts } from "../../redux/action/ProductAction";
import "./ProductListing.scss";

const ProductListing = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://api.escuelajs.co/api/v1/products")
      .catch((err) => {
        console.log("err", err);
      });

    dispatch(SetProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main_componentListing">
      <div>
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;
