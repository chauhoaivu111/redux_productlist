import React, { useState } from "react";
import usePaginations from "../../Paginations";
import { Pagination } from "@mui/material";

import "./ProductComponent.scss";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SetProductsList } from "../../redux/action/ProductAction";

const ProductComponent = () => {
  const myproducts = useSelector((state) => state.allProducts.products);

  // const list = useSelector((state) => state.ProductListCurrent.productsList)

  const dispatch = useDispatch();
  let [page, setPage] = useState(1);
  const PER_PAGE = 8;

  const count = Math.ceil(myproducts.length / PER_PAGE);
  var _DATA = usePaginations(myproducts, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  if (count !== 1) {
    dispatch(SetProductsList(_DATA.currentDatas()));
  }

  return (
    <div>
      <div className="displayform">
        {_DATA.currentDatas().map((item, index) => (
          <div key={index} className="frame_element_card">
            <Link to={`/product/${item.id}`} className="each_element">
              <img src={item.images} alt="" />
              <p>${item.price}</p>
              <p>{item.title}</p>
            </Link>
          </div>
        ))}
      </div>

      <div className="frame_piantion">
        <Pagination
          count={count}
          size="small"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          className="style_panigation"
        />
      </div>
    </div>
  );
};

export default ProductComponent;
