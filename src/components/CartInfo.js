import React from "react";
import { useDispatch } from "react-redux";

import VEG_SVG from "../images/veg.svg.png";
import NON_VEG_SVG from "../images/non-veg.svg.png";
import { decreaseCount, increaseCount } from "../utils/sliceCart";

const CartInfo = (item) => {
  const { name, itemAttribute, price, defaultPrice, id } = item[0];
  const count = item[1];
  const dispatch = useDispatch();

  const addFoodItem = (i) => {
    dispatch(increaseCount(i));
  };

  const removeFoodItem = (i) => {
    dispatch(decreaseCount(i));
  };

  return (
    <div className="flex-between my-2">
      <div className="flex">
        {itemAttribute?.vegClassifier == "VEG" ? (
          <p>
            <img src={VEG_SVG} className="w-6" />{" "}
          </p>
        ) : (
          <p>
            <img src={NON_VEG_SVG} className="w-6" />{" "}
          </p>
        )}
        <p className="ml-2 text-sm md:text-base"> {name}</p>
      </div>
      <div className="flex gap-2 md:gap-4">
        <span className="cart-info-span">
          <button
            className="border-r-2 pr-1"
            onClick={() => {
              removeFoodItem(id);
            }}
          >
            &minus;
          </button>
          <span className="text-sm">{count}</span>
          <button
            className="border-l-2 pl-1 md:pl-2"
            onClick={() => {
              addFoodItem(id);
            }}
          >
            +
          </button>
        </span>
        <p>₹{(count * (price || defaultPrice)) / 100}</p>
      </div>
    </div>
  );
};

export default CartInfo;
