import UserProfile from "../features/account/UserProfile";

const Account = () =>{
   
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Account</h1>

      {/* User Profile */}
      <UserProfile />

      {/* Order History */}
      <section className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">Order History</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-4 flex justify-between items-center">
            <span>Order #12345</span>
            <span className="text-green-600">Delivered</span>
          </li>
          <li className="py-4 flex justify-between items-center">
            <span>Order #12346</span>
            <span className="text-yellow-600">Processing</span>
          </li>
        </ul>
      </section>

      {/* Address Management */}
      <section className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">Address Management</h2>
        <p>123 Main Street, Apt 101</p>
        <button className="mt-2 text-blue-600 hover:underline">Edit Address</button>
      </section>

      {/* Account Settings */}
      <section className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Account Settings</h2>
        <button className="text-blue-600 hover:underline">Change Password</button>
        <br />
        <button className="text-blue-600 hover:underline">Manage Notifications</button>
      </section>
    </div>
  );
};


export default Account