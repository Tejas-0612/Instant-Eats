import React from "react";
import { OFFER_LOGO_URL } from "../utils/constants";

const RestaurantMenuOffer = (offers) => {
  const { couponCode, description, header, offerLogo } = offers;

  return (
    <div className="border-2 gap-2 p-2 ">
      <h4 className="flex">
        <img src={OFFER_LOGO_URL + offerLogo} className="mr-2" />
        {header}
      </h4>
      <div>
        <h5 className="text-gray-400 text-xs">
          {couponCode} |&nbsp;
          {description}
        </h5>
      </div>
    </div>
  );
};

export default RestaurantMenuOffer;
