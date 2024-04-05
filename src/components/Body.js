import { useState } from "react";
import { Link } from "react-router-dom";

import useRestaurantData from "../utils/useRestaurantData";
import useCheckOnline from "../utils/useCheckOnline";
import RestaurantCard from "./RestaurantCard";
import { handleScrollTop } from "../utils/Helper";
import FilteredButton from "./FilteredButton";
import { Shimmer } from "./Shimmer";

const Body = () => {
  const onlineStatus = useCheckOnline();
  const { AllRes, FilteredRes, VegLabelCard, setFilteredRes } =
    useRestaurantData();
  const rescards = AllRes;
  const [searchVal, setSearchVal] = useState("");

  if (onlineStatus == false)
    return (
      <h1>
        Looks like you're offline !!! Please Check your internet Connection
      </h1>
    );

  return (
    <div id="body-component" className="body">
      <h1>Restaurants with online food delivery in Guntur</h1>

      <div className="body-con1">
        <div className="body-search">
          <input
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Search any restaurant"
          />
          <button
            onClick={() => {
              const Filtered = AllRes.filter((res) =>
                res.info.name.toLowerCase().includes(val1.toLowerCase())
              );
              setFilteredRes(Filtered);
            }}
          >
            Search
          </button>
        </div>
        <div className="body-filters">
          <FilteredButton
            onClick={() => {
              const res = rescards?.filter((restaurant) => restaurant?.info);
              setFilteredRes(res);
            }}
            children="All"
          />
          <FilteredButton
            onClick={() => {
              const res = FilteredRes.filter(
                (restaurant) => restaurant.info.avgRating >= 4
              );
              setFilteredRes(res);
            }}
            children="Top Rated"
          />
          <FilteredButton
            onClick={() => {
              const res = FilteredRes.filter(
                (restaurant) => restaurant.info.veg
              );
              setFilteredRes(res);
            }}
            children="Veg"
          />
          <FilteredButton
            onClick={() => {
              const res = FilteredRes.filter(
                (restaurant) => restaurant.info.sla.deliveryTime <= 25
              );
              setFilteredRes(res);
            }}
            children="Fast Delivery"
          />
          <FilteredButton
            onClick={() => {
              const res = FilteredRes.filter(
                (restaurant) =>
                  restaurant.info.aggregatedDiscountInfoV3?.discountTag
              );
              setFilteredRes(res);
            }}
            children="Best Offers"
          />
        </div>
      </div>

      {AllRes?.length == 0 ? (
        <div className="mt-6">
          <Shimmer />
        </div>
      ) : (
        <div className="body-con2">
          {FilteredRes.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                onClick={() => handleScrollTop()}
                key={restaurant?.info?.id}
              >
                {restaurant.info?.veg ? (
                  <VegLabelCard resData={restaurant?.info} />
                ) : (
                  <RestaurantCard resData={restaurant?.info} />
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
