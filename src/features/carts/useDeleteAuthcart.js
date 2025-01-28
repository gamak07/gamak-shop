import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteAuthCart } from "../../services/cartApi";
import { toast } from "react-toastify";

export const useDeleteAuthCart = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: deleteCart } = useMutation({
    mutationFn: deleteAuthCart,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["carts"],
      });
      toast.success("Item removed from cart!", {
        position: "top-center",
        autoClose: 5000, // auto close after 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    onError: (err) => {
      console.error(err.message);
      toast.error("Error deleting item from cart", {
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
  return { isPending, deleteCart };
};
