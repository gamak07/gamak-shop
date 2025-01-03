import { useState } from "react";
import { HiUser } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AccountDropdown from "./AccountDropdown";

const Account = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  
  return (
    <div className="relative">
      <div
        className="flex items-center bg-white px-3 py-2 rounded-md shadow-md cursor-pointer hover:bg-gray-100 transition duration-300"
        onClick={() => setShowDropdown((show) => !show)}
      >
        <p className="text-2xl text-indigo-600">
          <HiUser />
        </p>
        <p className="text-sm font-semibold flex items-center gap-1 text-gray-800 font-montserrat">
          Account{" "}
          <span>{showDropdown ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
        </p>
      </div>
      <AccountDropdown showDropdown={showDropdown} />
    </div>
  );
};

export default Account;
