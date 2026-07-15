import { useState, useEffect, useRef } from "react";
import { resData } from "../assets/mockData";
import Shimmer from "./Shimmer";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function Category() {
  const [data, setdata] = useState(null);
  const carouselRef = useRef(null);

  const imgurl = "https://media-assets.swiggy.com/swiggy/image/upload/";

  function moveLeft() {
    carouselRef.current.scrollLeft -= 600;
  }

  function moveRight() {
    carouselRef.current.scrollLeft += 600;
  }

  useEffect(() => {
    setTimeout(() => {
      setdata(resData);
    }, 1500);
  }, []);

  if (!data) return <Shimmer />;

  return (
    <div className="p-4 md:p-8 relative bg-black text-white">

      {/* TITLE */}
      <h2 className="mb-6 text-xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
        What's on your mind?
      </h2>

      {/* ARROWS */}
      <div className="hidden md:flex absolute top-[30px] right-[60px] gap-3">
        <FaArrowCircleLeft
          className="text-gray-500 hover:text-yellow-400 transition duration-300 cursor-pointer hover:scale-110"
          size={40}
          onClick={moveLeft}
        />
        <FaArrowCircleRight
          className="text-gray-500 hover:text-yellow-400 transition duration-300 cursor-pointer hover:scale-110"
          size={40}
          onClick={moveRight}
        />
      </div>

      {/* CAROUSEL */}
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden"
      >
        {data?.data?.cards?.[0]?.card?.card?.imageGridCards?.info?.map(
          (item) => (
            <div
              key={item.id}
              className="flex-none text-center group"
            >

              {/* IMAGE CARD */}
              <div className="bg-gradient-to-b from-[#1a1a1a] to-black p-2 rounded-xl border border-gray-800 shadow-lg group-hover:border-yellow-500 transition duration-300">
                
                <img
                  src={imgurl + item.imageId}
                  alt={item.action?.text}
                  className="w-[80px] h-[100px] sm:w-[110px] sm:h-[140px] md:w-[150px] md:h-[190px] object-cover rounded-lg transition duration-300 group-hover:scale-105"
                />

              </div>


            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Category;