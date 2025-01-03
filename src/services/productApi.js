import supabase from "./supabase";
export const getProducts = async () => {
    const { data: products, error } = await supabase
     .from("products")
        .select("*");
    
    return {products, error}
    
}
