// import { useDispatch } from "react-redux";
import supabase from "./supabase";

export const getCart = async (userId) => {
  let { data, error } = await supabase
    .from("carts")
    .select("*, products(name, price, itemLeft, image)")
    .eq("user_id", userId);

  if (error) throw new Error(error.message);

  return data;
};

// Function to add an item to the cart
export const addItemToCart = async (userId, productId, quantity) => {
  const { data: existingCartItem } = await supabase
    .from("carts")
    .select(`id, quantity, products(name, price, itemLeft)`)
    .eq("user_id", userId)
    .eq("product_id", productId)
    .maybeSingle();

  if (existingCartItem) {
    // Update quantity if already in the cart
    const { error } = await supabase
      .from("carts")
      .update({ quantity: existingCartItem.quantity + quantity })
      .eq("id", existingCartItem.id);
    if (error) throw error;
  } else {
    // Insert new item into cart
    const { error } = await supabase.from("carts").insert({
      user_id: userId,
      product_id: productId,
      quantity,
    });

    // console.log(user_id, product_id, quantity)
    if (error) throw error;
  }

  return existingCartItem;
};

export const deleteAuthCart = async ({userId, authCartId}) => {
  const { data, error } = await supabase
    .from("carts")
    .delete()
    .eq("id", authCartId)
    .eq("user_id", userId);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }

  return data;
};

export const clearAuthCart = async (userId) => {
  const { data, error } = await supabase
    .from("carts")
    .delete()
    .eq("user_id", userId); // Delete all cart items for the user

  if (error) {
    console.error(error);
    throw new Error("Could not clear the cart");
  }

  return data;
};
