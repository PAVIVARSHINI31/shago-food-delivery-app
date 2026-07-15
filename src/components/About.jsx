
function About() {
  return (
    <div className="bg-black text-white min-h-screen p-6 overflow-hidden">

     
      <h2 className="text-3xl font-bold text-yellow-400 text-center mb-4">
        🚚 About SHAGO Delivery
      </h2>

      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
        Welcome to <span className="text-yellow-400 font-semibold">SHAGO Delivery</span>! 
        We deliver your favorite food quickly and safely to your doorstep. 
        Enjoy fresh meals, fast delivery, and a smooth ordering experience.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-16">

        <div className="bg-gray-900 p-6 rounded-lg text-center border border-gray-800 hover:border-yellow-400 hover:scale-105 transition">
          <h3 className="text-yellow-400 text-xl mb-2">🛵 Fast Delivery</h3>
          <p className="text-gray-400">Lightning fast delivery at your location.</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg text-center border border-gray-800 hover:border-yellow-400 hover:scale-105 transition">
          <h3 className="text-yellow-400 text-xl mb-2">🍱 Fresh Food</h3>
          <p className="text-gray-400">Delivered hot & fresh from top restaurants.</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg text-center border border-gray-800 hover:border-yellow-400 hover:scale-105 transition">
          <h3 className="text-yellow-400 text-xl mb-2">📱 Easy Order</h3>
          <p className="text-gray-400">Simple app interface for quick ordering.</p>
        </div>

      </div>

 
      <h2 className="text-2xl text-center text-yellow-400 mb-10">
        📸 Delivery Moments
      </h2>

 
      <div className="relative w-full h-[300px] md:h-[350px]">

     
        <svg className="absolute top-10 w-full" viewBox="0 0 1000 200">
          <path
            d="M0,100 Q250,0 500,100 T1000,100"
            stroke="#facc15"
            strokeWidth="3"
            fill="transparent"
          />
        </svg>

     
        <div className="absolute top-8 left-0 right-0 flex justify-around text-yellow-400 text-xl animate-pulse">
          <span>💡</span>
          <span>💡</span>
          <span>💡</span>
          <span>💡</span>
          <span>💡</span>
        </div>

        
        <div className="absolute top-16 w-full flex justify-around items-start">

          <div className="flex flex-col items-center">
            <div className="w-[2px] h-10 bg-yellow-400"></div>
            <img
              src="https://www.salepoint.com/wp-content/uploads/RestaurantOnlineOrder.png"
              alt="delivery food"
              className="w-28 md:w-36 rounded-md border-4 border-white shadow-lg rotate-[-8deg] hover:rotate-0 hover:scale-110 transition"
            />
          </div>

          <div className="flex flex-col items-center mt-6">
            <div className="w-[2px] h-12 bg-yellow-400"></div>
            <img
              src="https://img.freepik.com/premium-photo/generative-ai-busy-chefs-working-restaurant-kitchen-blurred-background_93150-30461.jpg"
              alt="delivery rider"
              className="w-28 md:w-36 rounded-md border-4 border-white shadow-lg rotate-[6deg] hover:rotate-0 hover:scale-110 transition"
            />
          </div>

         
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-10 bg-yellow-400"></div>
            <img
              src="https://img.freepik.com/premium-photo/man-is-packing-food-into-paper-eco-boxes-indoors-restaurant_146671-89319.jpg"
              alt="online food order"
              className="w-28 md:w-36 rounded-md border-4 border-white shadow-lg rotate-[-5deg] hover:rotate-0 hover:scale-110 transition"
            />
          </div>

          {/* IMAGE 4 */}
          <div className="flex flex-col items-center mt-8">
            <div className="w-[2px] h-14 bg-yellow-400"></div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/416/082/original/delivery-man-on-map-vector.jpg"
              alt="food packaging"
              className="w-28 md:w-36 rounded-md border-4 border-white shadow-lg rotate-[7deg] hover:rotate-0 hover:scale-110 transition"
            />
          </div>

          {/* IMAGE 5 */}
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-10 bg-yellow-400"></div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/067/449/907/non_2x/successful-food-delivery-to-customer-concept-illustration-vector.jpg"
              alt="food delivery box"
              className="w-28 md:w-36 rounded-md border-4 border-white shadow-lg rotate-[-4deg] hover:rotate-0 hover:scale-110 transition"
            />
          </div>

        </div>
      </div>

    </div>
  );
}

export default About;