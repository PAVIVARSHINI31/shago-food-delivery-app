
import { useState, useEffect, useRef } from "react";
import Bcard from "./Bcard";
import Shimmer from "./Shimmer";
import { resData } from "../assets/mockData";
import { RiSearchEyeLine } from "react-icons/ri";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Category from "./Category";

function Body() {
  const [data, setdata] = useState(null);
  const [filter, setfilter] = useState([]);

  const imgurl = "https://media-assets.swiggy.com/swiggy/image/upload/";
  

  useEffect(() => {
    setTimeout(() => {
      setdata(resData);
      setfilter(
        resData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    }, 1500);
  }, []);

  const filtercards = (e) => {
    const value = e.target.value.toLowerCase();

    const result =
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.filter(
        (item) =>
          item.info.name.toLowerCase().includes(value)
      );

    setfilter(result);
  };



  return (
    <div className="bg-black min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 pt-6 md:pt-10 text-white pb-10 ">

      <Category/>

      <div className="px-6 mt-20">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6">
          ⭐ Popular Restaurants
        </h2>

        
      </div>
      <div className="flex justify-center sm:justify-end mt-2 mb-6 md:mb-8">
        <div className="flex w-full sm:w-auto">
          <input
            onChange={filtercards}
            placeholder="Search restaurant..."
            className="w-full sm:w-64 px-4 py-2 bg-black border border-yellow-500 text-white rounded-l-lg outline-none"
          />
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-r-lg">
            <RiSearchEyeLine />
          </button>
        </div>
      </div>

      
        
      <div className="grid gap-4 sm:gap-6 md:gap-8 
                      grid-cols-2 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4">
                        
        

        {filter.map((item, index) => (
          <Bcard key={index} value={item} img={imgurl} />
        ))}
      </div>
    </div>
  );
}

export default Body;