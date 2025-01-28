import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/cartApi";

export const useCart = (userId) => {
  const { isPending, data: carts, isError } = useQuery({
    queryKey: ["carts", userId],
    queryFn: () => getCart(userId),
    enabled: !!userId, // Only fetch if userId exists
  });

  if (isError) console.error("Error fetching cart");
  return { isPending, carts };
};
