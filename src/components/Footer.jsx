

import { TbHomeSpark } from "react-icons/tb";
import { FcAbout } from "react-icons/fc";
import { MdContactPhone, MdEmail } from "react-icons/md";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { TbMessageReportFilled } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";

function Footer() {
  return (
    <div className="bg-black text-white p-8 border-t border-yellow-500">

      {/* TOP GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* BRAND + ABOUT */}
        <div>
          <h2 className="text-yellow-400 font-bold text-2xl mb-3">
            SHAGO 🍔
          </h2>
          <p className="text-gray-400 text-sm">
            Fast & premium food delivery at your doorstep. Discover the best restaurants, 
            order your favorite meals, and enjoy lightning-fast delivery 🚀
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">

            <li className="flex items-center gap-2 hover:text-yellow-400">
              <TbHomeSpark />
              <Link to="/">Home</Link>
            </li>

            <li className="flex items-center gap-2 hover:text-yellow-400">
              <TbMessageReportFilled />
              <Link to="/About">About</Link>
            </li>

            <li className="flex items-center gap-2 hover:text-yellow-400">
              <MdContactPhone />
              <Link to="/Contact">Contact</Link>
            </li>
           <li className="flex items-center gap-2 hover:text-yellow-400">
              <FaShoppingCart />
              <Link to="/Cart">Cart</Link>
            </li>

             
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Contact Us</h3>

          <p className="flex items-center gap-2 text-gray-300 mb-2">
            <MdContactPhone /> +91 98765 xxxxx
          </p>

          <p className="flex items-center gap-2 text-gray-300 mb-4">
            <MdEmail /> support@shago.com
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 text-xl">
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer" />
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} 
        <span className="text-yellow-400 font-semibold"> SHAGO</span>. All rights reserved.
      </div>

    </div>
  );
}

export default Footer;