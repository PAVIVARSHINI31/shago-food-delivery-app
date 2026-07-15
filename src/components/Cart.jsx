

import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart, addItem } from "../Constants/cartSlice";

function Cart() {
  let url = "https://media-assets.swiggy.com/swiggy/image/upload/";

  const cartItems = useSelector((store) => store.cart.data);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => {
    let price =
      item.defaultPrice
        ? item.defaultPrice / 100
        : item.finalPrice
        ? item.finalPrice / 100
        : item.price / 100;

    return sum + price;
  }, 0);

  return (
    <div className="bg-black min-h-screen text-white px-4 md:px-10 lg:px-40 py-6">

      {/* TITLE */}
      <h1 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
        Cart 🛒
      </h1>

      {/* EMPTY */}
      {cartItems.length === 0 && (
        <div className="text-gray-400 text-center mt-10">
          Cart is empty
        </div>
      )}

      {/* ITEMS */}
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gray-900 p-4 md:p-5 rounded-lg shadow-lg mb-3"
        >

          {/* LEFT */}
          <div className="w-full md:w-3/4">
            <div className="font-bold text-lg md:text-xl text-yellow-400">
              {item.name}
            </div>

            <div className="text-gray-300 mt-1">
              ₹
              {item.defaultPrice
                ? item.defaultPrice / 100
                : item.finalPrice
                ? item.finalPrice / 100
                : item.price / 100}
            </div>

            <div className="text-yellow-400 text-sm mt-1">
              ⭐ {item?.ratings?.aggregatedRating?.rating || "N/A"}
            </div>

            <div className="text-gray-500 text-sm mt-1 line-clamp-2">
              {item.description}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center gap-2 w-full md:w-auto">

            <img
              src={
                item.imageId
                  ? url + item.imageId
                  : "https://www.friendlyfoodqatar.com/mt-content/uploads/2017/04/no-image.jpg"
              }
              alt="food"
              className="w-full max-w-[140px] h-24 object-cover rounded-lg border border-gray-700"
            />

            {/* REMOVE BUTTON */}
            <button
              onClick={() => dispatch(removeItem(item.id))}
              className="bg-red-500 text-white 
                         px-4 py-2 rounded-lg
                         w-full md:w-auto
                         text-sm md:text-base
                         hover:bg-red-600 transition"
            >
              Remove
            </button>

            

          </div>
        </div>
      ))}

      {/* TOTAL */}
      {cartItems.length > 0 && (
        <div className="mt-6 border-t border-gray-700 pt-4">

          <div className="text-lg md:text-xl font-bold">
            Total: ₹{total}
          </div>

          <button
            onClick={() => dispatch(clearCart())}
            className="mt-3 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition"
          >
            Clear Cart
          </button>
        </div>
      )}

    </div>
  );
}

export default Cart;