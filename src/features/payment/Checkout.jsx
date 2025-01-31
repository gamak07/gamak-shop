import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const itemPrice = location.state?.price || 0;
  const totalAmount = location.state?.total || itemPrice;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    amount: totalAmount,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSuccess = () => {
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
