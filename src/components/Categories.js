import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CategoryShimmer } from "./Shimmer";
import { handleScrollTop } from "../utils/Helper";
import { CATEGORY_IMG_URL } from "../utils/constants";
import useRestaurantData from "../utils/useRestaurantData";
import { SampleNextArrow, SamplePrevArrow } from "../utils/utils";

const Categories = () => {
  const { categoryImgCardsData } = useRestaurantData();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3.5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!categoryImgCardsData) return <CategoryShimmer />;
  return (
    <div className="categories slider-container">
      <h1>What's on your mind?</h1>

      {categoryImgCardsData.length === 0 ? (
        <CategoryShimmer />
      ) : (
        <Slider {...settings}>
          {categoryImgCardsData.map((card, index) => {
            return (
              <Link
                to={
                  "/collections/" +
                  card?.action?.link?.split("=")[1]?.split("&")[0]
                }
                onClick={() => handleScrollTop()}
                key={index}
              >
                <img
                  className="mx-0 md:mx-4"
                  src={CATEGORY_IMG_URL + card.imageId}
                />
              </Link>
            );
          })}
        </Slider>
      )}
      <hr />
    </div>
  );
};

export default Categories;
