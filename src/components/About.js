import React from "react";
import useHomeData from "../utils/useHomeData";

const About = () => {
  const { restaurants, menu } = useHomeData();
  console.log(`Res:`, restaurants);
  console.log(`Menu:`, menu);

  return (
    <div>
      <h3>About Page!</h3>
    </div>
  );
};

export default About;
