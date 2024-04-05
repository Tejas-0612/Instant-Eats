import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { CollectionsShimmer, Shimmer } from "../components/Shimmer";
import RestaurantCard from "../components/RestaurantCard";
import { COLLECTIONS_URL, LAT_LNG_STR } from "../utils/constants";

const CollectionItemsPage = () => {
  const { id } = useParams();
  const [allRes, setAllRes] = useState([]);
  const [collectionInfo, setCollectionInfo] = useState();

  const getCollectionsData = async () => {
    const data = await fetch(COLLECTIONS_URL + id + LAT_LNG_STR);
    const json = await data.json();

    setAllRes(json?.data?.cards.slice(2));
    setCollectionInfo(json?.data?.cards[0]?.card?.card);
  };

  useEffect(() => {
    getCollectionsData();
  }, []);

  return (
    <div className="collections">
      <div className="mx-auto my-4">
        {!collectionInfo?.title && <CollectionsShimmer />}
        <h1>{collectionInfo?.title}</h1>
        <h2>{collectionInfo?.description}</h2>
        <h3> Restaurants to explore</h3>
      </div>

      {allRes?.length == 0 ? (
        <Shimmer />
      ) : (
        <div className="collections-con">
          {allRes.map((res, index) => {
            return (
              <Link to={"/restaurant/" + res?.card?.card?.info?.id} key={index}>
                <RestaurantCard resData={res?.card?.card?.info} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CollectionItemsPage;
