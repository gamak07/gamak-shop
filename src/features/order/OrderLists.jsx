import { formatCurrency } from "../../utils/helper";
import { useCancelOrder } from "./useCancelOrder";
import {useUpdateStock} from '../products/useUpdateStock'
import { useUpdateOrder } from "./useUpdateOrder";
import { useEffect } from "react";

const OrderLists = ({ order, userId }) => {
  const { cancel } = useCancelOrder();
  const { update } = useUpdateStock()
  const {updateStatus} = useUpdateOrder()

  

  const formattedDate = new Date(order.delivery_date)
    .toISOString()
    .split("T")[0];

  const handleCancelOrder = () => {
    // Add logic to cancel the order
    alert(`Cancel order with ID: ${order.id}`);
    cancel({ userId, cancelId: order.id });
    update({productId: order.product_id, quantity: order.quantity, type:'add'})
  };

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    if (formattedDate === today && order.status !== "Delivered") {
      updateStatus(order.id);
    }
  }, [formattedDate, order.status, updateStatus, order.id]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* Order Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Order #{order.order_id}
          </h2>
          <p className="text-sm text-gray-500">
            Placed on {new Date(order.created_at).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-500">Delivery on {formattedDate}</p>
        </div>
        <span
          className={`px-3 py-1 text-sm font-semibold rounded-full ${
            order.status === "Delivered"
              ? "bg-green-100 text-green-800"
              : order.status === "Pending"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
          }`}
        >
          {order.status}
        </span>
      </div>

      {/* Order Items */}
      <div className="border-t pt-4">
        <div className="flex items-center mb-4">
          <img
            src={order.products.image}
            alt={order.products.name}
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div className="ml-4 flex-1">
            <h3 className="font-medium text-gray-800">{order.products.name}</h3>
            <p className="text-sm text-gray-500">Quantity: {order.quantity}</p>
          </div>
          <p className="text-sm font-semibold text-gray-800">
            {formatCurrency(order.products.price)}
          </p>
        </div>
      </div>

      {/* Order Footer */}
      <div className="flex justify-between items-center mt-4">
        {/* <p className="text-lg font-semibold text-gray-800">
          Total: {formatCurrency(order.total_amount)}
        </p> */}
        {order.status === "pending" && (
          <button
            onClick={handleCancelOrder}
            className={`px-4 py-2 text-white rounded-lg ${
              order.status === "Pending"
                ? "bg-red-600 hover:bg-red-700"
                : "bg-gray-400 "
            }`}
            //   disabled={order.status !== "Pending"}
          >
            Cancel Order
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderLists;
