import React from "react";

const ShimmerEffect = () => (
  <div className="grid grid-cols-4 gap-5 mx-auto my-10">
    {[...Array(12)].map((_, index) => (
      <div
        className="relative overflow-hidden bg-gray-200 rounded-lg shimmer-box animate-shimmer"
        key={index}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>
    ))}
  </div>
);

export default ShimmerEffect;
