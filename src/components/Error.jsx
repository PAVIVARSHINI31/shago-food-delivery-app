import { Link } from "react-router";

function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-5">
      
      {/* Error Code */}
      <h1 className="text-6xl md:text-8xl font-bold text-indigo-600 mb-4">
        404
      </h1>

      {/* Message */}
      <h2 className="text-xl md:text-2xl font-semibold mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-600 mb-6 max-w-md">
        Sorry bro 😅 the page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link to="/">
        <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition">
          Go Home
        </button>
      </Link>

    </div>
  );
}

export default Error;