import { toast } from "react-toastify";

// Best approach to create reusable toast notification
// Rather tha creating a new toast notification for each action 
// you can create a reusable toast notification function that can be called from any action;
// uncomment this code to below to use it

// Add your toast notification text in constants.js file!

// let notificationProps = {
//   position: "top-center",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
// };

// export const createNotification = (notificationText, notificationIndicator) => {
//   if (notificationIndicator === "success") {
//     toast.success(notificationText, {
//       ...notificationProps,
//     });
//   }
//   if (notificationIndicator === "error") {
//     toast.error(notificationText, {
//       ...notificationProps,
//     });
//   }
// };

export const useToast = () => {
  const addToCartToast = () => {
    toast.success("Item added to cart!", {
      position: "top-center",
      autoClose: 5000, // auto close after 5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const removeFromCartToast = () => {
    toast.success("Item removed from cart!", {
      position: "top-center",
      autoClose: 5000, // auto close after 5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const clearCartToast = () => {
    toast.success("All items cleared from cart!", {
      position: "top-center",
      autoClose: 5000, // auto close after 5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const existingItemToast = () => {
    toast.error("Item already in cart!", {
      position: "top-center",
      autoClose: 5000, // auto close after 5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return {
    addToCartToast,
    removeFromCartToast,
    clearCartToast,
    existingItemToast,
  };
};

// Uncomment code to export createNotification function
// export { createNotification }; 