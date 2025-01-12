import Logo from "./Logo";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Account from "./Account";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-indigo-600 shadow-md">
      <Logo className="text-white text-2xl font-bold font-montserrat" />
      <Navbar/>
      <SearchBar />
      <div className="flex gap-4">
        <Account/>
        <Cart/>
      </div>
    </div>
  );
};

export default Header;
