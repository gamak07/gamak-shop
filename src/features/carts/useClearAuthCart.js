import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearAuthCart } from "../../services/cartApi";
import { toast } from "react-toastify";

export const useClearAuthCart = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: clearCart } = useMutation({
    mutationFn: clearAuthCart,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["carts"],
      });
      toast.success("Cart cleared successfully", {
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
      toast.error("Error clearing the cart!", {
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

  return { isPending, clearCart };
};
