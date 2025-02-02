// import { useDispatch } from "react-redux";
import supabase from "./supabase";

export const getSaved = async (userId) => {
  let { data, error } = await supabase
    .from("saved")
    .select("*, products(name, price, image, id)")
    .eq("user_id", userId);

  if (error) throw new Error(error.message);

  return data;
};

// Function to add an item to the Saved
export const addItemToSaved = async (userId, productId) => {
  const { data: existingSavedItem, error: fetchError } = await supabase
    .from("saved")
    .select('id')
    .eq("user_id", userId)
    .eq("product_id", productId)
    .maybeSingle();

  if (fetchError) throw new Error(fetchError.message);

  if (existingSavedItem) {
    const { error } = await supabase
      .from("saved")
      .delete()
      .eq("id", existingSavedItem.id);

    if (error) throw new Error(error.message);
  } else {
    const { error } = await supabase
      .from("saved")
      .insert({ user_id: userId, product_id: productId });

    if (error) throw new Error(error.message);
  }
  return existingSavedItem;
};

export const deleteAuthSaved = async ({ userId, authSavedId }) => {
  const { data, error } = await supabase
    .from("saved")
    .delete()
    .eq("id", authSavedId)
    .eq("user_id", userId);

  if (error) {
    console.error(error);
    throw new Error("saved could not be deleted");
  }

  return data;
};
