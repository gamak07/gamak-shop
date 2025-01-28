import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteAuthSaved } from "../../services/savedApi";
import { toast } from "react-toastify";

export const useDeleteSaved = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: deleteSaved } = useMutation({
    mutationFn: deleteAuthSaved,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["saved"],
      }),
        toast.success("Item unsaved successfully!", {
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
      toast.error("Error deleting the item!", {
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
  return { isPending, deleteSaved };
};
