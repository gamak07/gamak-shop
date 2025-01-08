import { toast } from "react-toastify";

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
    }
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
    }
    
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
    }

    const existingItemToast = () => {
        toast.error("Item already in cart!", {
          position: "top-center",
          autoClose: 5000, // auto close after 5 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
    }
    
    return {addToCartToast, removeFromCartToast, clearCartToast, existingItemToast}
}