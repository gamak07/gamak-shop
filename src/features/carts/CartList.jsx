import { HiTrash } from "react-icons/hi";
import { formatCurrency } from "../../utils/helper";
import ItemCount from "../../ui/ItemCount";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./cartSlice";
import { decrement, increment } from "./countSlice";
import { useDeleteAuthCart } from "./useDeleteAuthcart";
import { useUpdateCartQuantity } from "./useUpdateCartQuantity";

const CartList = ({ product, userId, cart }) => {
  const { deleteCart } = useDeleteAuthCart();
  const { updateQuantity } = useUpdateCartQuantity();
  const { image, name, price, itemLeft, id } = product;

  const cartItem = cart.find((item) => item.id === id);
  const authCartId = cartItem?.id;

  console.log(id, authCartId)

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (userId) {
      deleteCart({ userId, authCartId });
    } else {
      dispatch(removeFromCart(id));
    }
  };

  const reduxCount = useSelector((state) => state.count.items[id] || 1);

  const count = userId ? cartItem?.quantity || 1 : reduxCount;
  const totalPrice = price * count;
  const handleDecrement = () => {
    if (userId) {
      updateQuantity({userId, productId: authCartId, newQuantity: count - 1});
    } else {
      dispatch(decrement({ id }));
    }
  };
  const handleIncrement = () => {
    if (count < itemLeft) {
      if (userId) {
        updateQuantity({userId, productId: authCartId, newQuantity: count + 1});
      } else {
        dispatch(increment({ id }));
      }
    }
  };

  return (
    <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center space-x-4">
        <div className="flex flex-col gap-2">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 object-cover rounded-md"
          />
          <Button
            className="text-red-500 hover:text-red-700 flex items-center"
            onClick={() => handleDelete(id)}
          >
            <HiTrash className="mr-1" /> Remove
          </Button>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500">{itemLeft} items left</p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end h-24">
        <p className="text-xl font-bold text-indigo-600">
          {formatCurrency(totalPrice)}
        </p>
        <div className="flex">
          <ItemCount
            id={id}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            count={count}
          />
        </div>
      </div>
    </div>
  );
};

export default CartList;
