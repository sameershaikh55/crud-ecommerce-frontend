import { toaster } from "../../utils/toaster";
import { ALL_PRODUCTS, USER_PRODUCTS } from "./types";

const allProductsFunc = (data) => {
  return {
    type: ALL_PRODUCTS,
    payload: data,
  };
};

export const allProductsApi = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("/api/products", {
        method: "GET",
      });
      const resData = await res.json();

      if (resData.success === false) {
        toaster("error", "server error");
      } else {
        dispatch(allProductsFunc(resData.products));
      }
    } catch (error) {
      toaster("error", error);
    }
  };
};

// LOGIN USER PRODUCTS
const userProductsFunc = (data) => {
  return {
    type: USER_PRODUCTS,
    payload: data,
  };
};

export const userProductsApi = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("/api/products/user", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const resData = await res.json();

      if (resData.success === false) {
        toaster("error", "server error");
      } else {
        dispatch(userProductsFunc(resData.products));
      }
    } catch (error) {
      toaster("error", error);
    }
  };
};

// ADD PRODUCT
export const addProductApi = async (data, hideModal) => {
  try {
    const res = await fetch("/api/product/new", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    const resData = await res.json();

    if (resData.success === false) {
      toaster("error", resData.message);
    } else {
      toaster("success", "Product Added!");
      allProductsApi();
      userProductsApi();
      hideModal();
    }
  } catch (error) {
    toaster("error", error);
  }
};
