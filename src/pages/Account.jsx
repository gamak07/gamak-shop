import AddressManagement from "../features/account/AddressManagement";
import UserProfile from "../features/account/UserProfile";
import OrderHistory from "../features/account/OrderHistory";
import Password from '../features/account/Password'

const Account = () =>{
   
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Account</h1>

      {/* User Profile */}
      <UserProfile />

      {/* Order History */}
      <OrderHistory />

      {/* Address Management */}
      <AddressManagement />

      {/* Account Settings */}
      <Password />
    </div>
  );
};


export default Account