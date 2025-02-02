import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateProductStock } from "../../services/productApi"
// import { updateStock } from "../../services/productApi"

export const useUpdateStock = () => {
    const queryClient = useQueryClient()
    const {mutate: update, isPending} = useMutation({
        mutationFn: updateProductStock,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['products']
            })
        }
    })

    return{isPending, update}
}