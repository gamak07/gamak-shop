import supabase from "./supabase";
export const getProducts = async () => {
  const { data: products, error } = await supabase.from("products").select("*");

  return { products, error };
};

export const getProduct = async (id) => {
  let { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  return { product, error };
};

export const getRelatedProducts = async (categoryId, productId) => {
  let { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", categoryId)
    .neq("id", productId);

  return { products, error };
};
