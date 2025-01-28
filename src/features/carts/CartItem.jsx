import { useDispatch, useSelector } from "react-redux";
import { MdKeyboardBackspace } from "react-icons/md";
import { clearCart } from "./cartSlice";
import { useNavigate } from "react-router-dom";

import CartList from "./CartList";
import Button from "../../ui/Button";
import CartSummary from "./CartSummary";
import { useCart } from "./useCart";
import { useUser } from "../authentication/useUser";
import { normalizeCartData } from "../../utils/helper";
import { useClearAuthCart } from "./useClearAuthCart";

const CartItem = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux state (for guest cart)
  const guestCart = useSelector((state) => state.cart.items);
  const counts = useSelector((state) => state.count.items);

  // Fetch authenticated user's cart
  const { user } = useUser();
  const userId = user?.id;

  const { isPending, carts: authCarts } = useCart(userId);
  const {isPending: deletingCart, clearCart: clearAuthCart} = useClearAuthCart()
  const cart = userId
    ? authCarts || [] // Use authenticated cart if user is logged in
    : guestCart; // Otherwise, use guest cart

  const cartData = normalizeCartData(cart, userId);

  const cartWithCounts = cartData.map((item) => ({
    ...item,
    count: counts[item.product_id || item.id] || 1, // Handle guest and authenticated cart IDs
  }));

  const total = cartWithCounts.reduce(
    (acc, cur) => acc + (cur.price || 0) * cur.count, // Ensure `price` is handled correctly
    0
  );

  
  const handleClearCart = () => {
    if (userId) {
      clearAuthCart(userId)
    }
    else {
      dispatch(clearCart());
    }
  };

  return (
    <div className="relative flex p-6 gap-6">
      <div className="container mx-auto">
        <Button
          className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-400 hover:text-softWhite"
          onClick={() => navigate("/products")}
        >
          <MdKeyboardBackspace />
        </Button>
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

        {isPending ? (
          <p>Loading your cart...</p>
        ) : cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartData.map((product) => (
            <CartList
              key={product.id}
              product={product}
              userId={userId}
              cart={authCarts}
            />
          ))
        )}

        {cart.length >= 1 && (
          <Button
            className="flex bg-indigo-600 py-2 px-4 rounded-md ml-auto"
            onClick={handleClearCart}
            disabled={deletingCart}
          >
            Clear All
          </Button>
        )}
      </div>
      {cart.length > 0 && <CartSummary total={total} />}
    </div>
  );
};

export default CartItem;
