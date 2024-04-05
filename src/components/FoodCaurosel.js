import React from "react";
import Slider from "react-slick";

import IMG1 from "../images/Carousel/FOODIMG1.png";
import IMG2 from "../images/Carousel/FOODIMG2.png";
import IMG3 from "../images/Carousel/FOODIMG3.png";
import IMG4 from "../images/Carousel/FOODIMG4.png";
import IMG5 from "../images/Carousel/FOODIMG5.png";
import IMG6 from "../images/Carousel/FOODIMG6.png";
import IMG7 from "../images/Carousel/FOODIMG7.png";
import IMG8 from "../images/Carousel/FOODIMG8.png";
import IMG9 from "../images/Carousel/FOODIMG9.png";

const images1 = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9];

const FoodCaurosel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyload: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "ease",
  };

  return (
    <div className="food-carousel">
      <Slider {...settings}>
        {images1.map((image, index) => (
          <div key={index} className="w-full h-[350px]">
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FoodCaurosel;
