import React from "react";
const ArticleSection = () => {
  return (
    <section className="bg-white py-8">
      <div className="absolute w-full h-full z-0">
        <video
          src="/bg_vid.mp4"
          autoPlay
          muted
          loop
          className="w-full h-100 object-cover"
        />
      </div>
      <div className="container mx-auto article-container relative z-10">
        <h2 className="text-3xl font-semibold mb-4 text-center justify-center text-yellow-500 m-3">
          Companies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Article 1 */}
          <div className="bg-gray-400 p-4 shadow-md article flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2">Microsoft</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consectetur ullamcorper odio, vel tincidunt ligula dignissim vel.
            </p>
            <div className="mt-auto">
              <button className="show-modal px-4 py-2 mr-4 bg-red-700 hover:bg-green-700 text-white rounded">
                More Info
              </button>
              <button className="px-4 py-2 bg-red-700 hover:bg-green-700 text-white rounded">
                Apply Now!
              </button>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-gray-400 p-4 shadow-md article flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2">TCS</h3>
            <p>
              Sed eu augue quis elit euismod volutpat. Vivamus non congue odio,
              ac finibus dolor. Praesent fringilla blandit turpis ut consequat.
            </p>
            <div className="mt-auto">
              <button className="show-modal px-4 py-2 mr-4 bg-red-700 hover:bg-green-700 text-white rounded">
                More Info
              </button>
              <button className="px-4 py-2 bg-red-700 hover:bg-green-700 text-white rounded">
                Apply Now!
              </button>
            </div>
          </div>

          {/* Article 3 */}
          <div className="bg-gray-400 p-4 shadow-md article flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2">Accenture</h3>
            <p>
              Aliquam erat volutpat. Proin euismod augue ut massa rhoncus
              sollicitudin. Ut in fermentum dolor.
            </p>
            <div className="mt-auto">
              <button className="show-modal px-4 py-2 mr-4 bg-red-700 hover:bg-green-700 text-white rounded">
                More Info
              </button>
              <button className="px-4 py-2 bg-red-700 hover:bg-green-700 text-white rounded">
                Apply Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
