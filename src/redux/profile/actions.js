import { toaster } from "../../utils/toaster";
import { PROFILE } from "./types";

export const profileFunc = (data) => {
  return {
    type: PROFILE,
    payload: data,
  };
};

export const profileApi = (navigate) => {
  return async (dispatch) => {
    try {
      const res = await fetch("/api/get-user-data", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const resData = await res.json();

      if (resData.success === false) {
        navigate("/");
      } else {
        dispatch(profileFunc(resData.user));
      }
    } catch (error) {
      navigate("/");
    }
  };
};

export const updateProfilePicture = (data) => {
  return async (dispatch) => {
    try {
      const res = await fetch("/api/update-profile-picture", {
        method: "PATCH",
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
        toaster("success", "Profile Picture Updated!");
      }
    } catch (error) {
      toaster("error", error);
    }
  };
};
