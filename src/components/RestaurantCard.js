import { FaStar } from "react-icons/fa";

import { RES_CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData;

  return (
    <div className="res-card basics-[250px]">
      <div className="res-card-img">
        <img src={RES_CDN_URL + cloudinaryImageId} alt="res-card img" />
      </div>
      <div className="res-card-des">
        <h1>{name.length > 30 ? name.slice(0, 25) + "..." : name}</h1>
        <div>
          <span
            className={
              (avgRating < 3.9 || avgRating == "--" ? "bg-Red" : "bg-Green") +
              " " +
              "res-card-rating"
            }
          >
            <FaStar />
            {avgRating}
          </span>{" "}
          <h4>•</h4>
          <span className="font-bold">{costForTwo}</span>
          <h4>•</h4>
          <h4> {sla?.lastMileTravelString ?? "2.0 km"}</h4>
        </div>
        <p>{cuisines.slice(0, 5).join(", ")}</p>
      </div>
    </div>
  );
};

export const withLabelVeg = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="veg-label">VEG</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
