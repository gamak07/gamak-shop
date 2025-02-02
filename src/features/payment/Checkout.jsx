import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateOrder } from "../order/useCreateOrder";
import { useUser } from "../authentication/useUser";
// import { useProducts } from '../products/useProducts'
import { useCart } from "../carts/useCart";
import { useClearAuthCart } from "../carts/useClearAuthCart";
import { useUpdateStock } from "../products/useUpdateStock";

const Checkout = () => {
  const { order } = useCreateOrder();
  const { user } = useUser();
  const { carts } = useCart(user?.id);
  const { clearCart } = useClearAuthCart();
  const { update } = useUpdateStock();
  // const { products } = useProducts()

  const navigate = useNavigate();
  const location = useLocation();

  const isFromCart = location.state?.fromCart;
  const productId = location.state?.productId;
  const itemPrice = location.state?.price || 0;
  const totalAmount = location.state?.total || itemPrice;
  const [formData, setFormData] = useState({
    name: user.user_metadata.fullName,
    email: user.email,
    phone: user.user_metadata.phone,
    address: user.app_metadata.address,
    amount: totalAmount,
  });

  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 2);

  const handleOrders = () => {
    if (isFromCart) {
      // Handle cart checkout
      const orderItems = carts.map((cartItem) => ({
        user_id: user?.id,
        product_id: cartItem.id,
        quantity: cartItem.quantity,
        status: "pending",
        order_id: `${Date.now()}`,
        delivery_date: deliveryDate.toISOString(),
      }));

      order(orderItems);
    } else {
      // Handle direct product checkout
      const orderItem = {
        user_id: user?.id,
        product_id: productId,
        quantity: 1,
        status: "pending",
        order_id: `${Date.now()}`,
        delivery_date: deliveryDate.toISOString(),
      };

      order([orderItem]);
    }
  };

  const handleStockUpdate = () => {
    if (isFromCart) {
      for (const cartItem of carts) {
        console.log(cartItem.product_id);
        update({ productId: cartItem.product_id, quantity: cartItem.quantity, type:'add' });
      }
    } else {
      console.log(productId);
      update({ productId: productId, quantity: 1, type:'deduct' });
    }
  };

  const handleClearCart = () => {
    clearCart(user?.id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSuccess = () => {
    handleClearCart();
    handleOrders();
    handleStockUpdate();
    navigate("/home");
  };

  const componentProps = {
    email: formData.email,
    amount: formData.amount * 100, // Convert amount to kobo
    publicKey: "pk_test_5af8a946610e1e9ca8b80bb54bd904c91aad5a2a", // Replace with your Paystack public key
    text: "Pay Now",
    onSuccess: handleSuccess,
    onClose: () => {
      prompt("Are you sure you want to close this transaction?");
    },
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-center text-2xl font-bold text-gray-700 mb-6">
        Checkout
      </h1>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-600 font-medium mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-2">Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-2">
            Address:
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-2">
            Amount:
          </label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            disabled
            required
          />
        </div>
      </form>
      <div className="mt-6">
        <PaystackButton
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          {...componentProps}
        />
      </div>
    </div>
  );
};

export default Checkout;
