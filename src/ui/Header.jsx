import Logo from "./Logo";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Account from "./Account";
import SearchBar from "./SearchBar";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { useDetectClick } from "../hooks/useDetectClick";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const ref = useDetectClick(()=>setOpenMenu(false))
  const handleClose = () =>{
    setOpenMenu(false)
  }
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-indigo-600 shadow-md mb:px-2 mb:py-2 mb:flex-col" >
      <Logo />
      <Navbar className="mb:hidden" />
      <div className="mb:relative mb:flex mb:items-center mb:justify-between mb:w-full" ref={ref}>
        <p
          className="hidden mb:text-softWhite mb:block mb:text-[25px]"
          onClick={() => setOpenMenu((show) => !show)}
        >
          <IoMenu />
        </p>
        {openMenu && (
          <Navbar className="hidden mb:absolute mb:top-[4rem] mb:left-0 mb:flex mb:flex-col mb:gap-2 mb:bg-indigo-600 mb:py-4 mb:px-4 mb:w-[15rem]" close={handleClose} />
        )}

        <SearchBar />
        <Cart className="hidden mb:block" />
      </div>
      <div className="flex gap-4">
        <Account className="mb:hidden" />
        <Cart className="mb:hidden" />
      </div>
    </div>
  );
};

export default Header;
