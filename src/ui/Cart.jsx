import { HiShoppingCart } from "react-icons/hi";

const Cart = () => {
  return (
    <div className="flex items-center text-softWhite">
      <p className="text-[30px]">
        <HiShoppingCart />
      </p>{" "}
      <span className="text-[15px] font-semibold">Cart</span>
    </div>
  );
};

export default Cart;
