import { toaster } from "../../utils/toaster";
import { profileFunc } from "../profile/actions";
import privateUrls from "../../utils/privateUrls";

// LOGIN
export const login = (data, hideModal) => {
  toaster("loading", "loading...");

  return async (dispatch) => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      if (resData.success === false) {
        toaster("error", resData.message);
      } else {
        dispatch(profileFunc(resData.user));
        toaster("success", "Login successfull!");
        hideModal();
      }
    } catch (error) {
      toaster("error", error);
    }
  };
};
// LOGIN

// SIGNUP
export const signup = (data, hideModal) => {
  toaster("loading", "loading...");

  return async (dispatch) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      if (resData.success === false) {
        toaster("error", resData.message);
      } else {
        dispatch(profileFunc(resData.user));
        toaster("success", "Registered successfull!");
        hideModal();
      }
    } catch (error) {
      toaster("error", error);
    }
  };
};
// SIGNUP

// LOGOUT
export const logout = (navigate) => {
  return async (dispatch) => {
    try {
      const res = await fetch("/api/logout", {
        method: "GET",
      });
      const resData = await res.json();

      if (resData.success === false) {
        toaster("error", resData.message);
      } else {
        dispatch(profileFunc(""));
        toaster("success", "Logout successfull!");

        if (
          privateUrls.filter((res) => res === window.location.pathname).length
        ) {
          navigate("/");
        }
      }
    } catch (error) {
      toaster("error", error);
    }
  };
};
// LOGOUT
