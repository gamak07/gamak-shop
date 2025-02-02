import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createOrder } from "../../services/orderApi"

export const useCreateOrder = () => {
    const queryClient = useQueryClient()
    const { mutate: order, isPending} = useMutation({
        mutationFn: createOrder,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey:['order']
            })
        },
        onError: (err) => {
            console.error(err.message)
        }
    })

    return {order, isPending}
}