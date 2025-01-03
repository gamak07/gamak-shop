import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex space-x-4">
      <li>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-indigo-600 bg-white" : "text-white"} px-4 py-2 rounded-md font-bold text-lg transition duration-300 font-montserrat`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-indigo-600 bg-white" : "text-white"} px-4 py-2 rounded-md font-bold text-lg transition duration-300 font-montserrat`
          }
          to="/products"
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-indigo-600 bg-white" : "text-white"} px-4 py-2 rounded-md font-bold text-lg transition duration-300 font-montserrat`
          }
          to="/about-us"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-indigo-600 bg-white" : "text-white"} px-4 py-2 rounded-md font-bold text-lg transition duration-300 font-montserrat`
          }
          to="/contact-us"
        >
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
