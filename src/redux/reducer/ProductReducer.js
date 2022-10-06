import { action_type } from "../contants/action-types";

const initial = {
  products: [{}],
};

export const ProductsReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case action_type.SET_PRODUCTS:
      return { ...state, products: payload };

      // case action_type.REMOVE_SELECTED_PRODUCT:
      // return {}

    default:
      return state;
  }
};

const initialList = {
  productsList: [{}],
};

export const ProductsReducerList = (state = initialList, { type, payload }) => {
  switch (type) {
    case action_type.SET_PRODUCT_LIST:
      return { ...state, productsList: payload };
    case action_type.REMOVE_SELECTED_PRODUCT:
      return {}
    default:
      return state;
  }
};

export const ProductDetailReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case action_type.SELECTED_PRODUCT:
      return { ...state, ...payload };

    case action_type.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};

export const categoryProduct = (state = {}, { type, payload }) => {
  switch (type) {
    case action_type.CATEGORY:
      return { ...state, ...payload };

    case action_type.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};

export const counter = (state = 0, { type, payload }) => {
  switch (type) {
    case action_type.INCREASE:
      return state + payload;
    case action_type.DECREASE:
      if (state > 0) {
        return state - payload;
      } else {
        return (state = 0);
      }

    default:
      return state;
  }
};

const initials = {
  urls: "",
};

export const fetchurl = (state = "", { type, payload }) => {
  switch (type) {
    case action_type.GETURL:
      return { ...state, urls: payload };

    case action_type.REMOVE_SELECTED_PRODUCT:
      return "" ;

    default:
      return state;
  }
};
