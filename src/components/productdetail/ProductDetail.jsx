import React, { useEffect} from "react";
import "./ProductDetail.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SelectProduct, removeProduct } from "../../redux/action/ProductAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { incremented } from "../../redux/action/ProductAction";
import { decremented } from "../../redux/action/ProductAction";
import { categoryProducts, geturl } from "../../redux/action/ProductAction";
import { Button } from "@mui/material";


const ProductDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const detail = useSelector((state) => state.productDetails);

  const { title, price, description, images } = detail;

  const url = useSelector((state) => state.fetchurls);

  console.log("url", url.urls);

  var listimg = [];
  for (var key in images) {
    listimg.push(images[key]);
  }

  const number = useSelector((state) => state.Counters);

  const fetproductDetail = async () => {
    const response = await axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .catch((err) => console.log("err", err));

    dispatch(SelectProduct(response.data));

    dispatch(categoryProducts(response.data.category));
  };

  useEffect(() => {
    if (id && id !== "") fetproductDetail();

    return () => {
      dispatch(removeProduct());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <div className="main_frame_card_detail">
        <div className="frame_main_img_title">
          <div className="frame_img">
            {url.urls === undefined ? (
              <div>
                {/* {listimg.slice(0, 1).map((item) => (
                  <div key={item}>
                    <img src={item} alt="" style={{ cursor: "pointer" }} />
                  </div>
                ))} */}
                <img src={images} alt= ""/>
              </div>
            ) : (
              <img src={url.urls} alt="" />
            )}
          </div>
          <div className="frame_title">
            <h2>{title}</h2>
            <h2>${price}</h2>
            <div>
              <h3>quantity: {number}</h3>

              <Button onClick={() => dispatch(incremented(1))} className="Button">+</Button>
              <Button onClick={() => dispatch(decremented(1))} className="Button">-</Button>
            </div>
            <p>{description}</p>
          </div>
        </div>

        <div className="main_frame_list_img">
          {listimg.map((item) => (
            <div key={item} className="list_img">
              <img
                src={item}
                alt=""
                onClick={() => dispatch(geturl(item))}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default ProductDetail;
