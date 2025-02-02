import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateOrder } from "../../services/orderApi"

export const useUpdateOrder = () => {
    const queryClient = useQueryClient()
    const { isPending, mutate: updateStatus} = useMutation({
        mutationFn: updateOrder,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey:['order']
            })
        }
    })

    return{ isPending, updateStatus}
}