import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ password, email }) => loginApi({ password, email }),

    onSuccess: (user) => {
      queryClient.setQueryData(['user', user.user]);
      queryClient.invalidateQueries('user')
      navigate("/");
    },

    onError: (err) => {
      console.log(err);
      toast.error("Password or email is incorrect", {
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

  return { login, isPending };
};
