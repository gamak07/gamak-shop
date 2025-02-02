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

export const updateProductStock = async ({ productId, quantity, type }) => {
  const { data, error } = await supabase
    .from("products")
    .select("itemLeft")
    .eq("id", productId)
    .single();

  if (error) throw new Error(error.message);

  // const newItemLeft = Math.max(0, data.itemLeft - quantity); // Ensure stock doesn't go negative

  let newItemLeft;
  
  if (type === "deduct") {
    newItemLeft = Math.max(0, data.itemLeft - quantity); // Deduct stock but ensure it doesn’t go negative
  } else if (type === "add") {
    newItemLeft = data.itemLeft + quantity; // Add back stock when order is canceled
  } else {
    throw new Error("Invalid stock update type");
  }

  const { error: updateError } = await supabase
    .from("products")
    .update({ itemLeft: newItemLeft })
    .eq("id", productId);

  if (updateError) throw new Error(updateError.message);

  return newItemLeft;
};

