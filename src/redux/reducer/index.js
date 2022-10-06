import { combineReducers } from "redux";
import { ProductsReducer } from "./ProductReducer";
import { ProductDetailReducer, counter, categoryProduct, fetchurl,ProductsReducerList } from "./ProductReducer";

const Reducer = combineReducers({
  allProducts: ProductsReducer,
  productDetails: ProductDetailReducer,
  categorys : categoryProduct,
  Counters: counter,
  fetchurls : fetchurl,
  ProductListCurrent: ProductsReducerList,





});

export default Reducer;
