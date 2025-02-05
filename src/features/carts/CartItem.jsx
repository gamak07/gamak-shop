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

  const guestCart = useSelector((state) => state.cart.items);
  const counts = useSelector((state) => state.count.items);

  const { user } = useUser();
  const userId = user?.id;

  const { isPending, carts: authCarts } = useCart(userId);
  const { isPending: deletingCart, clearCart: clearAuthCart } = useClearAuthCart();

  const cart = userId ? authCarts || [] : guestCart;
  const cartData = normalizeCartData(cart, userId);

  const cartWithCounts = cartData.map((item) => ({
    ...item,
    count: item.quantity || counts[item.product_id || item.id] || 1,
  }));

  const total = cartWithCounts.reduce(
    (acc, cur) => acc + (cur.price || 0) * cur.count,
    0
  );

  const handleClearCart = () => {
    if (userId) {
      clearAuthCart(userId);
    } else {
      dispatch(clearCart());
    }
  };

  return (
    <div className="relative flex flex-col lg:flex-row p-6 gap-6 max-w-7xl mx-auto">
      <div className="w-full lg:w-3/4">
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
            <CartList key={product.id} product={product} userId={userId} cart={authCarts} />
          ))
        )}

        {cart.length >= 1 && (
          <Button
            className="flex bg-indigo-600 py-2 px-4 rounded-md ml-auto mt-4 mb:text-[15px]"
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