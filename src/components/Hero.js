import React from "react";

import FoodCaurosel from "./FoodCaurosel";
import { scrollToComponent } from "../utils/Helper";

export const Design = ({ className }) => {
  return <div className={`${className}`}></div>;
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-con">
        <div>
          <div className="hero-des">
            <h1>
              Easy Ordering <span className="bg-red-200">📱</span>, Happy Eating{" "}
              <span className="bg-orange-200">🍴</span> , Explore Our Menu Now
            </h1>
            <p>
              Experience the Ultimate Convenience: Order Delicious Meals Online
              Now and Satisfy Your Cravings with Just a Click!
            </p>
            <div className="hero-btns">
              <button>Offers </button>
              <button onClick={() => scrollToComponent()}>Order Now </button>
            </div>
          </div>
          <div className="hero-carousel">
            <FoodCaurosel />
          </div>
        </div>
      </div>
      <div className="hero-design">
        <Design className="hero-design1" />
        <Design className="hero-design2" />
      </div>
    </div>
  );
};

export default Hero;
