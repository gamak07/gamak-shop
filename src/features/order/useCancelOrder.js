
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { cancelOrder } from "../../services/orderApi";

export const useCancelOrder = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: cancel } = useMutation({
    mutationFn: cancelOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["order"],
      }),
        toast.success("Order canceled successfully!", {
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
      console.error(err.message)
      toast.error("Error canceling order!", {
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
  return { isPending, cancel };
};
