
import { useEffect, useState } from "react";
import { resmenuData } from "../assets/resMockData";
import { useParams } from "react-router";
import MenuShimmer from "./MenuShimmer";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Constants/cartSlice";

function Menu() {
  let { id } = useParams();

  const cartItems = useSelector((store) => store.cart.data);

  let [menu, setmenu] = useState(null);
  let [data, setdata] = useState(null);

  const [openIndex, setOpenIndex] = useState(0);

  const dispatch = useDispatch();

  let url = "https://media-assets.swiggy.com/swiggy/image/upload/";

  const getItems = (section) => {
    let card = section?.card?.card;

    if (card?.itemCards) {
      return card.itemCards;
    }

    if (card?.categories) {
      return card.categories.flatMap((cat) => cat.itemCards);
    }

    return [];
  };

  useEffect(() => {
    let result = resmenuData.filter((item) => {
      return id == item.data.cards[2].card.card.info.id;
    });

    setTimeout(() => {
      setmenu(result[0]);

     
      let res =
        result[0].data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
          (item) =>
            item?.card?.card?.itemCards ||
            item?.card?.card?.categories
        );

      setdata(res);
    }, 1000);
  }, [id]);

  let handleClick = (x) => {
    dispatch(addItem(x));
  };

  if (!menu) return <MenuShimmer />;

  return (
    <div className="bg-black min-h-screen p-3 md:p-6 text-white">
      <div className="max-w-5xl mx-auto">

        {/* Restaurant Name */}
        <div className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400">
          {menu.data.cards[2].card.card.info.name}
        </div>

        {/* SECTIONS */}
        {data &&
          data.map((section, index) => {
            let items = getItems(section);

            return (
              <div key={index} className="mb-6">

                {/* HEADER */}
                <div
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex justify-between items-center bg-gray-800 px-6 py-3 rounded-lg cursor-pointer hover:bg-gray-700"
                >
                  <h2 className="text-lg md:text-xl font-semibold text-yellow-300">
                    {section.card.card.title}
                  </h2>

                  <span>
                    {openIndex === index ? "🔼" : "🔽"}
                  </span>
                </div>

                {/* ITEMS */}
                {openIndex === index && (
                  <div className="mt-4 space-y-4">

                    {items.map((item, i) => {
                      let info = item.card.info;

                      const isAdded = cartItems.some(
                        (cartItem) => cartItem.id === info.id
                      );

                      return (
                        <div
                          key={i}
                          className="flex flex-col md:flex-row justify-between items-center bg-gray-900 p-4 rounded-lg"
                        >

                          {/* LEFT */}
                          <div className="w-full md:w-3/4">
                            <div className="font-bold text-lg text-yellow-400">
                              {info.name}
                            </div>

                            <div className="text-gray-300">
                              ₹
                              {info.defaultPrice
                                ? info.defaultPrice / 100
                                : info.finalPrice
                                ? info.finalPrice / 100
                                : info.price / 100}
                            </div>

                            <div className="text-yellow-400 text-sm">
                              ⭐ {info?.ratings?.aggregatedRating?.rating || "N/A"}
                            </div>

                            <div className="text-gray-500 text-sm">
                              {info.description}
                            </div>
                          </div>

                          {/* RIGHT */}
                          <div className="flex flex-col items-center mt-4 md:mt-0 relative">

                            <img
                              src={
                                info.imageId
                                  ? url + info.imageId
                                  : "https://www.friendlyfoodqatar.com/mt-content/uploads/2017/04/no-image.jpg"
                              }
                              alt="food"
                              className="w-32 h-24 object-cover rounded-lg"
                            />

                            <button
                              onClick={() => handleClick(info)}
                              className={`px-3 py-1 rounded-lg mt-2
                                ${
                                  isAdded
                                    ? "bg-green-500 text-white"
                                    : "bg-yellow-500 text-black"
                                }`}
                            >
                              {isAdded ? "Added" : "Add"}
                            </button>

                          </div>
                        </div>
                      );
                    })}

                  </div>
                )}

              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Menu;