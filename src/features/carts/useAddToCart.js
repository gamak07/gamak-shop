import { useMutation } from "@tanstack/react-query"
import { addItemToCart } from "../../services/cartApi"
import { useDispatch } from "react-redux"

export const useAddToCart = () => {
    const dispatch = useDispatch()
    const {isPending, mutate:addSignInUserCart } = useMutation({
        mutationFn: (userId, productId, quantity)=>addItemToCart(userId, productId, quantity),
        onSuccess: (data) => {
            dispatch(data)
            console.log('cart added successfully')
        },
        onError: () => {
            console.log('error adding item')
        }
    })

    return {isPending, addSignInUserCart}
}
