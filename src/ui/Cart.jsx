import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useCart } from "../features/carts/useCart";

const Cart = () => {
  const navigate = useNavigate();
  const cartCount = useSelector((state) => state.cart.items);
  const {user} = useUser()
  const userId = user?.id

  const { carts: authCarts } = useCart(userId);
  
  const cart = userId ? authCarts || [] : cartCount 
  return (
    <div
      className="flex items-center text-softWhite"
      onClick={() => navigate("/cart")}
    >
      <div className="relative text-[30px]">
        <HiShoppingCart />
        <p className="absolute top-0 right-0 text-[10px] bg-orange-500 rounded-full h-4 w-4 flex items-center justify-center">
          {cart.length}
        </p>
      </div>{" "}
      <span className="text-[15px] font-semibold">Cart</span>
    </div>
  );
};

export default Cart;
