import { toast } from "react-toastify";

export const toaster = (type, message) => {
  toast.dismiss();
  toast.clearWaitingQueue();

  if (type === "success") {
    toast.success(`${message}`, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else if (type === "error") {
    toast.error(`${message}`, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else {
    toast.loading(`${message}`);
  }
};
