import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import RestaurantCategory from "../components/RestaurantCategory";
import RestaurantMenuOffer from "../components/RestaurantMenuOffer";
import RestaurantMenuProfile from "../components/RestaurantMenuProfile";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import { ITEM_CDN_URL } from "../utils/constants";
import { MenuShimmer } from "../components/Shimmer";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const restaurant = useRestaurantMenu(resid);
  const [showData, setShowData] = useState(1);

  const resCart = {
    name: restaurant?.restInfo?.name,
    id: restaurant?.restInfo?.id,
    areaName: restaurant?.restInfo?.areaName,
    imgUrl: ITEM_CDN_URL + restaurant?.restInfo?.cloudinaryImageId,
    distance: restaurant?.restInfo?.sla,
    rating: restaurant?.restInfo?.avgRating,
  };

  if (
    restaurant.restInfo == null ||
    restaurant.restMenus == null ||
    restaurant.restOffer == null
  ) {
    return <MenuShimmer />;
  }

  return !restaurant ? (
    <div className="body-box res-not-page">
      <img src={IMG_RESTAURANT_NOT_URL} />
      <h3>Restaurant Not Found.</h3>
      <p>Something went wrong.</p>
      <Link to="/">
        <button>GO BACK</button>
      </Link>
    </div>
  ) : (
    <div className="menu">
      <div className="menu-profile">
        <RestaurantMenuProfile {...restaurant?.restInfo} />
      </div>
      <div className="menu-offers">
        {restaurant?.restOffer?.card?.card?.gridElements?.infoWithStyle?.offers.map(
          (offers, index) => {
            return <RestaurantMenuOffer {...offers?.info} key={index} />;
          }
        )}
      </div>
      {restaurant?.restMenus?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
        (MenuCard, index) => (
          <RestaurantCategory
            key={MenuCard?.card?.card?.title}
            title={MenuCard?.card?.card?.title}
            data={MenuCard?.card?.card}
            showData={index == showData ? true : false}
            setShowData={() => {
              setShowData(index);
            }}
            resCart={resCart}
          />
        )
      )}
    </div>
  );
};
export default RestaurantMenu;
