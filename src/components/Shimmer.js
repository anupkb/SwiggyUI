import React from "react";
import "./css/shimmer.css";

const ShimmerEffect = () => (
  <div className="shimmer-grid">
    {[...Array(12)].map((_, index) => (
      <div className="shimmer-box" key={index}></div>
    ))}
  </div>
);

export default ShimmerEffect;
