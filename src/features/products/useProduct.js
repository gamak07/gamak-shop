import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/productApi";
import { useParams } from "react-router-dom";
// import { useProducts } from "./useProducts";

export const useProduct = () => {
  const { productId } = useParams()
  // const { products } = useProducts()
  // const related = products?.products.find(prod => prod.id === productId)
  // console.log(related);
  
    const {
    isPending,
    data: product,
    error,
} = useQuery({
    queryKey: ["product", productId],
    queryFn: ()=>getProduct(productId),
});

  return { isPending, product, error }; 
};
