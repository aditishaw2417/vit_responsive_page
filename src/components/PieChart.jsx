import React from "react";

function PieChart() {
  return (
    <section className="flex flex-wrap justify-center items-center gap-4">
      <div className="w-full sm:w-auto sm:flex-none relative flex justify-center items-center">
        <img src="/statistics.jpg" alt="stats" />
      </div>
      <div className="relative flex container mx-auto article-container">
        <article className="bg-gray-400 p-4 shadow-md article flex flex-col h-full">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            animi eius, repellat doloribus sed, accusamus odit harum obcaecati
            cumque cupiditate qui nisi ratione soluta quos veniam provident
            dignissimos laudantium hic.
          </p>
        </article>
      </div>
    </section>
  );
}

export default PieChart;
