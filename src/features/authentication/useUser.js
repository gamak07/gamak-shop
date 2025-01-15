import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/authApi";

export const useUser = () => {
    const { isPending, data: user } = useQuery({
        queryKey: ["user"],
        queryFn: getCurrentUser,
      });
    
      return { isPending, user, isAuthenticated: user?.role === "authenticated" };
}