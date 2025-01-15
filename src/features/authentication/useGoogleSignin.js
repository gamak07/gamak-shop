import { useMutation } from "@tanstack/react-query";
import {googleLogin} from '../../services/authApi'
import { useNavigate } from "react-router-dom";

export const useGoogleSignin = () => {
    const navigate = useNavigate()
    const {isPending, mutate: loginWithGoogle } = useMutation({
    mutationFn: googleLogin,
    onSuccess: ()=>{
        navigate('/')
        },
    onError:(error) =>{
        console.log('erorr signing in', error)
    }

    })

    return {isPending, loginWithGoogle}
}