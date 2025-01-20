import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/cartApi";

export const useCart = (userId) => {
  const { isPending, data: carts } = useQuery({
    queryKey: ["cart", userId],
    queryFn: () => getCart(userId),
  });

  console.log(carts)

  return { isPending, carts };
};
