import React from "react";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbToolsKitchen3 } from "react-icons/tb";
import { IMG_SMALL_URL } from "../utils/constants";

const RestaurantMenuProfile = (restInfo) => {
  const {
    name,
    avgRating,
    cuisines,
    locality,
    costForTwoMessage,
    cloudinaryImageId,
    totalRatingsString,
  } = restInfo;

  return (
    <div className="res-menu-profile">
      <div className="res-menu-profile-img">
        <img src={IMG_SMALL_URL + cloudinaryImageId} alt="card-img" />
      </div>
      <div className="res-menu-profile-des">
        <h1>{name}</h1>
        <div className="w-full flex my-4">
          <div className="res-menu-details">
            {cuisines && (
              <h2>
                <TbToolsKitchen3 />
                {cuisines?.join(", ")}
              </h2>
            )}
            {locality && (
              <h2>
                <FaLocationDot /> {locality}
              </h2>
            )}
            {costForTwoMessage && (
              <p className="font-bold">{costForTwoMessage}</p>
            )}
          </div>
          <div className="res-menu-rating">
            <h1>
              <FaStar className="text-green-600" /> {avgRating}
            </h1>
            <p className="text-sm">{totalRatingsString}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default RestaurantMenuProfile;
