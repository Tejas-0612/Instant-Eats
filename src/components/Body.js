import { useState } from "react";
import { Link } from "react-router-dom";

import useRestaurantData from "../utils/useRestaurantData";
import useCheckOnline from "../utils/useCheckOnline";
import RestaurantCard from "./RestaurantCard";
import { filterData, handleScrollTop } from "../utils/Helper";
import FilteredButton from "./FilteredButton";
import { Shimmer } from "./Shimmer";

const Body = () => {
  const onlineStatus = useCheckOnline();
  const { AllRes, FilteredRes, VegLabelCard, setFilteredRes } =
    useRestaurantData();
  const rescards = AllRes;
  const [searchVal, setSearchVal] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  if (onlineStatus == false)
    return (
      <h1>
        Looks like you're offline !!! Please Check your internet Connection
      </h1>
    );

  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRes(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRes(restaurants);
    }
  };

  return (
    <div id="body-component" className="body">
      <h1>Restaurants with online food delivery in Guntur</h1>

      <div className="body-con1">
        <div className="body-search">
          <input
            type="text"
            value={searchVal}
            onChange={(e) => {
              setSearchVal(e.target.value);
              searchData(e.target.value, AllRes);
            }}
            placeholder="Search any restaurant"
          />
          <button
            onClick={() => {
              searchData(searchVal, AllRes);
            }}
          >
            Search
          </button>
        </div>
        {errorMessage && <div className="error-container">{errorMessage}</div>}

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
