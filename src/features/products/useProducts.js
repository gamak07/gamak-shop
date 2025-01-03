import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/productApi";

export const useProducts = () => {
  const {
    isPending,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { isPending, products, error };
};
