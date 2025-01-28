import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/helper";

const RelatedProductItems = ({ related }) => {
  const navigate = useNavigate(); // Use related product's ID
  const { id: productId, name, price, itemLeft, image } = related;

  return (
    <div
      className="py-2 px-2 hover:scale-105"
      onClick={() => navigate(`/products/${productId}`)} // Use the related product's ID for navigation
    >
      <img src={image} alt={name} className="h-[12rem] w-full" />
      <div className="py-3">
        <h1>{name.slice(0, 20)}...</h1>
        <p className="text-indigo-600 font-bold">{formatCurrency(price)}</p>
        <p>{itemLeft} items left</p>
      </div>
    </div>
  );
};

export default RelatedProductItems;
