import { HiTrash } from "react-icons/hi";
import Button from "../../ui/Button";
import AddToCartButton from "../../ui/AddToCartButton";
import { formatCurrency } from "../../utils/helper";
import { useDispatch } from "react-redux";
import { removeFromSaved } from "./savedSlice";
import BuyNowButton from "../../ui/BuyNowButton";
import { addToCart } from "./cartSlice";

const SavedList = ({ item }) => {
  const { image, id, name, price } = item;
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeFromSaved(id));
    };
    
    const handleAddToCart = () => {
        dispatch(addToCart(item))
    }

  return (
    <div className="w-full flex justify-between flex-row bg-white p-4 rounded-lg border-[5px] shadow-md mb-6">
      <div className="flex gap-5">
        <img
          src={image}
          alt={name}
          className="w-[6rem] h-[6rem]  object-cover rounded-md mb-4 "
        />
        <div className="flex flex-col justify-between">
          <h1 className="text-lg font-semibold mb-2">{name}</h1>
          <p className="text-xl font-bold text-gray-900 mb-4">
            {formatCurrency(price)}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-4 ">
        <Button
          className="text-red-500 hover:text-red-700 flex items-center"
          onClick={() => handleDelete(id)}
        >
          <HiTrash className="mr-1" /> Remove
        </Button>
        <div className="min-w-[20rem] flex gap-10" >
          <AddToCartButton handleAddToCart={handleAddToCart} />
          <BuyNowButton />
        </div>
      </div>
    </div>
  );
};

export default SavedList;
2;
