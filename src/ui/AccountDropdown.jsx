import { CiHeart } from "react-icons/ci";
import { HiUser } from "react-icons/hi";
import { LiaBoxSolid } from "react-icons/lia";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const AccountDropdown = ({ showDropdown }) => {
  const navigate = useNavigate()
  return (
    <>
      {showDropdown && (
        <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md w-48 p-4 z-10">
          <div className="flex flex-col space-y-2">
            <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-500 transition duration-300 py-2 rounded-md">
              Sign In
            </Button>
            <div className="flex flex-col space-y-1">
              <p className="flex items-center gap-3 text-gray-800 text-sm font-medium hover:bg-gray-100 rounded-md p-2 transition duration-200 cursor-pointer" onClick={() =>navigate('/account')}>
                <HiUser className="text-xl text-indigo-600" />
                <span>My Account</span>
              </p>
              <p className="flex items-center gap-3 text-gray-800 text-sm font-medium hover:bg-gray-100 rounded-md p-2 transition duration-200 cursor-pointer">
                <LiaBoxSolid className="text-xl text-indigo-600" />
                <span>Orders</span>
              </p>
              <p className="flex items-center gap-3 text-gray-800 text-sm font-medium hover:bg-gray-100 rounded-md p-2 transition duration-200 cursor-pointer" onClick={() =>navigate('/saved')}>
                <CiHeart className="text-xl text-indigo-600" />
                <span>Saved Items</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountDropdown;
