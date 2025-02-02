import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCartQuantity } from "../../services/cartApi";

export const useUpdateCartQuantity = () => {
    const queryClient = useQueryClient();
    const {mutate:updateQuantity, isPending} = useMutation({
        mutationFn: ({ userId, productId, newQuantity })=>updateCartQuantity( userId, productId, newQuantity ),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey:['carts']
            })
        }
    })

    return {updateQuantity, isPending}
};
