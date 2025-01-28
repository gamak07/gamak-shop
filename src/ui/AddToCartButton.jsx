import { useAddToCart } from "../features/carts/useAddToCart";
import Button from "./Button";

const AddToCartButton = ({ userId, productId, quantity }) => {
  const { isPending, addSignInUserCart, error } = useAddToCart();

  const handleSignInUserCart = (e) => {
    e.stopPropagation(); // Prevent parent element click events
    addSignInUserCart({ userId, productId, quantity });
  };

  return (
    <div className="relative">
      <Button
        className={`bg-indigo-600 text-white py-2 px-2 mt-2 rounded-md hover:bg-indigo-500 transition 
          duration-300 w-[fit-content] text-nowrap ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={handleSignInUserCart}
        disabled={isPending} // Disable button when API call is in progress
      >
        {isPending ? "Adding..." : "Add to Cart"}
      </Button>
      {/* {error && <p className="text-red-500 text-sm mt-2">{error}</p>} */}
    </div>
  );
};

export default AddToCartButton;
