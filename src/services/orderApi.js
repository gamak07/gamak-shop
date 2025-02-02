import supabase from "./supabase";

export const getOrders = async (userId) => {
  let { data, error } = await supabase
    .from("orders")
    .select("*, products(price, name, image)")
    .eq("user_id", userId);

  if (error) {
    console.error("Supabase Error:", error); // Log the error details
    throw new Error("Error fetching orders");
  }

  return data;
};

export const createOrder = async (orderItems) => {
  const { data, error } = await supabase.from("orders").insert(orderItems);

  if (error) {
    console.error("errorDetails", error);
    throw new Error("Error creating an order");
  }

  return data;
};

export const cancelOrder = async ({ userId, cancelId }) => {
  const { data, error } = await supabase
    .from("orders")
    .delete()
    .eq("id", cancelId)
    .eq("user_id", userId);

  if (error) {
    console.error(error);
    throw new Error("Order could not be canceled");
  }

  return data;
};



export const updateOrder = async (id) => {
  const { data, error } = await supabase
    .from("orders")
    .select("status, delivery_date, created_at")
    .eq("id", id)
    .single();

  if (error || !data) {
    console.error("Error fetching order:", error);
    throw new Error("Order not found");
  }

  const today = new Date().toISOString().split("T")[0];
  const deliveryDate = new Date(data.delivery_date).toISOString().split("T")[0];

  if (deliveryDate === today && data.status !== "Delivered") {
    const { error: updateError } = await supabase
      .from("orders")
      .update({ status: "Delivered" })
      .eq("id", id);

    if (updateError) {
      console.error("Error updating order status:", updateError);
      throw new Error(updateError.message);
    }

    return "Delivered";
  }

  return data.status;
};
