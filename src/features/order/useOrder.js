import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/orderApi";

export const useOrder = (userId) => {
  const { data: orders, isPending } = useQuery({
      queryKey: ["order", userId],
    queryFn: () => getOrders(userId),
    // enabled: !!userId,
  });

  return { orders, isPending };
};
