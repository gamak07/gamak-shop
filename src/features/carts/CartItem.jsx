import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import Button from "../../ui/Button";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { clearCart } from "./cartSlice";
import CartSummary from "./CartSummary";

const CartItem = () => {
  const cart = useSelector((state) => state.cart.items);
  const counts = useSelector((state) => state.count.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartWithCounts = cart.map((item) => ({
    ...item,
    count: counts[item.id] || 1, // Default to 1 if count is not found
  }));

  const total = cartWithCounts.reduce(
    (acc, cur) => acc + cur.price * cur.count,
    0
  );

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
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((product) => <CartList key={product.id} product={product} />)
        )}

        {cart.length >= 1 && (
          <Button
            className="flex bg-indigo-600 py-2 px-4 rounded-md ml-auto"
            onClick={handleClearCart}
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
