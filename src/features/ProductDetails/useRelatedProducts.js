import { useQuery } from "@tanstack/react-query";
import { getRelatedProducts } from "../../services/productApi";
// import { useProducts } from "../products/useProducts";

export const useRelatedProducts = (categoryId, productId) => {
    const { isPending, data: relatedProducts} = useQuery({
      queryKey: ['relatedProducts', categoryId, productId],
      queryFn: ()=> getRelatedProducts(categoryId, productId)
  })   
  
  return {isPending, relatedProducts}
};
