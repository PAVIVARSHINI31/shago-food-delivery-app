function MenuShimmer() {
  return (
    <div className="bg-black min-h-screen p-3 md:p-6">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Restaurant Title */}
        <div className="h-8 w-1/2 bg-gray-800 rounded animate-pulse"></div>

        {/* Sections */}
        {Array(5)
          .fill("")
          .map((_, i) => (
            <div key={i} className="space-y-4">

              {/* Section Header */}
              <div className="h-12 w-full bg-gray-800 rounded-lg animate-pulse"></div>

              {/* Items */}
              {Array(3)
                .fill("")
                .map((_, j) => (
                  <div
                    key={j}
                    className="flex flex-col md:flex-row justify-between items-center bg-gray-900 p-4 rounded-lg gap-4"
                  >
                    {/* LEFT TEXT */}
                    <div className="w-full md:w-3/4 space-y-3">
                      <div className="h-5 w-2/3 bg-gray-700 rounded animate-pulse"></div>
                      <div className="h-4 w-1/4 bg-gray-700 rounded animate-pulse"></div>
                      <div className="h-4 w-1/6 bg-gray-700 rounded animate-pulse"></div>
                      <div className="h-3 w-full bg-gray-800 rounded animate-pulse"></div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-32 h-24 bg-gray-700 rounded-lg animate-pulse"></div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default MenuShimmer;