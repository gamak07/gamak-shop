export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(
    value
  );

export const normalizeCartData = (cartData, isAuth) => {
  if (isAuth) {
    // Normalize authCart with nested product data
    return cartData.map((item) => ({
      id: item.id, // Use product_id as ID
      name: item.products.name,
      price: item.products.price,
      image: item.products.image,
      itemLeft: item.products.itemLeft,
      quantity: item.quantity,
    }));
  } else {
    // GuestCart is already in the desired format
    return cartData.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price, // Guest cart has `price` directly
      image: item.image,
      itemLeft: item.itemLeft,
      quantity: item.quantity || 1,
    }));
  }
};
