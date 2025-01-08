import { useProduct } from "../products/useProduct";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbTruckReturn } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../carts/cartSlice";
import { addToSaved, removeFromSaved } from '../carts/savedSlice';

import Rating from "../../ui/Rating";
import Loading from "../../ui/Loading";
import ItemCount from "../../ui/ItemCount";
import Button from "../../ui/Button";
import AddToCartButton from "../../ui/AddToCartButton";
import Wishlist from "../../ui/Wishlist";
import BuyNowButton from "../../ui/BuyNowButton";

const ProductInformation = () => {
  const { isPending, product } = useProduct();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const savedItems = useSelector((state) => state.saved.items); // Get saved items from Redux store

  if (isPending) return <Loading />;

  const {
    average_rating,
    category,
    description,
    image,
    itemLeft,
    name,
    total_ratings,
    price,
    specifications,
    status,
    id
  } = product.product;

  // Check if the product is saved or not
  const isSaved = savedItems.some((item) => item.id === id);

  // Handle add/remove from saved list
  const handleAddToSaved = () => {
    dispatch(addToSaved(product.product));
  };

  const handleRemoveFromSaved = () => {
    dispatch(removeFromSaved(id));
  };

  // Handle add to cart
  const handleAddToCart = () => {
    dispatch(addToCart(product.product));
  };

  return (
    <div className="container mx-auto p-6">
      <div className="text-gray-600 mb-4 text-[13px]">
        <span onClick={() => navigate("/products")}>Products</span> /{" "}
        <span>{category}</span> / <span>{name}</span>
      </div>
      <div className="flex flex-col p-5 shadow-md md:flex-row md:space-x-8">
        <div className="flex-1">
          <img src={image} alt={name} className="w-auto h-auto rounded-lg" />
        </div>
        <div className="relative flex-1 mt-4 md:mt-0">
          <Wishlist
            handleAddToSaved={handleAddToSaved}
            handleRemove={handleRemoveFromSaved}
            isSaved={isSaved}
          />
          <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
          <p className="text-gray-600 mt-2">{description}</p>
          <Rating average_rating={average_rating} total_ratings={total_ratings} />
          <div className="flex items-center justify-between mt-4">
            <p className="text-xl font-semibold text-indigo-600">
              {formatCurrency(price)}
            </p>
            <span
              className={`text-sm ${status === "available" ? "text-green-500" : "text-red-500"}`}
            >
              {status}
            </span>
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <ItemCount />
            <p className="ml-4 text-sm text-gray-500">{itemLeft} left in stock</p>
          </div>
          <div className="mt-4 flex space-x-4">
            <BuyNowButton />
            <AddToCartButton handleAddToCart={handleAddToCart} />
          </div>
          <div className="mt-6 space-y-2">
            <p className="flex items-center text-gray-600">
              <CiDeliveryTruck className="mr-2 text-indigo-600" /> Free delivery
            </p>
            <p className="flex items-center text-gray-600">
              <TbTruckReturn className="mr-2 text-indigo-600" /> Delivery returns
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-800">Product Specifications</h2>
        <ul>
          {specifications.map((spec, index) => (
            <li key={index} className="text-gray-600 list-disc">{spec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductInformation;
