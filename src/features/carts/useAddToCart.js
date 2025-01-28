import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addItemToCart } from "../../services/cartApi";
import { toast } from "react-toastify";
// import { useDispatch } from "react-redux"

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  // const dispatch = useDispatch()
  const { isPending, mutate: addSignInUserCart } = useMutation({
    mutationFn: ({ userId, productId, quantity }) =>
      addItemToCart(userId, productId, quantity),
    onSuccess: () => {
      // dispatch(data)
      queryClient.invalidateQueries("cart");
      toast.success("Item added to cart!", {
        position: "top-center",
        autoClose: 5000, // auto close after 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    onError: () => {
      toast.error("Error adding item to cart!", {
        position: "top-center",
        autoClose: 5000, // auto close after 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
  });

  return { isPending, addSignInUserCart };
};
