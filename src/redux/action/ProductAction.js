import { action_type } from "../contants/action-types";

export const SetProducts = (products) => {
  return {
    type: action_type.SET_PRODUCTS,
    payload: products,
  };
};

export const SetProductsList = (productList) => {
  return {
    type: action_type.SET_PRODUCT_LIST,
    payload: productList,
  };
};

export const SelectProduct = (product) => {
  return {
    type: action_type.SELECTED_PRODUCT,
    payload: product,
  };
};

export const categoryProducts = (category) => {
  return {
    type: action_type.CATEGORY,
    payload: category,
  };
};

export const removeProduct = () => {
  return {
    type: action_type.REMOVE_SELECTED_PRODUCT,
  };
};

export const incremented = (num) => {
  return {
    type: action_type.INCREASE,
    payload: num,
  };
};

export const decremented = (num) => {
  return {
    type: action_type.DECREASE,
    payload: num,
  };
};

export const geturl = (url) => {
  return {
    type: action_type.GETURL,
    payload: url,
  };
};
