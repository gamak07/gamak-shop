import { NavLink } from "react-router-dom";
import Account from "./Account";

const Navbar = ({className, close}) => {
  // const ref = useDetectClick()
  return (
    <ul className={`flex  ${className}`}>
      <li className='mb:rounded-md mb:transition mb:duration-300 mb:w-full' onClick={close}>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-indigo-600 bg-white" : "text-white"} px-4 py-2 rounded-md font-bold text-lg transition duration-300 font-montserrat mb:w-full mb:rounded-md mb:h-full mb:px-4 mb:py-2 mb:flex mb:items-center`
          }
          to="/home"
        >
          Home
        </NavLink>
      </li>
      <li className='mb:rounded-md mb:transition mb:duration-300 mb:w-full' onClick={close}>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-indigo-600 bg-white" : "text-white"} px-4 py-2 rounded-md font-bold text-lg transition duration-300 font-montserrat mb:w-full mb:rounded-md mb:h-full mb:px-4 mb:py-2 mb:flex mb:items-center`
          }
          to="/products"
        >
          Products
        </NavLink>
      </li>
      <li className='mb:rounded-md mb:transition mb:duration-300 mb:w-full' onClick={close}>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-indigo-600 bg-white" : "text-white"} px-4 py-2 rounded-md font-bold text-lg transition duration-300 font-montserrat mb:w-full mb:rounded-md mb:h-full mb:px-4 mb:py-2 mb:flex mb:items-center`
          }
          to="/about-us"
        >
          About Us
        </NavLink>
      </li>
      <li className='mb:rounded-md mb:transition mb:duration-300 mb:w-full' onClick={close}>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-indigo-600 bg-white" : "text-white"} px-4 py-2 rounded-md font-bold text-lg transition duration-300 font-montserrat mb:w-full mb:rounded-md mb:h-full mb:px-4 mb:py-2 mb:flex mb:items-center`
          }
          to="/contact-us"
        >
        Contact Us
    
        </NavLink>
      </li>

      <Account className='hidden mb:block' />
    </ul>
  );
};

export default Navbar;
