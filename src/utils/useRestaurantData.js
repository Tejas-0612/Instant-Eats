import { useEffect, useState } from "react";
import RestaurantCard, { withLabelVeg } from "../components/RestaurantCard";
import { RES_DATA_URL } from "./constants";

const useRestaurantData = () => {
  const [AllRes, setAllRes] = useState([]);
  const [FilteredRes, setFilteredRes] = useState([]);
  const [topChains, setTopChains] = useState([]);
  const [categoryImgCardsData, setCategroyImgCardsData] = useState([]);
  const VegLabelCard = withLabelVeg(RestaurantCard);

  useEffect(() => {
    getResData();

    return () => {
      clearInterval(getResData);
    };
  }, []);

  const getResData = async () => {
    const data = await fetch(RES_DATA_URL);
    const json = await data.json();

    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setAllRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const categoryImgCards =
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
    setCategroyImgCardsData(categoryImgCards);

    const TopChains =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setTopChains(TopChains);
  };

  return {
    AllRes,
    FilteredRes,
    setFilteredRes,
    VegLabelCard,
    categoryImgCardsData,
    topChains,
  };
};

export default useRestaurantData;
