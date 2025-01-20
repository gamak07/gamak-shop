import { useDispatch } from "react-redux";
import { supabase } from "./supabase";

export const getCart = async (userId) => {
  let { data, error } = await supabase
    .from("carts")
    .select("*")
    .eq("user_id", userId);

  if (error) throw new Error(error.message);

  return data;
};

// Function to add an item to the cart
export const addItemToCart = async (userId, productId, quantity) => {
  const { data, error } = await supabase
    .from("carts")
    .insert([{ user_id: userId, product_id: productId, quantity }]);

  if (error) throw new Error(error.message);
  return data;
};
