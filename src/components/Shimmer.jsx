
function Shimmer() {
  return (
    <div className="bg-black min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 mt-20">
      {Array(12)
        .fill("")
        .map((_, i) => (
          <div
            key={i}
            className="bg-gray-900 p-4 rounded-lg shadow-md"
          >
            {/* Image shimmer */}
            <div className="w-full h-40 rounded-lg bg-gray-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse"></div>
            </div>

            {/* Text shimmer */}
            <div className="h-4 bg-gray-800 rounded mt-4 w-3/4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse"></div>
            </div>

            <div className="h-4 bg-gray-800 rounded mt-2 w-1/2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse"></div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Shimmer;