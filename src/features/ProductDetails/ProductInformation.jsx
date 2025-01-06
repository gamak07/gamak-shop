import { useProduct } from "../products/useProduct";
import Button from "../../ui/Button";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbTruckReturn } from "react-icons/tb";
import Rating from "../../ui/Rating";
import Loading from "../../ui/Loading";
import { useState } from "react";
import ItemCount from "../../ui/ItemCount";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/helper";
import CartItem from "../carts/CartItem";

const ProductInformation = () => {
  const { isPending, product } = useProduct();
  const [count, setCount] = useState(0);

  const navigate = useNavigate();
  const handleIncrement = () => {
    setCount((inc) => inc + 1);
  };
  const handleDecrement = () => {
    setCount((inc) => (count > 1 ? inc - 1 : 0));
  };

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
  } = product.product;

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
        <div className="flex-1 mt-4 md:mt-0">
          <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
          <p className="text-gray-600 mt-2">{description}</p>
          <Rating
            average_rating={average_rating}
            total_ratings={total_ratings}
          />
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
            <ItemCount
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              count={count}
            />
            <p className="ml-4 text-sm text-gray-500">
              {itemLeft} left in stock
            </p>
          </div>
          <div className="mt-4 flex space-x-4">
            <Button className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 transition duration-300 w-full">
              Buy Now
            </Button>
            <Button className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 transition duration-300 w-full">
              Add to Cart
            </Button>
          </div>
          <div className="mt-6 space-y-2">
            <p className="flex items-center text-gray-600">
              <CiDeliveryTruck className="mr-2 text-indigo-600" /> Free delivery
            </p>
            <p className="flex items-center text-gray-600">
              <TbTruckReturn className="mr-2 text-indigo-600" /> Delivery
              returns
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-800">
          Product Specifications
        </h2>
        <ul>
          {specifications.map((spec, index) => (
            <li key={index} className="text-gray-600 list-disc">
              {spec}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductInformation;
