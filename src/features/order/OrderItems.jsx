import { useOrder } from "./useOrder";
import Loading from "../../ui/Loading";
import { useUser } from "../authentication/useUser";
import OrderLists from "./OrderLists";

const OrderItems = () => {
    const {user} = useUser()
    const { orders, isPending } = useOrder(user.id);

    if (isPending) return <Loading />;
    console.log(orders)

  if (!orders || orders.length === 0) {
    return <div className="text-center py-8">No orders found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Orders</h1>
      <div className="space-y-6">
        {orders.map((order) => (
          <OrderLists key={order.id} order={order} userId={user?.id} />
        ))}
      </div>
    </div>
  );
};

export default OrderItems;