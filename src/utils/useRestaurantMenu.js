import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resid) => {
  const [resinfo, setresinfo] = useState(null);
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    getResMenuData();
  }, []);

  const getResMenuData = async () => {
    const data = await fetch(MENU_URL + resid);
    const json = await data.json();

    setresinfo(json.data);

    const restInfo = json?.data?.cards?.find((res) =>
      res?.card?.card["@type"]?.includes("food.v2.Restaurant")
    )?.card?.card?.info;

    const restOffer = json?.data?.cards?.find((res) =>
      res?.card?.card?.gridElements?.infoWithStyle["@type"]?.includes(
        "food.v2.OfferInfoWithStyle"
      )
    );

    const restMenus = json?.data?.cards?.find((res) =>
      res?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (menu) =>
          menu?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );

    setRestaurant({ restInfo, restOffer, restMenus });
  };
  return restaurant;
};
export default useRestaurantMenu;
