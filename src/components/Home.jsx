

import { Link } from "react-router-dom";
import Body from "./Body";
import About from "./About";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white">

      {/* ================= HERO SECTION ================= */}
      <div
        className="min-h-[90vh] flex flex-col items-center text-center px-4 relative overflow-hidden"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70 "></div>

        {/* FLOATING BG */}
        <div className="absolute w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-orange-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-6xl pt-5">

          {/* TEXT */}
          <h1 className="text-2xl md:text-6xl font-bold leading-tight ">
            Order Food. Fast Delivery  <br />
            Discover the best restaurants.
          </h1>

          <p className="text-gray-300 mt-4 text-sm md:text-lg">
            Your favourite meals at your doorstep 🍔
          </p>

         <Link to="/Body" ><button className="mt-4 px-6 py-2 bg-yellow-400 text-black rounded-xl font-semibold hover:bg-yellow-300 transition shadow-lg">
            Order Now
          </button>
          </Link>

          {/* CARDS */}
          <div className=" relative mt-2 flex flex-col md:flex-row justify-center gap-10">

            {/* FOOD DELIVERY */}
            <Link to="/body">
              <div className="animate-float bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden w-full md:w-80 shadow-2xl hover:scale-105 transition duration-300">
                <img
                  src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
                  className="h-44 w-full object-cover"
                  alt="food"
                />
                <div className="p-5">
                  <h2 className="text-xl font-bold text-yellow-400">
                    FOOD DELIVERY
                  </h2>
                  <p className="text-gray-300 text-sm">
                    From top restaurants near you
                  </p>
                </div>
              </div>
            </Link>

            {/* ABOUT */}
            <Link to="/about">
              <div className="animate-float bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden w-full md:w-80 shadow-2xl hover:scale-105 transition duration-300">
                <img
                  src="https://images.unsplash.com/photo-1526367790999-0150786686a2"
                  className="h-44 w-full object-cover"
                  alt="delivery"
                />
                <div className="p-5">
                  <h2 className="text-xl font-bold text-yellow-400">
                    WHY CHOOSE US
                  </h2>
                  <p className="text-gray-300 text-sm">
                    Fast • Fresh • Safe delivery
                  </p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>
      

      {/* ================= CATEGORIES ================= */}
      <div className="px-6 mt-20 mb-10">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6">
          🍔 Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { name: "Pizza", img: "https://i.pinimg.com/736x/27/b6/b5/27b6b5a5f5765981c75d4ae1cd469f5e.jpg" },
            { name: "Burger", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },
            { name: "Biryani", img: "https://i.pinimg.com/736x/ea/0d/85/ea0d857a728002af40b932261b10906b.jpg" },
            { name: "Drinks", img: "https://images.unsplash.com/photo-1544145945-f90425340c7e" },
            { name: "Dessert", img: "https://images.unsplash.com/photo-1551024506-0bccd828d307" }
          ].map((item, i) => (
            <div key={i} className="relative h-40 rounded-xl overflow-hidden group cursor-pointer">
              <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60"></div>
              <h3 className="absolute bottom-3 left-3 text-white font-bold">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* ================= BODY ================= */}
      <div className="mt-20">
        <Body />
      </div>

      {/* ================= OFFER ================= */}
      <div className="px-6 mt-20">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-xl text-black text-center">
          <h2 className="text-2xl font-bold">🔥 50% OFF on First Order</h2>
          <p className="mt-2">Use code: SHA50</p>
        </div>
      </div>

      {/* ================= ABOUT ================= */}
      <div className="mt-20">
        <About />
      </div>

    </div>
  );
}

export default Hero;