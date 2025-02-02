import { CiHeart } from "react-icons/ci";
import { HiUser } from "react-icons/hi";
import { LiaBoxSolid } from "react-icons/lia";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import useLogout from "../features/authentication/useLogout";

const AccountDropdown = ({ showDropdown, setShowDropDown }) => {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const { isPending, user } = useUser();

  return (
    <>
      {showDropdown && (
        <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md w-48 p-4 z-10">
          <div className="flex flex-col space-y-2">
            {user?.role === "authenticated" ? (
              <Button
                className="w-full bg-indigo-600 text-white hover:bg-indigo-500 transition duration-300 py-2 rounded-md"
                disabled={isPending}
                onClick={() => logout()}
              >
                Logout
              </Button>
            ) : (
              <Button
                className="w-full bg-indigo-600 text-white hover:bg-indigo-500 transition duration-300 py-2 rounded-md"
                onClick={() => navigate("/signup") }
              >
                Sign Up
              </Button>
            )}
            <div className="flex flex-col space-y-1">
              <p
                className="flex items-center gap-3 text-gray-800 text-sm font-medium hover:bg-gray-100 rounded-md p-2 transition duration-200 cursor-pointer"
                onClick={() => { navigate("/account"), setShowDropDown(false)}}
              >
                <HiUser className="text-xl text-indigo-600" />
                <span>My Account</span>
              </p>
              <p
                className="flex items-center gap-3 text-gray-800 text-sm font-medium hover:bg-gray-100 rounded-md p-2 transition duration-200 cursor-pointer"
                onClick={() => { navigate("/orders"), setShowDropDown(false)}}
              >
                <LiaBoxSolid className="text-xl text-indigo-600" />
                <span>Orders</span>
              </p>
              <p
                className="flex items-center gap-3 text-gray-800 text-sm font-medium hover:bg-gray-100 rounded-md p-2 transition duration-200 cursor-pointer"
                onClick={() => { navigate("/saved"), setShowDropDown(false)}}
              >
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
