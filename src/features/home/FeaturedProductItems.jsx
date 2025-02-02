import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/helper";
import { useDispatch } from "react-redux";
import { addToCart } from "../carts/cartSlice";

import AddToCartButton from "../../ui/AddToCartButton";
import Rating from "../../ui/Rating";
import { useUser } from "../authentication/useUser";
import Button from "../../ui/Button";

const FeaturedProductItems = ({ product }) => {
  const { name, image, price, id: productId, average_rating, total_ratings } =
    product;
  const { isAuthenticated, user } = useUser();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent navigation
    dispatch(addToCart(product));
  };

  const renderAddToCartButton = () => {
    if (isAuthenticated) {
      return (
        <AddToCartButton
          userId={user.id}
          productId={productId}
          quantity={1}
        />
      );
    }

    return (
      <Button
        className="bg-indigo-600 text-white py-2 mt-2 rounded-md hover:bg-indigo-500 transition duration-300 w-full"
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
    );
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md flex flex-col h-[400px] p-4"
      onClick={() => navigate(`/products/${productId}`)}
    >
      <div className="flex-grow flex justify-center items-center mb-3">
        <img
          src={image}
          alt={name}
          className="object-contain max-h-[200px]"
        />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <h1 className="text-lg font-bold text-gray-800">{name}</h1>
          <p className="text-md text-gray-600">{formatCurrency(price)}</p>
          <Rating
            average_rating={average_rating}
            total_ratings={total_ratings}
          />
        </div>
        {renderAddToCartButton()}
      </div>
    </div>
  );
};

export default FeaturedProductItems;
