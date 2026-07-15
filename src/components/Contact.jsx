function Contact() {
  return (
    <div className="bg-black text-white min-h-screen p-6">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-4">
        📞 Contact SHAGO Delivery
      </h1>

      <p className="text-center text-gray-400 mb-10 max-w-xl mx-auto">
        Have questions or need help with your order? Reach out to us anytime. 
        We are here to help you 🚀
      </p>

      {/* CONTAINER */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE - CONTACT INFO */}
        <div className="space-y-6">

          <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:border-yellow-400 transition">
            <h3 className="text-yellow-400 text-lg mb-1">📍 Address</h3>
            <p className="text-gray-400">Coimbatore, Tamil Nadu, India</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:border-yellow-400 transition">
            <h3 className="text-yellow-400 text-lg mb-1">📞 Phone</h3>
            <p className="text-gray-400">+91 98765 43210</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:border-yellow-400 transition">
            <h3 className="text-yellow-400 text-lg mb-1">📧 Email</h3>
            <p className="text-gray-400">support@shago.com</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:border-yellow-400 transition">
            <h3 className="text-yellow-400 text-lg mb-1">⏰ Working Hours</h3>
            <p className="text-gray-400">9:00 AM - 11:00 PM</p>
          </div>

        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

          <form className="space-y-5">

            <div>
              <label className="text-gray-400 text-sm">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 p-3 rounded-md bg-black border border-gray-700 focus:border-yellow-400 outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-3 rounded-md bg-black border border-gray-700 focus:border-yellow-400 outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm">Message</label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full mt-1 p-3 rounded-md bg-black border border-gray-700 focus:border-yellow-400 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-md hover:bg-yellow-300 transition"
            >
              Send Message 🚀
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;