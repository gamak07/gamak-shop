import { formatCurrency } from "../../utils/helper";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const CartSummary = ({ total }) => {
  const navigate = useNavigate();
  return (
    <div className="sticky top-20 min-w-[15rem] h-fit bg-white rounded-lg shadow-md p-4 mt-[6.5rem]">
      <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
      <div className="flex justify-between text-lg">
        <p className="text-[15px] text-bold">Subtotal:</p>
        <p className="font-semibold text-indigo-600">{formatCurrency(total)}</p>
      </div>
      <div className="flex justify-between text-lg mt-2">
        <p>Shipping:</p>
        <p className="text-gray-600">Free</p>
      </div>
      <div className="flex justify-between text-lg mt-2 border-t pt-2">
        <p className="font-bold">Total:</p>
        <p className="font-semibold text-indigo-600">{formatCurrency(total)}</p>
      </div>
      <Button
        className="bg-indigo-600 text-softWhite font-bold text-[15px] py-2 w-full rounded-md"
        onClick={() => navigate("/checkout", {state: {total, fromCart: true}})}
      >
        Checkout ({formatCurrency(total)})
      </Button>
    </div>
  );
};

export default CartSummary;
