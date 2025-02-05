import { useRef, useState } from "react";
import { HiUser } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AccountDropdown from "./AccountDropdown";
import { useDetectClick } from "../hooks/useDetectClick";

const Account = ({className}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Pass the refs to the hook
  const ref = useDetectClick(() => setShowDropdown(false));

  return (
    <div className={`relative ${className}`} ref={ref}>
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
      <AccountDropdown
        setShowDropDown={setShowDropdown}
        showDropdown={showDropdown}
      />
    </div>
  );
};

export default Account;
