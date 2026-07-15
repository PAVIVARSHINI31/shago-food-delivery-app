

import { TbHomeSpark } from "react-icons/tb";
import { FcAbout } from "react-icons/fc";
import { MdContactPhone } from "react-icons/md";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { TbMessageReportFilled } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";


function Header() {
  const cartData = useSelector((state) => state.cart.data);

  return (
    <div className="w-full bg-black px-4 py-3 flex flex-col md:flex-row items-center justify-between">

      {/* Logo Section */}
      <Link
        to="/"
        className="flex items-center gap-3 text-white mb-3 md:mb-0"
      >
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-yellow-400"
        />
        <h1 className="text-lg md:text-xl font-bold text-yellow-400">
          SHAGO
        </h1>
      </Link>

      {/* Menu Section */}
      <ul className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-8 text-sm md:text-base text-yellow-400">

        <li className="flex items-center gap-1 hover:text-white cursor-pointer">
          <TbHomeSpark />
          <Link to="/">HOME</Link>
        </li>

        <li className="flex items-center gap-1 hover:text-white cursor-pointer">
          <TbMessageReportFilled />
          <Link to="/About">ABOUT</Link>
        </li>

        <li className="flex items-center gap-1 hover:text-white cursor-pointer">
          <MdContactPhone />
          <Link to="/Contact">CONTACT</Link>
        </li>

        <li className="flex items-center gap-1 hover:text-white cursor-pointer">
          <FaShoppingCart />
          <Link to="/Cart">Cart ({cartData.length})</Link>
        </li>

       


      </ul>
    </div>
  );
}

export default Header;