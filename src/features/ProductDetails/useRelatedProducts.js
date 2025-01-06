// import { useQuery } from "@tanstack/react-query";
// import { getRelatedProducts } from "../../services/productApi";
// import { useProducts } from "../products/useProducts";

// export const useRelatedProducts = (productId) => {
//   const { products } = useProducts();
//   const category = products?.products.find(product => product.id === productId)
//     const currentProductId = category.category;
//     // const { category } = products.products
//     console.log(currentProductId);
    
    
    
//   const { isPending, data: relatedProduct } = useQuery({
//     queryKey: ["relatedProducts",'appliances'],
    
//     // queryFn: () => getRelatedProducts(apl, currentProductId),
//   });

//   return { isPending, relatedProduct };
// };
