import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/authApi";

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: updateUserProfile } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => {
      console.error(err.message);
    },
  });

  return { isUpdating, updateUserProfile };
};
