import Button from "./Button";
import { useNavigate } from "react-router-dom";

const BuyNowButton = ({ price, productId }) => {
  const navigate = useNavigate();
  return (
    <Button
      className="bg-indigo-600 text-white py-2 mt-2 w-[70%] rounded-md hover:bg-indigo-500 transition duration-300 "
      onClick={() =>
        navigate("/checkout", { state: { price, fromCart: false, productId } })
      }
    >
      Buy Now
    </Button>
  );
};

export default BuyNowButton;
