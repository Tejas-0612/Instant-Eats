import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import useRestaurantData from "../utils/useRestaurantData";
import { SampleNextArrow, SamplePrevArrow } from "../utils/utils";
import { handleScrollTop } from "../utils/Helper";
import { TopChainShimmer } from "./Shimmer";

const TopChains = () => {
  const { topChains } = useRestaurantData();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container top-chains">
      <h1>Top Chains</h1>
      {topChains.length === 0 ? (
        <TopChainShimmer />
      ) : (
        <Slider {...settings}>
          {topChains.map((chain, index) => (
            <Link
              to={"/restaurant/" + chain?.info?.id}
              key={index}
              onClick={() => handleScrollTop()}
            >
              <RestaurantCard resData={chain?.info} />
            </Link>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default TopChains;
