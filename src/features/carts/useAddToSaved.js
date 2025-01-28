import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addItemToSaved } from "../../services/savedApi";
import { toast } from "react-toastify";
// import { useDispatch } from "react-redux"

export const useAddToSaved = () => {
  const queryClient = useQueryClient();
  // const dispatch = useDispatch()
  const { isPending, mutate: addSavedItem } = useMutation({
    mutationFn: ({userId, productId}) =>
      addItemToSaved(userId, productId),
    onSuccess: () => {
      // dispatch(data)
      queryClient.invalidateQueries("saved");
      toast.success("Item saved successfully!", {
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
      toast.error("Error addind item to saved list!", {
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

  return { isPending, addSavedItem };
};
