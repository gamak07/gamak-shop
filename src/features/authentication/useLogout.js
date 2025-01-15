import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { logout as logoutApi } from "../../services/authApi"

const useLogout = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { mutate: logout, isPending } = useMutation({
        mutationFn: logoutApi,
        onSettled: () => {
            queryClient.removeQueries()
            navigate('/', {replace: true})
        }
    })
  return {logout, isPending}
}

export default useLogout 