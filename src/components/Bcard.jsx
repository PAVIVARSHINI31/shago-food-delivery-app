
import { Link } from "react-router-dom";

function Bcard({ value, img }) {
  return (
    <Link
      to={"/res/" + value.info.id}
      className="bg-gray-1000 text-white  rounded-xl overflow-hidden 
       shadow-lg mb-4 hover:scale-[1.02] hover:shadow-2xl hover:border hover:border-yellow-400 transition duration-300 cursor-pointer
       cursor-pointer gap-8 "
    >
      {/* Image */}
      <img
        src={img + value.info.cloudinaryImageId}
        alt={value.info.name}
        className="w-full h-48 object-cover rounded-t-xl"
      />

      {/* Content */}
      <div className="p-2">
        <h3 className="font-bold text-yellow-400 text-lg">
          {value.info.name}
        </h3>

        <p className="text-gray-400 text-sm">
          {value.info.areaName}
        </p>

        <div className="mt-2  text-green px-2 py-1 rounded text-sm font-semibold">
          ⭐ {value.info.avgRating}
        </div>
      </div>
    </Link>
  );
}

export default Bcard;