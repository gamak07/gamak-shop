import {useMutation } from '@tanstack/react-query'
import { signup as signupApi } from '../../services/authApi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const useSignup = () => {
    const navigate = useNavigate()
    const {mutate: signup, isPending } = useMutation({
        mutationFn: signupApi,
        onSuccess: (user) => {
            console.log(user)
            toast.success("Account created successfully", {
                position: "top-center",
                autoClose: 5000, // auto close after 5 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            navigate('login')
        }
    })

    return {signup, isPending}
}