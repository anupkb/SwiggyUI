import React from "react";

const ShimmerEffect = () => {
  return (
    <div className="grid grid-cols-4 gap-5 mx-auto my-10">
      {[...Array(12)].map((_, index) => (
        <div
          className="relative overflow-hidden bg-gray-200 rounded-lg shimmer-box"
          key={index}
        >
          <div className="absolute inset-0 animate-shimmer"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerEffect;
