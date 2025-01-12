import { formatCurrency } from "../utils/helper";
import { useNavigate } from "react-router-dom";

const Suggestion = ({ suggest }) => {
  const { name, image, price, id: productId } = suggest;
  const navigate = useNavigate();
  const nameShort = name.length > 15 ? `${name.slice(0, 15)}...` : name;

  return (
    <div
      className="flex items-center justify-between w-full bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
      onClick={() => navigate(`/products/${productId}`)}
    >
      <img
        src={image}
        alt={name}
        className="w-10 h-10 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold text-gray-800">{nameShort}</h3>
      <p className="text-md text-indigo-600 font-bold">
        {formatCurrency(price)}
      </p>
    </div>
  );
};

export default Suggestion;
