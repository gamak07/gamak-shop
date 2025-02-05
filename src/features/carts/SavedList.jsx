import { HiTrash } from "react-icons/hi";
import Button from "../../ui/Button";
import AddToCartButton from "../../ui/AddToCartButton";
import { formatCurrency } from "../../utils/helper";
import BuyNowButton from "../../ui/BuyNowButton";
import { useDeleteSaved } from "./useDeleteSaved";
import { useAddToCart } from "./useAddToCart";

const SavedList = ({ item, userId }) => {
  const { id, products } = item;
  const { deleteSaved } = useDeleteSaved();

  const handleDelete = () => {
    deleteSaved({ userId, authSavedId: id });
  };

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between bg-white p-4 rounded-lg border shadow-md mb-6">
      <div className="flex gap-5">
        <img
          src={products.image}
          alt={products.name}
          className="w-[6rem] h-[6rem] object-cover rounded-md"
        />
        <div className="flex flex-col justify-between">
          <h1 className="text-lg font-semibold mb-2 mb:text-[15px]">{products.name}</h1>
          <p className="text-xl font-bold text-gray-900 mb:text-[20px]">{formatCurrency(products.price)}</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-end gap-4 mt-4 lg:mt-0">
        <Button className="text-red-500 hover:text-red-700 flex items-center" onClick={handleDelete}>
          <HiTrash className="mr-1" /> Remove
        </Button>
        <div className="flex gap-4">
          <AddToCartButton quantity={1} userId={userId} productId={products?.id} />
          <BuyNowButton />
        </div>
      </div>
    </div>
  );
};

export default SavedList;