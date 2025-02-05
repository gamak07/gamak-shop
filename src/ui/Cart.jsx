import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useCart } from "../features/carts/useCart";

const Cart = ({className}) => {
  const navigate = useNavigate();
  const cartCount = useSelector((state) => state.cart.items);
  const {user} = useUser()
  const userId = user?.id

  const { carts: authCarts } = useCart(userId);
  
  const cart = userId ? authCarts || [] : cartCount 
  return (
    <div
      className={`flex items-center text-softWhite ${className}`}
      onClick={() => navigate("/cart")}
    >
      <div className="relative text-[30px] mb:text-[25px]">
        <HiShoppingCart />
        <p className="absolute top-0 right-0 text-[13px] bg-orange-500 rounded-full h-4 w-4 flex items-center justify-center mb:text-[5px] mb:h-3 mb:w-3">
        {cart.length}
        </p>
      </div>{" "}
      <span className="text-[15px] font-semibold mb:hidden">Cart</span>
    </div>
  );
};

export default Cart;
